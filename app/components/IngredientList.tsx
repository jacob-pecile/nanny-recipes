import * as React from 'react';
import styled from 'styled-components';
import { FormField } from 'gotta-go-form';
import FeatherIcon from 'feather-icons-react';

interface IngredientListProps {
    field: FormField;
    className?: string;
}

const IngredientList = (props: IngredientListProps) => {
    let inputRef;
    let { value, callback, title } = props.field;

    const [isEditing, setIsEditing] = React.useState(false);
    React.useEffect(() => {
        if (isEditing) {
            inputRef.focus();
        }
    }, [isEditing]);

    let addNewIngredient = (ingredient: string) => {
        value.push(ingredient);
        setIsEditing(false);
        callback([...value]);
    };

    let removeIngredient = (ingredient: string) => () => {
        value = value.filter(v => v !== ingredient);

        callback(value);
    };

    let listItems = value.map((v, i) =>
        (<div key={i} className="list-item">
            <span>{v}</span>
            <div onClick={removeIngredient(v)}>
                <FeatherIcon icon="x" />
            </div>
        </div>));

    return (
        <div className={props.className}>
            <span>{title}</span>
            <div className="list-container">
                {listItems}
                {isEditing ?
                    <input
                        placeholder="press enter to add to list"
                        ref={(input) => inputRef = input}
                        onKeyDown={(e) => (e.which === 13 && addNewIngredient(e.target.value))} /> :
                    <div className="add-btn" onClick={() => (setIsEditing(true))}>
                        <span>Add</span>
                        <FeatherIcon icon="plus" />
                    </div>}
            </div>
        </div>
    );
};

export default styled(IngredientList)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    & > span{
        font-size: 14px;
        margin-bottom: 8px;
    }

    & > .list-container{
        display: flex;
        flex-direction: column;

        & > .list-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #d8d8d8;
            border-radius: 3px;
            padding: 4px;
            margin: 4px 0; 

            & > div{
                display: flex;
                align-items: center;
                cursor: pointer;
            }
        }

        & > input{
            padding: 8px;
            border: 1px solid #d8d8d8;
        }

        & > .add-btn{
            border: 1px solid #d8d8d8;
            border-radius: 3px;
            padding: 4px;
            margin: 4px 0; 
            display: flex;
            align-items: center;
            max-width: 45px;
            color: #ffffff;
            background: #4e7ea1;
            cursor: pointer;
        }
    }
`;