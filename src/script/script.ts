window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);

  let articleClick = false;

  this.document.addEventListener('click', (event) => {
    const target = event.target.getAttribute('data-id');
    if (target === 'slide') {
      const article:HTMLInputElement = document.querySelector('.article');
      const content:HTMLInputElement = document.querySelector('.content');
      const page:HTMLInputElement = document.querySelector('.downpage');
      if (articleClick) {
        document.querySelectorAll('.scroll').forEach((e:HTMLInputElement) => e.style.transform = 'rotate(0)');
        content.style.top = '0';
        article.style.position = 'absolute'; article.style.top = '30rem';
        page.style.top = '0';
        articleClick = false;
      } else {
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
