"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import MenuItem from "../../../components/MenuItem";

function Basket() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("basket");
    if (stored) {
      const parsedItems = JSON.parse(stored);
      console.log("Загруженные товары из localStorage:", parsedItems); // Отладка
      setItems(parsedItems);
    }
  }, []);

  useEffect(() => {
    console.log("Обновление localStorage с товарами:", items); // Отладка
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const clearBasket = () => {
    setItems([]);
    localStorage.removeItem("basket"); // Очищаем localStorage
  };

  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <p className={style.title}>Basket</p>
      </div>
      <div className={style.basketContent}>
        {items.length === 0 ? (
          <p>The basket is empty.</p>
        ) : (
          <>
            <div className={style.basketWrapper}>
              {items.map((item) => (
                <div key={item.id} className={style.basketItem}>
                  <MenuItem
                    name={item.name}
                    img={item.img}
                    price={item.price}
                    description={item.description}
                  />
                  <button onClick={() => removeItem(item.id)} className={style.deleteButton}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <button className={style.clear} onClick={clearBasket}>
              Clear Basket
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Basket;