import { nanoid } from "nanoid";
import phone1 from '../images/phones3.svg';
import phone2 from '../images/phone1.svg';
import computer from '../images/computer.svg';
import watch from '../images/watch.svg';

const savedPorducts = [
    {
        id: nanoid(),
        img: phone1,
        price: "$99.50",
        title: "GoPro HERO6 4K Action Camera - Black"
    },
    {
        id: nanoid(),
        img: phone2,
        price: "$99.50",
        title: "GoPro HERO6 4K Action Camera - Black"
    },
    {
        id: nanoid(),
        img: watch,
        price: "$99.50",
        title: "GoPro HERO6 4K Action Camera - Black"
    },
    {
        id: nanoid(),
        img: computer,
        price: "$99.50",
        title: "GoPro HERO6 4K Action Camera - Black"
    }
];

export default savedPorducts;