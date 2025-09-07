'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////////
// btn scrolling
// btnScrollTo.addEventListener('click', function (e) {
//   // e.preventDefault();
//   const s1cords = section1.getBoundingClientRect();
//   // console.log(window.scrollX, scrollY);
//   // console.log(document.documentElement.clientHeight);

//   // window.scrollTo(s1cords.left + window.scrollX, s1cords.top + window.scrollY)
//   // smooth
//   // window.scrollTo({ left: s1cords.left + window.scrollX, top: s1cords.top + window.scrollY, behavior: "smooth" })
//   section1.scrollIntoView({
//     behavior: "smooth"
//   })
// })

// page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth"
//     })
//   })
// })

// 1. add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link'))
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: "smooth"
    })

});

//////////////////////////////////////////////////////////////////////////
//                                                                     ///
//////////////////////////////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// selecting elements
const header = document.querySelector('.header');
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // the list of getElementsByTagName will be updated live
// console.log(allButtons);

document.getElementsByClassName('btn') // return live html collection

// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'we use cookie';
message.innerHTML = 'we use cookie <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message)
// message is a live element in the DOM, so the element only inserted once 
// header.append(message.cloneNode(true))
// header.append(message)
// header.before(message)
// header.after(message)

// delete element
// document.querySelector('.btn--close-cookie').addEventListener('click', function (e) {
//   e.preventDefault();
//   message.remove();
//   // old way:
//   // message.parentElement.removeChild(message);
// });

// styles
message.style.backgroundColor = '#1E2D3C';
message.style.width = '120%';
// console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.className);
logo.setAttribute('company', 'AzarBod')
// logo.alt = 'test'

// non standard
// console.log(logo.getAttribute('designer')); 

// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(document.querySelector('.twitter-link').href);
// console.log(document.querySelector('.twitter-link').getAttribute('href'));
// console.log(document.querySelector('.nav__link--btn').href);
// console.log(document.querySelector('.nav__link--btn').getAttribute('href'));

// data attributes

// console.log(logo.dataset.versionNumber);

// classes

logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('j');
logo.classList.contains('j');
// don't use because overwrite
// logo.className = 'jonas'


const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener')
};

// h1.addEventListener('mouseenter', alertH1);
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// old school
// h1.onmouseenter = function (e) {
//   alert('another test');
// };

// visulize
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   // console.log('LINK', e.target, e.currentTarget);
//   // console.log(e.currentTarget === this);
//   // stop propagation
//   // e.stopPropagation();

// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   // console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   // console.log('NAV', e.target, e.currentTarget);
// }, true);
// listen to captuing event not bubbling event
// this element is listening for the event as it travels down from the DOM


// 
// going downwards: child
// console.log(h1.querySelectorAll('.highlight')); // not matter how deep is highlight as child
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'yellow'
// h1.lastElementChild.style.color = 'red'

// going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.backgroundColor = `#1b1b1b11`;

// h1.closest('h1').style.backgroundColor = '#faebebff';

// going sideways: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// })

//////////////////////////////////////////////
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(tab => tab.addEventListener('click', () => { console.log('test'); }));

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  // Guard clause
  if (!clicked) return;
  // remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
  tabsContent.forEach(content => content.classList.remove('operations__content--active'))
  // activate content area
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})


// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY);
//   if (window.scrollY >= initialCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// })

// sticky navigation: Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],

// }
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(
  stickyNav,
  {
    root: null, // entire view port
    threshold: 0,
    rootMargin: `-${navHeight}px`
  }
);
headerObserver.observe(header);

// Reveal sections
const section1 = document.querySelector('#section--1');
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return
    entry.target.classList.remove('section--hidden')
    observer.unobserve(entry.target);
  })
}
const sectionObserver = new IntersectionObserver(
  revealSection,
  {
    root: null,
    threshold: 0.15,
  }
)
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})

// lazy loading images

const imgTarget = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  })
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg,
  {
    root: null,
    threshold: 0,
    rootMargin: '200px',
  }
);
imgTarget.forEach(img => imgObserver.observe(img))


// Slider
const slides = document.querySelectorAll('.slide');
let curSlide = 0;
const maxSlide = slides.length;
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots')
const slider = function () {
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `
      <button class = "dots__dot" data-slide = "${i}"></button>
      `)
    })
  }
  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }
  const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
  }
  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  }
  init();
  // next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  // previuse slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide)
    activateDot(curSlide);
  }

  btnRight.addEventListener('click', nextSlide)
  btnLeft.addEventListener('click', prevSlide)

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight')
      nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
    activateDot(curSlide);
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot'))
      curSlide = Number(e.target.dataset.slide)
    goToSlide(curSlide);
    activateDot(curSlide);
  })
}

slider();

document.addEventListener('DOMContentLoaded', function (e) {
  // console.log('html parsed and DOM tree built!', e);
})
window.addEventListener('load', function (e) {
  // console.log('page fully loaded', e);
})

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
// });
