import React, { useEffect, useState } from 'react';
import api from '../api';
import PollItem from './PollItem';

const PollList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    async function fetchPolls() {
      try {
        const pollsData = await api.getAllPolls();
        setPolls(pollsData);
      } catch (error) {
        // Handle error
      }
    }
    fetchPolls();
  }, []);

  // ... (JSX for rendering the list of polls)

  return (
    // ...
  );
};

export default PollList;
