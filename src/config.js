import nike1 from "./assets/n1-min.png";
import nike2 from "./assets/n2-min.png";
import nike3 from "./assets/n3-min.png";
import nike4 from "./assets/n4-min.png";

export const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export const SIZE = [6, 7, 8, 9, 10];

export const QTY = [1, 2, 3, 4, 5];

export const SHOE_LIST = [
  {
    id: 1,
    img: {
      src: nike1,
      alt: "Nike Shoe",
    },
    className: "bg-[#EEFFA4]",
    title: "Nike Air Max 270",
    description:
      "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient.",
    price: 160,
  },
  {
    id: 2,
    img: {
      src: nike2,
      alt: "Nike Shoe",
    },
    className: "bg-[#DDCEFD]",
    title: "Nike Air Vapor",
    description:
      "The Nike Air Vapor is a sleek and stylish shoe that's perfect for any occasion. It's the perfect shoe for any active lifestyle.",
    price: 100,
  },
  {
    id: 3,
    img: {
      src: nike3,
      alt: "Nike Shoe",
    },
    className: "bg-[#DAFFA2]",
    title: "Nike Air Max 2090",
    description:
      "The Nike Air Max 2090 is shoe that's both stylish and comfortable. It's the perfect shoe for any fashion-forward individual.",
    price: 150,
  },
  {
    id: 4,
    img: {
      src: nike4,
      alt: "Nike Shoe",
    },
    className: "bg-[#FCC4EA]",
    title: "Nike Air Blazer",
    description:
      "The Nike Air Blazer is a classic shoe that's perfect for any casual occasion. It's the perfect shoe for any laid-back individual.",
    price: 110,
  },
];

export const CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 9,
  };
});
