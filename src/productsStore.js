
  //Shop
  import chili from '../src/assets/img/shops/chilipaste.png';
  import coconut from '../src/assets/img/shops/coconut.jpeg';
  import crab from '../src/assets/img/shops/crabpaste.webp';
  import fishsauce from '../src/assets/img/shops/fishsauce.jpeg';
  import golden from '../src/assets/img/shops/golden.avif';
  import greens from '../src/assets/img/shops/green.webp';
  import mussamans from '../src/assets/img/shops/mussaman.webp';
  import osyter from '../src/assets/img/shops/osyter.webp';
  import panthai from '../src/assets/img/shops/panthaifishsauce.avif';
  import pingking from '../src/assets/img/shops/pingking.jpeg';
  import reds from '../src/assets/img/shops/red.webp';
  import sweetchili from '../src/assets/img/shops/sweetchili.webp';
  import sweetsoy from '../src/assets/img/shops/sweetsoy.webp';
  import yellows from '../src/assets/img/shops/yellow.jpeg';





 const productsArray = [
    {
      id: 0,
      name: "Chili Paste",
      image: chili,
      promotion: false,
      price: 6.99
    },
    {
      id: 1,
      name: "Coconut Milk",
      image: coconut,
      promotion: true,
      price: 4.99
    },
    {
      id:2,
      name: "Crab Paste For Lao style papaya",
      image: crab,
      promotion: false,
      price: 6.99
    },
    {
      id:3,
      name:"Fish sauce",
      image: fishsauce,
      promotion: false,
      price: 5.99
    },

    {
      id:5,
      name: "Green Curry Paste",
      image: greens,
      promotion: false,
      price: 3.99
    },
    {
      id:6,
      name: "Mussaman Curry Paste",
      image: mussamans,
      promotion: false,
      price: 3.99
    },
    {
      id:7,
      name: "Osyter Sauce",
      image: osyter,
      promotion: false,
      price: 8.99
    },

    {
      id:9,
      name: "PingKing",
      image: pingking,
      promotion: false,
      price: 3.99
    },
    {
      id: 10,
      name: "Red Curry Paste",
      image: reds,
      promotion: false,
      price: 3.99
    },
    {
      id: 11,
      name: "Sweet Chili Sauce",
      image: sweetchili,
      promotion: false,
      price: 6.99
    },
    {
      id: 12,
      name: "Sweet Soy Sauce",
      image: sweetsoy,
      promotion: false,
      price: 6.99
    },
    {
      id: 13,
      name: "Yellow Curry Paste",
      image: yellows,
      promotion: false,
      price: 3.99
    }
  ]

  function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
