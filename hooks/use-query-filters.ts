import qs from "qs";
import {Filters} from "@/hooks/use-filters";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();

    console.log(filters);

    useEffect(() => {
        const params = {
            ...filters.prices,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients),
        };

        const query = qs.stringify(params, {
            arrayFormat: 'comma',
        });

        router.push(`?${query}`, {
            scroll: false,
        });
    }, [filters]);
}
