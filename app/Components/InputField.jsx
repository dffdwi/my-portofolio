import React from "react";
import useInput from "./useInput";

const InputField = ({ label, type = "text", error, value, onChange }) => {
  return (
    <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-8 max-md:max-w-full">
      <label className="max-md:max-w-full">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="shrink-0 mt-2.5 h-16 bg-white text-black px-4 py-2 rounded-lg border border-indigo-600 border-solid max-md:max-w-full"
        aria-label={label}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default InputField;
