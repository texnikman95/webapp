// import React from 'react';
// import Header from './pegas/Header';
// import Main from './pegas/Main';


// function App() {
//   return (
//     <div>
    

//       <Header />
     

//       <main>
//         <p align="center">Saytimizga xush kelibsiz!</p>
//       </main>
//       <Main />
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import "./App.css";

// Mahsulotlar ro'yxati (ularni serverdan yoki fayldan olish mumkin)
const initialGoods = [
  {
    id: 1,
    name: "Telefon",
    img: "apple.png",
    cost: 5000,
  },
  {
    id: 2,
    name: "Noutbuk",
    img: "cherry.png",
    cost: 15000,
  },
  {
    id: 3,
    name: "Televizor",
    img: "grape.png",
    cost: 2000,
  },
  {
    id: 4,
    name: "Kameralar",
    img: "telefon.jpg",
    cost: 7000,
  },
];

function App() {
  const [goods, setGoods] = useState(initialGoods);  // Mahsulotlar ro'yxati
  const [cart, setCart] = useState({});  // Savat tarkibi

  // LocalStorage'dan savatni yuklash
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Savatni LocalStorage'ga saqlash
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Mahsulotni savatga qo'shish
  const addToCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[id] = (newCart[id] || 0) + 1;
      return newCart;
    });
  };

  // Mahsulotni savatdan o'chirish
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id]) {
        newCart[id]--;
        if (newCart[id] <= 0) {
          delete newCart[id];
        }
      }
      return newCart;
    });
  };

  // Mahsulotni ko'rsatish
  const showMiniCart = () => {
    return Object.entries(cart).map(([key, quantity]) => {
      const product = goods.find((item) => item.id === parseInt(key));
      return (
        <div key={key}>
          <p>
            {product.name} x{quantity} - {product.cost * quantity} so‘m
            <button onClick={() => removeFromCart(key)}>O‘chirish</button>
          </p>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Internet-do'kon</h1>

      <div className="goods">
        {goods.map((item) => (
          <div className="cart" key={item.id}>
            <p className="name">{item.name}</p>
            <img src={`images/${item.img}`} alt={item.name} />
            <div className="cost">{item.cost} so‘m</div>
            <button className="add-to-cart" onClick={() => addToCart(item.id)}>
              Sotib olish
            </button>
          </div>
        ))}
      </div>

      <div className="mini-cart">
        <h2>Mini-savat</h2>
        {showMiniCart()}
        <div className="total">
          <strong>
            Umumiy summa:{" "}
            {Object.entries(cart).reduce((total, [key, quantity]) => {
              const product = goods.find((item) => item.id === parseInt(key));
              return total + product.cost * quantity;
            }, 0)}{" "}
            so‘m
          </strong>
        </div>
      </div>
    </div>
  );
}

export default App;

