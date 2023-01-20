import React, { PropsWithChildren } from 'react';

interface IProps {
  label?: string;
  placeholder?: string;

  errorText?: string;
  hasError?: boolean;
  onChange?: (value: string) => void;
}

function FormInput({
  label: labelText,
  placeholder,
  errorText,
  hasError,
  onChange,
}: IProps) {
  return (
    <div className="mb-4">
      <label className="flex flex-col">
        {labelText && <span className="text-sm font-bold mb-2">{labelText}</span>}
        <input
          type="text"
          placeholder={placeholder}
          className="py-3 px-4 mb-2 bg-white border border-gray-light rounded-sm"
          onChange={e => onChange?.(e.target.value)}
        />
      </label>
      {hasError && <p className="text-sm text-error">{errorText}</p>}
    </div>
  );
}

export default FormInput;
