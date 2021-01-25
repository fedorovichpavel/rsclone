const text = document.querySelectorAll('#url');
const text1 = document.querySelector('.artText');

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

    text.forEach(e => {
        const inner = e.innerText;
        e.innerHTML = createLetterContainers(createLetterLayers(createLetterArray(inner))).join('');
    });
    text1.innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text1.innerText))).join('');
    resolve();
});


const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
outputLayers.then(() => {
    return spans.map((span) => {
        setTimeout(() => {
            span.parentElement.style.width = span.offsetWidth + 'px';
            span.parentElement.style.height = span.offsetHeight + 'px';
        }, 250);
    });
}).then(() => {
    let time = 250;
    return spans.map((span) => {
        time += 75;
        setTimeout(() => {
            span.parentElement.style.top = '0px';
        }, time);
    });
});

document.querySelectorAll(".artText span.letter-1").forEach(e => {
    e.style.color = 'rgba(80, 41, 241, 0.5)';
});

document.querySelectorAll(".artText span.letter-2").forEach(e => {
    e.style.color = 'rgba(255, 221, 87, 0.5)';
});
