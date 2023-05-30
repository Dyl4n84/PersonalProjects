import { useState } from "react";

import "./Controlled.scss";

export default function Controlled(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Controlled Component</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
