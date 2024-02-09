import { useAppSelector } from "@/features/jobActions";
import { totalJobs } from "@/features/jobReducer";
import Styles from "./FilterTitleHeader.module.css";

export const FilterTitleHeader = () => {
  const totalJobsLength = useAppSelector(totalJobs);
  return (
    <div className={Styles.FilterTextContainer}>
      <span className={Styles.FilterTitleHeader}>
        {totalJobsLength} offene Stellen bei Creditplus
      </span>
      <span className={Styles.FilterTitle}>Hier beginnt deine Zukunft</span>
    </div>
  );
};
export default FilterTitleHeader;
