import {navbar} from './navBar.js';
const menuList =[
    {
    title: 'Home',
    items: []
    },
    {
    title: 'Recommended',
    items: []
    },
    {
    title: 'Genre ▼',
    items: [
        {
        title: 'Horror'
        },
        {
        title: 'Fantasy'
        }
    ]
    },
]
navbar(menuList)