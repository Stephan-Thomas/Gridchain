import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.userImage}>U</h2>
      <p>User Name</p>
      <hr />
      <a href="/overview">Overview</a>
      <a href="/market">Market</a>
      <a href="/rewards">Rewards</a>
      <hr />
      <a href="logout">Logout</a>
    </aside>
  );
}
