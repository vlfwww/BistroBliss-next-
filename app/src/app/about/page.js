import style from './style.module.css';
import Image from 'next/image';
import aboutImg from '../../../public/about1.png';
import icon1 from '../../../public/Icon1.png';
import icon2 from '../../../public/Icon2.png';
import icon3 from '../../../public/Icon3.png';
import aboutImg2 from '../../../public/about2.png'
export default function About(){
    return (
        <div>
            <div className={style.firstSection}>
                <div className={style.left}>
                    <Image src={aboutImg} alt='img'/>
                    <div className={style.info}>
                        <p className={style.title}>Come and visit us</p>
                        <div className={style.part}>
                            <Image src={icon1} alt="img"/>
                            <p>(414) 857 - 0107</p>
                        </div>
                        <div className={style.part}>
                            <Image src={icon2} alt="img" className={style.mail}/>
                            <p className={style.mail}>happytummy@restaurant.com</p>
                        </div>
                        <div className={style.part}>
                            <Image src={icon3} alt="img"/>
                            <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <p className={style.main}>We provide healthy food for your family.</p>
                    <p className={style.dopInf}>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                    <p className={style.secondDopInf}>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>
            </div>
            <div className={style.secondSection}>
                <div className={style.left}>
                    <p className={style.title}>A little information for our valuable guest</p>
                    <p className={style.addition}>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    <div className={style.wrapper}>
                        <div className={style.block}>
                            <p className={style.main}>3</p>
                            <p className={style.dop}>Locations</p>
                        </div>
                        <div className={style.block}>
                            <p className={style.main}>1995</p>
                            <p className={style.dop}>Founded</p>
                        </div>
                        <div className={style.block}>
                            <p className={style.main}>65+</p>
                            <p className={style.dop}>Staff Members</p>
                        </div>
                        <div className={style.block}>
                            <p className={style.main}>100%</p>
                            <p className={style.dop}>Satisfied Customers</p>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                     <Image src={aboutImg2} alt='img'/>
                </div>
            </div>
        </div>
    )
}