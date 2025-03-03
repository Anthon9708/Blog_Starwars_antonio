import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDataId } from "../services/api";

const Details = ({ type }) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const itemDetails = await getDataId(type , id);
        setDetails(itemDetails);
      } catch (error) {
        console.error("Error fetching details:", error);
        setError('details could not be loaded');
      }
    };

    fetchDetails();
  }, [id, type]);

  if (error) return <p className="text-danger">{error}</p>
  if (!details) return <p>Cargando...</p>;

  const detailFields = {
    people: [
      { label: "Name", key: "name" },
      { label: "Birth", key: "birth_year" },
      { label: "Gender", key: "gender" },
      { label: "Height", key: "height" },
      { label: "Skin Color", key: "skin_color" },
      { label: "Hair Color", key: "hair_color" },
    ],
    vehicles: [
      { label: "Name", key: "name" },
      { label: "Capacity", key: "cargo_capacity" },
      { label: "Passengers", key: "passengers" },
      { label: "Model", key: "model" },
      { label: "Manufacturer", key: "manufacturer" },
    ],
    planets: [
      { label: "Name", key: "name" },
      { label: "Climate", key: "climate" },
      { label: "Surface Water", key: "surface_water" },
      { label: "Diameter", key: "diameter" },
      { label: "Terrain", key: "terrain" },
      { label: "Gravity", key: "gravity" },
    ],
  };

  const fieldsToRender = detailFields[type] || [];

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="w-100 d-flex align-items-center justify-content-center text-secondary" style={{ height: "400px", backgroundColor: "#f0f0f0" }}>
            <span>Imagen</span>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <h2 className="mt-5">{details.name}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sed mauris ac tellus pulvinar sodales at sed augue.
            Donec non tincidunt lorem, ac tristique nibh. Nullam porttitor metus vel maximus condimentum.
            Curabitur sed venenatis risus. Nullam eu ante laoreet, faucibus nunc non, pulvinar tellus.</p>
        </div>
        <hr className="my-5" />
        <div className="d-flex justify-content-around">
          {fieldsToRender.map(({ label, key }, index) => (
            <div key={key} style={index !== 0 ? { borderLeft: '1px solid black', padding: '0 20px'} : {}}>
              <p className="">{label}</p>
              <p>{details[key]}</p>
            </div>
          ))}
        </div>
      </div>

    </div >
  );
};

export default Details;
