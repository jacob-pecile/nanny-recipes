import * as React from 'react';
import styled from 'styled-components';
import { SearchQuery } from '../types/nannyrecipe';

import { Form, FormDefinition } from 'gotta-go-form';

interface SearchFormProps {
    formDefinition: FormDefinition;
    onSearch: (query: SearchQuery) => void;
    className?: string;
}

const SearchForm = (props: SearchFormProps) => {
    let { formDefinition, onSearch, className } = props;

    let onClick = (result: any) => {
        onSearch(result);
    };

    let footerActions = [
        {
            text: 'Submit',
            type: 'Primary',
            onClick: onClick
        }
    ];

    return (
        <div className={className}>
            <Form formDefinition={formDefinition} footerActions={footerActions} />
        </div>
    );
};

export default styled(SearchForm)`
    display: flex;
    flex: 1;
    max-width: 40%;
    border-right: 1px solid #d8d8d8;
`;