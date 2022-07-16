const smileyFace = document.getElementById("smiley-face");
const cWidth = smileyFace.width;
const cHeight = smileyFace.height;
const ctx = smileyFace.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "#ffff02";
ctx.lineWidth = "3";
ctx.arc(cWidth / 2, cHeight / 2.5, cHeight / 4, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(cWidth / 2, cHeight / 2.35, cHeight / 6, 0, Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#000";
ctx.arc(cWidth / 1.82, cHeight / 3, 15, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "#000";
ctx.arc(cWidth / 2.22, cHeight / 3, 15, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

ctx.font = "bold 30px sans-serif";
ctx.fillText("Elzero", cWidth / 2 - 45, cHeight / 2 + 150);
