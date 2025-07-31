"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";

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

  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <p className={style.title}>Корзина</p>
      </div>
      <div className={style.basketContent}>
        {items.length === 0 ? (
          <p>Ваша корзина пуста.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}{" "}
                <button onClick={() => removeItem(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Basket;
