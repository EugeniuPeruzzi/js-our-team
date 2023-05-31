'use strict';

let imgs = [
    'immagine 1',
    'immagine 2',
    'immagine 3',
    'immagine 4',
    'immagine 5',
    'immagine 6'
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
    `<div class="name-display m-4">
        <div class="img-conainer w-100">
            <img src="" alt="${objsvar.immage}">
        </div>
        <h2>${objsvar.name}</h2>
        <span>${objsvar.role}</span>
    </div>`
};
