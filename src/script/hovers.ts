const text = document.querySelectorAll('.animation');
const text1:HTMLInputElement = document.querySelector('.artText');


const createLetterArray = (string) => {
    return string.split('');
}


const createLetterLayers = (array) => {
    return array.map((letter) => {
        let layer = '';
        for (let i = 1; i <= 2; i++) {
            if (letter == ' ') {
                layer += '<span class="space"></span>';
            } else {
                layer += '<span class="letter-' + i + '">' + letter + '</span>';
            }
        }
        return layer;
    });
}

const createLetterContainers = (array) => {
    return array.map((item) => {
        let container = '';
        container += '<div class="wrapperText">' + item + '</div>';
        return container;
    });
}


const outputLayers = new Promise(function(resolve, reject) {
    text.forEach((e:HTMLInputElement) => {
        e.innerHTML = createLetterContainers(createLetterLayers(createLetterArray(e.innerText))).join('');
    });
    text1.innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text1.innerText))).join('');
    resolve(true);
});


const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
outputLayers.then(() => {
    return spans.map((span) => {
        span.parentElement.style.width = span.offsetWidth + 'px';
        span.parentElement.style.height = span.offsetHeight + 'px';
    });
}).then(() => {
    return spans.map((span) => {
        span.parentElement.style.top = '0px';
    });
});

document.querySelectorAll('.artText span').forEach((e:HTMLInputElement) => e.setAttribute('data-id', 'slide'));

document.querySelectorAll(".artText span.letter-1").forEach((e:HTMLInputElement) => {
    e.style.color = 'rgba(80, 41, 241, 0.5)';
});

document.querySelectorAll(".artText span.letter-2").forEach((e:HTMLInputElement) => {
    e.style.color = 'rgba(255, 221, 87, 0.5)';
});

const LogoSpan:NodeListOf<HTMLInputElement>= document.querySelectorAll('.header__logo .sym');
LogoSpan[0].style.color = 'rgb(241, 99, 33)';
LogoSpan[1].style.color = 'rgb(255, 228, 32)';
LogoSpan[2].style.color = 'rgb(0, 255, 21)';
LogoSpan[3].style.color = 'rgb(0, 60, 255)';
LogoSpan[4].style.color = 'rgb(255, 0, 0)';
LogoSpan[5].style.color = 'rgb(199, 33, 241)';

const logoH1:HTMLInputElement = document.querySelector('.header__logo h1');
logoH1.style.alignItems = 'center';
