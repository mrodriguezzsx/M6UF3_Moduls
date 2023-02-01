import { colors, draw} from "./moduls/circle.js";
import { create } from "./moduls/canvas.js";

let myCanvas = create('myCanvas', document.body, 1345, 500);

let r = 400;
for(let n=0; n<colors.length;n++) {
    let canvas1 = draw(myCanvas.ctx, 650, 450, r, colors[n]);
    r = r - 50
} 

