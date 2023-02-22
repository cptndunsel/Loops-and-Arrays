
for (let i = 1000; i > 0; i--) {
  if (i % 2 === 0)
    console.log(i);
}

for (let i = 0; i <= 10000; i++) {
  if (i === 2500) {
    alert("A quarter of the way there!");
  } else if (i === 5000) {
    alert("Halfway there!")
  } else if (i === 10000) {
    alert("The loop is done!");
  }
}

const shows = [
"The Terror",
"West World",
"Brave New World",
"Primal",
"South Park"
];
var numorder = [
"My #1 favorite show is ",
"My #2 favorite show is ",
"My #3 favorite show is ",
"My #4 favorite show is ",
"My #5 favorite show is "
];


for (let i = 0; i < shows.length; i++) {
console.log (numorder[i] + shows[i])
}