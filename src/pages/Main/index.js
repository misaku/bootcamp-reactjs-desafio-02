import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList/index';

export default class Index extends Component {
  state = {
    loading: false,
    error: false,
    repository: '',
    repositories: [],
  };

  changeRepo =(e) => {
    this.setState({ repository: e.target.value });
  };

  addRepository = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { repository, repositories } = this.state;
    try {
      const { data: response } = await api.get(`repos/${repository}`);
      response.lestCommit = moment(response.pushed_at).fromNow();
      this.setState({ repositories: [...repositories, response], repository: '', error: false });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
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
          <input name="user_repo" value={repository} onChange={this.changeRepo} placeholder="Usuário/Repositorio" type="text" />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulser" /> : 'OK'}</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
