// DOM elements
const nextBtn = document.getElementById("next");

// functions
const randomize = max => Math.floor(Math.random() * max);
// console.log(urlapplis[randomize(urlapplis.length)]);

const displayRandomPractice = () => {
  const shuffle = urlapplis[randomize(urlapplis.length)];
  window.open([shuffle],'_blank');
};
nextBtn.addEventListener("click", displayRandomPractice);
