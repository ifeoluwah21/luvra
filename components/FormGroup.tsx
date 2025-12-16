import React from "react";

interface FormGroupProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  autocomplete?: React.HTMLInputAutoCompleteAttribute;
  error?: string[];
}

const FormGroup: React.FC<FormGroupProps> = ({
  name,
  type,
  placeholder,
  autocomplete,
  error,
}) => {
  return (
    <div className="flex w-full flex-col">
      <label
        htmlFor={name}
        className="pb-2 text-base leading-normal font-medium capitalize"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        autoComplete={autocomplete}
        className="border-custom-border focus:ring-pry/50 placeholder:text-custom-text/60 h-14 rounded-2xl border p-[15px] text-base font-normal focus:ring-2 focus:outline-0"
      />
      {error && (
        <ul>
          {error.map((err) => (
            <li key={err} className="text-xs font-medium text-red-500">
              - {err}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormGroup;
