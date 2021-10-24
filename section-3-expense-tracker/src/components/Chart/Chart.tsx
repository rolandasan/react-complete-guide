import React from 'react';
import './Chart.css';
import { ChartBar } from './ChartBar';
interface ChartProps {
    data: { label: string; value: number }[];
}

export const Chart: React.FC<ChartProps> = (props) => {
    const valueArray: number[] = props.data.map((e) => e.value);
    const maxValue = Math.max(...valueArray);
    return (
        <div className='chart'>
            {props.data.map((d) => (
                <ChartBar key={d.label} value={d.value} maxValue={maxValue} label={d.label} />
            ))}
        </div>
    );
};
