import { Dispatch, SetStateAction, useRef, MouseEvent } from "react";
import { trainingClass } from "../util/echelon";
import "./classModal.css";

function ClassModal({
  currentClass,
  setCurrentClass,
}: {
  currentClass: trainingClass | null;
  setCurrentClass: Dispatch<SetStateAction<trainingClass | null>>;
}) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  // function to dismiss modal when user clicks outside of modal
  function dismissModalFromMargin(e: MouseEvent<HTMLElement>) {
    if (modalContentRef.current?.contains(e.target as HTMLElement)) return;
    dismissModal();
  }

  const dismissModal = () => setCurrentClass(null);

  return (
    <div
      className={`class-modal column ${
        currentClass ? "class-modal--open" : ""
      }`}
      onClick={dismissModalFromMargin}
      aria-hidden={!currentClass}
    >
      <div ref={modalContentRef} className="class-modal__content column">
        <button onClick={dismissModal} className="close-button">
          &#10006;
        </button>
        <h2 className="class-modal__class-title">{currentClass?.name}</h2>
        {currentClass?.desc && <p>{currentClass.desc}</p>}
        <img src={currentClass?.image} alt={currentClass?.name} />
        <h3>Instructor: {currentClass?.inst}</h3>
        <p>Level: {currentClass?.level}</p>
        <div className="row f-center">
          <p>Category: {currentClass?.cat}</p>
          <p>Product: {currentClass?.product}</p>
          <p>Length: {currentClass?.len}</p>
        </div>
        <button className="button-as-link" onClick={dismissModal}>
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default ClassModal;
