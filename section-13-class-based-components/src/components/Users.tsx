import React, { Component } from 'react';
import { User } from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

interface State {
    showUsers: boolean;
    users: User[];
}

interface Props {
    users: { id: string; name: string }[];
}

export class Users extends Component<Props, State> {
    constructor() {
        super({ users: [] }, {});
        this.state = {
            showUsers: false,
            users: [],
        };
    }

    componentDidUpdate() {
        if (this.props.users.length === 0) {
            throw new Error('No users provides!');
        }
    }

    private toggleUsersHandler = () => {
        this.setState((curState) => {
            return {
                showUsers: !curState.showUsers,
            };
        });
    };

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );
        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler}>{this.state.showUsers ? 'Hide' : 'Show'} Users</button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

// export const Users: React.FC = () => {
//     const [showUsers, setShowUsers] = useState(true);
//
//     const toggleUsersHandler = () => {
//         setShowUsers((curState) => !curState);
//     };
//
//     const usersList = (
//         <ul>
//             {DUMMY_USERS.map((user) => (
//                 <User key={user.id} name={user.name} />
//             ))}
//         </ul>
//     );
//
//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>{showUsers ? 'Hide' : 'Show'} Users</button>
//             {showUsers && usersList}
//         </div>
//     );
// };
