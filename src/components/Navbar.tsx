import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <>
      <section className={styles.navbar}>
        <h1>GridChain</h1>
        <span>
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
        </span>
        <div className={styles.signin}>
          <a href="/signin" className={styles.signup}>
            Sign Up
          </a>
          <a href="/login" className={styles.login}>
            Login
          </a>
        </div>
      </section>
    </>
  );
}
