import { nanoid } from "nanoid";
import secure from '../../assets/images/secure.svg';
import support from '../../assets/images/support.svg';
import delivery from '../../assets/images/delivery.svg';

const ordersInfoSec = [
    {
        id: nanoid(),
        title: "Secure payment",
        desc: "Have you ever finally just",
        img: secure
    },
    {
        id: nanoid(),
        title: "Customer support",
        desc: "Have you ever finally just",
        img: support
    },
    {
        id: nanoid(),
        title: "Free delivery",
        desc: "Have you ever finally just",
        img: delivery
    }
]

export default ordersInfoSec;