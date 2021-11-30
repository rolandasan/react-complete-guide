import React, { ChangeEvent, ChangeEventHandler, Component, useEffect, useState } from 'react';

import classes from './UserFinder.module.css';
import { Users } from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

export const UserFinder: React.FC = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)));
    }, [searchTerm]);

    const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={classes.finder}>
            <input type='search' onChange={searchChangeHandler} />
            <Users users={filteredUsers} />
        </div>
    );
};
