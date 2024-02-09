import React from "react";
import Styles from "./FilterSelects.module.css";
import { useAppSelector } from "@/features/jobActions";
import { jobs } from "@/features/jobReducer";

interface IFilterCityProps {
  selectedCityValue: string;
  onFilterCityHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const FilterCity = ({
  selectedCityValue,
  onFilterCityHandler,
}: IFilterCityProps) => {
  const jobItems = useAppSelector(jobs);

  return (
    <>
      <select
        className={
          selectedCityValue.length === 0
            ? `${Styles.Placeholder} ${Styles.FilterSelect} `
            : `${Styles.FilterSelect} `
        }
        value={selectedCityValue}
        name={selectedCityValue}
        onChange={onFilterCityHandler}
        id="filter-city"
      >
        <option value="">Stadt</option>
        {jobItems
          .map((item: any) => {
            const cityTitle = item.fields.employee.fields.city;
            const cityArray = [];
            cityArray.push(cityTitle);
            return cityArray;
          })
          .flat()
          .reduce((unique: string[], title: string) => {
            if (!unique.includes(title)) {
              unique.push(title);
            }
            return unique;
          }, [])
          .map((city: string, index: number) => (
            <option key={index}>{city}</option>
          ))}
      </select>
    </>
  );
};
export default FilterCity;
