const MockApi = () => {
    
    const apiUrl = "http://localhost:3000/database";
  
    // Using fetch to call the API and returning the response as JSON
    return fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching data from mock API:", error);
        // You can handle errors here based on your use case
      });
};

export default MockApi;