// import React, { MouseEvent } from "react";
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
import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";
import styles from "../styles/market.module.css";
import { doughnutData } from "../data/doughnut";
import { CiFilter } from "react-icons/ci";
// import { Modal } from "../components/Modal";

// Register chart.js components
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

export function Market() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <section className={styles.main}>
        <span className={styles.span1}>
          <h1>Energy Market</h1>
          <input
            type="text"
            placeholder="search energy credits, sellers, location"
          />
        </span>
        <article className={styles.article1}>
          <span className={styles.span2}>
            <p>
              <CiFilter />
            </p>
            <button>
              All
            </button>
            <button>
              Region
            </button>
            <button>
              Price
            </button>
            <button>
              Type of Energy
            </button>
          </span>
        </article>
        <article className={styles.article2}>
          <h2>Market Trends</h2>
          <span>
            <nav>
              <h2>Average Price</h2>
              <div>
                <Doughnut data={doughnutData} />
              </div>
              <table>
                <tr>
                  <th>Energy Type</th>
                  <th>Price Per KWh</th>
                </tr>
                <tr>
                  <td>solar</td>
                  <td>$25</td>
                </tr>
                <tr>
                  <td>Wind</td>
                  <td>$18</td>
                </tr>
                <tr>
                  <td>Hydro</td>
                  <td>$16</td>
                </tr>
                <tr>
                  <td>Geothermal</td>
                  <td>$20</td>
                </tr>
              </table>
            </nav>
            <nav>
              <h2>Most Traded Energy</h2>
              <div>
                <Doughnut data={doughnutData} />
              </div>
              <table>
                <tr>
                  <th>Energy Type</th>
                  <th>Percentage Per KWh</th>
                </tr>
                <tr>
                  <td>solar</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Wind</td>
                  <td>18%</td>
                </tr>
                <tr>
                  <td>Hydro</td>
                  <td>16%</td>
                </tr>
                <tr>
                  <td>Geothermal</td>
                  <td>20%</td>
                </tr>
              </table>
            </nav>
          </span>
        </article>
      </section>
    </>
  );
};
