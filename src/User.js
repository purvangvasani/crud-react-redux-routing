import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class User extends Component {    
  render() {
  return (
    <div>
        <table>
            <tr>
                <td>
                    {this.props.user.firstName} 
                </td>
                <td>{this.props.user.lastName}</td>
                <td>
                    {/* <Link to={`/edit-user/:${this.props.user.id}`} user={this.props.user} key={this.props.user.id}
                        onClick={()=>this.props.dispatch({type:'EDIT_USER', id:this.props.user.id})}>
                        Edit</Link> */}
                    <Link to={`/edit-user/${this.props.user.id}`} user={this.props.user} key={this.props.user.id}
                        onClick={()=>this.props.dispatch({type:'EDIT_USER', id:this.props.user.id})}>
                        Edit
                    </Link>
                    <button
                        onClick={()=>this.props.dispatch({type:'DELETE_USER', id:this.props.user.id})}>
                        Delete</button>
                </td>
            </tr>
        </table>
    </div>
  );
 }
}
export default connect()(User);