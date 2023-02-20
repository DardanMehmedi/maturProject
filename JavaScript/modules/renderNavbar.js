import {navbar} from './navBar.js';

const menuList = [
    {
    title: 'Home',
    items: [
        {
            href: `../../index.html`
        }
    ],
    },
    {
    title: 'Authors',
    items: [],
    },
    {
    title: 'Genre ▼',
    items: [
        {
        title: 'Horror',
        href: `/Genre/Horror/gHorror.html`,
        },
        {
        title: 'Grimdark',
        href: `/Genre/Grimdark/gGrimdark.html`,
        },
        {
        title: 'Epic Fatnasy',
        href: `/Genre/Epic Fantasy/gEpicFantasy.html`,
        },
        {
            title: 'UrbanFantasy',
            href: `/Genre/Urban Fantasy/gUrbanFantasy.html`,
        },
        {
            title: 'Dystopian',
            href: `/Genre/Dystopian/gDystopian.html`,
        },
        {
            title: 'YA Sci-fi & Fantasy',
            href: `/Genre/YA Sci-fi & Fantasy/gYA.html`,
        },
        {
            title: 'Sci-fi',
            href: `/Genre/Sci-Fi/gSci-Fi.html`,
        },
        {
            title: 'Mystery',
            href: `/Genre/Mystery/gMystery.html`,
        },
        {
            title: 'Thriller',
            href: `/Genre/Thriller/gThriller.html`,
        },
        {
            title: 'Comedy',
            href: `/Genre/Comedy/gComedy.html`,
        },
        {
            title: 'Tragedy',
            href: `/Genre/Tragedy/gTragedy.html`,
        },

    ]
    }
]

navbar(menuList);