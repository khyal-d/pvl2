import React, { useState } from 'react';
import Settings from './components/settings';
import People from './components/people'

function App() {
  const [peopleDataList, setPeopleDataList] = useState({});

  // Function to add a new entry to the peopleDataList
  const addPeopleData = (newData) => {
    setPeopleDataList(newData);
  };

  // Function to delete an entry by index
  const deletePeopleData = (index) => {
    const updatedList = peopleDataList.filter((_, i) => i !== index);
    setPeopleDataList(updatedList);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <Settings addPeopleData={addPeopleData} />
      <People peopleDataList={peopleDataList} deletePeopleData={deletePeopleData} />
    </div>
  );
}

export default App;
