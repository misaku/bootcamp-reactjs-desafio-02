import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';


const Index = (props) => {
  const { repositories } = props;
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
              {a.stargazers_count}
              <small>starts</small>
            </li>
            <li>
              {a.forks_count}
              <small>forks</small>
            </li>
            <li>
              {a.open_issues_count}
              <small>issues</small>
            </li>
            <li>
              {a.lestCommit}
              <small>last commit</small>
            </li>
          </ul>
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
};
export default Index;
