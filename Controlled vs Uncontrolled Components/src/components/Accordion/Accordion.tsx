import { Link } from "react-router-dom";
import { useControlled } from "../../shared/hooks/Controlled";

import "./Accordion.scss";

export interface AccordionProps {
  heading: string;
  buttonTitle: string;
  buttonUrl: string;
  forceChange?: boolean;
  onChange?: (newState: boolean) => void;
}

function useControlledToggle(
  controlledValue?: boolean,
  onChange?: (newState: boolean) => void
) {
  return useControlled({ defaultValue: false, controlledValue, onChange });
}

export default function Accordion({
  heading,
  buttonTitle,
  buttonUrl,
  forceChange,
  onChange,
}: AccordionProps) {
  const [isOpen, handleChange] = useControlledToggle(forceChange, onChange);

  return (
    <div>
      <div className="accordion-toggle" onClick={() => handleChange(!isOpen)}>
        <h3>{heading}</h3>
        <>{isOpen ? "-" : "+"}</>
      </div>
      {isOpen && (
        <Link to={buttonUrl} className="accordion-content">
          {buttonTitle}
        </Link>
      )}
    </div>
  );
}
