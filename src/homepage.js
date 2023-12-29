// homepage.js

import Cafe from './chris-liverani-oCsaxvGCehM-unsplash.jpg';


const pageLoad = function(){
    console.log('pageLoad');
    // Targeting content div
    const content = document.querySelector('#content');
    const homepage = document.createElement('div');
    homepage.setAttribute('class', 'container');
    
    // Creating, filling, appending header with nav
    const header = document.createElement('header');



    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    nav.appendChild(navList);

    const liArray = [
        'Home',
        'Menu',
        'Contact'
    ];

    for (let i=0; i<3; i++){
        const li = document.createElement('li');
        // const button = document.createElement('button')
        // li.appendChild(button);
        li.textContent = liArray[i];
        navList.appendChild(li);

        // NEED EVENT LISTENERS

    };

    header.appendChild(nav);

    content.before(header);

    // Creating, filling, appending footer
    const footer = document.createElement('footer');
    const footerP = document.createElement('p');
    footerP.textContent = 'Made by ashsic, 2023';
    footer.appendChild(footerP);
    content.after(footer);

};

const homeLoad = function () {
    // Target #content
    const content = document.querySelector('#content');

    // Adding h1, h3, copy to div in content

    const homeContent = document.createElement('div');
    homeContent.setAttribute('class', 'home-content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Bloom Cafe and Restaurant';
    homeContent.appendChild(h1);

    const slogan = document.createElement('h3');
    slogan.textContent = 'your urban oasis in the heart of Vancouver';
    homeContent.appendChild(slogan);

    const copywriting = document.createElement('p');
    copywriting.textContent = "Welcome to Bloom! Step into our Scandinavian-inspired cafe, where the fusion of lush greenery and minimalist design creates a tranquil retreat. At Bloom, we're renowned for our exceptional coffee, ethically sourced from the world's finest regions, and our mouthwatering croissants, baked to golden perfection.";
    homeContent.appendChild(copywriting);

    content.appendChild(homeContent);
};

export { pageLoad, homeLoad };