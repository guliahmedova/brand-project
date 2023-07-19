import { nanoid } from "nanoid";
import watch from '../images/watch.svg';
import computer from '../images/computer.svg';
import camera from '../images/camera.svg';
import headphones from '../images/headphone.svg';
import phone1 from '../images/phone1.svg';

const relatedProducts = [
    {
        id: nanoid(),
        img: phone1,
        title: "Xiaomi Redmi 8 Original",
        price: "$32.00-$40.00"
    },
    {
        id: nanoid(),
        img: watch,
        title: "Xiaomi Redmi 8 Original",
        price: "$32.00-$40.00"
    },
    {
        id: nanoid(),
        img: headphones,
        title: "Xiaomi Redmi 8 Original",
        price: "$32.00-$40.00"
    },
    {
        id: nanoid(),
        img: computer,
        title: "Xiaomi Redmi 8 Original",
        price: "$32.00-$40.00"
    },
    {
        id: nanoid(),
        img: camera,
        title: "Xiaomi Redmi 8 Original",
        price: "$32.00-$40.00"
    },
    {
        id: nanoid(),
        img: phone1,
        title: "Xiaomi Redmi 8 Original",
        price: "$32.00-$40.00"
    }
]

export default relatedProducts;