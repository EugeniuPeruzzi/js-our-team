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

for (let i = 0; i<objs.length; i++){
    
    let objsvar = objs[i]
    
    console.log(objsvar);
}
