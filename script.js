const navright = document.querySelector('.navright');
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close-btn');
const navLink = document.querySelectorAll('.nav-link');

const cardInfo = [
  {
    name: 'TONIC',
    label: 'CANOPY',
    list: ['Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'images/card3_ds.png',
    technologies: ['Bootstraps', 'HTML', 'CSS', 'JAVASCRIPT', 'RUBY', 'GITHUB'],
    linkliveversion: '#',
    linksource: '#',
  },
  {
    name: 'Multi-Post Stories',
    label: 'CANOPY',
    list: ['Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    featuredImage: 'images/card4_ds.png',
    technologies: ['Bootstraps', 'HTML', 'CSS', 'JAVASCRIPT', 'RUBY', 'GITHUB'],
    linktoliveversion: '#',
    linktosource: '#',
  },
  {
    name: 'TONIC',
    label: 'CANOPY',
    list: ['Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'images/card1_ds.png',
    technologies: ['Bootstraps', 'HTML', 'CSS', 'JAVASCRIPT', 'RUBY', 'GITHUB'],
    linkliveversion: '#',
    linksource: '#',
  },
  {
    name: 'Multi-Post Stories',
    label: 'CANOPY',
    list: ['Back End Dev', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.',
    featuredImage: 'images/card2_ds.png',
    technologies: ['Bootstraps', 'HTML', 'CSS', 'JAVASCRIPT', 'RUBY', 'GITHUB'],
    linktoliveversion: '#',
    linktosource: '#',
  },
];

function popup() {
  const prjSection = document.querySelector('.grid-container');
  prjSection.innerHTML = `<div class='cards'>
  <img src='images/card1.png' alt='Project1'>
  <div class='card-body'>
      <h3 class='card-title'>${cardInfo[0].name}</h3>
      <div class='card-text'>
          <h4>${cardInfo[0].label}</h4>
          <ul>
              <li>${cardInfo[0].list[0]}</li>
              <li>${cardInfo[0].list[0]}</li>
          </ul>
      </div>
      <p class='para'>
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul>
          <li class='list'>${cardInfo[0].technologies[0]}</li>
          <li class='list'>${cardInfo[0].technologies[1]}</li>
          <li class='list'>${cardInfo[0].technologies[2]}</li>
      </ul>
      <button class='btn' type='button'>See Project</button>
  </div>
  <div class='pop-up-window'></div>
</div>

<div class='cards-rev'>
  <img src='images/card2.png' alt='Project 2'>
  <div class='card-body'>
      <h3 class='card-title'>${cardInfo[1].name}</h3>
      <div class='card-text'>
          <h4>${cardInfo[1].label}</h4>
          <ul>
              <li>${cardInfo[1].list[0]}</li>
              <li>${cardInfo[1].list[1]}</li>
          </ul>
      </div>
      <p class='para'>
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul>
          <li class='list'>${cardInfo[1].technologies[0]}</li>
          <li class='list'>${cardInfo[1].technologies[1]}</li>
          <li class='list'>${cardInfo[1].technologies[2]}</li>
      </ul>
      <button class='btn' type='button'>See Project</button>
  </div>
  <div class='pop-up-window'></div>
</div>

<div class='cards'>
  <img src='images/card3.png' alt='Project 3'>
  <div class='card-body'>
      <h3 class='card-title'>${cardInfo[2].name}</h3>
      <div class='card-text'>
          <h4>${cardInfo[2].label}</h4>
          <ul>
              <li>${cardInfo[2].list[0]}</li>
              <li>${cardInfo[2].list[1]}</li>
          </ul>
      </div>
      <p class='para'>
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul>
          <li class='list'>${cardInfo[2].technologies[0]}</li>
          <li class='list'>${cardInfo[2].technologies[1]}</li>
          <li class='list'>${cardInfo[2].technologies[2]}</li>
      </ul>
      <button class='btn' type='button'>See Project</button>
  </div>
  <div class='pop-up-window'></div>
</div>

<div class='cards-rev'>
  <img src='images/card4.png' class='mb_img' alt='Project 4'>
 
  <div class='card-body'>
      <h3 class='card-title'>Multi-Post Stories</h3>
      <div class='card-text'>
          <h4>${cardInfo[3].label}</h4>
          <ul>
              <li>${cardInfo[3].list[0]}</li>
              <li>${cardInfo[3].list[1]}</li>
          </ul>
      </div>
      <p class='para'>
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul>
          <li class='list'>${cardInfo[3].technologies[0]}</li>
          <li class='list'>${cardInfo[3].technologies[1]}</li>
          <li class='list'>${cardInfo[3].technologies[2]}</li>
      </ul>
      <button class='btn' type='button'>See Project</button>
  </div>
  <div class='pop-up-window'></div>
</div>`;
  const popupcon = document.querySelectorAll('.pop-up-window');
  cardInfo.forEach((card, index) => {
    const h3 = document.createElement('h3');
    const btn = document.createElement('button');
    const div0 = document.createElement('div');
    const div1 = document.createElement('div');
    const h4 = document.createElement('h4');
    const ul1 = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const img = document.createElement('img');
    const div2 = document.createElement('div');
    const p1 = document.createElement('p');
    const div3 = document.createElement('div');
    const ul2 = document.createElement('ul');
    const li11 = document.createElement('li');
    const li12 = document.createElement('li');
    const li13 = document.createElement('li');
    const li14 = document.createElement('li');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const hr = document.createElement('hr');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const i1 = document.createElement('i');
    const i2 = document.createElement('i');

    h3.setAttribute('class', 'preview-h3');
    btn.setAttribute('class', 'preview-close-btn');
    btn.setAttribute('type', 'button');
    div0.setAttribute('class', 'preview-div-top');
    div1.setAttribute('class', 'preview-title');
    h4.setAttribute('class', 'preview-h4');
    ul1.setAttribute('class', 'preview-title-ul');
    li1.setAttribute('class', 'preview-title-li');
    li2.setAttribute('class', 'preview-title-li');
    img.setAttribute('src', card.featuredImage);
    img.setAttribute('alt', 'card 1');
    div2.setAttribute('class', 'preview-body');
    p1.setAttribute('class', 'preview-body-p');
    div3.setAttribute('class', 'preview-body-right');
    ul2.setAttribute('class', 'preview-body-ul');
    li11.setAttribute('class', 'preview-body-li');
    li12.setAttribute('class', 'preview-body-li');
    li13.setAttribute('class', 'preview-body-li');
    li14.setAttribute('class', 'preview-body-li');
    btn1.setAttribute('class', 'preview-body-btn');
    btn2.setAttribute('class', 'preview-body-btn');
    a1.setAttribute('class', 'preview-a');
    a2.setAttribute('class', 'preview-a');
    a1.setAttribute('src', '#');
    a2.setAttribute('src', '#');
    i1.setAttribute('class', 'fa-solid fa-power-off');
    i2.setAttribute('class', 'fa-brands fa-github');
    hr.setAttribute('class', 'preview-hr');
    const h3Text = document.createTextNode(card.name);
    const btnText = document.createTextNode(' \u00D7');
    const h4Text = document.createTextNode(card.label);
    const p1Text = document.createTextNode(card.description);
    const a1Text = document.createTextNode('See Live');
    const a2Text = document.createTextNode('See Source');
    h3.appendChild(h3Text);
    btn.appendChild(btnText);
    h4.appendChild(h4Text);
    p1.appendChild(p1Text);
    a1.appendChild(a1Text);
    a2.appendChild(a2Text);
    for (let i = 0; i < 2; i += 1) {
      const liText = document.createTextNode(card.list[i]);
      if (i === 0) {
        li1.appendChild(liText);
        ul1.appendChild(li1);
      } else {
        li2.appendChild(liText);
        ul1.appendChild(li2);
      }
    }
    for (let j = 0; j < 4; j += 1) {
      const li1Text = document.createTextNode(card.technologies[j]);
      if (j === 0) {
        li11.appendChild(li1Text);
        ul2.appendChild(li11);
      } else if (j === 1) {
        li12.appendChild(li1Text);
        ul2.appendChild(li12);
      } else if (j === 2) {
        li13.appendChild(li1Text);
        ul2.appendChild(li13);
      } else if (j === 3) {
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
const overLay = document.getElementById('overlay');
const popUpcon = document.querySelectorAll('.pop-up-window');
const projectBtn = document.querySelectorAll('.btn');
projectBtn.forEach((projBtn, index) => {
  projBtn.addEventListener('click', () => {
    popUpcon[index].classList.add('active');
    overLay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});
const previewCloseBtn = document.querySelectorAll('.preview-close-btn');
previewCloseBtn.forEach((close, index) => {
  close.addEventListener('click', () => {
    popUpcon[index].classList.remove('active');
    overLay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

overLay.addEventListener('click', () => {
  const popUps = document.querySelectorAll('.pop-up-window.active');
  popUps.forEach((popUp) => {
    popUp.classList.remove('active');
    overLay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// const forms=document.getElementById('form');
const emails = document.getElementById('email').value;
const suBmit = document.getElementById('submit');

suBmit.addEventListener('click',(ev)=> {
  const error = document.getElementById("error-message");
  if (emails.value !== String(emails.value).toLowerCase()) {
    ev.preventDefault();
    error.innerText = 'The content of the email field has to be in lower case.';
  }
})