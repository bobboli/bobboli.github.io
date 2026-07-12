'use strict';

const sources = {
  'skip-softmax': {
    sha: '1a349cd7a37e25ea6b69a98d355a64419d101b25',
    path: 'docs/source/blogs/tech_blog/blog16_Accelerating_Long_Context_Inference_with_Skip_Softmax_Attention.md'
  },
  'moe-alltoall': {
    sha: '944b7eb1e10e7b893d16144eeef91c73177172da',
    path: 'docs/source/blogs/tech_blog/blog18_Optimizing_MoE_Communication_with_One_Sided_AlltoAll_Over_NVLink.md'
  }
};

const cache = new Map();

function prepareMarkdown(markdown, source) {
  const pinnedRawRoot = `https://raw.githubusercontent.com/NVIDIA/TensorRT-LLM/${source.sha}/`;

  return markdown
    .replace(/^\uFEFF/, '')
    .replace(/\r\n/g, '\n')
    .replace(/^# .+\n+/, '')
    .replace(/^## Table of Contents\n[\s\S]*?(?=^## )/m, '')
    .replace(/^\$\$([\s\S]*?)\$\$$/gm, (_, formula) => {
      const escapedFormula = formula.trim()
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
      return `<div class="math-display">\\[${escapedFormula}\\]</div>`;
    })
    .replaceAll('https://github.com/NVIDIA/TensorRT-LLM/raw/main/', pinnedRawRoot)
    .replace(
      /\.\.\/\.\.\/features\/sparse-attention\.md(#framework-level-sparse-attention)?/g,
      'https://nvidia.github.io/TensorRT-LLM/features/sparse-attention.html$1'
    );
}

function fetchMarkdown(id) {
  if (cache.has(id)) return cache.get(id);

  const source = sources[id];
  if (!source) throw new Error(`Unknown TensorRT-LLM blog source: ${id}`);

  const url = `https://raw.githubusercontent.com/NVIDIA/TensorRT-LLM/${source.sha}/${source.path}`;
  const request = fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Unable to fetch ${url}: HTTP ${response.status}`);
      }
      return response.text();
    })
    .then(markdown => prepareMarkdown(markdown, source));

  cache.set(id, request);
  return request;
}

hexo.extend.filter.register('before_post_render', async data => {
  const match = data.content.match(/<!-- trtllm-blog:([a-z0-9-]+) -->/);
  if (!match) return data;

  const markdown = await fetchMarkdown(match[1]);
  data.content = data.content.replace(match[0], markdown);
  return data;
}, 5);

hexo.extend.injector.register('body_end', `
<script>
document.addEventListener('click', function (event) {
  const link = event.target.closest('a[href="https://bobboli.github.io/about/#email-link"]');
  if (!link) return;
  event.preventDefault();
  const address = atob('Ym9iYm9saTAyMDI=') + '@' + atob('Z21haWwuY29t');
  window.location.href = 'mailto:' + address;
});

document.addEventListener('pjax:complete', function () {
  const content = document.querySelector('.column-main');
  if (!content || !window.MathJax || typeof window.MathJax.typesetPromise !== 'function') return;

  if (typeof window.MathJax.typesetClear === 'function') {
    window.MathJax.typesetClear([content]);
  }
  window.MathJax.typesetPromise([content]).catch(function (error) {
    console.warn('MathJax typesetting failed:', error);
  });
});
</script>`);
