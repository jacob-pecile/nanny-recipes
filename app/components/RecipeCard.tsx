import * as React from 'react';
import styled from 'styled-components';
import { Recipe, ServingSize } from '../types/nannyrecipe';
import RecipeProperty from './RecipeProperty';
import IngredientsTable from './IngredientsTable';
import FeatherIcon from 'feather-icons-react';

interface RecipeCardProps {
    recipe: Recipe;
    selected?: boolean;
    onClick: () => void;
    onClose: () => void;
    className?: string;
}

const ServingSizeLabel = {
    [ServingSize.Small]: 'Small (1-2)',
    [ServingSize.Medium]: 'Medium (3-6)',
    [ServingSize.Large]: 'Large (6-8)',
    [ServingSize.Family]: 'Family (8+)'
};

const RecipeCard = (props: RecipeCardProps) => {
    let { recipe, className, selected, onClick, onClose } = props;
    let onExit = (e) => { e.stopPropagation(); onClose(); };

    let columns = [
        {
            Header: 'Ingredient',
            accessor: 'name'
        },
        {
            Header: 'Preparation',
            accessor: 'preparation'
        },
        {
            Header: 'Measurement',
            accessor: 'measurement'
        }
    ];

    return (
        <div className={className} onClick={onClick}>
            <div className="card-title">
                <span>{recipe.name}</span>
                {selected && <FeatherIcon icon="x" color="#000000" onClick={onExit} />}
            </div>
            <RecipeProperty label="Servicing Size" value={ServingSizeLabel[recipe.servingSize]} />
            <RecipeProperty label="Keywords" value={recipe.keywords.join(',')} />
            <RecipeProperty label="Cook Time" value={`${recipe.cookTime} hr.`} />
            {selected &&
                <div className="extended-recipe">
                    <RecipeProperty label="Instructions" value={recipe.instructions} orientation="vertical" />
                    <IngredientsTable data={recipe.ingredients} columns={columns} />
                </div>
            }
        </div>
    );
};

export default styled(RecipeCard)` 
    display: flex;
    flex-direction: column;
    margin: 4px;
    border: 2px solid #1f1f1f;
    padding: 8px;
    background: #d8d8d8;
    border-radius: 3px;
    cursor: ${props => !props.selected && 'pointer'};
    transition-timing-function: cubic-bezier(0.250, 0.250, 0.750, 0.750);

    & > .card-title {
        user-select: none;
        font-weight: 600;
        font-size: 20px;
        display: flex;
        justify-content: space-between;

        & > svg{
            cursor: pointer;
        }
    }

    & > .extended-recipe{
        margin-top: 16px;

        & > div {
            margin: 4px 0;
        }
    }
`;