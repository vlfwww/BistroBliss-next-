import style from "./style.module.css";
import Image from "next/image";
function MenuItem(obj) {
  return (
    <div className={style.block}>
      <Image src={obj.img} alt="img"  width= {566} height = {439}/>
      <p className={style.price}>{obj.price}</p>
      <p className={style.name}>{obj.name}</p>
      <p className={style.description}>{obj.description}</p>
    </div>
  );
}
export default MenuItem;
