import { useEffect } from "react";
import JobList from "../components/jobList/JobList";
import { fetchJobsData } from "@/services/fetchJobsData";
import Pagination from "@/components/pagination/Pagination";
import { useAppDispatch, useAppSelector } from "@/features/jobActions";
import Filters from "@/components/filtersContainer/Filters";
import { JobsToShowPerPage, loading } from "@/features/jobReducer";
import Spinner from "@/components/spinner/Spinner";
import NotFound from "@/components/notFound/NotFound";

const Home = () => {
  const dispatch = useAppDispatch();
  const jobsToShow = useAppSelector(JobsToShowPerPage);

  const loadingState = useAppSelector(loading);
  useEffect(() => {
    dispatch(fetchJobsData());
  }, [dispatch]);

  return (
    <div className="container">
      {loadingState === "pending" ? (
        <Spinner />
      ) : (
        <>
          <Filters />
          {jobsToShow.length == 0 ? (
            <NotFound />
          ) : (
            <>
              <JobList />
              <Pagination />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
