import styles from "../styles/reward.module.css";
import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { progress } from "../data/progress";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Reward() {
  return (
    <>
      <Topbar isAdmin={false} />
      <Sidebar />
      <section className={styles.main}>
        <h1>Reward Section</h1>
        <article className={styles.article1}>
          <div className={styles.cardContainer}>
            <div>
              <h2>Token Balance</h2>
              <p>2000 soon</p>
            </div>
            <div>
              <h2>Reedem Rewards</h2>
              <span>
                <img src="flower.jpg" alt="flower" />
                <img src="windmill.jpg" alt="windmill" />
                <img src="sunflower.jpg" alt="sunflower" />
              </span>
            </div>
            <div>
              <h2>User Progress Tracker</h2>
              {/* <nav className={styles.progress}>
                <Doughnut data={progress} />
              </nav> */}
              <p>
                Earn 500 soon today
                <br />
                Progress: 250/300 soon
              </p>
            </div>
          </div>
        </article>
        <article className={styles.article2}>
          <h2>How to Earn Reward</h2>
          <table>
            <tr>
              <th>Task</th>
              <th>Reward</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Complete first Purchase</td>
              <td>50 soon</td>
              <td>Complete</td>
            </tr>
            <tr>
              <td>Trade $2000 worth of energy</td>
              <td>100 soon</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Refer a friend</td>
              <td>150 soon</td>
              <td>Pending</td>
            </tr>
          </table>
        </article>
        <article className={styles.article3}>
          <h2>Reedem Reward</h2>
          <table>
            <tr>
              <th>Reward</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>10KWh Credits</td>
              <td>50 soon</td>
              <td>
                <button>Redeem Now</button>
              </td>
            </tr>
            <tr>
              <td>Trade $2000 worth of energy</td>
              <td>100 soon</td>
              <td>
                <button>Redeem Now</button>
              </td>
            </tr>
            <tr>
              <td>Exclusive Solar NFT</td>
              <td>150 soon</td>
              <td>
                <button>Redeem Now</button>
              </td>
            </tr>
          </table>
        </article>
        <article className={styles.article4}>
          <h2>Reward History</h2>
          <table>
            <tr>
              <th>Date</th>
              <th>Reward</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>12/06/2024</td>
              <td>50 soon</td>
              <td>First Purchase</td>
            </tr>
            <tr>
              <td>12/06/2024</td>
              <td>Redeemed 10KWh credits</td>
              <td>-50 soon</td>
            </tr>
            <tr>
              <td>12/06/2024</td>
              <td>Reedemed Exclusive Solar NFT</td>
              <td>-150 soon</td>
            </tr>
          </table>
        </article>
        <article className={styles.article5}>
          <h1>NFTs</h1>
          <div className={styles.cardContainer2}>
            <div>
              <h2>Owned NFTs</h2>
              <p>
                5 <span>NFTS</span>
              </p>
            </div>
            <div>
              <h2>Owned NFTs</h2>
              <span>
                <img src="windmill.jpg" alt="windmill" />
                <img src="sunflower.jpg" alt="sunflower" />
                <img src="flower.jpg" alt="flower" />
              </span>
            </div>
          </div>
          <span className={styles.span1}>
            <p>Solar Energy</p>
            <p>Wind Energy</p>
            <p>Special Editions</p>
          </span>
        </article>
        <article className={styles.article6}>
          <div>
            <img src="flower.jpg" alt="flower" />
            <span>
              <h2>Solar NFT energy</h2>
              <p>
                A unique solar artwork created to represent the energy
                sustainability
              </p>
              <nav>Owned by Awmah</nav>
              <span className={styles.spanBtn}>
                <button>View Details</button>
                <button>Transfer</button>
              </span>
            </span>
          </div>
          <div>
            <img src="windmill.jpg" alt="windmill" />
            <span>
              <h2>Wind NFT energy</h2>
              <p>
                A unique Wind artwork created to represent the energy
                sustainability
              </p>
              <nav>Owned by Awmah</nav>
              <span className={styles.spanBtn}>
                <button>View Details</button>
                <button>Transfer</button>
              </span>
            </span>
          </div>
          <div>
            <img src="sunflower.jpg" alt="sunflower" />
            <span>
              <h2>Solar NFT energy</h2>
              <p>
                A unique solar artwork created to represent the energy
                sustainability
              </p>
              <nav>Owned by Awmah</nav>
              <span className={styles.spanBtn}>
                <button>View Details</button>
                <button>Transfer</button>
              </span>
            </span>
          </div>
          <div>
            <img src="house.jpg" alt="geothermal" />
            <span>
              <h2>Geothermal NFT energy</h2>
              <p>
                A unique geothermal artwork created to represent the energy
                sustainability
              </p>
              <nav>Owned by Awmah</nav>
              <span className={styles.spanBtn}>
                <button>View Details</button>
                <button>Transfer</button>
              </span>
            </span>
          </div>
          <div>
            <img src="water.jpg" alt="hydro" />
            <span>
              <h2>Hydro NFT energy</h2>
              <p>
                A unique Hydro artwork created to represent the energy
                sustainability
              </p>
              <nav>Owned by Awmah</nav>
              <span className={styles.spanBtn}>
                <button>View Details</button>
                <button>Transfer</button>
              </span>
            </span>
          </div>
          <div>
            <img src="turbine.jpg" alt="hydro" />
            <span>
              <h2>Hydro NFT energy</h2>
              <p>
                A unique Hydro artwork created to represent the energy
                sustainability
              </p>
              <nav>Owned by Awmah</nav>
              <span className={styles.spanBtn}>
                <button>View Details</button>
                <button>Transfer</button>
              </span>
            </span>
          </div>
        </article>
      </section>
    </>
  );
}
