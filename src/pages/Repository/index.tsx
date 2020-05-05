import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}
// esse formato permite a tipagem de um componente de forma mais facil
const Repository: React.FC = () => {
  const { params } = useRouteMatch();

  return <h1>Repository</h1>;
};

export default Repository;
