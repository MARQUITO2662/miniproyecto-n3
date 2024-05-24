// App.js
import React, { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Nav } from "./components/Nav";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('stays.json');
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData); // Inicialmente, mostrar todos los datos
    };

    getData();
  }, []);

  return (
    <>
      <Nav data={data} setFilteredData={setFilteredData} />
      <div className='container'>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Card
              key={index}
              superHost={item.superHost}
              title={item.title}
              rating={item.rating}
              type={item.type}
              beds={item.beds}
              photo={item.photo}
            />
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </>
  );
}

export default App;
