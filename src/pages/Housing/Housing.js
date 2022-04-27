import Gallery from "../../components/Gallery/Gallery";
import Accordion from "../../components/Accordion/Accordion";
import Rating from "../../components/Rating/Rating";
import Tag from "../../components/Tag/Tag";
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Housing() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("../../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  let appartment = data.find((app) => app.id === id);
  console.log(appartment);

  if (!appartment) {
    return <Navigate to="*" />;
  }

  return (
    <div className="housing">
      <Gallery
        pictures={appartment.pictures}
        title={appartment.title}
      ></Gallery>
      <div className="content">
        <div className="content--left">
          <div className="titles">
            <h1>{appartment.title}</h1>
            <h2>{appartment.location}</h2>
          </div>
          <Tag tags={appartment.tags} />
        </div>
        <div className="content--right">
          <div className="host">
            <p>{appartment.host.name}</p>
            <img src={appartment.host.picture} alt={appartment.host.name} />
          </div>
          <Rating rating={appartment.rating}></Rating>
        </div>
      </div>

      <div className="accordions">
        <div className="description">
          <Accordion title="Description" content={appartment.description} />
        </div>

        <div className="equipement">
          <Accordion
            title="Équipements"
            content={appartment.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </div>
      </div>
    </div>
  );
}
export default Housing;
