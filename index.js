let cake = null;
let sauce = null;

function pourSauceOverTheCake() {
  // do something with cake and sauce!
  const result = cake.value + '+' + sauce.value;
  console.log(result, '= 😋');
}

const cakeWorker = new Worker('worker.js');
const sauceWorker = new Worker('worker.js');

function finishCake() {
  if (cake && sauce) {
    pourSauceOverTheCake();
  }
}

cakeWorker.onmessage = (e) => {
  cake = e.data;
  console.log('Cake ready!', cake);
  finishCake();
};
cakeWorker.postMessage('cakeWorker');

sauceWorker.onmessage = (e) => {
  sauce = e.data;
  console.log('Sauce ready!', sauce);
  finishCake();
};
sauceWorker.postMessage('sauceWorker');
