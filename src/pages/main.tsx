import React, { useState, useRef } from "react";
import { trainingClass } from "../util/echelon";
import ClassCard from "../components/classCard";
import ClassModal from "../components/classModal";
import "./main.css";

interface filters {
  [key: string]: boolean;
}

function getListOfFilters(name: string, classes: trainingClass[]) {
  return Array.from(
    classes.reduce(
      (list, cls: trainingClass) => list.add(cls[name as keyof trainingClass]),
      new Set()
    )
  ) as string[];
}

function makeFilterDefaultState(names: string[]): { [key: string]: false } {
  const stateObj: { [key: string]: false } = {};
  return names.reduce((obj, name) => {
    obj[name] = false;
    return obj;
  }, stateObj);
}

function MainPage({ classList }: { classList: trainingClass[] }) {
  const difficulties = getListOfFilters("level", classList);
  const defaultDifficultyState = makeFilterDefaultState(difficulties);
  const [difficultyFilters, setDifficultyFilters] = useState<filters>(
    defaultDifficultyState
  );

  const instructors = getListOfFilters("inst", classList);
  const defaultInstructorState = makeFilterDefaultState(instructors);
  const [instructorFilters, setInstructorFilters] = useState<filters>(
    defaultInstructorState
  );

  const categories = getListOfFilters("cat", classList);
  const defaultCategoryState = makeFilterDefaultState(categories);
  const [categoryFilters, setCategoryFilters] = useState<filters>(
    defaultCategoryState
  );

  const menuFilterRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterMenuIsOpen, setFilterMenuIsOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState<trainingClass | null>(null);

  function makeHandleCheckBox(
    stateObj: { [key: string]: boolean },
    setter: Function
  ) {
    return function handleCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
      setter({ ...stateObj, [e.target.name]: !stateObj[e.target.name] });
    };
  }

  function filterClassNames(classes: trainingClass[]): trainingClass[] {
    return classes.filter(({ name }) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  function filterByOptions(
    optionName: string,
    filterObj: { [key: string]: boolean },
    classes: trainingClass[]
  ): trainingClass[] {
    const allTrue = Object.values(filterObj).every((filter) => filter === true);
    const allFalse = Object.values(filterObj).every(
      (filter) => filter === false
    );
    if (allTrue || allFalse) return classes;
    return classes.filter(
      (cls) => filterObj[cls[optionName as keyof trainingClass] as string]
    );
  }

  function filterClasses(classList: trainingClass[]): trainingClass[] {
    const filteredByName = filterClassNames(classList);
    const filteredByDifficulty = filterByOptions(
      "level",
      difficultyFilters,
      filteredByName
    );
    const filteredByInstructor = filterByOptions(
      "inst",
      instructorFilters,
      filteredByDifficulty
    );
    const filteredByCategory = filterByOptions(
      "cat",
      categoryFilters,
      filteredByInstructor
    );
    return filteredByCategory;
  }

  function toggleFilterMenu() {
    setFilterMenuIsOpen(!filterMenuIsOpen);
  }

  function closeFilterMenu(e: React.MouseEvent<HTMLElement>) {
    const elementClicked = e.target as HTMLElement;
    if (
      !menuFilterRef.current?.contains(elementClicked) &&
      elementClicked.nodeName !== "BUTTON"
    )
      setFilterMenuIsOpen(false);
  }
  function clearFilters() {
    setSearchQuery("");
    setDifficultyFilters(defaultDifficultyState);
    setInstructorFilters(defaultInstructorState);
    setCategoryFilters(defaultCategoryState);
  }
  const filteredClasses = filterClasses(classList);
  return (
    <div className="main-page" onClick={closeFilterMenu}>
      <h1 className="main-page__title">Echelon Classes</h1>
      <div className="main-page__filter-controls row f-center">
        <input
          placeholder="Filter Class Names"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          tabIndex={currentClass ? -1 : 0}
        />
        <button
          tabIndex={currentClass ? -1 : 0}
          className="button-as-link"
          onClick={toggleFilterMenu}
        >
          Show Filters
        </button>
        <button
          tabIndex={currentClass ? -1 : 0}
          className="button-as-link"
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>
      {/* Filter Menu */}
      <div
        ref={menuFilterRef}
        className={`filter-menu column ${
          filterMenuIsOpen ? "filter-menu--open" : ""
        }`}
        aria-hidden={!filterMenuIsOpen}
      >
        <button className="close-button" onClick={toggleFilterMenu}>
          &#10006;
        </button>
        <p className="filter-menu__filter-title">Difficulties</p>
        <div className="filter-menu__input-group">
          {difficulties.map((difficulty, index) => (
            <label key={index}>
              {difficulty}
              <input
                type="checkbox"
                name={difficulty}
                value={difficulty}
                checked={difficultyFilters[difficulty]}
                onChange={makeHandleCheckBox(
                  difficultyFilters,
                  setDifficultyFilters
                )}
              />
            </label>
          ))}
        </div>
        <p className="filter-menu__filter-title">Instructors</p>
        <div className="filter-menu__input-group">
          {instructors.map((instructor, index) => (
            <label key={index}>
              {instructor}
              <input
                type="checkbox"
                name={instructor}
                value={instructor}
                checked={instructorFilters[instructor]}
                onChange={makeHandleCheckBox(
                  instructorFilters,
                  setInstructorFilters
                )}
              />
            </label>
          ))}
        </div>
        <p className="filter-menu__filter-title">Categories</p>
        <div className="filter-menu__input-group">
          {categories.map((category, index) => (
            <label key={index}>
              {category}
              <input
                type="checkbox"
                name={category}
                value={category}
                checked={categoryFilters[category]}
                onChange={makeHandleCheckBox(
                  categoryFilters,
                  setCategoryFilters
                )}
              />
            </label>
          ))}
        </div>
        <div className="row f-center">
          <button onClick={clearFilters} className="button-as-link">
            Clear All
          </button>
          <button onClick={toggleFilterMenu} className="button-as-link">
            Close
          </button>
        </div>
      </div>
      {/* Card Container */}
      <div className="main-page__class-cards-container">
        {filteredClasses.length ? (
          filteredClasses.map((classInfo, index) => (
            <ClassCard
              key={index}
              classInfo={classInfo}
              setCurrentClass={setCurrentClass}
            />
          ))
        ) : (
          <h2 className="main-page__no-classes-msg">No Classes Found</h2>
        )}
      </div>
      {/* Modal */}
      <ClassModal
        currentClass={currentClass}
        setCurrentClass={setCurrentClass}
      />
    </div>
  );
}

export default MainPage;
