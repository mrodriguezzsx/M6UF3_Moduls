const colors = ['red','orange','yellow','green','blue','purple','pink','white'];

function draw(ctx, x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 1*Math.PI,0*Math.PI);
    ctx.lineWidth=55;
    ctx.strokeStyle=color;
    ctx.stroke();
  
    return {
      x: x,
      y: y,
      r: r,
      color: color
    };
}

export { colors, draw };