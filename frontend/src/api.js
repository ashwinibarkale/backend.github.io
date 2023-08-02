const API_BASE_URL = 'http://localhost:5000/api';

const api = {
  async getAllPolls() {
    const response = await fetch(`${API_BASE_URL}/polls`);
    return response.json();
  },

  async createPoll(pollData) {
    const response = await fetch(`${API_BASE_URL}/polls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pollData),
    });
    return response.json();
  },

  // ... (Add more API functions for voting and real-time updates)
};

export default api;
