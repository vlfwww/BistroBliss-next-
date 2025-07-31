import style from "./style.module.css";
import Image from "next/image";
import Link from 'next/link'
import phone from "../../public/phone.png";
import mail from "../../public/mail.png";
import tw from "../../public/logo-twitter.png";
import f from "../../public/logo-fb-simple.png";
import inst from "../../public/logo-instagram.png";
import git from "../../public/logo-github.png";
import food from "../../public/japanese-food.png";
function Header() {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.left}>
          <div className={style.first}>
            <Image
              src={phone}
              alt="phone"
            />
            <p>(414) 857 - 0107</p>
          </div>
          <div className={style.second}>
            <Image
              src={mail}
             alt="mail"
            />
            <p>yummy@bistrobliss</p>
          </div>
        </div>
        <div className={style.right}>
            <div className={style.block}>
                <Image
                src={tw}
                alt="tw"
                />
            </div>
            <div className={style.block}>
                 <Image
                src={f}
                alt="f"
                />
            </div>
            <div className={style.block}>
                <Image
                src={inst}
                alt="inst"
                />
            </div>
            <div className={style.block}>
                <Image
                src={git}
                alt="git"
                />
            </div>
        </div>
      </div>
      <div className={style.secondWrap}>
        <div className={style.left}>
            <Image src={food} alt="food"/>
            <p>Bistro Bliss</p>
        </div>
        <div className={style.center}>
            <Link href='/'><p>Home</p></Link>
            <Link href='/about'><p>About</p></Link>
            <Link href='/menu'><p>Menu</p></Link>
        </div>
        <div className={style.right}>
            <Link href='/basket'><p>Basket</p></Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
