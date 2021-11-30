import React, { ChangeEvent, ChangeEventHandler, Component, useEffect, useState } from 'react';

import classes from './UserFinder.module.css';
import { Users } from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

interface State {
    filteredUsers: { id: string; name: string }[];
    searchTerm: string;
}

export class UserFinder extends Component<{}, State> {
    constructor() {
        super({});
        console.debug('constructor');
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: '',
        };
    }

    componentDidUpdate(_prevProps: {}, prevState: State) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.debug('componentDidUpdate');
            this.setState({
                filteredUsers: DUMMY_USERS.filter((u) => u.name.includes(this.state.searchTerm)),
            });
        }
    }

    private searchChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        console.debug('searchChangeHandler');
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        console.debug('render');
        return (
            <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                <Users users={this.state.filteredUsers} />
            </div>
        );
    }
}

// export const UserFinder: React.FC = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');
//
//     useEffect(() => {
//         setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)));
//     }, [searchTerm]);
//
//     const searchChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
//         setSearchTerm(event.target.value);
//     };
//
//     return (
//         <div className={classes.finder}>
//             <input type='search' onChange={this.searchChangeHandler} />
//             <Users users={filteredUsers} />
//         </div>
//     );
// };
