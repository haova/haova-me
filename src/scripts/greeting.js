const { Application, Graphics } = PIXI;

const Greeting = {
  init() {
    this.target = document.getElementById('target');
    this.app = new Application({
      antialias: true,
      backgroundColor: 'white',
    });
    this.board = document.createElement('div');
    // this.board.innerHTML = `<div class="font-heading absolute top-0 left-0 w-full h-full flex items-center justify-center text-base md:text-xl xl:text-2xl pr-4">Hi, I'm Hao!</div>`;
    this.g = new Graphics();
    this.unit = 10;
    this.counter = 0;

    this.app.resizeTo = this.board;
    this.app.stage.addChild(this.g);

    this.board.appendChild(this.app.view);

    document.body.appendChild(this.board);

    this.applyCanvasStyle({
      position: 'fixed',
      top: '0px',
      left: '100px',
      width: '200px',
      height: '300px',
    });

    this.resize();
    this.animate();
  },

  applyCanvasStyle(newStyle) {
    for (const key in newStyle) {
      if (['top', 'left', 'width', 'height'].indexOf(key) !== -1) {
        this.board.style[key] = newStyle[key] + 'px';
      } else {
        this.board.style[key] = newStyle[key];
      }
    }

    if (newStyle.width || newStyle.height) this.app.resize();
  },

  resize() {
    const bbox = this.target.getBoundingClientRect();
    this.unit = bbox.width;

    this.applyCanvasStyle({
      top: bbox.top - this.measure(0.1),
      left: bbox.left - this.measure(0.8),
      width: this.measure(0.85),
      height: this.measure(0.5),
    });

    this.draw();
  },

  measure(d) {
    return d * this.unit;
  },

  draw() {
    const poly = [
      [0.02, 0.06],
      [0.02, 0.44],
      [0.06, 0.48],
      [0.74, 0.48],
      [0.78, 0.44],
      [0.78, 0.4],
      [0.84, 0.4],
      [0.78, 0.32],
      [0.78, 0.06],
      [0.74, 0.02],
      [0.06, 0.02],
      [0.02, 0.06],
    ];

    const logo1 = [
      [0, 0],
      [750, 0],
      [750, -250],
      [250, -250],
      [250, -250],
      [250, -1750],
      [750, -1750],
      [750, -2000],
      [0, -2000],
      [0, 0],
    ];

    const logo2 = [
      [0, 0],
      [0, -250],
      [500, -250],
      [500, -1750],
      [0, -1750],
      [0, -2000],
      [750, -2000],
      [750, 0],
      [0, 0],
    ];

    const logo3 = [
      [0, 0],
      [250, -250],
      [500, -250],
      [0, 250],
      [0, 500],
      [250, 500],
      [500, 250],
      [500, 500],
      [1000, 500],
      [750, 250],
      [750, -500],
      [0, -500],
      [0, 0],
    ];

    this.g.clear().lineStyle(this.measure(0.01), 0x000000);
    this.drawPoly(poly);

    // this.g.lineStyle(this.measure(0.005), 0x000000).beginFill();
    // this.drawPoly(
    //   this.translate(
    //     this.scale(logo1, this.measure(0.0002) / this.unit),
    //     [0.28, 0.34]
    //   ),
    //   0.005
    // );

    // this.g.lineStyle(this.measure(0.005), 0x000000).beginFill();
    // this.drawPoly(
    //   this.translate(
    //     this.scale(logo2, this.measure(0.0002) / this.unit),
    //     [0.43, 0.34]
    //   ),
    //   0.001
    // );

    this.g.lineStyle(this.measure(0.005), 0x000000).beginFill();
    this.drawPoly(
      this.translate(
        this.scale(logo3, this.measure(0.0002) / this.unit),
        [0.32, 0.25]
      )
    );
  },

  scale(poly, percent) {
    return poly.map((v) => [v[0] * percent, v[1] * percent]);
  },

  translate(poly, to) {
    return poly.map((v) => [v[0] + to[0], v[1] + to[1]]);
  },

  drawPoly(poly, bunit) {
    this.g.moveTo(this.measure(poly[0][0]), this.measure(poly[0][1]));

    for (let i = 1; i < poly.length; i++) {
      this.drawGlitchLine(
        this.measure(poly[i - 1][0]),
        this.measure(poly[i - 1][1]),
        this.measure(poly[i][0]),
        this.measure(poly[i][1]),
        bunit
      );
    }

    this.g.closePath();
  },

  drawGlitchLine(fx, fy, tx, ty, bunit = 0.01) {
    const base = this.measure(bunit);
    const vec = [tx - fx, ty - fy];
    const len = Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
    const per = [vec[1] / len, -vec[0] / len];

    const amount = Math.max(len / base, 1);

    for (let i = 1; i <= amount; i++) {
      const px = (vec[0] * i) / amount + fx + Math.random() * base * per[0];
      const py = (vec[1] * i) / amount + fy + Math.random() * base * per[1];
      this.g.lineTo(px, py);
    }
  },

  animate() {
    requestAnimationFrame(() => this.animate());

    this.counter = (this.counter + 1) % 10;

    if (this.counter !== 0) return;

    this.draw();
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Greeting.init();
});

window.addEventListener('resize', () => {
  Greeting.resize();
});
