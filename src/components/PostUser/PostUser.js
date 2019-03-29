import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	withRouter
} from 'react-router-dom';

class PostUser extends Component {
  handleSubmit=(e)=>{
    e.preventDefault();
    const firstName = this.getFirstName.value;
    const lastName = this.getLastName.value;
    const data = {
      id: new Date(),
      firstName,
      lastName,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_USER',
      data
    });
    this.getFirstName.value = '';
    this.getLastName.value = '';
    window.alert("Added Successfully!!");
    this.props.history.push('/all-user');
  }

  render() {
    return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={this.handleSubmit}>
        <input required type="text" ref={(input)=>this.getFirstName = input} placeholder="Enter First Name" /><br /><br />
        <input required type="text" ref={(input)=>this.getLastName = input} placeholder="Enter Last Name" /><br /><br />
        <button>Submit</button>
      </form>
    </div>
    );
  }
}

export default withRouter(connect()(PostUser));
