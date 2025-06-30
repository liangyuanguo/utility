import os
import re
import requests
from urllib.parse import urlparse
from pathlib import Path

def extract_script_urls(html_content):
    """从HTML内容中提取所有<script src>的URL"""
    pattern = r'<script\s+[^>]*src=["\']([^"\']+)["\']'
    return re.findall(pattern, html_content, re.IGNORECASE)

def sanitize_filename(url):
    """将URL路径转换为安全文件名（剔除域名，将/替换为__）"""
    parsed = urlparse(url)
    # 提取路径部分（不含域名和查询参数）
    path = parsed.path.lstrip('/')
    # 将路径中的/替换为__
    filename = path.replace('/', '__')
    # 如果路径为空（如src="file.js"），使用默认名
    if not filename:
        filename = "script.js"
    return filename

def download_scripts(urls, output_dir):
    """下载所有JS文件到指定目录"""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    for url in urls:
        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()
            
            # 生成文件名（剔除域名，转换/为__）
            filename = sanitize_filename(url)
            filepath = os.path.join(output_dir, filename)
            
            # 处理重复文件名
            counter = 1
            while os.path.exists(filepath):
                name, ext = os.path.splitext(filename)
                filepath = os.path.join(output_dir, f"{name}_{counter}{ext}")
                counter += 1
            
            # 保存文件
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"下载成功: {url} -> {filepath}")
            
        except Exception as e:
            print(f"下载失败 {url}: {str(e)}")

def main():
    for html_source in os.listdir("../"):
        html_source = f"../{html_source}"
        if not html_source.endswith(".html") or not os.path.isfile(html_source):
            continue
        # 配置参数
        html_source = "C:/Users/russionbear/Documents/GitHub/utility/blog.html"  # 可以是文件路径或URL
        output_directory = "C:/Users/russionbear/Documents/GitHub/utility/web-lib"
        
        # 获取HTML内容
        if html_source.startswith(('http://', 'https://')):
            # 从URL读取
            response = requests.get(html_source)
            html_content = response.text
        else:
            # 从本地文件读取
            with open(html_source, 'r', encoding='utf-8') as f:
                html_content = f.read()
        
        # 提取并下载
        script_urls = extract_script_urls(html_content)
        script_urls = [i for i in script_urls if i.startswith(('http://', 'https://'))]
        print(f"找到 {len(script_urls)} 个脚本:")
        for url in script_urls:
            print(f" - {url}")
        
        download_scripts(script_urls, output_directory)

if __name__ == "__main__":
    main()