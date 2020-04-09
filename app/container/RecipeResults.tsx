import * as React from 'react';
import styled from 'styled-components';
import { Recipe } from '../types/nannyrecipe';
import RecipeCard from '../components/RecipeCard';

interface RecipeResultsProps {
    recipes: Recipe[];
    className?: string;
}

const RecipeResults = (props: RecipeResultsProps) => {
    let { className, recipes } = props;

    if (recipes !== null && recipes.length === 0) {
        return <div className={`${className} empty-message`}>
            There are no recipes that match that query
                </div>;
    }

    const [selectedRecipe, setSelectedRecipe] = React.useState(null);
    const openCard = (recipedId: number) => () => (setSelectedRecipe(recipedId));
    const closeCard = () => (setSelectedRecipe(null));

    let recipeCards = recipes && recipes.filter(r => selectedRecipe === null || selectedRecipe === r.id)
        .map((recipe, i) =>
            (<RecipeCard key={i}
                recipe={recipe}
                onClick={openCard(recipe.id)}
                onClose={closeCard}
                selected={selectedRecipe === recipe.id}
            />));

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
    overflow-y: auto;

    &.empty-message{
        font-size: 24px;
        margin-top: 8px;
        align-items: center;
    }
`;