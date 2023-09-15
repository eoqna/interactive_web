const deptWrap = document.querySelector(".deptWrap");
const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

let scrollHeight = 0;
let documentHeight = 0;
let per = 0;

window.addEventListener("scroll", () => {
  // console.log(window.scrollY + window.innerHeight);
  scrollHeight = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollHeight, documentHeight);

  // 100% 나오게 하는 공식
  deptWrap.querySelector("span").innerText = scrollHeight.toFixed(0);
  progressBar.style.width = per;

  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 3}%)`;
});

const percent = (num, totalNum) => {
  return (( num / totalNum ) * 100).toFixed(0);
};