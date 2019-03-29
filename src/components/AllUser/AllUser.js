import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../User';
import {
	withRouter
} from 'react-router-dom';

class AllUser extends Component {
  render() {
    return (
      <div>
        <h1>All Users</h1>
        {this.props.users.map((user) => (
            <div key={user.id}>
                 {/* {user.editing ? <EditComponent user={user} key={user.id} /> :   */}
                 <User key={user.id} user={user} />
            </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    users:state
  }
}

export default withRouter(connect(mapStateToProps)(AllUser));