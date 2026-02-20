const BlizzardGame = (p) => {
  const BLUE_COLORS = [
    [161, 231, 255], [194, 246, 255],
    [225, 243, 251], [140, 225, 244], [205, 234, 246], [207, 248, 254]
  ];
  const WHITE_COLORS = [
    [255, 248, 247], [255, 250, 250], [245, 245, 245]
  ];

  let foregroundSnow = [];
  let midgroundSnow = [];
  let backgroundSnow = [];
  let piledSnowList = [];
  let pileHeights = [];
  let sweeping = false;
  let flowerImg;

  class Snowflake {
    constructor(color, radius, speed, opacity) {
      this.color = color;
      this.radius = radius;
      this.speed = speed;
      this.opacity = opacity;
      this.x = p.random(p.width);
      this.y = -radius * 2;
    }

    moveDown() {
      this.y += this.speed;
      this.x += p.random(-1, 1); //Random horizontal movement
      if (this.x > p.width) this.x = 0;
    }

    draw() {
      p.fill(...this.color, this.opacity);
      p.noStroke();
      p.circle(this.x, this.y, this.radius * 2);
    }
  }

  p.setup = async () => {
    p.createCanvas(640, 320);
    pileHeights = new Array(p.width).fill(0);
    
    // Load image with a promise
    try {
      flowerImg = await new Promise((resolve, reject) => {
        p.loadImage('/images/floweri.png', 
          (img) => resolve(img),  // success callback
          (err) => {              // error callback
            console.error("Failed to load flower image:", err);
            reject(err);
          }
        );
      });
    } catch (error) {
      console.error("Could not load flower image");
      // Create a fallback or continue without the image
      flowerImg = null;
    }
  };
  
  p.draw = () => {
    p.background(171, 231, 254);

    //Add new snowflakes
    if (p.frameCount % 10 === 0) {
      foregroundSnow.push(new Snowflake(p.random(WHITE_COLORS), p.random(5, 7), p.random(8, 15), p.random(200, 255)));
      midgroundSnow.push(new Snowflake(p.random([...BLUE_COLORS, ...WHITE_COLORS]), p.random(4, 6), p.random(5, 10), p.random(100, 200)));
      backgroundSnow.push(new Snowflake(p.random(BLUE_COLORS), p.random(3, 5), p.random(3, 7), p.random(50, 150)));
    }

    //To draw and move snowflakes
    for (let snow of backgroundSnow) {
      snow.moveDown();
      snow.draw();
      if (snow.y > p.height) backgroundSnow.splice(backgroundSnow.indexOf(snow), 1);
    }

    for (let snow of midgroundSnow) {
      snow.moveDown();
      snow.draw();
      if (snow.y > p.height) midgroundSnow.splice(midgroundSnow.indexOf(snow), 1);
    }

    for (let snow of foregroundSnow) {
      snow.moveDown();
      snow.draw();

      //Checking if snowflake hits the sill
      if (snow.y >= p.height - 20) {
        let xDiscrete = p.floor(snow.x);
        pileHeights[xDiscrete] += snow.radius;
        piledSnowList.push({
          x: xDiscrete,
          y: p.height - 20 - pileHeights[xDiscrete],
          radius: snow.radius,
          color: snow.color,
          opacity: snow.opacity
        });
        foregroundSnow.splice(foregroundSnow.indexOf(snow), 1);
      }
    }

    //Drawing piled snow
    for (let snowData of piledSnowList) {
      p.fill(...snowData.color, snowData.opacity);
      p.noStroke();
      p.circle(snowData.x, snowData.y, snowData.radius * 2);
    }

    //Drawing window
    p.fill(196, 164, 132);
    p.rect(0, p.height - 20, p.width, 20);
    p.rect(0, 0, p.width, 20);
    p.rect(p.height - 20, 0, 20, p.width);
    
    //Adding the flower.png (check if image loaded)
    if (flowerImg) {
      p.image(flowerImg, p.width - 550, p.height - 90, 110, 110);
    }

    // Draw curtains
    p.fill(195, 177, 225); // Set curtain color
    p.noStroke(); // Disable stroke
    p.rect(0, 0, 60, p.height); // Right curtain
    p.rect(p.width - 60, 0, 60, p.height); // Left curtain

    //Sweeping logic
    if (sweeping) {
      let mousePos = p.createVector(p.mouseX, p.mouseY);
      let sweepRadius = 20;

      for (let snowData of piledSnowList.slice()) {
        let distance = p.dist(mousePos.x, mousePos.y, snowData.x, snowData.y);
        if (distance <= sweepRadius) {
          piledSnowList.splice(piledSnowList.indexOf(snowData), 1);
          pileHeights[snowData.x] -= snowData.radius;
        }
      }
    }
  };

  p.mousePressed = () => {
    sweeping = true;
  };

  p.mouseReleased = () => {
    sweeping = false;
  };
};


export default BlizzardGame;