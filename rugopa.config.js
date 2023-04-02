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
    { method: 'get', path: '/:slug.html', view: 'post.ejs' },
  ],
  mocks: {
    db: [
      {
        title: 'Installing server packages for Ubuntu 18.04 VPS',
        slug: 'install-server',
        desc: 'When you install a new VPS, you should set up and config a lot of things. This article will figure out the kinds of stuff needed into the new server, specifically Ubuntu 18.04 with Nginx and NodeJS.',
        image: 'https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg',
        lang: 'en',
        content: `<p class="ql-align-center"><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><h2>A brief history</h2><p>In the <a href="#">previous article</a>, we have generated a maze with few steps. Deep into the code, I changed a little bit to compatible with a new solver.</p><pre class="ql-syntax" spellcheck="false">class Maze {&nbsp;constructor(options){&nbsp;&nbsp;// preparation&nbsp;&nbsp;const { size, cellSize, wallSize } = Object.assign({&nbsp;&nbsp;&nbsp;size: 10,&nbsp;&nbsp;&nbsp;cellSize: 20,&nbsp;&nbsp;&nbsp;wallSize: 1&nbsp;&nbsp;}, options);  ...</pre><p>I had wrapped the entire code into a class with some parameters such as size, cell size, wall size. The output is an array of walls (rectangle with position and size).</p><pre class="ql-syntax" spellcheck="false">class Maze {  ...&nbsp; get walls(){&nbsp;&nbsp;  const walls = [&nbsp;&nbsp;&nbsp;   { x: 0, y: 0, w: this.width, h: this.wallSize },&nbsp;&nbsp;&nbsp;   { x: 0, y: this.width - this.wallSize, w: this.width, h: this.wallSize },&nbsp;&nbsp;&nbsp;   { x: 0, y: 0, w: this.wallSize, h: this.height },&nbsp;&nbsp;&nbsp;   { x: this.width - this.wallSize, y: 0, w: this.wallSize, h: this.height },&nbsp;&nbsp;  ];    ...  }  ...}</pre><p>You can try my new code at <a href="#">Maze Generation</a>.</p><p>In visualization, we have a maze that looks like this:</p><p class="ql-align-center"><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><p class="ql-align-center"><em>Solid version</em></p><p class="ql-align-center"><br></p><p class="ql-align-center"><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><p class="ql-align-center"><em>Wireframes version</em></p><h2>Environment</h2><p>Beforehand create the solver, I created a requirement space for that. By using <a href="#">MatterJS </a>for physic simulation which consists of collision detection (for the contact between mouse and wall), ray casting (for wall detection sensors).</p><p class="ql-align-center"><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><p class="ql-align-center"><em>Matter.js is a 2D physics engine for the web</em></p><p>Running environment, contains Matter JS engine, Maze Generator, start point (location class), end area (area class), mouse, wall. My mouse inherits the Mouse class.</p><p>Using maze library was mention in the last section. In Matter JS, it's becoming bodies. I also added starting point and ending area.</p><p><br></p><h2>Mouse</h2><p>My solver use <a href="#">Wall Follower</a> algorithm.</p><p><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><p>My mouse has 2 system actions: run, stop. And 4 control actions: go (straight), brake (stop-go and rotate), left (rotate left), right (rotate right). It has two sensors, the first one (main sensor) for wall detection on straight going (angle: 0 rad, length: 18), and another one (wall sensor) to turn (angle: -3 * pi /4, length: sqrt(2 * 20^2)).</p><p><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><p>When the mouse moving, it leaves footprints like this.</p><p><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><p>When meeting walls, it turns right 90 degrees.</p><p><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><p>When the wall sensor cannot detect walls, it back to meet the wall again and turn left 90 degrees, then straight ahead.</p><p><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><p>That alls, just simple. The result:</p><p><img src="https://cdn.wallpapersafari.com/13/63/gSBiYk.jpg"></p><h2>Resources</h2><ul><li>Source code: <a href="#">Maze Solver source code</a></li><li>Live demo: <a href="#">Maze Solver demo</a></li></ul><p><br></p><p><em>By: </em><strong><em>Anh Hao</em></strong></p>`,
        createdAt: '2023-04-02T13:23:49.317Z',
      },
    ],
  },
};
