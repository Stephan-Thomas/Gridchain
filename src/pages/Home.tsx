import styles from "../styles/home.module.css";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <section>
        <article className={styles.article1}>
          <div className={styles.circle}></div>
          <h1>redifining energy ownership with blockchain</h1>
          <p>
            Take control of your energy. Trade directly, earn NFTs <br />
            for green contributions, and make every watt count.
          </p>
          <span>
            <button>Start trading energy</button>
            <button>Learn about NFTs</button>
          </span>
        </article>
        <article className={styles.article2}>
          <ul>
            <li>Trade energy on blockchain</li>
            <li>Trade energy on blockchain</li>
            <li>Trade energy on blockchain</li>
            <li>Trade energy on blockchain</li>
          </ul>
        </article>
        <article className={styles.article3} id="features">
          <h1>Features</h1>
          <span>
            <div>
              <p>Peer-to-Peer Energy Trading</p>
              <p>Green Energy Verification</p>
              <p>NFT Rewards Program</p>
            </div>
            <div>
              <img src="energy.jpg" alt="energy" />
            </div>
          </span>
        </article>
        <article className={styles.article4} id="how-it-works">
          <h1>How It Works</h1>
          <span>
            <div>
              <h1>Get Started</h1>
              <ul>
                <li>
                  - Sign Up: create an account using your email or connect your
                  digital wallet.
                </li>
                <br />
                <li>
                  - SetUp Your Profile: Add your location and details about your
                  energy setup (e.g, solar panels or batteries)
                </li>
                <br />
                <li>
                  - Connect Your Devices: Sync your renewable energy devices
                  with the platform using a compatible smart meter to track your
                  energy production and consumption.
                </li>
              </ul>
              <img src="leaf.jpg" alt="leaf" />
            </div>
            <div className={styles.down}>
              <h1>Trade Energy</h1>
              <ul>
                <li>
                  - Explore the Marketplace: Browse energy listings in your own
                  surplus energy for sale
                </li>
                <br />
                <li>
                  - Peer-to-Peer Transactions: Choose your trading patner, agree
                  to terms, and let blockchian-powered smart contracts handle
                  the transactions accurately and transparently.
                </li>
              </ul>
              <img src="leaf.jpg" alt="leaf" />
            </div>
            <div>
              <h1>Earn Rewards</h1>
              <ul>
                <li>
                  - NFT-Based Incentives: Earn collectible NFTs for achieving
                  milestones like producing renewable energy, trading
                  consistently, or participating in challenges.
                </li>
                <br />
                <li>
                  - Reedem & Trade: Use NFTs to unlock platform perks, like
                  lower fees or exclusive benefits, or sell them on the
                  marketplace for additional income.
                </li>
              </ul>
              <img src="leaf.jpg" alt="leaf" />
            </div>
            <div className={styles.down}>
              <h1>Track & grow</h1>
              <ul>
                <li>
                  - Analytics Dashboard: monitor your energy usage, trading
                  history, and carbon savings in real-time
                </li>
                <br />
                <li>
                  - Community Collaboration: Connect with other users, share
                  ideas, and contribute to local renrewable energy projects for
                  shared benefits and recognition.
                </li>
              </ul>
              <img src="leaf.jpg" alt="leaf" />
            </div>
          </span>
        </article>
        <article className={styles.article5}>
          <h1>Community Talks</h1>
          <div>
            <span>
              <h1>From a Renewable Energy producer</h1>
              <p>
                "As a small solar energy producer, i used to have excess power
                that went to waste. This platform has completely changed that.
                Now i sell my surplus energy directly to my neighbours and earn
                rewards in the form of NFTs. It's not just profitable-it feels
                great to contribute to a greener future!"
              </p>
              <br />
              <span className={styles.card}>
                <p>-Ada O.,Solar Panel Owner, Lagos</p>
                <img src="woman.jpg" alt="woman" />
              </span>
            </span>
          </div>
        </article>
      </section>
    </>
  );
}
