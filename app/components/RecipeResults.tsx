import * as React from 'react';
import styled from 'styled-components';
import { Recipe } from '../types/nannyrecipe';
import RecipeCard from './RecipeCard';

interface RecipeResultsProps {
    recipes: Recipe[];
    className?: string;
}

const RecipeResults = (props: RecipeResultsProps) => {
    let { className, recipes } = props;

    let recipeCards = recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />);

    return (
        <div className={className}>
            {recipeCards}
        </div>
    );
};

export default styled(RecipeResults)`
    display: flex;
    flex: 2;
    flex-direction: column;
`;