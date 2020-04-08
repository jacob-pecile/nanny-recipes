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
  font-family: 'Open Sans', sans-serif;

  & > .recipe-header {
    vertical-align: middle;
    font-size: 32px;
    height: 40px;
    padding: 8px;
    background-color: #d8d8d8;
    border-bottom: 1px solid #1f1f1f;
    font-family: 'Open Sans', Calibri, Arial, Helvetica, sans-serif;
    font-weight: 600;
  }

  & > .recipe-container{
    height: calc(100% - 57px); /* header is 40px high + 16px padding + 1px border */
  }
`;
