'use strict';

const tabEditDates = new Map([
  ['tech-blogs/index.html', 'July 13, 2026']
]);

hexo.extend.filter.register('after_render:html', (html, locals) => {
  const editDate = tabEditDates.get(locals.path);
  if (!editDate) return html;

  const leftSidebar = '<div class="column column-left';
  const sidebarIndex = html.indexOf(leftSidebar);
  if (sidebarIndex === -1) return html;

  const mainColumnEnd = html.lastIndexOf('</div>', sidebarIndex);
  if (mainColumnEnd === -1) return html;

  const lastEdited = `<p class="is-size-7 has-text-grey mt-4">Last edited: ${editDate}</p>`;
  return html.slice(0, mainColumnEnd) + lastEdited + html.slice(mainColumnEnd);
});
