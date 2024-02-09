import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

import { fetchJobsData } from "@/services/fetchJobsData";

interface stateProps {
  jobsData: any[];
  filteredJobs: any[];
  totalJobs: number;
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
  itemPerPage: number;
  totalPages: number;
  JobsToShowPerPage: any[];
  firstPage: number;
}

const initialState: stateProps = {
  jobsData: [],
  filteredJobs: [],
  totalJobs: 0,
  status: "idle",
  error: null,
  itemPerPage: 10,
  totalPages: 1,
  JobsToShowPerPage: [],
  firstPage: 1,
};

export const jobReducer = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    onFilterLevel: (state, action) => {
      if (action.payload.length > 0) {
        state.filteredJobs = state.jobsData.filter((item) =>
          item.fields.levels.some(
            (level: any) => level.fields.title === action.payload
          )
        );
      } else {
        state.JobsToShowPerPage = state.jobsData;
        state.filteredJobs = state.jobsData;
      }
      state.totalPages = Math.ceil(
        state.filteredJobs.length / state.itemPerPage
      );
      state.JobsToShowPerPage = state.filteredJobs.slice(
        state.firstPage - 1,
        state.itemPerPage
      );
    },
    onFilterCity: (state, action) => {
      if (action.payload.length > 0) {
        state.filteredJobs = state.jobsData.filter(
          (item) => item.fields.employee.fields.city === action.payload
        );
      } else {
        state.JobsToShowPerPage = state.jobsData;
        state.filteredJobs = state.jobsData;
      }
      state.totalPages = Math.ceil(
        state.filteredJobs.length / state.itemPerPage
      );
      state.JobsToShowPerPage = state.filteredJobs.slice(
        state.firstPage - 1,
        state.itemPerPage
      );
    },
    onFilterDepartment: (state, action) => {
      if (action.payload.length > 0) {
        state.filteredJobs = state.jobsData.filter(
          (item) => item.fields.department.fields.title === action.payload
        );
      } else {
        state.JobsToShowPerPage = state.jobsData;
        state.filteredJobs = state.jobsData;
      }
      state.totalPages = Math.ceil(
        state.filteredJobs.length / state.itemPerPage
      );

      state.JobsToShowPerPage = state.filteredJobs.slice(
        state.firstPage - 1,
        state.itemPerPage
      );
    },
    onPagination: (state, action) => {
      const startIndex = (action.payload - 1) * state.itemPerPage;
      const endIndex = startIndex + state.itemPerPage;
      state.JobsToShowPerPage = state.jobsData.slice(startIndex, endIndex);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobsData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchJobsData.fulfilled, (state, action) => {
        state.jobsData = action.payload.items;

        state.status = "succeeded";
        state.totalJobs = action.payload.total;
        state.totalPages = Math.ceil(state.totalJobs / state.itemPerPage);
        state.filteredJobs = action.payload.items;
        state.JobsToShowPerPage = state.jobsData.slice(
          state.firstPage - 1,
          state.itemPerPage
        );
      })
      .addCase(fetchJobsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Error fetching jobs";
      });
  },
});

export default jobReducer.reducer;
export const { onFilterLevel, onFilterCity, onFilterDepartment, onPagination } =
  jobReducer.actions;
export const jobs = (state: RootState) => state.jobsData;
export const loading = (state: RootState) => state.status;
export const JobsToShowPerPage = (state: RootState) => state.JobsToShowPerPage;
export const totalPages = (state: RootState) => state.totalPages;
export const totalJobs = (state: RootState) => state.totalJobs;
export const filteredJobs = (state: RootState) => state.filteredJobs;
