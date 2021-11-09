import { Dispatch, SetStateAction } from "react";
// creates a checkboxHandler to map checkbox checking to state object
type filter = { [key: string]: boolean };

function makeHandleCheckBox(
  stateObj: { [key: string]: boolean },
  setter: Function
) {
  return function handleCheckBox(e: React.ChangeEvent<HTMLInputElement>) {
    setter({ ...stateObj, [e.target.name]: !stateObj[e.target.name] });
  };
}

function CheckboxGroup({
  sort = false,
  groupName,
  optionsList,
  optionsFilters,
  setOptionsFilters,
}: {
  sort?: boolean;
  groupName: string;
  optionsList: string[];
  optionsFilters: filter;
  setOptionsFilters: Dispatch<SetStateAction<filter>>;
}) {
  if (sort) optionsList.sort();
  return (
    <>
      <p className="filter-menu__filter-title">{groupName}</p>
      <div className="filter-menu__input-group">
        {optionsList.map((option, index) => (
          <label key={index}>
            {option}
            <input
              type="checkbox"
              name={option}
              value={option}
              checked={optionsFilters[option]}
              onChange={makeHandleCheckBox(optionsFilters, setOptionsFilters)}
            />
          </label>
        ))}
      </div>
    </>
  );
}

export default CheckboxGroup;
