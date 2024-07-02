const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');


document.querySelectorAll('.buy-icon').forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const productImage = icon.previousSibling.previousSibling.src;
    const productName = icon.previousSibling.previousSibling.alt;
    const productPrice = icon.previousSibling.textContent;
  
    
    const cartItem = [{
      image: "f1.jpg",
      name: Cartoon Astronaut T-Shirts,
      price: 100,
    },
      {image: "f2.jpg",
      name: Cartoon Astronaut T-Shirts,
      price: 110,
    },
   
   {image: "f3.jpg",
    name: Cartoon Astronaut T-Shirts,
    price: 120,
  },
    {image: "f4.jpg",
     name: Cartoon Astronaut T-Shirts,
     price: 130,
   },
     {image: "f5.jpg",
      name: Cartoon Astronaut T-Shirts,
      price: 140,
    },
      {image: "f6.jpg",
      name: Cartoon Astronaut T-Shirts,
      price: 150,
    },
      {image: "f7.jpg",
      name: Cartoon Astronaut T-Shirts,
      price: 160,
    },
     {image: "f8.jpg",
      name: Cartoon Astronaut T-Shirts,
      price: 170,
    },
    }];
  
  
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
  
  
    cartCount.textContent = cart.length;
  });
});



const cart = JSON.parse(localStorage.getItem('cart') || '[]');

cart.forEach(item => {
  const cartItemHTML = `
    <div>
      <img src="${item.image}" alt="${item.name}">
      <span>${item.name}</span>
      <span>${item.price}</span>
    </div>
  `;
  document.getElementById('cart-items').innerHTML += cartItemHTML;
});


