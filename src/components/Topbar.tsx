import styles from "./topbar.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

type TopbarProps = {
  isAdmin: boolean; // Pass a prop to indicate if the user is an admin
  adminName?: string; // Optional prop for admin name
};

export function Topbar({ isAdmin, adminName }: TopbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className={styles.topbar}>
      <h1>GridChain</h1>
      <span>
        <p>
          <IoSearchOutline />
        </p>
        <p>
          <FaWallet />
        </p>
        <p>
          <FaRegBell />
        </p>
        <hr />
        {isAdmin ? (
          <div className={styles.dropdownWrapper}>
            <FiUser />
            <p className={styles.adminImg}>A</p>
            <p onClick={toggleDropdown}>{adminName || "Admin"}</p>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                <p>Admin Name: {adminName || "Admin"}</p>
                <Link to="/profile">
                  <MdOutlineRemoveRedEye /> Show Profile
                </Link>
                <button onClick={() => console.log("Logout")}>
                  <FiLogOut /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <p>U</p>
            <p>User Name</p>
          </>
        )}
      </span>
    </section>
  );
}
