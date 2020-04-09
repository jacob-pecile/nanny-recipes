import * as React from 'react';
import { useState, useEffect } from 'react';
const recipes = require('../../data/nanny-recipes.json');
import { SearchQuery } from '../types/nannyrecipe';
import { servingSizes, keywordOptions } from '../types/constants';
import { FormDefinition, FormType } from 'gotta-go-form';
import { SearchEngine } from './handlers/searchEngine';
import IngredientList from '../components/IngredientList';

export const useRecipe = () => {

    const [query, setQuery] = useState(null);
    const [recipeResult, setrecipeResult] = useState(null);

    let searchEngine = new SearchEngine(query, recipes);

    useEffect(() => {
        if (query !== null) {
            let result = searchEngine.search();
            setrecipeResult(result);
        }
    }, [query]);

    let formDefinition: FormDefinition = {
        title: 'Search Parameters',
        sections: [
            {
                fields: [
                    {
                        title: 'Serving Size',
                        accessor: 'servingSize',
                        type: FormType.DropDown,
                        options: servingSizes
                    },
                    {
                        title: 'Cook Time (in hours)',
                        accessor: 'cookTime',
                        type: FormType.Input,
                        properties: { inputProps: { placholder: 'number of hours of cook time', type: 'number' } }
                    },
                    {
                        title: 'Key Words',
                        accessor: 'keywords',
                        type: FormType.DropDown,
                        options: keywordOptions.map(opt => ({ value: opt, label: opt })),
                        properties: { isMulti: true }
                    },
                    {
                        title: 'Ingredient List',
                        accessor: 'ingredients',
                        type: FormType.Custom,
                        value: [],
                        customComponent: field => <IngredientList field={field} />
                    }
                ]
            }
        ]
    };

    return { recipeResult, formDefinition, setQuery };
};
