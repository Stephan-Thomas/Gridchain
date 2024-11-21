import styles from "../modals/modal.module.css";

type ModalProps = {
  onClose: () => void;
};

export function SellModal({ onClose }: ModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <span>
          <button onClick={onClose}>{"<"}</button>
          <h2>Buy Energy</h2>
        </span>
        <form action="">
          <ul>
            <li>
              <label htmlFor="">Name (Autofilled)</label>
              <input type="text" />
            </li>
            <li>
              <label htmlFor="">Wallet Address (Autofilled)</label>
              <input type="text" />
            </li>
            <li>
              <label htmlFor="">Energy Type</label>
              <input type="text" />
            </li>
            <li>
              <label htmlFor="">Energy Amount</label>
              <input type="number" />
            </li>
            <li>
              <label htmlFor="">Price per KWh ($) (Autofilled)</label>
              <input type="number" />
            </li>
            <li>
              <label htmlFor="">Location</label>
              <input type="text" />
            </li>
          </ul>
          <span className={styles.check}>
            <input type="checkbox" />
            <label htmlFor="">
              I confirm that the energy listed conforms with the platforms
              standards and policies
            </label>
          </span>
          <button>Sell Energy</button>
        </form>
      </div>
    </div>
  );
}
