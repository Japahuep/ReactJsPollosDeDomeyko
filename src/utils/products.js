// const products = [
//   {id: 1, title: "Pollos Asados", price:8000, pictureUrl:"https://github.com/Japahuep/finalProject/blob/main/media/images/menuPollo.jpg?raw=true",description:"Pollo entero (dos pechugas y dos trutros) condimentado y asado a las brasas con carbón de espino.", stock:10},
//   {id: 2, title: "Empanaditas", price:2000, pictureUrl:"https://github.com/Japahuep/finalProject/blob/main/media/images/menuEmpanaditas.jpg?raw=true",description:"Empanadas de queso fritas (3 unidades) con salsas a elección.", stock:12},
//   {id: 3, title: "ChorriDomeyko", price:12000, pictureUrl:"https://github.com/Japahuep/finalProject/blob/main/media/images/menuChorriDomeyko.jpg?raw=true",description:"Chorrillana con vacuno, pollo, chorizo, cebolla, huevo, queso, aros de cebolla y papas fritas. Para 4-5 personas.", stock:15},
//   {id: 4, title: "Hamburguesa", price:4000, pictureUrl:"https://github.com/Japahuep/finalProject/blob/main/media/images/menuHamburguesa.jpg?raw=true",description:"Hamburguesa de vacuno, tomate, palta y mayonesa de la casa.", stock:8}
// ];

const products = [
  {
    id: 1,
    title: "HamburguesaPack",
    category: {
      title: "burger",
      id: 1,
    },
    price: 5000,
    pictureUrl: "https://github.com/Japahuep/finalProject/blob/main/media/images/promoHamburguesa.jpg?raw=true",
    description: ["Hamburguesa Italiana", "Papas Fritas", "3 Empanaditas de queso", "Bebida Lata", "1 Salsa"],
    stock:10,
  },
  {
    id: 3,
    title: "Pack Familiar",
    category: {
      title: "chicken",
      id: 2,
    },
    price: 15000,
    pictureUrl: "https://github.com/Japahuep/finalProject/blob/main/media/images/promoFamiliar.jpg?raw=true",
    description: ["Pollo Entero", "Papas Fritas Grandes", "4 Empanaditas de Queso", "Bebida de 1.5L", "1 Salsa"],
    stock:5,
  },
  {
    id: 4,
    title: "Pack Premium",
    category: {
      title: "chicken",
      id: 2,
    },
    price: 20000,
    pictureUrl: "https://github.com/Japahuep/finalProject/blob/main/media/images/promoPremium.jpg?raw=true",
    description: ["Pollo Entero", "Papas Fritas Gigantes", "6 Empanaditas de Queso", "Bebida de 1.5L", "2 Salsa"],
    stock:8,
  },
  {
    id: 5,
    title: "Pack para 2",
    category: {
      title: "chicken",
      id: 2,
    },
    price: 12000,
    pictureUrl: "https://github.com/Japahuep/finalProject/blob/main/media/images/promoDos.jpg?raw=true",
    description: ["Medio Pollo", "Papas Fritas Medianas", "2 Empanaditas de Queso", "Bebida de 1.5L", "1 Salsa"],
    stock:20,
  },
  {
    id: 6,
    title: "MechadaPack",
    category: {
      title: "burger",
      id: 1,
    },
    price: 8000,
    pictureUrl: "https://github.com/Japahuep/finalProject/blob/main/media/images/promoMechada.jpg?raw=true",
    description: ["Mechada Italiana", "Papas Fritas", "3 Empanaditas de Queso", "Bebida en Lata", "1 Salsa"],
    stock:15,
  },
  {
    id: 7,
    title: "AsPack",
    category: {
      title: "as",
      id: 3,
    },
    price: 4000,
    pictureUrl: "https://github.com/Japahuep/finalProject/blob/main/media/images/promoAs2.png?raw=true",
    description: ["As Italiano", "Papas Fritas", "3 Empanaditas de Queso", "Bebida en Lata", "1 Salsa"],
    stock:10,
  },
  {
    id: 8,
    title: "ChorriExplota",
    category: {
      title: "fried",
      id: 4,
    },
    price: 18000,
    pictureUrl: "https://github.com/Japahuep/finalProject/blob/main/media/images/promoChorriExplota.jpg?raw=true",
    description: ["Chorrillana Clásica", "Mix de 12 Fritanguitas", "Bebida de 1.5L", "3 Salsas"],
    stock:3,
  }
]

export default { products };