import React from 'react';
import PollForm from './components/PollForm';
import PollList from './components/PollList';

const App = () => {
  return (
    <div>
      <h1>Create a Poll</h1>
      <PollForm />
      <h1>Poll Listing</h1>
      <PollList />
    </div>
  );
};

export default App;
