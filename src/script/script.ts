// eslint-disable-next-line func-names
window.onload = function () {
  let articleClick = false;

  this.document.addEventListener('click', (event) => {
    const target = event.target.getAttribute('data-id');
    if (target === 'slide') {
      const article:HTMLInputElement = document.querySelector('.article');
      const content:HTMLInputElement = document.querySelector('.content');
      const page:HTMLInputElement = document.querySelector('.downPage');
      if (articleClick) {
        // eslint-disable-next-line no-return-assign
        document.querySelectorAll('.scroll').forEach((e:HTMLInputElement) => e.style.transform = 'rotate(0)');
        content.style.top = '0';
        article.style.position = 'absolute'; article.style.top = '30rem';
        page.style.top = '0';
        articleClick = false;
      } else {
        // eslint-disable-next-line no-return-assign
        document.querySelectorAll('.scroll').forEach((e:HTMLInputElement) => e.style.transform = 'rotate(180deg)');
        content.style.top = '-30rem';
        article.style.position = 'relative'; article.style.top = '0';
        page.style.top = '-66vh';
        articleClick = true;
      }
      // eslint-disable-next-line no-empty
    } else { }
  });
};
