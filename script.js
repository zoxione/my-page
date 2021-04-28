"use strict";

const content = document.querySelector('.content'),
    body = document.querySelector('body'),
    main = document.querySelector('.main'),
    btn = document.querySelector('.btn'),
    title = document.querySelector('.title');


function setBlocks(timeLeft) {
    if (document.querySelector('.counter')) {
        const block = document.querySelector('.counter');
        content.removeChild(block);
    }
    const block = document.createElement('div');
    block.classList.add('counter');
    if (timeLeft != 6) {
        block.innerHTML = `${timeLeft} - 7 = ${timeLeft - 7}`;
    }
    else {
        const name = document.createElement('div'),
              occupation = document.createElement('div'),
              links = document.createElement('div'),
              github = document.createElement('span'),
              twitter = document.createElement('span');

        name.innerHTML = `Hello, my name is <span class="text-red-600">Bair<span>`;
        occupation.innerHTML = `I'm a Software Engineer`;
        
        github.classList.add('pr-4');
        github.innerHTML = `
                <a href="https://github.com/zoxione" class="text-white hover:text-red-600">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            `;
        twitter.classList.add('pl-4');
        twitter.innerHTML = `
            <a href="https://twitter.com/ZOXIONE" class="text-white hover:text-red-600">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </a>
        `;
        
        links.appendChild(github);
        links.appendChild(twitter);
        links.classList.add('flex');
        links.classList.add('flex-row');
        links.classList.add('justify-center');
        links.classList.add('pt-4');

        block.appendChild(name);
        block.appendChild(occupation);
        block.appendChild(links);
        block.classList.add('text-center');
    }
    content.appendChild(block);
};

function updateBlocks() {
    let timeLeft = 1000;
    setBlocks(timeLeft);

    let timer = setInterval(() => {
        timeLeft -= 7;
        if (timeLeft >= 0) {
            setBlocks(timeLeft);
            console.log(timeLeft);
        } else {
            clearInterval(timer);
            console.log("STOP");
        }
    }, 10)
}

function updateBackground() {
    // body.style.backgroundImage = "url('img/bg.jpg')";

    // title.style.color = 'red';
}

btn.addEventListener('click', () => {
    content.removeChild(btn);

    updateBlocks();



    updateBackground();

    
});


