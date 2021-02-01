// eslint-disable-next-line func-names
window.onload = function () {
  let articleClick = false;
  let Gameprop = false;
  this.document.addEventListener('click', (event) => {
    const target = event.target.getAttribute('data-id');
    if (target === 'slide') {
      const article:HTMLInputElement = document.querySelector('.article');
      const content:HTMLInputElement = document.querySelector('.content');
      const page:HTMLInputElement = document.querySelector('.downPage');
      const body:HTMLInputElement = document.querySelector('.loaded');
      if (articleClick) {
        // eslint-disable-next-line no-return-assign
        document.querySelectorAll('.scroll').forEach((e:HTMLInputElement) => e.style.transform = 'rotate(0)');
        content.style.top = '0';
        article.style.position = 'absolute'; article.style.top = '30rem';
        body.style.overflow = 'hidden';
        page.style.top = '0';
        articleClick = false;
      } else {
        // eslint-disable-next-line no-return-assign
        document.querySelectorAll('.scroll').forEach((e:HTMLInputElement) => e.style.transform = 'rotate(180deg)');
        content.style.top = '-30rem';
        article.style.position = 'relative'; article.style.top = '0';
        article.style.height = 'auto';
        body.style.overflow = 'auto';
        page.style.top = '-66vh';
        articleClick = true;
      }
      // eslint-disable-next-line no-empty
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
};
