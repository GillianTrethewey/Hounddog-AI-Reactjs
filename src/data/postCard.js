import { baseUrl, authToken } from "./globalCard.js";

import axios from "axios";

export const postCard = async (newCardObject) => {
  try {
    const postCardResponse = await axios.post(`${baseUrl}`, newCardObject) 
    // { headers:
    //     {
    //       Authorization: `Bearer ${authToken}`,
    //       "Content-Type": "application/json",
    //     }
    //   }
    // );
    return postCardResponse.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
