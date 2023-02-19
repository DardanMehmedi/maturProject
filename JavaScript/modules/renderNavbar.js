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
            title: 'Protal Fantasy',
            href: `/Genre/Horror/gFantasy.html`,
        },
        {
            title: 'UrbanFantasy',
            href: `/Genre/Horror/gFantasy.html`,
        },
        {
            title: 'Dystopian',
            href: `/Genre/Horror/gFantasy.html`,
        },
        {
            title: 'Sci-Fi',
            href: `/Genre/Horror/gFantasy.html`,
        },
        {
            title: 'Historical Fiction',
            href: `/Genre/Horror/gFantasy.html`,
        },
        {
            title: 'Mystery',
            href: `/Genre/Horror/gFantasy.html`,
        },
        {
            title: 'Thriller',
            href: `/Genre/Horror/gFantasy.html`,
        },
        {
            title: 'Comedy',
            href: `/Genre/Horror/gFantasy.html`,
        },
        {
            title: 'Tragedy',
            href: `/Genre/Horror/gFantasy.html`,
        },

    ]
    }
]

navbar(menuList);