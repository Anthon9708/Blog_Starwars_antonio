import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Card = ({ item, type }) => {
  const { addFavorite } = useContext(DataContext);

  return (
    <div className="card m-2" style={{ minWidth: '300px' }}>
      <div style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0", color: "#888" }}>
        <span>400 x 200</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        {type === 'people' &&
          <>
            <p>Gender: {item.gender}</p>
            <p>Hair Color: {item.hair_color}</p>
            <p>Eye Color: {item.eye_color}</p>
          </>
        }
        {type === 'vehicles' &&
          <>
            <p>Model: {item.model}</p>
          </>
        }
        {type === 'planets' &&
          <>
            <p>Terrain: {item.terrain}</p>
            <p>Population: {item.population}</p>
          </>
        }
        <div className="d-flex justify-content-between">

          <Link to={`/${type}/${item.id}`} className="btn btn-primary">Detalles</Link>
          <button className="btn btn-warning" onClick={() => addFavorite(item)}>⭐</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
