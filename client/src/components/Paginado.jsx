import React from 'react';
const Paginado = ({ countriesPerPage, allCountries, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className='paginado'>
        {pageNumbers.map((number,i) => (
          
          <a key={i} onClick={() => paginado(number)} className='number'>
              {number}
            </a>
          
        ))}
      </ul>
    </div>
  );
};

export default Paginado;