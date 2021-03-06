import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem.js';
const UserList = props => {
        const { users, selectedUser, onSelect, removeUser } = props;
        const Users = users.map((user, index) => <UserItem 
                                                        key={index}
                                                        user={user}
                                                        onSelect={onSelect}
                                                        selectedUser={selectedUser}
                                                        removeUser={removeUser}

                                                        />)
        return (
            <ul className='UserSideBar--list'>
                {Users}
            </ul>
        );
    }

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    selectedUser: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    removeUser: PropTypes.func.isRequired
}
export default UserList