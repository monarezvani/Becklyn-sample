import { useAppSelector } from "@/features/jobActions";
import React from "react";
import Styles from "./JobList.module.css";
import { JobsToShowPerPage } from "@/features/jobReducer";
import Image from "next/image";
import LocationPic from "../../styles/images/location.svg";
import HourPic from "../../styles/images/hour.svg";

const JobList = () => {
  const jobsToShow = useAppSelector(JobsToShowPerPage);

  return (
    <>
      <ul className={Styles.JobList}>
        {jobsToShow?.map((item: any) => (
          <li key={item.sys.id} className={Styles.JobListItem}>
            <p className={Styles.JobItemDepartment}>
              {item.fields.department?.fields.title.replace(/\u00a0/g, " ")}
            </p>
            <p className={Styles.JobItemTitle}>
              {item.fields.title.replace(/\u00a0/g, " ")}
            </p>
            <div className={Styles.JobItemFooter}>
              <div className={Styles.JobItemLocation}>
                <Image
                  src={LocationPic}
                  alt="Location image"
                  width={16}
                  height={19}
                />
                <p className={Styles.JobItemCity}>
                  {item.fields.employee.fields.city}
                </p>
              </div>
              <div className={Styles.JobItemTypeContainer}>
                <Image
                  src={HourPic}
                  alt="Job Type image"
                  width={18}
                  height={18}
                />
                <p className={Styles.JobItemType}>
                  {item.fields.type.fields.title}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobList;
