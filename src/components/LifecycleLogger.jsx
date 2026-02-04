import { useState, useEffect } from "react";

const LifecycleLogger = () => {
  const [count, setCount] = useState(0);

  // -- Mount (componentDidMount) --
  useEffect(() => {
    console.log("Component mounted...");

    // -- Unmount (componentWillUnmount) --
    return () => {
      console.log("Component umount...");
    };
  }, []);

  // -- Update (componentDidUpdate) --
  useEffect(() => {
    if (count > 0) {
      console.log("Component updated...", count);
    }
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="logger-container">
      <h2>LifecycleLogger (Function Component)</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount} className="secondary-btn">
        Update
      </button>
    </div>
  );
};

export default LifecycleLogger;
