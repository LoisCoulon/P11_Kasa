import imgTop from "../../assets/top-img.png";

function Home() {
  return (
    <section>
      <div className="top">
        <img src={imgTop} alt="background" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <div className="main">
        <div className="main--grid"></div>
      </div>
    </section>
  );
}

export default Home;
