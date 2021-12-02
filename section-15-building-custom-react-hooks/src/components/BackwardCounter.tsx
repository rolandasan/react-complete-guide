import React from 'react';

import { Card } from './Card';
import { useCounters } from '../hooks/use-counters';

export const BackwardCounter = () => {
    const counter = useCounters(false);
    return <Card>{counter}</Card>;
};
