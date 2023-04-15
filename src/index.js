import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import img from './img/shiringan.png'


const app = new PIXI.Application({
	view: document.getElementById("pixi-canvas") ,
    width: 800,
    height: 600,
    backgroundColor: 0x1099db,
});

const sprite1 = PIXI.Sprite.from(img);
const sprite2 = PIXI.Sprite.from(img);
const tween = gsap.to(sprite1, { x: 500, y: 100, duration: 1 });
const sequence1 = gsap.timeline({ repeat: 0, onComplete: startMovement });
const sequence2 = gsap.timeline({ repeat: -1 });

function startMovement() {
    tween.restart();
}

sprite1.x = 100;
sprite1.y = 100;
sprite2.x = 700;
sprite2.y = 100;
sprite2.width = 100;
sprite2.height =100;
sprite2.anchor.set(0.5);

app.stage.addChild(sprite1);
app.stage.addChild(sprite2);

sequence1.to(sprite1, { alpha: 1, duration: 1 })

sequence1.eventCallback('onComplete', () => {
	sequence2.to(sprite2, { duration: 1, alpha: 0  })
  });

sequence1.play();