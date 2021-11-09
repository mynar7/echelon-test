import { Dispatch, SetStateAction } from "react";
import { trainingClass } from "../util/echelon";
import "./classCard.css";

function ClassCard({
  classInfo,
  setCurrentClass,
}: {
  classInfo: trainingClass;
  setCurrentClass: Dispatch<SetStateAction<trainingClass | null>>;
}) {
  function getDifficultyEmoji(difficulty: string) {
    switch (difficulty) {
      case "Beginner":
        return "💚";
      case "Intermediate":
        return "💛";
      case "Advanced":
        return "❤️";
      default:
        return "⚪";
    }
  }
  return (
    <div className="class-card" onClick={() => setCurrentClass(classInfo)}>
      <p className="class-card__title">
        {getDifficultyEmoji(classInfo.level)} {classInfo.name}
      </p>
      <img
        className="class-card__img"
        src={classInfo.image}
        alt={classInfo.name + " thumbnail"}
      />
    </div>
  );
}

export default ClassCard;
