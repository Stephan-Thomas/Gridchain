import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";
import styles from "../styles/overview.module.css";
import { chartData } from "../data/fakeData";
import { BuyModal } from "../components/modals/buyModal";
import { SellModal } from "../components/modals/sellModal";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Overview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Topbar />
      <Sidebar />
      <section className={styles.main}>
        <h1>Welcome Xever,</h1>
        <article className={styles.article1}>
          <div>
            <span>Energy Generated</span>
            <p>16,000Kw</p>
          </div>
          <div>
            <span>Energy Consumed</span>
            <p>12,000Kw</p>
          </div>
          <div>
            <span>Energy Traded</span>
            <p>900Kw</p>
          </div>
        </article>
        <article className={styles.article2}>
          <div className={styles.div1}>
            <h1>Trade Energy Here</h1>
            <span>
              <button className={styles.sell} onClick={openModal}>
                Sell Energy
              </button>
              <button onClick={openModal}>Buy Energy</button>
            </span>
          </div>
          <div className={styles.div2}>
            <span>
              <button>Type of Energy</button>
              <button>Price</button>
            </span>
            <Line
              // options={Option}
              data={chartData}
            />
          </div>
        </article>
        <article className={styles.article3}>
          <h1>Trade History</h1>
          <table>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>12/06/2024</td>
              <td>4KWh</td>
              <td>$10</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>12/06/2024</td>
              <td>4KWh</td>
              <td>$10</td>
              <td>Completed</td>
            </tr>
          </table>
        </article>
        <article className={styles.article4}>
          <h1>Energy Metrics</h1>
          <span>
            <p>Yearly</p>
            <p>Monthly</p>
            <p>Daily</p>
          </span>
          <Line data={chartData} />
        </article>
        {/* {isModalOpen && <BuyModal onClose={closeModal} />} */}
        {isModalOpen && <SellModal onClose={closeModal} />}
      </section>
    </>
  );
}
