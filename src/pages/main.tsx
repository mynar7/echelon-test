import { useState, useRef, MouseEvent } from "react";
import { trainingClass } from "../util/echelon";
import ClassCard from "../components/classCard";
import ClassModal from "../components/classModal";
import CheckboxGroup from "../components/checkboxGroup";
import "./main.css";

interface filters {
  [key: string]: boolean;
}

// returns a de-duped list of values from class object properties
function getListOfFilters(name: string, classes: trainingClass[]) {
  return Array.from(
    classes.reduce(
      (list, cls: trainingClass) => list.add(cls[name as keyof trainingClass]),
      new Set()
    )
  ) as string[];
}
// creates an object with keys from list of possible property values
// all values are set to false on creation
function makeFilterDefaultState(names: string[]): { [key: string]: false } {
  const stateObj: { [key: string]: false } = {};
  return names.reduce((obj, name) => {
    obj[name] = false;
    return obj;
  }, stateObj);
}

function MainPage({ classList }: { classList: trainingClass[] }) {
  // dynamically create menu options to filter based on API response
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
  // setting current class shows class modal, setting it to null hides the modal
  const [currentClass, setCurrentClass] = useState<trainingClass | null>(null);

  // filters list based on user's typed query
  function filterClassNames(classes: trainingClass[]): trainingClass[] {
    return classes.filter(({ name }) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  // a generic function that filters based on selected checkboxes mapped
  // to an object with keys that are the checkbox name and values that are boolean
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

  // runs list of classes through all available filter methods
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

  function closeFilterMenu(e: MouseEvent<HTMLElement>) {
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

  // create filtered class list to render below
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
        <CheckboxGroup
          groupName={"Difficulties"}
          optionsList={difficulties}
          optionsFilters={difficultyFilters}
          setOptionsFilters={setDifficultyFilters}
        />
        <CheckboxGroup
          groupName={"Instructors"}
          optionsList={instructors}
          optionsFilters={instructorFilters}
          setOptionsFilters={setInstructorFilters}
        />
        <CheckboxGroup
          groupName={"Categories"}
          optionsList={categories}
          optionsFilters={categoryFilters}
          setOptionsFilters={setCategoryFilters}
        />
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
