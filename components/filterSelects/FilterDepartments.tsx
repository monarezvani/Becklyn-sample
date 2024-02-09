import React from "react";
import Styles from "./FilterSelects.module.css";
import { useAppSelector } from "@/features/jobActions";
import { jobs } from "@/features/jobReducer";

interface IFilterDepartmentProps {
  selectedDepartmentValue: string;
  onFilterDepartmentHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const FilterJobDepartments = ({
  selectedDepartmentValue,
  onFilterDepartmentHandler,
}: IFilterDepartmentProps) => {
  const jobItems = useAppSelector(jobs);

  return (
    <>
      <select
        className={
          selectedDepartmentValue.length === 0
            ? `${Styles.Placeholder}  ${Styles.FilterSelect} `
            : `${Styles.FilterSelect}`
        }
        value={selectedDepartmentValue}
        name={selectedDepartmentValue}
        onChange={onFilterDepartmentHandler}
        id="filter-department"
      >
        <option value="">Abteilung</option>
        {jobItems
          .map((item: any) => {
            const departmentTitle = item.fields.department.fields.title;
            const departmentArray = [];
            departmentArray.push(departmentTitle);
            return departmentArray;
          })
          .flat()
          .reduce((unique: string[], title: string) => {
            if (!unique.includes(title)) {
              unique.push(title);
            }
            return unique;
          }, [])
          .map((department: any, index: number) => (
            <option key={index}>{department}</option>
          ))}
      </select>
    </>
  );
};
export default FilterJobDepartments;
