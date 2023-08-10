
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
            <img src='images/Logo.png'/>
            <div className={styles.profile} onClick={handlePopUp}>
                <img src='txt' className={styles.profilePhoto}/>
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