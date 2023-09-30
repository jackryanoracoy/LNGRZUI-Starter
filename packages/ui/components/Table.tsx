import React from 'react';
import { pre, mpre } from '../prefixConfig';
import '../styles/Table.scss';

type TableProps = {
  className?: string;
  border: boolean;
  columns: string[];
  data: any[];
};

export const Table: React.FC<TableProps> = ({ className = '', border = false, columns, data }) => {
  const classNames = className 
    ? `${pre}table ${border && `${mpre}bordered` || ''} ${className}` 
    : `${pre}table ${border && `${mpre}bordered` || ''}`;
  return (
    <table className={classNames}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
