import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';


const Index = (props) => {
  const { repositories, rmRepository, updtRepository } = props;
  return (
    <Container>
      {
      repositories.map(a => (
        <Repository key={a.id}>
          <header>
            <img alt={a.owner.login} src={a.owner.avatar_url} />
            <strong>{a.name}</strong>
            <small>{a.owner.login}</small>
          </header>
          <ul>
            <li>
              <i className="fa fa-star" />
              {a.stargazers_count}
              <small>starts</small>
            </li>
            <li>
              <i className="fa fa-code-fork" />
              {a.forks_count}
              <small>forks</small>
            </li>
            <li>
              <i className="fa fa-warning" />
              {a.open_issues_count}
              <small>issues</small>
            </li>
            <li>
              <i className="fa fa-clock-o" />
              {a.lestCommit}
              <small>last commit</small>
            </li>
          </ul>
          <form>
            <button type="button" className="update" onClick={e => updtRepository(e, a.full_name)}>
atualizar
              <i
                className="fa fa-spinner fa-pulse"
              />
            </button>
            <button type="button" className="delete" onClick={e => rmRepository(e, a.id)}>
              excluir
              <i
                className="fa fa-spinner fa-pulse"
              />
            </button>
          </form>
        </Repository>
      ))
    }


    </Container>
  );
};
Index.defaultProps = {
  repositories: [],
};
Index.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }),
      stargazers_count: PropTypes.number.isRequired,
      forks_count: PropTypes.number.isRequired,
      open_issues_count: PropTypes.number.isRequired,
      pushed_at: PropTypes.string.isRequired,
      lestCommit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  rmRepository: PropTypes.func.isRequired,
  updtRepository: PropTypes.func.isRequired,
};
export default Index;
