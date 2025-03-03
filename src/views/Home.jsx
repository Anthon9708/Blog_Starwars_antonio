import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getData , getIdURL } from "../services/api";

const Home = () => {
  const [peopleDetails, setPeopleDetails] = useState([]);
  const [vehiclesDetails, setVehiclesDetails] = useState([]);
  const [planetsDetails, setPlanetsDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedPeople = localStorage.getItem('peopleData')
        const storedVehicles = localStorage.getItem('vehiclesData')
        const storedPlanets = localStorage.getItem('planetsData')

        if( storedPeople && storedVehicles && storedPlanets){

          setPeopleDetails(JSON.parse(storedPeople));
          setVehiclesDetails(JSON.parse(storedVehicles));
          setPlanetsDetails(JSON.parse(storedPlanets));

         }else{ 
          const peopleData = await getData('people');
          const vehiclesData = await getData('vehicles');
          const planetsData = await getData('planets');

          setPeopleDetails(peopleData);
          setVehiclesDetails(vehiclesData);
          setPlanetsDetails(planetsData);

          localStorage.setItem('peopleData', JSON.stringify(peopleData))
          localStorage.setItem('vehiclesData', JSON.stringify(vehiclesData))
          localStorage.setItem('planetsData', JSON.stringify(planetsData))
         }

      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="container mt-4 ">
      <h2>Personajes</h2>
      <div className="d-flex flex-nowrap overflow-auto my-3">{peopleDetails.map((p)=> (<Card key={p.name} item={{...p, id: getIdURL(p.url)}} type="people" />))}</div>

      <h2>Vehículos</h2>
      <div className="d-flex flex-nowrap overflow-auto my-3">{vehiclesDetails.map((v) => (<Card key={v.name} item={{...v,id: getIdURL(v.url)}} type="vehicles" />))}</div>

      <h2>Planetas</h2>
      <div className="d-flex flex-nowrap overflow-auto my-3">{planetsDetails.map((pl) => (<Card key={pl.name} item={{...pl,id: getIdURL(pl.url)}} type="planets" />))}</div>
    </div>
  );
};

export default Home;