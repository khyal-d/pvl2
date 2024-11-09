import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Settings = ({ addPeopleData }) => {
  const [data, setData] = useState({
    male: 255,
    female: 300,
    girl: 100,
    boy: 110,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = () => {
    addPeopleData(data);
    alert('Data submitted successfully');

  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', backgroundColor: '#f9f9f9', display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"20px"}}>
    
    <div style={{ display: 'flex', gap: '40px' }}>
      {['male', 'female', 'girl', 'boy'].map((type) => (
        <div key={type} style={{ display: 'flex',flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <i
            className={
              type === 'male'
                ? 'fas fa-mars'
                : type === 'female'
                ? 'fas fa-venus'
                : type === 'girl'
                ? 'fas fa-child'
                : 'fas fa-child'
            }
            style={{ fontSize: '20px', color: '#007BFF' }}
          ></i>
          <label style={{ flex: '1' }}>{type.charAt(0).toUpperCase() + type.slice(1)}:</label>
          <input
            type="number"
            name={type}
            value={data[type]}
            onChange={handleChange}
            min="0"
            style={{ width: '60px', padding: '5px' }}
          />
        </div>
      ))}
    </div>
    <div>
    <button
      onClick={handleSubmit}
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Submit
    </button>
    </div>
  </div>
  );
};

export default Settings;
