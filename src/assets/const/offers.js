import { nanoid } from 'nanoid';
import watch from '../images/watch.svg';
import computer from '../images/computer.svg';
import camera from '../images/camera.svg';
import headphones from '../images/headphone.svg';
import phone1 from '../images/phone1.svg';

export const offers = [
    {
        id: nanoid(),
        name: "Smart watches",
        discount: "-25%",
        img: watch
    },
    {
        id: nanoid(),
        name: "Laptops",
        discount: "-15%",
        img: computer
    },
    {
        id: nanoid(),
        name: "GoPro cameras",
        discount: "-40%",
        img: camera
    },
    {
        id: nanoid(),
        name: "Headphones",
        discount: "-25%",
        img: headphones
    },
    {
        id: nanoid(),
        name: "Canon camreras",
        discount: "-25%", 
        img: phone1
    }
]