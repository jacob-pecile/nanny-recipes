import * as React from 'react';
import styled from 'styled-components';

interface RecipePropertyProps {
    label: string;
    value: any;
    orientation?: 'vertical' | 'horizontal';
    className?: string;
}

const RecipeProperty = (props: RecipePropertyProps) => (
    <div className={props.className}>
        <div className="property-key">{props.label}:</div>
        <div className="property-value">{props.value}</div>
    </div>
);

export default styled(RecipeProperty)`
    display: flex;
    flex-direction: ${props => props.orientation === 'vertical' ? 'column' : 'row'};
    justify-content: start;
    font-size: 14px;

    & > div{
        margin-right: 4px;
        user-select: none;

        &.property-key{
            font-weight: 600;
        }
    }
`;