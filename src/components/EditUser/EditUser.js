import React, { Component } from 'react'
import { connect } from 'react-redux';


class EditUser extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newFirstName = this.getFirstName.value;
        const newLastName = this.getLastName.value;
        const data = {
          newFirstName,
          newLastName
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
    }
  render() {
    return (
        <div>
          <form onSubmit={this.handleEdit}>
            <input required type="text" ref={(input) => this.getFirstName = input}
            defaultValue={this.props.user.firstName} placeholder="Enter First Name" /><br /><br />
            <input required type="text" ref={(input) => this.getLastName = input}
            defaultValue={this.props.user.lastName} placeholder="Enter Last Name" /><br /><br />
            <button>Update</button>
          </form>
        </div>
      );
  }
}
export default connect()(EditUser)