import React from "react";
import Styles from "./FilterSelects.module.css";

import { jobs } from "@/features/jobReducer";
import { useAppSelector } from "@/features/jobActions";

interface IFilterLevelProps {
  selectedLevelValue: string;
  onFilterLevelHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const FilterLevels = ({
  selectedLevelValue,
  onFilterLevelHandler,
}: IFilterLevelProps) => {
  const jobItems = useAppSelector(jobs);

  return (
    <>
      <select
        className={
          selectedLevelValue.length === 0
            ? `${Styles.Placeholder}  ${Styles.FilterSelect} `
            : `${Styles.FilterSelect}`
        }
        value={selectedLevelValue}
        name={selectedLevelValue}
        id="filter-level"
        onChange={onFilterLevelHandler}
      >
        <option value="">Erfahrungslevel</option>

        {jobItems
          .map((item: any) =>
            item.fields.levels.map((level: any) => level.fields.title)
          )
          .flat()
          .reduce((unique: string[], title: string) => {
            if (!unique.includes(title)) {
              unique.push(title);
            }
            return unique;
          }, [])
          .map((uniqueTitle: string, index: number) => (
            <option key={index}>{uniqueTitle}</option>
          ))}
      </select>
    </>
  );
};
