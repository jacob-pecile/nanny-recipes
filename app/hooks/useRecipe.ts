import { useState, useEffect } from 'react';
const recipes = require('../../data/nanny-recipes.json');
import { SearchQuery } from '../types/nannyrecipe';
import { servingSizes, keywordOptions } from '../types/constants';

import { FormDefinition, FormType } from 'gotta-go-form';

const defaultQuery: SearchQuery = {
    name: '',
    servingSize: null,
    description: '',
    cookTime: null,
    keywords: [],
    ingredients: []
};

export const useRecipe = () => {

    const [query, setQuery] = useState(defaultQuery);

    useEffect(() => {
        console.log(query);
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
                        title: 'Key Words',
                        accessor: 'keywords',
                        type: FormType.DropDown,
                        options: keywordOptions.map(opt => ({ value: opt, label: opt })),
                        properties: { isMulti: true }
                    },
                    {
                        title: 'Cook Time',
                        accessor: 'cookTime',
                        type: FormType.Input,
                        properties: { inputProps: { placholder: 'number of hours of cook time', type: 'number' } }
                    }
                ]
            }
        ]
    };

    return { recipes, formDefinition, setQuery };
};
