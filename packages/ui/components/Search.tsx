import React, { useState } from 'react';
import { pre } from '../prefixConfig';
import '../styles/Search.scss';

type SearchProps = {
  onSearch: (value: string) => void;
  className?: string;
  placeholder?: string;
};

export const Search: React.FC<SearchProps> = ({
  onSearch, className = '', placeholder = 'Enter Keyword...'
}) => {
  const classNames = className ? `${pre}search ${className}` : `${pre}search`;
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    onSearch(searchTerm);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form className={classNames} onSubmit={handleSubmit}>
      <input type='text' value={searchTerm} onChange={handleChange} placeholder={placeholder} />
    </form>
  );
};
