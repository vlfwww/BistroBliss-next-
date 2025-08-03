'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import products from '../../Array'; 
import style from '../style.module.css';
import Image from 'next/image';
import img from '../../../../public/info-empty.png';

export default function MenuCard() {
  const { id } = useParams(); 
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Продукт не найден.</p>;
  }

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToOrder = () => {
    const stored = localStorage.getItem("basket");
    let basket = stored ? JSON.parse(stored) : [];
    const exists = basket.find(item => item.id === product.id);

    if (!exists) {
      basket.push({
        id: product.id,
        name: product.name,
        img: product.img, 
        price: product.price,
        description: product.description,
      });
      localStorage.setItem("basket", JSON.stringify(basket));
      setIsAdded(true);
      console.log("Товар добавлен в корзину:", basket);
    } else {
      console.log("Товар уже в корзине:", basket);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.left}>
          <Image 
            src={product.img.src} 
            alt={product.name} 
            width={500} 
            height={300} 
          />
        </div>
        <div className={style.right}>
          <h1>{product.name}</h1>
          <p className={style.longDescription}>{product.longDescription}</p>
          <p className={style.size}>Size</p>
          <div className={style.sizeOptions}>
            {product.sizes.map((size) => (
              <div key={size.size} className={style.sizeButton}>
                <p className={style.letter}>{size.size}</p> 
                <p className={style.quantity}>{size.quantity} {size.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.total}>
        <div className={style.top}>
          <p>Total:</p>
          <p>${product.price}</p>
        </div>
        <div className={style.bottom}>
          <Image src={img} alt='Info' width={100} height={100} />
          <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
        </div>
        <button onClick={handleAddToOrder}>Add to Order</button>
        {isAdded && <p>Товар добавлен в корзину!</p>}
      </div>
    </div>
  );
}