import React, { Component } from 'react'
import {connect} from 'react-redux';

class EditComponent extends Component {
    handleEdit=(e)=>{
        let userId = this.props.match.params.id;
        console.log(userId)

        e.preventDefault();
        const newfirstName = this.getFirstName.value;
        const newlastName = this.getLastName.value;
        const data = {
            id: userId,
          newfirstName,
          newlastName,
        }
        
        // console.log([data]);
        this.props.dispatch({ type: 'UPDATE', id: data.id,  data: data })
        this.props.history.push("/all-user");
      }
    //   handleEdit = (e) => {
        
    //     e.preventDefault();
        
    //     const newFirstName = this.getFirstName.value;
    //     const newLastName = this.getLastName.value;
    //     const data = {
    //       newFirstName,
    //       newLastName
    //     }
    //     console.log(this.first);
    //     this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
    // }
  render() {
    return (
        <div>
            {this.props.users.map((user) => (
            <div key={user.id}>
            {user.firstName}
                <form onSubmit={this.handleEdit}>
                    <input required type="text" name="first" ref={(input) => this.getFirstName = input} 
                        defaultValue={user.firstName} placeholder="Enter First Name" /><br /><br />
                    <input required type="text" ref={(input) => this.getLastName = input}
                        defaultValue={user.lastName} placeholder="Enter Last Name" /><br /><br />
                    <button>Update</button>
                </form>
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
export default connect(mapStateToProps)(EditComponent)