import style from "./style.module.css";
import MenuItem from "../../../components/MenuItem";
import products from "../Array";
import Link from 'next/link';
export default function Menu() {
  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <p className={style.title}>Our Menu</p>
        <p className={style.dop}>
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>
      <div className={style.category}>
        <div className={style.categoryButton}>
          <p>🍱</p>
          <p>ALL</p>
        </div>
        <div className={style.categoryButton}>
          <p>☕</p>
          <p>Lemonade</p>
        </div>
        <div className={style.categoryButton}>
          <p>🥙</p>
          <p>Main courses</p>
        </div>
        <div className={style.categoryButton}>
          <p>🍰</p>
          <p>Dessert</p>
        </div>
      </div>
      <div className={style.menu}>
        {Array.isArray(products) ? (
          products.map((el) => (
             <Link key={el.id} href={`/menuCard/${el.id}`}>
                <MenuItem className={style.item}
                  name={el.name}
                  img={el.img}
                  price={el.price}
                  description={el.description}
                />
            </Link>
          ))
        ) : (
          <p>Нет доступных продуктов.</p>
        )}
      </div>
    </div>
  );
}
