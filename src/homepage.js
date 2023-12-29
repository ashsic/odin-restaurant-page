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

    const h1 = document.createElement('h1');
    h1.textContent = 'Bloom Cafe and Restaurant';
    header.appendChild(h1);

    const slogan = document.createElement('h3');
    slogan.textContent = 'your urban oasis in the heart of Vancouver';
    header.appendChild(slogan);

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
        const button = document.createElement('button')
        li.appendChild(button);
        button.textContent = liArray[i];
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
    content.after(footerP);
    
    // Adding img, copy to content

    const myCafe = new Image();
    myCafe.src = Cafe;
    content.appendChild(myCafe);

    const copywriting = document.createElement('p');
    copywriting.textContent = "Welcome to Bloom, your urban oasis in the heart of Vancouver. Step into our Scandinavian-inspired cafe, where the fusion of lush greenery and minimalist design creates a tranquil retreat. At Bloom, we're renowned for our exceptional coffee, ethically sourced from the world's finest regions, and our mouthwatering croissants, baked to golden perfection.";
    content.appendChild(copywriting);

};







export { pageLoad };