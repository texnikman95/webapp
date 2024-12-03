import React from 'react';

const Main = () => {
    const name = "Texnikman Off";
    const year = new Date().getFullYear();
  
    return (
      <div align="center">
        <h1>Salom, {name}!</h1>
        <p>Hozirgi yil: {year}</p>
      </div>
    );
  };

export default Main;