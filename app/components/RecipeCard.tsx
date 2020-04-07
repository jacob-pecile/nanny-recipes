import * as React from 'react';
import styled from 'styled-components';
import { Recipe } from '../types/nannyrecipe';

interface RecipeCardProps {
    recipe: Recipe;
    className?: string;
}

const RecipeCard = (props: RecipeCardProps) => {
    let { recipe, className } = props;

    return (
        <div className={className}>{recipe.name}</div>
    );
};

export default styled(RecipeCard)` 
    display: flex;
    margin: 4px;
    border: 2px solid #1f1f1f;
`;