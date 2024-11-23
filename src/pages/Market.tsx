import React, { useEffect, useState } from "react";
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
import { BuyModal } from "../components/modals/buyModal"; // Ensure BuyModal is imported

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

  const [countries, setCountries] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    search: "",
    energyType: "All",
    country: "All",
    state: "All",
    priceRange: "All",
  });
  const [selectedEnergy, setSelectedEnergy] = useState<any>(null); // State to track the selected energy item
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const priceRanges = ["0 ~ 0.1", "0.1 ~ 0.2", "0.2 ~ 0.3", "Above 0.3"];

  useEffect(() => {
    // Fetch all countries on component mount
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country: any) => country.name.common);
        setCountries(countryNames.sort()); // Sort alphabetically
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = async (country: string) => {
    setFilters((prev) => ({
      ...prev,
      country,
      state: "All", // Reset state when country changes
    }));

    // Fetch states for the selected country
    if (country !== "All") {
      try {
        const response = await fetch(
          `https://countriesnow.space/api/v0.1/countries/states`, // Example API
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ country }),
          }
        );
        const data = await response.json();
        setStates(data.data.states.map((state: any) => state.name));
      } catch (error) {
        console.error("Error fetching states:", error);
        setStates([]); // Clear states on error
      }
    } else {
      setStates([]);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    if (key === "country") {
      handleCountryChange(value);
    } else {
      setFilters((prev) => ({ ...prev, [key]: value }));
    }
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

  const openModal = (energyItem: any) => {
    setSelectedEnergy(energyItem); // Set the selected energy item
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <article className={styles.article2}>
          <table>
            <tr>
              <th>
                <select
                  name="energyType"
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
                  name="country"
                  value={filters.country}
                  onChange={(e) =>
                    handleFilterChange("country", e.target.value)
                  }
                >
                  <option value="All">Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </th>
              <th>
                <select
                  name="state"
                  value={filters.state}
                  onChange={(e) => handleFilterChange("state", e.target.value)}
                  disabled={filters.country === "All"}
                >
                  <option value="All">State</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </th>
              <th>
                <select
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={(e) =>
                    handleFilterChange("priceRange", e.target.value)
                  }
                >
                  <option value="All">Price Range</option>
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </th>
            </tr>
          </table>
          <div className={styles.results}>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div
                  key={item.id}
                  className={styles.card}
                  onClick={() => openModal(item)} // Trigger modal on card click
                >
                  <h3>Energy Type: {item.type}</h3>
                  <p>Price: ${item.price.toFixed(2)} per KWh</p>
                  <p>Country: {item.country}</p>
                  <p>State: {item.state}</p>
                </div>
              ))
            ) : (
              <p>No Results Found</p>
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

      {/* Modal Component */}
      {isModalOpen && <BuyModal energy={selectedEnergy} onClose={closeModal} />}
    </>
  );
}
