import { nanoid } from 'nanoid';
import services1 from '../images/services1.svg';
import services2 from '../images/services2.svg';
import services3 from '../images/services3.svg';
import services4 from '../images/services4.svg';
import searchIcon from '../images/searchIcon.svg';
import trash from '../images/trash.svg';
import send from '../images/send.svg';
import security from '../images/security.svg';

const services = [
    {
        id: nanoid(),
        img: services1,
        text: "Source from Industry Hubs",
        icon: searchIcon,
    },
    {
        id: nanoid(),
        img: services2,
        text: "Source from Industry Hubs",
        icon: trash,
    },
    {
        id: nanoid(),
        img: services3,
        text: "Source from Industry Hubs",
        icon: send,
    },
    {
        id: nanoid(),
        img: services4,
        text: "Source from Industry Hubs",
        icon: security,
    }
];

export default services;