export default {
  sourceDir: './src',
  assets: ['index.css', 'favicons', 'images', 'icons'],
  templates: [
    'parts/header.ejs',
    'parts/footer.ejs',
    'parts/navigator.ejs',
    'index.html',
    'cv.html',
  ],
  routes: [
    {
      method: 'get',
      path: '/blog',
      view: 'blog.ejs',
    },
  ],
};
