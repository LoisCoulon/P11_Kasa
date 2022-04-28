import { useState, useEffect } from "react";
import imgTop from "../../assets/top-img.png";
import Card from "../../components/Card/Card";

function Home() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="home-content">
      <div className="top">
        <img src={imgTop} alt="background" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="main">
        <div className="main--grid">
          {data &&
            data.map(({ id, title, cover }) => (
              <Card id={id} title={title} cover={cover} key={id}></Card>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
