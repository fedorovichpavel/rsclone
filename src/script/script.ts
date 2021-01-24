window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);

let articleClick = false;

  this.document.addEventListener('click', function(event) {
    const target = event.target;
              if (target.id === 'slide') {
                const article  = document.querySelector('.article');
                const content = document.querySelector('.content');
                const page = document.querySelector('.downpage');
                if (articleClick) {
                  document.querySelectorAll(".scroll").forEach(e=>
                    //@ts-ignore
                    e.style.transform = 'rotate(0)');
                  //@ts-ignore
                content.style.top = '0';
                //@ts-ignore
                article.style.position = 'absolute'; article.style.top = '30rem';
                //@ts-ignore
                page.style.top = '0';
                articleClick = false;
                } else {
                  document.querySelectorAll(".scroll").forEach(e=>
                    //@ts-ignore
                    e.style.transform = 'rotate(180deg)');
                    //@ts-ignore
                    content.style.top = '-30rem';
                      //@ts-ignore
                      article.style.position = 'relative'; article.style.top = '0';
                      //@ts-ignore
                     page.style.top = '-16rem';
                      articleClick = true;
                }

              } else {return;}
  });
}
