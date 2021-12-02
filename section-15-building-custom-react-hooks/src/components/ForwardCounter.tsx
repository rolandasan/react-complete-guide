import React from 'react';

import { Card } from './Card';
import { useCounters } from '../hooks/use-counters';

export const ForwardCounter: React.FC = () => {
    const counter = useCounters(true);
    return <Card>{counter}</Card>;
};
