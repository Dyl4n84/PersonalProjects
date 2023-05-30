import { useState, useCallback } from "react";

export function useControlled<T>({
  defaultValue,
  controlledValue,
  onChange,
}: {
  defaultValue?: T;
  controlledValue?: T;
  onChange?: (newValue: T) => void;
}) {
  if (process.env.NODE_ENV == "development") {
    if (typeof controlledValue != "undefined" && !onChange) {
      console.warn("Passed in controlledValue without onChange");
    }
    if (typeof controlledValue == "undefined" && onChange) {
      console.warn("Passed in onChange without controlledValue");
    }
  }

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isTrue = controlledValue ? controlledValue : uncontrolledValue;

  const handleChange = useCallback(
    (newState: T) => {
      if (onChange) {
        onChange(newState);
      } else {
        setUncontrolledValue(newState);
      }
    },
    [onChange]
  );

  return [isTrue, handleChange] as const;
}
