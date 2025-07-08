import {cn} from "@/shared/lib/utils";
import {FC} from "react";
import {PizzaImage} from "@/shared/components/shared/pizza-image";
import {Title} from "@/shared/components/shared/title";
import {Button} from "@/shared/components/ui";

interface Props {
    imageUrl: string;
    name: string;
    onClickAdd?: VoidFunction
    className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const ChooseProductForm: FC<Props> = ({
                                                 name,
                                                 imageUrl,
                                                 onClickAdd,
                                                 className,
                                             }) => {
    const textDetails = "Some details about pizza"
    const totalPrice = 350

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={30}/>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1"/>

                <p className="text-gray-400">{textDetails}</p>

                <Button
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    )
}
