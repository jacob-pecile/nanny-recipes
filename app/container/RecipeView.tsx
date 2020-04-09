import * as React from 'react';
import styled from 'styled-components';

import { useRecipe } from '../hooks/useRecipe';
import RecipeResults from './RecipeResults';
import SearchForm from '../components/SearchForm';

interface RecipeViewProps {
  className?: string;
}

const RecipeView = (props: RecipeViewProps) => {
  let { className } = props;

  let { recipeResult, formDefinition, setQuery } = useRecipe();

  return (
    <div className={className}>
      <SearchForm formDefinition={formDefinition} onSearch={setQuery} />
      <RecipeResults recipes={recipeResult} />
    </div>
  );
};

export default styled(RecipeView)`
    display: flex;
    height: 100%;
`;