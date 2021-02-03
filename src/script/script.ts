// eslint-disable-next-line func-names
window.onload = function () {
  let articleClick = false;
  let Gameprop = false;
  this.clickBtn = false;
  this.document.addEventListener('click', (event) => {
    const target = event.target.getAttribute('data-id');
    if (target === 'slide') {
      const article:HTMLInputElement = document.querySelector('.article');
      const content:HTMLInputElement = document.querySelector('.content');
      const page:HTMLInputElement = document.querySelector('.downPage');
      const body:HTMLInputElement = document.querySelector('.loaded');
      if (screen.width > 560) {
        if (articleClick) {
          // eslint-disable-next-line no-return-assign
          document.querySelectorAll('.scroll').forEach((e:HTMLInputElement) => e.style.transform = 'rotate(0)');
          content.style.top = '0';
          article.style.position = 'absolute'; article.style.top = '30rem';
          body.style.overflow = 'hidden';
          page.style.position = 'relative';
          page.style.top = '0';
          articleClick = false;
        } else {
          // eslint-disable-next-line no-return-assign
          document.querySelectorAll('.scroll').forEach((e:HTMLInputElement) => e.style.transform = 'rotate(180deg)');
          content.style.top = '-30rem';
          article.style.position = 'relative'; article.style.top = '0';
          article.style.height = 'auto';
          body.style.overflow = 'auto';
          page.style.position = 'absolute';
          if (screen.width < 801) {
            page.style.top = '23vh';
          } else {
            page.style.top = '12vh';
          }
          page.style.right = '0vh';
          articleClick = true;
        }
      }
    }
    if (event.target.className.split(' ')[1] === 'desbtn') {
      const tarClick = event.target.className.split(' ')[0];
      const block:HTMLInputElement = document.querySelector(`.${tarClick}`);
      const blockDiv:HTMLInputElement = document.querySelector(`.${tarClick} > div`);
      if (!Gameprop) {
        document.querySelectorAll('.content__gameProp > div').forEach((e:HTMLInputElement) => {
          e.style.display = 'none';
        });
        block.style.display = 'block';
        blockDiv.style.display = 'block';
        Gameprop = !Gameprop;
      } else {
        blockDiv.style.display = 'none';
        document.querySelectorAll('.content__gameProp > div').forEach((e:HTMLInputElement) => {
          e.style.display = 'block';
        });
        Gameprop = !Gameprop;
      }
    }
  });

  const mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
    const tetrisDiv:HTMLInputElement = document.querySelector('.tetris');
    const popupP:HTMLInputElement = document.querySelector('.popup__p');
    const page:HTMLInputElement = document.querySelector('.downPage');
    tetrisDiv.style.animation = 'none';
    if (popupP) { popupP.style.animation = 'none'; }
    document.querySelectorAll('.scroll').forEach((e:HTMLInputElement) => e.style.animation = 'none');
    document.querySelectorAll('.letter-1').forEach((e) => e.classList.remove('letter-1'));
    document.querySelectorAll('.letter-2').forEach((e) => e.classList.remove('letter-2'));
    // if (screen.width < 801) { page.style.top = '-3rem'; }
  }
};
