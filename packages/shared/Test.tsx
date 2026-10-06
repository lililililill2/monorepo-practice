"use client";

import { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        증가
      </button>
      {count}
    </div>
  );
};
export default Test;
