'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  // console.log(data);
  // console.log(Object.values(data.languages) ?? '');
  // if (typeof data.languages === 'set') data.languages = [...data.languages]
  const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      // console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(([data]) => renderCountry(data))
    .catch(err => {
      console.error(`${err} oh no`);
      renderError(`Something went wrong! ${err.message}`);
    })
    .finally(() => {
      console.log('no matter the result of promise, it always happen');
      // countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//     getCountryData('portugal')
// })
// getCountryData('australia');

// challenge #1

// const whereAmI = function (lat, lng) {
//     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//         .then(responce => {
//             if (!responce.ok) throw Error('no country')
//             return responce.json()
//         })
//         .then(data => {
//             console.log(`You are in ${data.city}, ${data.countryName}`);

//             getCountryData(data.countryName);
//         })
//         .catch(err => console.error(err.message));
// }

// whereAmI(51.50354, -0.12768);
// whereAmI(52.508, 13.381);

// test microtask queue and callback queue
// console.log('test start');
// setTimeout(() =>
//     console.log('0 second timer')
// , 0);

// Promise.resolve('Resolved promise 1').then(res=>console.log(res));
// Promise.resolve('Resolved promise 2').then(res=>{
//     for (let index = 0; index < 34526; index++) {};
//     console.log(res);
// });
// console.log('test end');

// const lottryPromise  = new Promise(function(resolve,reject){
//     console.log('lottery draw is happening');
//     setTimeout(() => {
//     if(Math.random()>= 0.5){
//         resolve('You Win 🏆');
//     }
//     else{
//         reject(new Error('You lost your money 💩'));
//     }

// }, 2000);

// });

// lottryPromise.then(res=>console.log(res)).catch(err=>console.log(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2).then(()=>{
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }).then(()=>console.log('i waited for 1 seconds'))

// مزیت Promisifying:

// از callback hell خلاص میشی.

// کد قابل‌خواندن‌تر و تمیزتر میشه.

// می‌تونی از async/await هم استفاده کنی.

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //     position => resolve(position),
    //     err=>reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos=>console.log(pos)).catch();

const whereAmI1 = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(responce => {
      if (!responce.ok) throw Error('no country');
      return responce.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);

      getCountryData(data.countryName);
    })
    .catch(err => console.error(err.message));
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found!'));
    });
  });
};
// challenge 2
// let currentImg;
// createImage('img/img-1.jpg').then(img=>{
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
// }).then(()=>{
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
// }).then( img => {
//     currentImg = img;
//     console.log('second img loaded');
// return wait(2);
// }).then(()=>
//     currentImg.style.display = 'none')
// .catch(err=>console.error(err))

const getPosition2 = async function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res=>console.log(res));
  // syntatic sugar
  try {
    const pos = await getPosition2();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    renderCountry(dataGeo);
    return `You are in ${dataGeo.city}`;
  } catch (error) {
    renderError(`Somthing went wrong ${error.message}`);
    throw error;
  }
};

console.log('1 will get');
// whereAmI().then(city=> console.log(city)).catch(err=>console.error(err.message)).finally(()=>console.log('finnished'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(city);
  } catch (error) {
    err => console.error(error.message);
  }
  console.log('finnished');
})();

const get3countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // independent async operations: run in paralel
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

// get3countries('portugal', 'usa', 'iran');

// promise.race
(async function (params) {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/spain`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('request took too long!'));
    }, sec);
  });
};

// Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(0.01)])
//   .then(res => console.log(res))
//   .catch(e => console.log(e));

Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('success'),
]).then(res => console.log(res));

Promise.any([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('success'),
]).then(res => console.log(res));

// challenge 3

const loadNPause = async function (imgPath) {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const imgEl =await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach(img=>img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};
loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg']);