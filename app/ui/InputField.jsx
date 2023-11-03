import React from "react";

export default function InputField({
  type,
  required,
  onChange,
  active,
  defaultValue,
  name,
  placeholder,
  value,
  disabled,
}) {
  return (
    <input
      className={`w-full p-4 mt-2 rounded-md focus:outline-none focus:ring-4 focus:ring-secondary-60`}
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      active={active}
      defaultValue={defaultValue}
      name={name}
      value={value}
      disabled={disabled}
    />
  );
}
