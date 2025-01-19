# markdown
> 这工具还是不如nextcloud

## TODO
- [X] 更改图标
- [ ] 增加主题切换

## 使用
https://domain/path?url=markdown_file_url

## ci
```yaml
image:
    name: node:latest
    pull_policy: if-not-present

stages:
    - build
    - deploy

variables:
  path: /markdown

cache:
    paths:
    - node_modules/

install_dependencies:
    stage: build
    rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: on_success
    script:
    - npm config set registry https://registry.npmmirror.com
    - npm install
    - npm run build
    - sed "s public $path g" dist/index.html
    artifacts:
        paths:
            - dist/

deploy:
    stage: deploy
    rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: on_success
    script: 
    - wget https://s3.russionbear.com/dev/pkg/mc
    - chmod +x mc
    - ./mc alias set myminio/ https://s3.russionbear.com dev $SECRET_KEY
    - ./mc mirror --remove --overwrite dist myminio$path
```
