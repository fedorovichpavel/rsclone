export default function addAnimation() {
  const text = document.querySelectorAll('.animation');
  const text1: HTMLInputElement = document.querySelector('.artText');

  const createLetterArray = (string) => string.split('');

  const createLetterLayers = (array) => array.map((letter) => {
    let layer = '';
    for (let i = 1; i <= 2; i += 1) {
      if (letter === ' ') {
        layer += '<span class="space"></span>';
      } else {
        layer += `<span class="letter-${i}">${letter}</span>`;
      }
    }
    return layer;
  });

  const createLetterContainers = (array) => array.map((item) => {
    let container = '';
    container += `<div class="wrapperText">${item}</div>`;
    return container;
  });
  // eslint-disable-next-line
  const outputLayers = new Promise((resolve, reject) => {
    text.forEach((e: HTMLInputElement) => {
      e.innerHTML = createLetterContainers(createLetterLayers(createLetterArray(e.innerText))).join('');
    });
    text1.innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text1.innerText))).join('');
    resolve(true);
  });

  const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
  // eslint-disable-next-line
  outputLayers.then(() => spans.map((span: HTMLInputElement) => {
    // eslint-disable-next-line
    span.parentElement.style.width = `${span.offsetWidth}px`;
    // eslint-disable-next-line no-param-reassign
    span.parentElement.style.height = `${span.offsetHeight}px`;
    // eslint-disable-next-line
  })).then(() => spans.map((span: HTMLInputElement) => {
    // eslint-disable-next-line
    span.parentElement.style.top = '0px';
  }));

  document.querySelectorAll('.artText span').forEach((e: HTMLInputElement) => e.setAttribute('data-id', 'slide'));

  document.querySelectorAll('.artText span.letter-1').forEach((e: HTMLInputElement) => {
    e.style.color = 'rgba(80, 41, 241, 0.5)';
  });

  document.querySelectorAll('.artText span.letter-2').forEach((e: HTMLInputElement) => {
    e.style.color = 'rgba(255, 221, 87, 0.5)';
  });
}
