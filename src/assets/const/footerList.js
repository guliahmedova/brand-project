import { nanoid } from 'nanoid';

const footerList = [
    {
        id: nanoid(),
        title: "About",
        list: ["About Us", "Find store", "Categories", "Blogs"]
    },
    {
        id: nanoid(),
        title: "Partnership",
        list: ["About Us", "Find store", "Categories", "Blogs"]
    },
    {
        id: nanoid(),
        title: "Information",
        list: ["Help Center", "Money Refund", "Shipping", "Contact us"]
    },
    {
        id: nanoid(),
        title: "For users",
        list: ["Login", "Register", "Settings", "My Orders"]
    }
]

export default footerList;