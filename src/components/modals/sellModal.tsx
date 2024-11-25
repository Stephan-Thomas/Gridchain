import styles from "../modals/modal.module.css";

type ModalProps = {
  onClose: () => void;
};

export function SellModal({ onClose }: ModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal only if the backdrop (outside of modalContainer) is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal} onClick={handleBackdropClick}>
      <div className={styles.modalContainer}>
        <span>
          <button onClick={onClose}>{"<"}</button>
          <h2>Sell Energy</h2>
        </span>
        <form action="">
          <ul>
            <li>
              <label htmlFor="">Name</label>
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
              <label htmlFor="">Price per KWh ($)</label>
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
              I confirm that the energy listed conforms with the platform's
              standards and policies
            </label>
          </span>
          <button>Sell Energy</button>
        </form>
      </div>
    </div>
  );
}
