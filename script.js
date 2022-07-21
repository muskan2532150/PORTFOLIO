const navright = document.querySelector('.navright');
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-link');

const cardInfo = [
  {
    name: "TONIC",
    label: "CANOPY",
    list: ["Back End Dev", "2015"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: 'images/card1.png',
    technologies: ["Bootstraps", "HTML", "CSS", "JAVASCRIPT", "RUBY", "GITHUB"],
    linkliveversion: "#",
    linksource: "#"
  },
  {
    name: "Multi-Post Stories",
    label: "CANOPY",
    list: ["Back End Dev", "2015"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/card2.png",
    technologies: ["Bootstraps", "HTML", "CSS", "JAVASCRIPT", "RUBY", "GITHUB"],
    linktoliveversion: "#",
    linktosource: "#"
  },
  {
    name: "TONIC",
    label: "CANOPY",
    list: ["Back End Dev", "2015"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/card3.png",
    technologies: ["Bootstraps", "HTML", "CSS", "JAVASCRIPT", "RUBY", "GITHUB"],
    linkliveversion: "#",
    linksource: "#"
  },
  {
    name: "Multi-Post Stories",
    label: "CANOPY",
    list: ["Back End Dev", "2015"],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: "images/card4.png",
    technologies: ["Bootstraps", "HTML", "CSS", "JAVASCRIPT", "RUBY", "GITHUB"],
    linktoliveversion: "#",
    linktosource: "#"
  },
];

function popup() {
  const prjSection = document.querySelector('.grid-container');
  prjSection.innerHTML = prjSection.innerHTML = `<div class="cards">
  <img src="images/card1.png" alt="Project1">
  <div class="card-body">
      <h3 class="card-title">${cardInfo[0].name}</h3>
      <div class="card-text">
          <h4>${cardInfo[0].label}</h4>
          <ul>
              <li>${cardInfo[0].list[0]}</li>
              <li>${cardInfo[0].list[0]}</li>
          </ul>
      </div>
      <p class="para">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul>
          <li class="list">${cardInfo[0].technologies[0]}</li>
          <li class="list">${cardInfo[0].technologies[1]}</li>
          <li class="list">${cardInfo[0].technologies[2]}</li>
      </ul>
      <button class="btn" type="button">See Project</button>
  </div>
  <div class="pop-up-window"></div>
</div>

<div class="cards-rev">
  <img src="images/card2.png" alt="Project 2">
  <div class="card-body">
      <h3 class="card-title">${cardInfo[1].name}</h3>
      <div class="card-text">
          <h4>${cardInfo[1].label}</h4>
          <ul>
              <li>${cardInfo[1].list[0]}</li>
              <li>${cardInfo[1].list[1]}</li>
          </ul>
      </div>
      <p class="para">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul>
          <li class="list">${cardInfo[1].technologies[0]}</li>
          <li class="list">${cardInfo[1].technologies[1]}</li>
          <li class="list">${cardInfo[1].technologies[2]}</li>
      </ul>
      <button class="btn" type="button">See Project</button>
  </div>
  <div class="pop-up-window"></div>
</div>

<div class="cards">
  <img src="images/card3.png" alt="Project 3">
  <div class="card-body">
      <h3 class="card-title">${cardInfo[2].name}</h3>
      <div class="card-text">
          <h4>${cardInfo[2].label}</h4>
          <ul>
              <li>${cardInfo[2].list[0]}</li>
              <li>${cardInfo[2].list[1]}</li>
          </ul>
      </div>
      <p class="para">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul>
          <li class="list">${cardInfo[2].technologies[0]}</li>
          <li class="list">${cardInfo[2].technologies[1]}</li>
          <li class="list">${cardInfo[2].technologies[2]}</li>
      </ul>
      <button class="btn" type="button">See Project</button>
  </div>
  <div class="pop-up-window"></div>
</div>

<div class="cards-rev">
  <img src="images/card4.png" class="mb_img" alt="Project 4">
 
  <div class="card-body">
      <h3 class="card-title">Multi-Post Stories</h3>
      <div class="card-text">
          <h4>${cardInfo[3].label}</h4>
          <ul>
              <li>${cardInfo[3].list[0]}</li>
              <li>${cardInfo[3].list[1]}</li>
          </ul>
      </div>
      <p class="para">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul>
          <li class="list">${cardInfo[3].technologies[0]}</li>
          <li class="list">${cardInfo[3].technologies[1]}</li>
          <li class="list">${cardInfo[3].technologies[2]}</li>
      </ul>
      <button class="btn" type="button">See Project</button>
  </div>
  <div class="pop-up-window"></div>
</div>`;
const popupcon = document.querySelectorAll(".pop-up-window");
  cardInfo.forEach((card, index) => {

    let h3 = document.createElement("h3");
    let btn = document.createElement("button");
    let div0 = document.createElement("div");
    let div1 = document.createElement("div");
    let h4 = document.createElement("h4");
    let ul1 = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let img = document.createElement("img");
    let div2 = document.createElement("div");
    let p1 = document.createElement("p");
    let div3 = document.createElement("div");
    let ul2 = document.createElement("ul");
    let li11 = document.createElement("li");
    let li12 = document.createElement("li");
    let li13 = document.createElement("li");
    let li14 = document.createElement("li");
    let a1 = document.createElement("a");
    let a2 = document.createElement("a");
    let hr = document.createElement("hr"); 
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let i1 = document.createElement("i");
    let i2 = document.createElement("i");
  
    h3.setAttribute("class", "preview-h3");
    btn.setAttribute("class", "preview-close-btn");
    btn.setAttribute("type", "button");
    div0.setAttribute("class","preview-div-top");
    div1.setAttribute("class", "preview-title");
    h4.setAttribute("class", "preview-h4");
    ul1.setAttribute("class", "preview-title-ul");
    li1.setAttribute("class", "preview-title-li");
    li2.setAttribute("class", "preview-title-li");
    img.setAttribute("src", card.featuredImage);
    img.setAttribute("alt", "card 1");
    div2.setAttribute("class", "preview-body");
    p1.setAttribute("class", "preview-body-p");
    div3.setAttribute("class", "preview-body-right");
    ul2.setAttribute("class", "preview-body-ul");
    li11.setAttribute("class", "preview-body-li");
    li12.setAttribute("class", "preview-body-li");
    li13.setAttribute("class", "preview-body-li");
    li14.setAttribute("class", "preview-body-li");
    btn1.setAttribute("class", "preview-body-btn");
    btn2.setAttribute("class", "preview-body-btn");
    a1.setAttribute("class", "preview-a");
    a2.setAttribute("class", "preview-a");
    a1.setAttribute("src", "#");
    a2.setAttribute("src", "#");
    i1.setAttribute("class", "fa-solid fa-power-off");
    i2.setAttribute("class", "fa-brands fa-github");
    hr.setAttribute("class", "preview-hr");

    let h3Text = document.createTextNode(card.name);
    let btnText = document.createTextNode(" \u00D7");
    let h4Text = document.createTextNode(card.label);
    let p1Text = document.createTextNode(card.description);
    let a1Text = document.createTextNode("See Live");
    let a2Text = document.createTextNode("See Source");

    h3.appendChild(h3Text);
    btn.appendChild(btnText);
    h4.appendChild(h4Text);
    p1.appendChild(p1Text);
    a1.appendChild(a1Text);
    a2.appendChild(a2Text);

    for (let i = 0; i < 2; i++) {
      let liText = document.createTextNode(card.list[i]);
      if (i == 0) {
        li1.appendChild(liText);
        ul1.appendChild(li1);
      } else {
        li2.appendChild(liText);
        ul1.appendChild(li2);
      }
    }

    for (let j = 0; j < 4; j++) {
      let li1Text = document.createTextNode(card.technologies[j]);
      if (j == 0) {
        li11.appendChild(li1Text);
        ul2.appendChild(li11);
      } else if (j == 1) {
        li12.appendChild(li1Text);
        ul2.appendChild(li12);
      } else if (j == 2) {
        li13.appendChild(li1Text);
        ul2.appendChild(li13);
      } else if (j == 3) {
        li14.appendChild(li1Text);
        ul2.appendChild(li14);
      }
    }
    btn1.appendChild(a1);
    btn2.appendChild(a2);
    btn1.appendChild(i1);
    btn2.appendChild(i2);
    div0.appendChild(h3);
    div0.appendChild(btn);
    div1.appendChild(h4);
    div1.appendChild(ul1);
    div2.appendChild(p1);
    div3.appendChild(ul2);
    div3.appendChild(hr);
    div3.appendChild(btn1);
    div3.appendChild(btn2);
    div2.appendChild(div3);
    
    popupcon[index].appendChild(div0);
    popupcon[index].appendChild(div1);
    popupcon[index].appendChild(img);
    popupcon[index].appendChild(div2);

    console.log(popupcon[index]);
 
  });
}

window.onload = popup();

burger.onclick = function () {
  navright.classList.toggle('click');
  document.body.style.overflow = 'hidden';
};

closeBtn.onclick = function () {
  navright.classList.remove('click');
  document.body.style.overflow = 'visible';
};

navLink.forEach((link) => {
  link.onclick = function () {
    navright.classList.remove('click');
    document.body.style.overflow = 'visible';
  };
});

let overLay = document.getElementById("overlay");
let popUpcon = document.querySelectorAll(".pop-up-window");
let projectBtn = document.querySelectorAll(".btn");

projectBtn.forEach((projBtn, index)=> {
  projBtn.addEventListener('click', () => {
    popUpcon[index].classList.add('active');
    overLay.classList.add('active');
  }) 
});

let previewCloseBtn = document.querySelectorAll(".preview-close-btn");

previewCloseBtn.forEach((close, index)=> {
  close.addEventListener('click', () => {
    popUpcon[index].classList.remove('active');
    overLay.classList.remove('active');
  })  
});
