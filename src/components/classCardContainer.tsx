import { Dispatch, SetStateAction } from "react";
import { trainingClass } from "../util/echelon";
import ClassCard from "./classCard";
import "./classCardContainer.css";

function ClassCardContainer({
  classList,
  preventTabbingOnCards,
  setCurrentClass,
}: {
  classList: trainingClass[];
  preventTabbingOnCards: boolean;
  setCurrentClass: Dispatch<SetStateAction<trainingClass | null>>;
}) {
  return (
    <div className="main-page__class-cards-container">
      {classList.length ? (
        classList.map((classInfo, index) => (
          <ClassCard
            key={index}
            classInfo={classInfo}
            preventTab={preventTabbingOnCards}
            setCurrentClass={setCurrentClass}
          />
        ))
      ) : (
        <h2 className="main-page__no-classes-msg">No Classes Found</h2>
      )}
    </div>
  );
}

export default ClassCardContainer;
