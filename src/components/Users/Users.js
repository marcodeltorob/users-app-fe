import React, { Component } from 'react';
import './Users.css';
import axios from 'axios';
import { BE_URL } from './../../general/constants';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

    this.getUsers = this.getUsers.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
      axios.get(BE_URL + '/users/')
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderUsers() {
    const { users } = this.state;

    return users.map((user) => {
      const { id, name } =  user;
      return <p key={id}>{`${id}: ${name}`}</p>;
    });

  }

  render() {
    return (
      <div className="Users">
          {this.renderUsers()}
      </div>

    );
  }
}   

export default Users;