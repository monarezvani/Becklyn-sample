import { createAsyncThunk } from "@reduxjs/toolkit";
import { createClient } from "contentful";

const space = "h4fy7qjn6mui";
const accessToken = "aQQ9uKwj1LyR9J73YaDbgv0XQwhhpnr4tcsBR2D5LF0";
const environment = "interview";

const client = createClient({
  space: space,
  accessToken: accessToken,
  environment: environment,
});

export const fetchJobsData = createAsyncThunk("fetch/jobs", async () => {
  try {
    const response = await client.getEntries({ content_type: "job" });
    return response;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
});
