import { baseUrl, authToken } from "./globalCard.js";

import axios from "axios";

export const getCardList = async () => {
  try {
    console.log('prior to getCardList')
   const response = await axios.get(`${baseUrl}`);

    // {
    //   headers: { 
    //     Authorization: `Bearer ${authToken}` 
    //   },
    // });

  
    const dataResponse = response.data;
    console.log(dataResponse);
    return dataResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
