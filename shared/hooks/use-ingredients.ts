import {useEffect, useState} from "react";
import {Ingredient} from "@prisma/client";
import {Api} from "@/shared/services/api-client";

export const useIngredients = () => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getAll();
                setIngredients(ingredients);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        void fetchIngredients();
    }, []);

    return {
        ingredients,
        loading,
    };
}
