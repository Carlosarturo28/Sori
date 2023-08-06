import axios from "axios";

// Set your API base URL and token (replace these with your actual values)
const baseURL = "https://c0bb-84-217-33-102.ngrok-free.app/";
const authToken =
  "6f7c5e467ace9b43bea24bdcefc61ef6f7c2cc02c78fc6970a8c7f24f7d7c6b8e48ddad441496e366ce11e0f37003577e4b518affb6d3cbfe3c148d22c8de57aabda81d43297693f701278d7e7bd76af93a5d65be8fb3371da1ba35b6f2ea4a8f4d8f16472a39c8132a9ffd1f9c3ff3d42766210b3e9598be02b47f1dbbdfbe8";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json", // Adjust the content type based on your API requirements
  },
});

export default axiosInstance;
