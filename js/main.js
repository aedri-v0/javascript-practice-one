let first = "Adrian";
let last = "Tillman";

console.log(first, last);
var button = document.querySelector("button");

function logName() {
  console.log(first, last);
}

button.addEventListener("click", logName);

didAppend = false;

function appendName() {
  if (didAppend) return;
  //create element
  let p = document.createElement("p");
  //put text inside element
  p.innerText = first + " " + last;
  //append p as a child of body
  document.body.appendChild(p);
  didAppend = true;
}

button.addEventListener("click", appendName);

let hobbies = ["Brawlhalla", "Rapping", "Going Out"];
let ul = document.createElement("ul");

hobbies.forEach((hobby) => {
  console.log(hobby);
  let li = document.createElement("li");
  li.innerText = hobby;
  ul.appendChild(li);
});

document.body.appendChild(ul);
