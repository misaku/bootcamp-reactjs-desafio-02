import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';

export default class Index extends Component {
  constructor(props) {
    super(props);
    let repositories = [];
    if (typeof (Storage) !== 'undefined') {
      const repo = JSON.parse(localStorage.getItem('repositories'));
      if (repo && repo !== null && Array.isArray(repo)) repositories = repo;
    }
    this.state = {
      loading: false,
      error: false,
      repository: '',
      repositories,
    };
  }

  changeRepo = (e) => {
    this.setState({ repository: e.target.value });
  };

  addRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { repository, repositories } = this.state;
    try {
      const { data: response } = await api.get(`repos/${repository}`);
      response.lestCommit = moment(response.pushed_at).fromNow();
      const fnd = repositories.find(rep => rep.id === response.id);
      if (!fnd) {
        const repo = [...repositories, response];
        localStorage.setItem('repositories', JSON.stringify(repo));
        this.setState({
          repositories: repo,
          repository: '',
          error: false,
        });
      }
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  rmRepository = (e, id) => {
    e.target.className = 'delete now';
    const { repositories } = this.state;
    const fnd = repositories.filter(rep => rep.id !== id);
    const repo = [...fnd];
    localStorage.setItem('repositories', JSON.stringify(repo));
    this.setState({
      repositories: repo,
      repository: '',
      error: false,
    });
  };

  updtRepository = async (e, fullName) => {
    console.log(fullName);
    const element = e.target;
    element.className = 'update now';

    const { repositories } = this.state;
    try {
      const { data: response } = await api.get(`repos/${fullName}`);
      response.lestCommit = moment(response.pushed_at).fromNow();
      const fnd = repositories.filter(rep => rep.id !== response.id);
      const repo = [...fnd, response];
      localStorage.setItem('repositories', JSON.stringify(repo));
      this.setState({
        repositories: repo,
        repository: '',
        error: false,
      });
    } finally {
      element.className = 'update';
    }
  };


  render() {
    const {
      repositories, repository, error, loading,
    } = this.state;
    return (
      <Container>
        <img alt="GitCompar" src={logo} />
        <Form onSubmit={this.addRepository} withError={error}>
          <input
            name="user_repo"
            value={repository}
            onChange={this.changeRepo}
            placeholder="Usuário/Repositorio"
            type="text"
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}</button>
        </Form>
        <CompareList
          repositories={repositories}
          rmRepository={this.rmRepository}
          updtRepository={this.updtRepository}
        />
      </Container>
    );
  }
}
