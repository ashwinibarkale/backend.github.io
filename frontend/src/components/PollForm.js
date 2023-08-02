import React, { useState } from 'react';
import api from '../api';

const PollForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pollData = { question, options };
      const response = await api.createPoll(pollData);
      // Handle success or display error message
    } catch (error) {
      // Handle error
    }
  };

  // ... (JSX for rendering form and input fields)

  return (
    // ...
  );
};

export default PollForm;
