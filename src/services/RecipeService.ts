import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema";
import type { Drink, SearchFilter } from "../types";

export const getCategories = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    try {
        const { data } = await axios(url);
        const result = CategoriesAPIResponseSchema.safeParse(data);
        if (result.success) {
            return result.data;
        };
    } catch (error) {
        console.log(error);
    };
};

export const getRecipes = async (filters : SearchFilter) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    try {
        const { data } = await axios(url);
        const result = DrinksAPIResponse.safeParse(data);
        if(result.success){
            return result.data;
        };
    } catch (error) {
        console.log(error);
    };
};

export const getRecipeById = async (id : Drink['idDrink']) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    try {
        const { data } = await axios(url);
        const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
        if(result.success){
            return result.data;
        };
    } catch (error) {
        console.log(error);
    };
};