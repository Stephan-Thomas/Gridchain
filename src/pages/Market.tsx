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
import { useState } from "react";

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
  const energyData = [
    { id: 1, type: "Solar", price: 0.15, country: "USA", state: "California" },
    { id: 2, type: "Wind", price: 0.1, country: "Canada", state: "Ontario" },
    { id: 3, type: "Hydro", price: 0.2, country: "Germany", state: "Bavaria" },
    {
      id: 4,
      type: "Geothermal",
      price: 0.25,
      country: "India",
      state: "Maharashtra",
    },
    { id: 5, type: "Solar", price: 0.18, country: "Nigeria", state: "Anambra" },
  ];

  const [filters, setFilters] = useState({
    search: "",
    energyType: "All",
    country: "All",
    state: "All",
    priceRange: "All",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const getPriceRange = (price: number) => {
    if (price <= 0.1) return "0 ~ 0.1";
    if (price > 0.1 && price <= 0.2) return "0.1 ~ 0.2";
    if (price > 0.2 && price <= 0.3) return "0.2 ~ 0.3";
    return "Above 0.3";
  };

  const filteredData = energyData.filter((item) => {
    const matchesSearch =
      filters.search === "" ||
      item.type.toLowerCase().includes(filters.search.toLowerCase());
    const matchesEnergyType =
      filters.energyType === "All" || item.type === filters.energyType;
    const matchesCountry =
      filters.country === "All" || item.country === filters.country;
    const matchesState =
      filters.state === "All" || item.state === filters.state;
    const matchesPriceRange =
      filters.priceRange === "All" ||
      getPriceRange(item.price) === filters.priceRange;

    return (
      matchesSearch &&
      matchesEnergyType &&
      matchesCountry &&
      matchesState &&
      matchesPriceRange
    );
  });

  return (
    <>
      <Topbar />
      <Sidebar />
      <section className={styles.main}>
        <span className={styles.span1}>
          <h1>Energy Market</h1>
          <input
            type="text"
            placeholder="Search by energy type..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </span>
        <article className={styles.article1}>
          <span className={styles.span2}>
            <p>
              <CiFilter />
            </p>
            <button>All</button>
            <button>Popular Trades</button>
            <button>Price</button>
            <button>Type of Energy</button>
          </span>
        </article>
        <article className={styles.article2}>
          <div className={styles.filters}></div>
          <table>
            <tr>
              <th>
                <select
                  name="energyType"
                  id="energyType"
                  value={filters.energyType}
                  onChange={(e) =>
                    handleFilterChange("energyType", e.target.value)
                  }
                >
                  <option value="All">Energy Type</option>
                  <option value="Solar">Solar</option>
                  <option value="Wind">Wind</option>
                  <option value="Hydro">Hydro</option>
                  <option value="Geothermal">Geothermal</option>
                </select>
              </th>
              <th>
                <select
                  name="priceRange"
                  id="priceRange"
                  value={filters.priceRange}
                  onChange={(e) =>
                    handleFilterChange("priceRange", e.target.value)
                  }
                >
                  <option value="All">Price Range</option>
                  <option value="0 ~ 0.1">$0 ~ $0.1</option>
                  <option value="0.1 ~ 0.2">$0.1 ~ $0.2</option>
                  <option value="0.2 ~ 0.3">$0.2 ~ $0.3</option>
                  <option value="Above 0.3">Above $0.3</option>
                </select>
              </th>
              <th>
                <select
                  name="country"
                  id="country"
                  value={filters.country}
                  onChange={(e) =>
                    handleFilterChange("country", e.target.value)
                  }
                >
                  <option value="All">Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="India">India</option>
                  <option value="Nigeria">Nigeria</option>
                </select>
              </th>
              <th>
                <select
                  name="state"
                  id="state"
                  value={filters.state}
                  onChange={(e) => handleFilterChange("state", e.target.value)}
                >
                  <option value="All">State</option>
                  <option value="California">California</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Bavaria">Bavaria</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Anambra">Anambra</option>
                </select>
              </th>
            </tr>
          </table>
          <div className={styles.results}>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className={styles.card}>
                  <h3>Energy Type: {item.type}</h3>
                  <p>Price: ${item.price.toFixed(2)} per KWh</p>
                  <p>Country: {item.country}</p>
                  <p>State: {item.state}</p>
                </div>
              ))
            ) : (
              <p className={styles.noResults}>No Results Found</p>
            )}
          </div>
        </article>
        <article className={styles.article3}>
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
                  <td>Solar</td>
                  <td>$0.15</td>
                </tr>
                <tr>
                  <td>Wind</td>
                  <td>$0.10</td>
                </tr>
                <tr>
                  <td>Hydro</td>
                  <td>$0.20</td>
                </tr>
                <tr>
                  <td>Geothermal</td>
                  <td>$0.25</td>
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
                  <td>Solar</td>
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
}
