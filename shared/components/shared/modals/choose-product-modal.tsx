'use client';

import {Dialog} from "@/shared/components/ui";
import {useRouter} from "next/navigation";
import {DialogContent} from "@/shared/components/ui/dialog";
import {cn} from "@/shared/lib/utils";
import {FC} from "react";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm, ChooseProductForm} from "@/shared/components/shared";
import {useCartStore} from "@/shared/store";
import toast from "react-hot-toast";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: FC<Props> = ({product, className}) => {
    const router = useRouter();

    const firstItem = product.items[0];
    const isPizzaForm = Boolean(firstItem.pizzaType);
    const {addCartItem, loading} = useCartStore(state => state)

    const onAddProduct = () => {
        void addCartItem({
            productItemId: firstItem.id
        })
    }

    const onAddPizza = async (productItemId: number, ingredients: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id

            await addCartItem({
                productItemId: itemId,
                ingredients,
            })

            toast.success(`${product.name} успешно добавлен`)
            router.back()
        } catch (err) {
            toast.error('Не удалось добавить пиццу')
            console.error(err)
        }
    }

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            if (isPizzaForm) {
                await onAddPizza(productItemId!, ingredients!)
            } else {
                onAddProduct()
            }

            toast.success('Успешно добавлено')
            router.back()
        } catch (err) {
            toast.error('Не удалось добавить пиццу')
            console.error(err)
        }
    }

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
                    className,
                )}>
                {
                    isPizzaForm ? (
                        <ChoosePizzaForm
                            imageUrl={product.imageUrl}
                            name={product.name}
                            ingredients={product.ingredients}
                            items={product.items}
                            onSubmit={onSubmit}
                            loading={loading}
                        />
                    ) : (
                        <ChooseProductForm
                            imageUrl={product.imageUrl}
                            name={product.name}
                            onSubmit={onSubmit}
                            price={firstItem.price}
                            loading={loading}
                        />
                    )
                }
            </DialogContent>
        </Dialog>
    );
};
