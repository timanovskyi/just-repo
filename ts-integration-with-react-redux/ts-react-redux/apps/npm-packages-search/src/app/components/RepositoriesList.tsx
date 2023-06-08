import React, { useState } from 'react';
import { useActions } from '../hooks';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList = () => {
  const [term, setTerm] = useState<string>('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && (
        <ul>
          {data.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RepositoriesList;
