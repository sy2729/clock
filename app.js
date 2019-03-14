// frame work set up
var secondHand = document.querySelector(".second");
var minuteHand = document.querySelector(".minute");
var hourHand = document.querySelector(".hour");
var dotsCollection = document.querySelector(".dots-collection");
var numsCollection = document.querySelector(".nums-collection");

function setTime() {
  var currentDate = new Date();
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();
  var second = currentDate.getSeconds();
  var hourDeg = (minute/60)*30;
  var minuteDeg = (second/60)*6;
  hourHand.style.transform = "rotate("+ (hour * 30 + hourDeg) + "deg)";
  minuteHand.style.transform = "rotate("+ (minute * 6 + minuteDeg) + "deg)";
  secondHand.style.transform = "rotate("+ (second * 6) + "deg)";
};

setInterval(setTime, 1000);

// //creat the dots collection
var templates = document.createDocumentFragment();
for(let i = 0; i < 60;  i ++) {
  let div = document.createElement('div');
  div.classList.add('dot', 'full', 'absolute');
  let deg = (360 / 60) * i
  div.style.transform = `rotate(${deg}deg)`
  templates.appendChild(div)
}
dotsCollection.appendChild(templates)


// //creat the nums collection
var num_templates = document.createDocumentFragment();
for(let i = 0; i < 12;  i ++) {
  let div = document.createElement('div');
  div.classList.add('digit-wrap', 'absolute');
  let span = document.createElement('span');
  span.textContent = 12 - i;
  span.classList.add('absolute');
  div.appendChild(span)
  let deg = -((360 / 12) * i)
  div.style.transform = `rotate(${deg}deg)`
  templates.appendChild(div)
}
numsCollection.appendChild(templates)