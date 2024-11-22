import styles from "../styles/login.module.css";

export function Login() {
  return (
    <section className={styles.container}>
      <article className={styles.left}>
        <h1>GridChain</h1>
        <button>Create Account</button>
        <h2>Join the Future of Energy Trading</h2>
        <p>"Signup to trade energy earn rewards and unlock possibilities."</p>
        <img src="hands.jpg" alt="hands" />
      </article>
      <article className={styles.right}>
        <h1>Login</h1>
        <form action="">
          <ul>
            <li>
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder="Input text here" />
            </li>
            <li>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Input text here" />
            </li>
            <a href="#">Forgot Password</a>
          </ul>
          <span>
            <input type="checkbox" />
            <label htmlFor="">
              I agree that the information stated here is correct
            </label>
          </span>
          <button>Login</button>
        </form>
      </article>
    </section>
  );
}
