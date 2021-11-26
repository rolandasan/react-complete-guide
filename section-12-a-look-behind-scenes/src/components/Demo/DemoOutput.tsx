import React from 'react';

interface Props {
    showParagraph: boolean;
}

export const DemoOutput: React.FC<Props> = React.memo<Props>((props) => {
    console.debug('DemoOutput');
    return <p>{props.showParagraph ? 'This is new' : ''}</p>;
});
