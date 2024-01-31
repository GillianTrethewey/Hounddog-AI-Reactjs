import { baseUrl, authToken } from "./globalCard.js";

import axios from "axios";

export const deleteCard = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    // , {
    //   headers: {
    //     Authorization: `Bearer ${authToken}`,
    //     "Content-Type": "application/json",
    //   },
    // });

    if (response.status === 204) {
      console.log(`Data with ID ${id} deleted successfully`);
      return id;
    } else {
      console.log(
        `Failed to delete data with ID ${id}. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};
