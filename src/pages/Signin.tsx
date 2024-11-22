import styles from "../styles/signin.module.css";

export function Signin() {
  return (
    <section className={styles.container}>
      <article className={styles.left}>
        <h1>Sign Up</h1>
        <form action="">
          <ul>
            <li>
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder="Input text here" />
            </li>
            <li>
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder="Input text here" />
            </li>
            <li>
              <label htmlFor="">Create Password</label>
              <input type="Password" placeholder="Input text here" />
            </li>
            <li>
              <label htmlFor="">Wallet Address</label>
              <input type="text" placeholder="Input text here" />
            </li>
          </ul>
          <span>
            <input type="checkbox" />
            <label htmlFor="">
              I agree that the information stated here is correct
            </label>
          </span>
          <button>Create account</button>
          <button>Signup With Google</button>
        </form>
      </article>
      <article className={styles.right}>
        <h1>GridChain</h1>
        <button>Login</button>
        <h2>Join the Future of Energy Trading</h2>
        <p>"Signup to trade energy earn rewards and unlock possibilities."</p>
        <img src="hands.jpg" alt="hands" />
      </article>
    </section>
  );
}
