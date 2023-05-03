import React, { useState } from 'react';
import '../styles/Form.scss';

type FormProps = {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    message: string;
  }) => void;
  children: React.ReactNode;
};

export const ContactForm: React.FC<FormProps> = ({ onSubmit, children }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
      number: formData?.number,
      message: formData?.message,
    };
    onSubmit(data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement & { name: string, value: string }>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onChange: handleChange,
            value: formData[child.props.name],
          } as InputProps);
        }
        return child;
      })}
    </form>
  );
};

type InputProps = {
  name: string;
  label?: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ContactInput: React.FC<InputProps> = ({
  name, label, type = 'text', required, value, onChange,
}) => {
  const [isValidPhone, setIsValidPhone] = useState(true);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Regular expression for validating phone number
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/im;
    setIsValidPhone(phoneRegex.test(value));
    onChange && onChange(event);
  };

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={type === 'tel' ? handlePhoneChange : onChange}
      />
      {type === 'tel' && !isValidPhone && (
        <span className="error">Please enter a valid phone number</span>
      )}
    </div>
  );
};

type TextAreaProps = {
  name: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const ContactText: React.FC<TextAreaProps> = ({
  name, label, required, value, onChange,
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
