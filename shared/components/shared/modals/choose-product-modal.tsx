'use client';

import {Dialog} from "@/shared/components/ui";
import {useRouter} from "next/navigation";
import {DialogContent} from "@/shared/components/ui/dialog";
import {cn} from "@/shared/lib/utils";
import {FC} from "react";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm, ChooseProductForm} from "@/shared/components/shared";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: FC<Props> = ({product, className}) => {
    const router = useRouter();

    const firstItem = product.items[0];
    const isPizzaForm = Boolean(firstItem.pizzaType);

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
                        />
                    ) : (
                        <ChooseProductForm imageUrl={product.imageUrl} name={product.name}/>
                    )
                }
            </DialogContent>
        </Dialog>
    );
};
