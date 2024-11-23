import { useState, useEffect } from "react";
import styles from "../modals/modal.module.css";

type ModalProps = {
  onClose: () => void;
  energy: any; // Assuming energy contains price per KWh and type
};

export function BuyModal({ onClose, energy }: ModalProps) {
  const [energyAmount, setEnergyAmount] = useState<number>(0); // State to track energy amount
  const [totalPrice, setTotalPrice] = useState<number | string>(""); // State to store total price (string to handle empty state)

  // Calculate total price based on energy amount and price per KWh
  useEffect(() => {
    if (energyAmount > 0) {
      setTotalPrice(energyAmount * energy.price); // Price per KWh * energyAmount
    } else {
      setTotalPrice(""); // Reset total price to an empty string if no energy amount is provided
    }
  }, [energyAmount, energy.price]); // Recalculate when energyAmount or energy price changes

  const handleEnergyAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setEnergyAmount(value); // Update energy amount
    } else {
      setEnergyAmount(0); // If invalid value, reset to 0
    }
  };

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Check if the click is outside the modal container
    if (event.target === event.currentTarget) {
      onClose(); // Close the modal if clicked outside
    }
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.modalContainer}>
        <span>
          <button onClick={onClose}>{"<"}</button>
          <h2>Buy Energy</h2>
        </span>
        <form action="">
          <ul>
            <li>
              <label htmlFor="">Name (Autofilled)</label>
              <input type="text" value="John Doe" readOnly />
            </li>
            <li>
              <label htmlFor="">Wallet Address (Autofilled)</label>
              <input type="text" value="0x1234567890abcdef" readOnly />
            </li>
            <li>
              <label htmlFor="">Energy Type</label>
              <input type="text" value={energy.type} readOnly />
            </li>
            <li>
              <label htmlFor="">Energy Amount</label>
              <input
                type="number"
                value={energyAmount || ""} // Display energy amount or empty string if 0
                onChange={handleEnergyAmountChange}
                min="0"
              />
            </li>
            <li>
              <label htmlFor="">Total Price (Auto calculated)</label>
              <input type="number" value={totalPrice} readOnly />
            </li>
            <li>
              <label htmlFor="">Price per KWh ($) (Autofilled)</label>
              <input type="number" value={energy.price} readOnly />
            </li>
            <li>
              <label htmlFor="">Payment Method</label>
              <input type="text" />
            </li>
          </ul>
          <span className={styles.check}>
            <input type="checkbox" />
            <label htmlFor="">
              I confirm this purchase and I agree to the terms and conditions
            </label>
          </span>
          <button type="submit">Buy Energy</button>
        </form>
      </div>
    </div>
  );
}
