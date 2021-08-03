import React from 'react';

const Paginado = ({ countriesPerPage, allCountries, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='paginado'>
        {pageNumbers.map(number => (
          
            <a onClick={() => paginado(number)} className='number'>
              {number}
            </a>
          
        ))}
      </ul>
    </nav>
  );
};

export default Paginado;