import React, { Component } from 'react';
class UserItem extends Component {
    render(){
        const {user, selectedUser, onSelect, removeUser } = this.props;
        const classes = selectedUser === user ? 
                            'UserSideBar--list-item active' : 
                            'UserSideBar--list-item';
        return (<li className={classes}>
                    <button onClick={() => onSelect(user)}>
                        {user}
                    </button>
                    <button onClick={() => removeUser(user)}>X</button>
                </li>
                 );
    }
}
export default UserItem