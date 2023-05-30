import { useControlled } from "../../shared/hooks/Controlled";

export default function TextComponent({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (newValue: string) => void;
}) {
  const [textValue, setTextValue] = useControlled({
    controlledValue: value,
    onChange,
  });

  return (
    <input
      onChange={(event) => setTextValue(event.target.value)}
      value={textValue}
    />
  );
}
