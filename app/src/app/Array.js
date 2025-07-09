import menu1 from '../../public/menu1.png';
import menu2 from '../../public/menu2.png';
import menu3 from '../../public/menu3.png';
import menu4 from '../../public/menu4.png';
import menu5 from '../../public/menu5.png';
import menu6 from '../../public/menu6.png';
import menu7 from '../../public/menu7.png';
import menu8 from '../../public/menu8.png';

const products = [
  {
    id: 1,
    name: "Fried Eggs",
    price: 9.99,
    img:menu1,
    description: "Classic sunny-side-up eggs",
    longDescription: "Perfectly fried eggs with crispy edges and runny yolks, served with fresh lettuce and a pinch of sea salt. Cooked in premium olive oil for enhanced flavor.",
    sizes: [
      { size: "S", unit: "piece", quantity: 1 },
      { size: "M", unit: "pieces", quantity: 2 },
      { size: "L", unit: "pieces", quantity: 3 }
    ]
  },
  {
    id: 2,
    name: "Hawaiian Pizza",
    price: 15.99,
     img:menu2,
    description: "Sweet & savory tropical pizza", 
    longDescription: "Traditional pizza with tomato sauce, mozzarella cheese, smoked ham, and juicy pineapple chunks. Baked in a wood-fired oven for authentic crispiness.",
    sizes: [
      { size: "S", unit: "slice", quantity: 1 },
      { size: "M", unit: "slices", quantity: 2 },
      { size: "L", unit: "whole", quantity: 1 }
    ]
  },
  {
    id: 3,
    name: "Martinez Cocktail",
    price: 7.25,
     img:menu3,
    description: "Classic gin-based cocktail",
    longDescription: "A refined mix of Old Tom gin, sweet vermouth, maraschino liqueur, and orange bitters. Garnished with a lemon twist and Luxardo cherry.",
    sizes: [
      { size: "S", unit: "cl", quantity: 6 },
      { size: "M", unit: "cl", quantity: 9 },
      { size: "L", unit: "cl", quantity: 12 }
    ]
  },
  {
    id: 4,
    name: "Butterscotch Cake",
    price: 20.99,
    img:menu4,
    description: "Decadent caramel-flavored dessert", 
    longDescription: "Layers of moist vanilla sponge cake filled with creamy butterscotch mousse and topped with gold leaf flakes. Served with salted caramel sauce.",
    sizes: [
      { size: "S", unit: "slice", quantity: 1 },
      { size: "M", unit: "slices", quantity: 2 },
      { size: "L", unit: "whole", quantity: 1 }
    ]
  },
  {
    id: 5,
    name: "Mint Lemonade",
    price: 5.89,
     img:menu5,
    description: "Refreshing citrus drink", 
    longDescription: "Freshly squeezed lemons blended with organic mint leaves and a touch of agave syrup. Served over crushed ice with a mint sprig garnish.",
    sizes: [
      { size: "S", unit: "ml", quantity: 250 },
      { size: "M", unit: "ml", quantity: 400 },
      { size: "L", unit: "ml", quantity: 600 }
    ]
  },
  {
    id: 6,
    name: "Chocolate Icecream",
    price: 18.05,
    img:menu6,
    description: "Premium Belgian chocolate", 
    longDescription: "Velvety ice cream made with 70% dark Belgian chocolate and Madagascar vanilla beans. Topped with chocolate shavings and raspberry coulis.",
    sizes: [
      { size: "S", unit: "scoop", quantity: 1 },
      { size: "M", unit: "scoops", quantity: 2 },
      { size: "L", unit: "scoops", quantity: 3 }
    ]
  },
  {
    id: 7,
    name: "Cheese Burger",
    price: 12.55,
    img:menu7,
    description: "Juicy beef patty with cheese", 
    longDescription: "100% Angus beef patty with melted cheddar, crispy lettuce, pickles, and special sauce in a brioche bun. Served with hand-cut fries.",
    sizes: [
      { size: "S", unit: "single", quantity: 1 },
      { size: "M", unit: "double", quantity: 2 },
      { size: "L", unit: "triple", quantity: 3 }
    ]
  },
  {
    id: 8,
    name: "Classic Waffles",
    price: 12.99,
    img:menu8,
    description: "Golden crispy waffles",
    longDescription: "Authentic Belgian waffles with pearl sugar pockets. Served with whipped cream, seasonal berries, and maple syrup drizzle.",
    sizes: [
      { size: "S", unit: "piece", quantity: 1 },
      { size: "M", unit: "pieces", quantity: 2 },
      { size: "L", unit: "pieces", quantity: 3 }
    ]
  }
];
export default products;