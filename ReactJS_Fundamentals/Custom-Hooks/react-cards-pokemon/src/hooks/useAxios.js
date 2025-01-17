import { useState } from 'react';
import axios from 'axios';

function useAxios(baseUrl, formatData) { 
    const [responses, setResponses] = useState([]);
  
    const addResponseData = async (endpoint = '') => {
      const url = `${baseUrl}${endpoint}`;
      const response = await axios.get(url);
      const formattedData = formatData ? formatData(response.data) : response.data; 
      setResponses(data => [...data, formattedData]);
    };
  
    const clearResponses = () => {
      setResponses([]);
    };
  
    return [responses, addResponseData, clearResponses];
  }
  
  export default useAxios;