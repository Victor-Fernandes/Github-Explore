import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';
import logo from '../../assets/logogithub.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

// esse formato permite a tipagem de um componente de forma mais facil
const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });
  }, [params.repository]);

  useEffect(() => {
    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
    // async function loadData(): Promise<void> { //usando Promises
    //   const [repository, issues] = await Promise.all([
    //     api.get(`/repos/${params.repository}`),
    //     api.get(`/repos/${params.repository}/issues`),
    //   ]);

    //   console.log(repository);
    //   console.log(issues);
    // }

    // loadData();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explore" />
        <Link to="/">
          <FiChevronLeft size={16} />
          back
        </Link>
      </Header>

      {repository && ( // condicional
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
