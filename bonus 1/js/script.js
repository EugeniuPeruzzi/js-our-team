'use strict';

let imgs = [
    './img/wayne-barnett-founder-ceo.jpg',
    './img/angela-caroll-chief-editor.jpg',
    './img/walter-gordon-office-manager.jpg',
    './img/angela-lopez-social-media-manager.jpg',
    './img/scott-estrada-developer.jpg',
    './img/barbara-ramos-graphic-designer.jpg'
];

let objs =[
    
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'immage' : imgs[0],
    },

    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'immage' : imgs[1],
    },

    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'immage' : imgs[2],
    },

    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'immage' : imgs[3],
    },

    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'immage' : imgs[4],
    },

    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'immage' : imgs[5],
    },
    
];

//stampo in c.log le informazionmi degli ogetti
for (let i = 0; i<objs.length; i++){
    
    let objsvar = objs[i]
    
    console.log(objsvar);

    let display = document.querySelector('.display');
    display.innerHTML += 
    `<div class="name-display m-2">
        <div class="img-conainer w-100">
            <img src="${objsvar.immage}" alt="team-work">
        </div>
        <h2>${objsvar.name}</h2>
        <span>${objsvar.role}</span>
    </div>`
};
