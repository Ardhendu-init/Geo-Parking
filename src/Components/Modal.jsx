import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  // const  = useGlobalContext();
  return (
    <>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        } `}
      >
        <div className="modal-container">
          <form action="" className="modal-form">
            <label htmlFor="Arrive">
              <h3>
                Arrive:
                <br />
                <input type="datetime-local" />
              </h3>
            </label>
            <label htmlFor="Departure">
              <h3>
                Departure:
                <br />
                <input type="datetime-local" />{" "}
              </h3>
            </label>
            <button className="btn">Check Avability</button>
          </form>

          <button onClick={closeModal} className="close-modal-btn">
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
