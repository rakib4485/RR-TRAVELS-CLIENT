import React from 'react';
import { Accordion } from 'react-bootstrap';

const PackageAccordion = ({detail}) => {
    const {id, day, name, details} = detail;
    return (
        <Accordion.Item eventKey={`${id}`}>
        <Accordion.Header>
            <strong>{day}: </strong>
            <span><strong>{name}</strong></span>
        </Accordion.Header>
        <Accordion.Body>
          {details}
        </Accordion.Body>
      </Accordion.Item>
    );
};

export default PackageAccordion;