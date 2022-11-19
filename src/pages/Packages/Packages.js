import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import SinglePackage from "../Home/Packages/SinglePackage";

const Packages = () => {
  const packages = useLoaderData();
  console.log(packages);
  return (
    <Container>
      <div className="my-5 text-center mx-auto w-75">
        <h1 className="text-primary text-center fw-bold mb-3">All Exciting Packages</h1>
        <p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis, modi similique eaque non nisi incidunt? Laboriosam cum minus eos? Nostrum accusantium quae modi, perferendis tempora earum hic consequuntur repudiandae? Repellendus, facere officia laborum harum numquam aperiam doloremque soluta obcaecati mollitia? Vel nulla assumenda accusantium similique impedit repudiandae unde voluptatem!</p>
      </div>
      <Row xs={1} md={2} className="g-4">
        {packages.map((place) => (
          <SinglePackage key={place.package_id} place={place}></SinglePackage>
        ))}
      </Row>
    </Container>
  );
};

export default Packages;
