import React from 'react';
const UserItem = props => {
        const {user, selectedUser, onSelect, removeUser } = props;
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
export default UserItem