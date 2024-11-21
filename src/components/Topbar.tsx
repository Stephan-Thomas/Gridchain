import styles from "./topbar.module.css"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";

export function Topbar(){
    return (
        <section className={styles.topbar}>
                <h1>GridChain</h1>
                <span>
                    <p><IoSearchOutline /></p>
                    <p><FaWallet /></p>
                    <p><FaRegBell /></p>
                    <hr />
                    <p>User Name</p>
                    <p>U</p>
                </span>
        </section>
    )
} 