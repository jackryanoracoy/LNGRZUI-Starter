import React, { useState } from 'react';
import { pre } from '../prefixConfig';
import { Button } from './Button';
import '../styles/Form.scss';

type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextAreaProps = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type FormProps = {
  className?: string;
  onSubmit: (data: { [key: string]: string }) => void;
  inputs: InputProps[];
  textAreas?: TextAreaProps[];
  submitButtonLabel: string;
};

export const Form: React.FC<FormProps> = ({
  className, onSubmit, inputs, textAreas = [], submitButtonLabel = 'Submit'
}) => {
  const classNames = className ? `${pre}form ${className}` : `${pre}form`;
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <form className={classNames} onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <input
            type={input.type}
            id={input.name}
            name={input.name}
            required={input.required}
            value={formData[input.name] ?? ''}
            onChange={handleChange}
            placeholder={input.placeholder}
          />
        </div>
      ))}
      {textAreas.map((textArea) => (
        <div key={textArea.name}>
          <label htmlFor={textArea.name}>{textArea.label}</label>
          <textarea
            id={textArea.name}
            name={textArea.name}
            required={textArea.required}
            value={formData[textArea.name] ?? ''}
            onChange={handleChange}
            placeholder={textArea.placeholder}
          />
        </div>
      ))}
      <Button type="submit">{submitButtonLabel}</Button>
    </form>
  );
};
