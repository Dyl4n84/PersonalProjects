import { useState } from "react";
import Accordion from "../../components/Accordion";
import TextComponent from "../../components/TextInput";
import { AccordionProps } from "../../components/Accordion/Accordion";

import "./Home.scss";

const accordionData: AccordionProps[] = [
  {
    heading: "Controlled Component",
    buttonTitle: "Controlled",
    buttonUrl: "/Controlled",
  },
  {
    heading: "Uncontrolled Component",
    buttonTitle: "Uncontrolled",
    buttonUrl: "/Uncontrolled",
  },
];

export default function Home(): JSX.Element {
  const [accordionValues, setAccordionValues] = useState([false, false]);
  const [text, setText] = useState("");

  const handleAccordionChange = (index: number, newState: boolean) => {
    const newValues = [...accordionValues];
    newValues[index] = newState;

    setAccordionValues(newValues);
  };

  return (
    <div>
      <div>
        <TextComponent value={text} onChange={setText} />
      </div>

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
