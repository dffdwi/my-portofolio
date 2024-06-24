import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");

  function handleValueChange({ target }) {
    setValue(target.value);
    setError("");
  }

  return [value, handleValueChange, setValue, error, setError];
}

export default useInput;
