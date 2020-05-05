import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logogithub.svg';

import { Title, Form, Repositories } from './styles';

// esse formato permite a tipagem de um componente de forma mais facil
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore Repositórios no GitHub</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repsitório." />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/34258399?s=460&u=4c62694aa04a219a7a3a30d00e625809cddb06f5&v=4"
            alt="profile"
          />
          <div>
            <strong>Victor-Fernandes/Github-Explorer</strong>
            <p>Search and find repositories in Github.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/34258399?s=460&u=4c62694aa04a219a7a3a30d00e625809cddb06f5&v=4"
            alt="profile"
          />
          <div>
            <strong>Victor-Fernandes/Github-Explorer</strong>
            <p>Search and find repositories in Github.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars3.githubusercontent.com/u/34258399?s=460&u=4c62694aa04a219a7a3a30d00e625809cddb06f5&v=4"
            alt="profile"
          />
          <div>
            <strong>Victor-Fernandes/Github-Explorer</strong>
            <p>Search and find repositories in Github.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
