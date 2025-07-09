'use client';
import { useParams } from 'next/navigation'; 
import products from '../../Array'; 
import style from '../style.module.css';
import Image from "next/image";
import img from '../../../../public/info-empty.png'

export default function MenuCard() {
  const { id } = useParams(); 

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Продукт не найден.</p>;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.left}>
          <img src={product.img.src}/>
        </div>
        <div className={style.right}>
            <h1>{product.name}</h1>
            <p className={style.longDescription}>{product.longDescription}</p>
            <p className={style.size}>Size</p>
             <div className={style.sizeOptions}>
            {product.sizes.map((size) => (
              <div key={size.size} className={style.sizeButton}>
                <p className={style.letter}>{size.size}</p> <p className={style.quantity}>{size.quantity} {size.unit}</p>
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
            <Image src={img} alt='img'/>
            <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
          </div>
          <button>Add to Order</button>
        </div>
    </div>
  );
}