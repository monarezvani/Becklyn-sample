import { useState } from "react";
import FilterJobDepartments from "../filterSelects/FilterDepartments";
import { FilterLevels } from "../filterSelects/FilterLevels";
import FilterCity from "../filterSelects/FilterCity";
import Styles from "./Filters.module.css";
import { useAppDispatch } from "@/features/jobActions";
import {
  onFilterLevel,
  onFilterCity,
  onFilterDepartment,
} from "@/features/jobReducer";
import FilterTitleHeader from "../filterTitleHeader/FilterTitleHeader";

const Filters = () => {
  const [selectedCityValue, setSelectedCityValue] = useState("");
  const [selectedDepartmentValue, setSelectedDepartmentValue] = useState("");
  const [selectedLevelValue, setSelectedLevelValue] = useState("");

  const dispatch = useAppDispatch();
  const onFilterCityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCityValue(e.target.value);
    setSelectedDepartmentValue("");
    setSelectedLevelValue("");
    dispatch(onFilterCity(e.target.value));
  };
  const onFilterLevelHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevelValue(e.target.value);
    setSelectedCityValue("");
    setSelectedDepartmentValue("");
    dispatch(onFilterLevel(e.target.value));
  };

  const onFilterDepartmentHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDepartmentValue(e.target.value);

    setSelectedCityValue("");
    setSelectedLevelValue("");
    dispatch(onFilterDepartment(e.target.value));
  };
  return (
    <div className={Styles.FilterHeader}>
      <FilterTitleHeader />

      <div className={Styles.FilterSelectContainer}>
        <FilterJobDepartments
          onFilterDepartmentHandler={onFilterDepartmentHandler}
          selectedDepartmentValue={selectedDepartmentValue}
        />
        <FilterCity
          onFilterCityHandler={onFilterCityHandler}
          selectedCityValue={selectedCityValue}
        />
        <FilterLevels
          onFilterLevelHandler={onFilterLevelHandler}
          selectedLevelValue={selectedLevelValue}
        />
      </div>
    </div>
  );
};
export default Filters;
