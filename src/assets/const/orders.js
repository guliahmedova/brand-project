import { nanoid } from "nanoid";
import items1 from '../images/items1.svg';
import rasm1 from '../images/rasm1.svg';
import rasm2 from '../images/rasm2.svg';

const orders = [
    {
        id: nanoid(),
        img: items1,
        title: "T-shirts with multiple colors, for men and lady",
        info: "Size: medium, Color: blue,  Material: Plastic",
        seller: "Seller: Artel Market",
        price: "$78.99",
        qty: "Qty: 9"
    },
    {
        id: nanoid(),
        img: rasm2,
        title: "T-shirts with multiple colors, for men and lady",
        info: "Size: medium, Color: blue,  Material: Plastic",
        seller: "Seller: Best factory LLCt",
        price: "$39.00",
        qty: "Qty: 3"
    },
    {
        id: nanoid(),
        img: rasm1,
        title: "T-shirts with multiple colors, for men and lady",
        info: "Size: medium, Color: blue,  Material: Plastic",
        seller: "Seller: Artel Market",
        price: "$170.50",
        qty: "Qty: 1"
    }
];

export default orders;