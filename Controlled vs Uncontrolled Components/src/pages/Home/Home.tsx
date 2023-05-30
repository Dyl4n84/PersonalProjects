import { useState } from "react";
import Accordion from "../../components/Accordion";
import { AccordionProps } from "../../components/Accordion/Accordion";

import "./Home.scss";

const accordionData: AccordionProps[] = [
  {
    heading: "Accordion",
    buttonTitle: "Surprise!",
    buttonUrl: "/",
  },
  {
    heading: "Accordion",
    buttonTitle: "Surprise?",
    buttonUrl: "/",
  },
];

export default function Home(): JSX.Element {
  const [accordionValues, setAccordionValues] = useState([false, false]);

  const handleAccordionChange = (index: number, newState: boolean) => {
    const newValues = [...accordionValues];
    newValues[index] = newState;

    setAccordionValues(newValues);
  };

  return (
    <div>
      <button
        onClick={() =>
          setAccordionValues(
            accordionValues.map((value) => {
              return !value;
            })
          )
        }
      >
        Toggle All
      </button>

      {accordionData.map((accordion, index) => (
        <Accordion
          key={index}
          forceChange={accordionValues[index]}
          onChange={(newState) => {
            handleAccordionChange(index, newState);
          }}
          {...accordion}
        />
      ))}
    </div>
  );
}
