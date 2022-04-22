import Gallery from "../../components/Gallery/Gallery";
import Data from "../../data/data.json";
import Accordion from "../../components/Accordion/Accordion";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";

function Housing() {
  const { logementId } = useParams();
  const [datas, setDatas] = useState(Data);

  let appartment = datas.find((app) => app.id === logementId);
  console.log(appartment);

  //   if (!appartment) {
  //     return <Navigate to="*" />;
  //   }

  // const description = appartment.description;

  return (
    <div className="housing">
      <Gallery></Gallery>
      <h1>Cozy loft</h1>
      <h2>Paris</h2>
      {/* <Tag></Tag> */}
      <div className="accordions">
        <div className="description">
          <Accordion
            title="Description"
            content="{content}"
            key="{title}"
          ></Accordion>
        </div>

        <div className="equipement">
          <Accordion title="Équipements"></Accordion>
        </div>
      </div>
    </div>
  );
}
export default Housing;
