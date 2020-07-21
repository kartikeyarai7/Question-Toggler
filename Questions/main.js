let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let m1 = document.querySelector(".m1");
let m2 = document.querySelector(".m2");
let m3 = document.querySelector(".m3");

plus = [p1, p2, p3];
content = [c1, c2, c3];
minus = [m1, m2, m3];
let cur;

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    cur = content[i];
    // changeDisplay(cur);
    cur.classList.remove("vis");
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", () => {
    cur = content[i];
    // changeDisplay(cur);
    cur.classList.add("vis");
  });
}

// function changeDisplay(cur) {
//   cur.classList.toggle("vis");
// }
