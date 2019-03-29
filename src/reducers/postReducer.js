const postReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_USER':
        return state.concat([action.data]);
       case 'DELETE_USER':
        return state.filter((user)=>user.id !== action.id);
       case 'EDIT_USER':
        return state.map((user)=>user.id === action.id?{...user,editing:!user.editing}:user);
       case 'UPDATE':
        return state.map((user)=>{console.log(action.id,user.id) 
        if(user.id === action.data.id) {       
          return {
             ...user,
             firstName:action.data.newfirstName,
             lastName:action.data.newlastName,
             editing: !user.editing
          }
        } else return user;
      })
       default:
        return state;
    }
  }
  export default postReducer;