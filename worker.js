/* demo code to test everything works - you can skip it
   in the actual coding example */
function mixCakeStuff() {
  return {};
}
function putCakeInOven(cake) {
  cake.value = '🎂';
}

function mixSauceStuff() {
  return {};
}
function cookSauce(sauce) {
  sauce.value = '🍫';
}

function bakeCake() {
  const cake = mixCakeStuff();
  putCakeInOven(cake);

  postMessage(cake);
}

function makeSauce() {
  const sauce = mixSauceStuff();
  cookSauce(sauce);

  postMessage(sauce);
}

onmessage = function (e) {
  console.log('Worker: Message received from main script: ', e.data);
  if (e.data === 'cakeWorker') {
    bakeCake();
  } else {
    makeSauce();
  }
};
