import React, { useState } from 'react';
import { FormProps, InputProps } from './Types';
import { Button } from './Button';
import '../styles/Form.scss';

export const Form: React.FC<FormProps> = ({
  className, onSubmit, initialInputs = [], buttonLabel = 'Submit'
}) => {
  const classNames = className ? `form ${className}` : `form`;
  const [inputs, setInputs] = useState<InputProps[]>(initialInputs);
  const handleChange = (id: string, value: string) => {
    setInputs(inputs.map(input => input.id === id ? { ...input, value } : input));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputs);
  };

  return (
    <form className={classNames} onSubmit={handleSubmit}>
      {inputs.map(({ id, label, value, type = 'text', placeholder = label }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          {type === 'textarea' ? (
            <textarea
              id={id}
              value={value}
              onChange={event => handleChange(id, event.target.value)}
            />
          ) : (
            <input
              id={id}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={event => handleChange(id, event.target.value)}
            />
          )}
        </div>
      ))}
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
};
