import { useState } from "react";
import imgTop from "../../assets/top-img.png";
import Card from "../../components/Card/Card";
import json from "../../data/data.json";

function Home() {
  const [data] = useState(json);

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
