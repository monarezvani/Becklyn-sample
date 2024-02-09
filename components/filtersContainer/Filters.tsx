import { useState } from "react";
import FilterJobDepartments from "../filterSelects/FilterDepartments";
import { FilterLevels } from "../filterSelects/FilterLevels";
import FilterCity from "../filterSelects/FilterCity";
import Styles from "./Filters.module.css";
import { useAppDispatch, useAppSelector } from "@/features/jobActions";
import {
  onFilterLevel,
  onFilterCity,
  onFilterDepartment,
  firstPage,
  onChangePage,
} from "@/features/jobReducer";
import FilterTitleHeader from "../filterTitleHeader/FilterTitleHeader";

const Filters = () => {
  const [selectedCityValue, setSelectedCityValue] = useState("");
  const [selectedDepartmentValue, setSelectedDepartmentValue] = useState("");
  const [selectedLevelValue, setSelectedLevelValue] = useState("");

  const dispatch = useAppDispatch();
  const firstPageNumber = useAppSelector(firstPage);

  const onFilterCityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCityValue(e.target.value);
    setSelectedDepartmentValue("");
    setSelectedLevelValue("");
    dispatch(onChangePage(firstPageNumber));
    dispatch(onFilterCity(e.target.value));
  };
  const onFilterLevelHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevelValue(e.target.value);
    setSelectedCityValue("");
    setSelectedDepartmentValue("");
    dispatch(onChangePage(firstPageNumber));
    dispatch(onFilterLevel(e.target.value));
  };

  const onFilterDepartmentHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDepartmentValue(e.target.value);
    dispatch(onChangePage(firstPageNumber));
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
