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

    const [selectedRecipe, setSelectedRecipe] = React.useState(null);
    const openCard = (recipedId: number) => () => (setSelectedRecipe(recipedId));
    const closeCard = () => (setSelectedRecipe(null));

    let recipeCards = recipes
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
`;