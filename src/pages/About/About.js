import imgTop from "../../assets/top-img2.png";
import Accordion from "../../components/Accordion/Accordion";
import accordionData from "../../data/accordionData";

function About() {
  return (
    <section>
      <div className="top">
        <img src={imgTop} alt="background" />
      </div>

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} key={title} />
        ))}
      </div>
    </section>
  );
}

export default About;
