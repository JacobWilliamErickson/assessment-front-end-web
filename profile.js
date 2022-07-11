const hobbyarr = [
  "https://img.redbull.com/images/c_crop,w_5272,h_2636,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2018/07/17/256a35ef-6d09-4d7c-8644-0dc446f19ec8/slacklining-collection",
  "https://images.seattletimes.com/wp-content/uploads/2022/04/04202022_1_101234.jpg?d=780x520",
  "https://bloximages.newyork1.vip.townnews.com/tehachapinews.com/content/tncms/assets/v3/editorial/1/ae/1ae86592-c1d3-11eb-85c0-0b9e671f96d7/60b47777d6365.image.jpg?resize=567%2C500",
  "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fd58c4ae4-2d69-11ea-84be-a548267b914b?fit=scale-down&source=next&width=700",
  "https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d.jpg",
  "https://imageserver.petsbest.com/marketing/blog/dog-training-basic-commands.jpg",
];
const hobbytxt = [
  "Slacklining",
  "Bowling",
  "Swing Dancing",
  "Video Games",
  "Coding",
  "Dog Training",
];
const skillstxt = ["Tutoring", "Communication", "Problem Solving", "Bilingual"];
let imagenum = 0;
let skillsnum = 0;
function colorbtn() {
  alert("My favorite color has to be a good navy blue");
}
function placebtn() {
  alert("My favorite place in the world has to be the mountains");
}
function ritualbtn() {
  alert("I love taking my dog to the park after a good day of school");
}
function clickmebtn() {
  if (imagenum < hobbyarr.length - 1) {
    imagenum++;
  } else {
    imagenum = 0;
  }
  image.src = hobbyarr[imagenum];
  hobbyheader.innerHTML = hobbytxt[imagenum];
}
function nextbtn() {
  if (skillsnum < skillstxt.length - 1) {
    skillsnum++;
  } else {
    skillsnum = 0;
  }
  skills.innerHTML = skillstxt[skillsnum];
}
function previousbtn() {
  if (skillsnum > 0) {
    skillsnum--;
  } else {
    skillsnum = skillstxt.length - 1;
  }
  skills.innerHTML = skillstxt[skillsnum];
}

let image = document.querySelector("#hobbyimg");
let color = document.querySelector("#color");
let place = document.querySelector("#place");
let ritual = document.querySelector("#ritual");
let clickme = document.querySelector("#clickme");
let hobbyheader = document.querySelector("#hobbyheader");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let skills = document.querySelector("#skills");

color.addEventListener("click", colorbtn);
place.addEventListener("click", placebtn);
ritual.addEventListener("click", ritualbtn);
clickme.addEventListener("click", clickmebtn);
previous.addEventListener("click", previousbtn);
next.addEventListener("click", nextbtn);
