import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinksAPIResponse, SearchFilterSchema, DrinkAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;