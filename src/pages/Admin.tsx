import { Topbar } from "../components/Topbar";
import { Sidebar } from "../components/Sidebar";
import styles from "../styles/admin.module.css";

export function Admin() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <section className={styles.main}>
        <h1>Profile</h1>
        <article className={styles.article1}>
          <h2>User Information</h2>
          <form action="">
            <ul>
              <li>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Xever" />
              </li>
              <li>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Montes" />
              </li>
              <li>
                <label htmlFor="">Email Address</label>
                <input type="email" placeholder="xever@gmail.com" />
              </li>
              <li>
                <label htmlFor="">Wallet Address</label>
                <input type="text" placeholder="0x1234...abcd" />
              </li>
            </ul>
          </form>
        </article>
        <article className={styles.article2}>
          <h2>Summary Card</h2>
          <table>
            <tr>
              <th>Energy Type</th>
              <th>Balance</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>Tokens</td>
              <td>12,000 tokens</td>
              <td>Your current token balance</td>
              <td>
                <button>view Details</button>
              </td>
            </tr>
            <tr>
              <td>Energy Credits</td>
              <td>30 KWh</td>
              <td>Energy credits available for use</td>
              <td>
                <button>view Details</button>
              </td>
            </tr>
          </table>
        </article>
        <article className={styles.article3}>
          <h2>Recent Activity</h2>
          <table>
            <tr>
              <th>Date</th>
              <th>Action</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>12/06/2024</td>
              <td>Purchased Energy</td>
              <td>Bought 20KWh for $80</td>
            </tr>
            <tr>
              <td>12/06/2024</td>
              <td>Completed First Trade</td>
              <td>Earned 50 soon</td>
            </tr>
            <tr>
              <td>12/06/2024</td>
              <td>Reedemed Reward</td>
              <td>Claimed 10KWh credits</td>
            </tr>
          </table>
        </article>
      </section>
    </>
  );
}
