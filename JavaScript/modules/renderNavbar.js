import {navbar} from './navBar.js';

const menuList = [
    {
    title: 'Home',
    items: [{
        href: `../index.html`,
    }
    ],
    },
    {
    title: 'Recommended',
    items: [],
    },
    {
    title: 'Genre ▼',
    items: [
        {
        title: 'Horror',
        href: `../Horror/gHorror.html`,
        },
        {
        title: 'Fantasy',
        href: `../Horror/gHorror.html`,
        },
    ]
    }
]

navbar(menuList);