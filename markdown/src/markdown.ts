// @ts-nocheck
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';

import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';

import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';

import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';

import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';

import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

// preview
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import createCopyCodePreview from '@kangc/v-md-editor/lib/plugins/copy-code/preview';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

// preview
import VMdPreview from '@kangc/v-md-editor/lib/preview';

import '@kangc/v-md-editor/lib/style/preview.css';

VMdPreview.use(githubTheme, {Hljs: hljs});
// VMdPreview.use(createTodoListPlugin());
VMdPreview.use(createKatexPlugin());
VMdPreview.use(createMermaidPlugin());
// VMdPreview.use(createLineNumbertPlugin());
// VMdPreview.use(createHighlightLinesPlugin());
// VMdPreview.use(createCopyCodePlugin());


VMdPreviewHtml.use(createCopyCodePreview());

export {VMdPreviewHtml, VMdPreview};
