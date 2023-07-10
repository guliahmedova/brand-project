import { nanoid } from 'nanoid';

const categoriesSidebarItems = [
    {
        id: nanoid(),
        title: "Category",
        list: ["Mobile accessory", "Electronics", "Smartphones", "Modern tech"]
    },
    {
        id: nanoid(),
        title: "Brands",
        list: ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"]
    },
    {
        id: nanoid(),
        title: "Features",
        list: ["Metallic", "Plastic cover", "8GB Ram", "Super power","Large Memory"]
    },
    {
        id: nanoid(),
        title: "Condition",
        list: ["Any", "Refurbished", "Brand new", "Old items"]
    }
];

export default categoriesSidebarItems;