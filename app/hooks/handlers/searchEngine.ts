import { SearchQuery, Recipe } from '../../types/nannyrecipe';

export class SearchEngine {
    query: SearchQuery;
    recipes: Recipe[];

    constructor(query: SearchQuery, recipes: Recipe[]) {
        this.query = query;
        this.recipes = recipes;
    }

    search = (): Recipe[] => {
        if (this.isEmpty()) {
            return [];
        }

        return this.recipes.filter(recipe => (
            this.filterByServingSize(recipe) &&
            this.filterByKeywords(recipe) &&
            this.filterByCookTime(recipe) &&
            this.filterByIngredients(recipe)
        ));
    }

    private isEmpty = () => (
        !this.query.servingSize &&
        !this.query.keywords.length &&
        !this.query.cookTime &&
        !this.query.ingredients.length
    )

    private filterByServingSize =
        (recipe: Recipe) => (!this.query.servingSize || recipe.servingSize === this.query.servingSize)

    private filterByKeywords =
        (recipe: Recipe) =>
            (!this.query.keywords.length ||
                recipe.keywords.filter(keyword => this.query.keywords.includes(keyword)).length)

    private filterByCookTime =
        (recipe: Recipe) => (!this.query.cookTime || recipe.cookTime === 'varying' ||
            (this.query.cookTime >= parseInt(recipe.cookTime as string)))

    private filterByIngredients = (recipe: Recipe) => {
        if (!this.query.ingredients.length) {
            return true;
        }

        let recipeIngredients = recipe.ingredients.map(i => i.name.toLowerCase());

        return this.query.ingredients.filter(i => recipeIngredients.includes(i.toLowerCase())).length;
    }
}