
import { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
const Navbar = (props:any) => {

    const [popup,setPopUp] = useState(false);

    const handlePopUp = () => {
        setPopUp(!popup);
    }
    return (
        <div className={styles.navbar}>
            <img src='https://i.ibb.co/gMVN8DN/Whats-App-Image-2023-08-11-at-05-06-29-1.jpg'/>
            <div className={styles.profile} onClick={handlePopUp}>
                <img src='https://i.ibb.co/PhD4MCW/Whats-App-Image-2023-08-11-at-05-06-29.jpg' className={styles.profilePhoto}/>
                {popup?
                <div className={styles.popUp}>   
                    <Link href="/Profile">Profile</Link>
                    <hr></hr>
                    <button>LogOut</button>
                </div>:null}
            </div>
        </div>
    )
}
export default Navbar;