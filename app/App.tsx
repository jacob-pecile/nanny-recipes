import * as React from 'react';
import styled from 'styled-components';
import RecipeView from '../app/container/RecipeView';

const NannyRecipes = (props) => {
  return (
    <div className={props.className}>
      <div className="recipe-header">Sandra Brown's Favourite Recipes</div>
      <div className="recipe-container">
        <RecipeView />
      </div>
    </div>
  );
};

export default styled(NannyRecipes)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & > .recipe-header {
    vertical-align: middle;
    font-size: 32px;
    height: 40px;
  }

  & > .recipe-container{
    height: calc(100% - 40px);
  }
`;
