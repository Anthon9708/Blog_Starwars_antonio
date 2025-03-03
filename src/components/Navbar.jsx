import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Navbar = () => {
  const { favorites, removeFavorite } = useContext(DataContext);

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-dark bg-dark px-3">
        <Link to="/" className="navbar-brand"><img style={{ width : '60px'}} src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="LOGO" /></Link>
        <div className="btn-group">
          <button className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" >
            Favoritos ({favorites.length})
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {favorites.length === 0 ? 
            <li className="dropdown-item ">No hay favoritos</li>
            : favorites.map((fav) => (
              <li key={fav.name} className="dropdown-item d-flex justify-content-between">
                {fav.name}
                <button className="btn btn-danger btn-sm mx-2" onClick={() => removeFavorite(fav.name)}>✖</button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
