import classes from './User.module.css';
import React, { Component } from 'react';

interface Props {
    name: string;
}

export class User extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}

// export const User: React.FC<Props> = (props) => {
//     return <li className={classes.user}>{props.name}</li>;
// };
