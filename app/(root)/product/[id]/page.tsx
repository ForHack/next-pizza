import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, PizzaImage, Title} from "@/shared/components/shared";

export default async function ProductPage({params}: { params: { id: string } }) {
    const {id} = params;
    const product = await prisma.product.findFirst({
        where: {id: Number(id)},
        include: {
            ingredients: true,
            category: {
                include: {
                    products: {
                        include: {
                            items: true,
                        },
                    },
                },
            },
            items: true,
        },
    });

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <PizzaImage imageUrl={product.imageUrl} size={40}/>

                <div className="w-[490px] bg-[#f7f6f5] p-7">
                    <Title text={product.name} size="md" className="font-extrabold mb-1"/>

                    <p className="text-gray-400">Some dummy text</p>

                    {/*<GroupVariants items={[*/}
                    {/*    {*/}
                    {/*        name: 'Маленькая',*/}
                    {/*        value: '1',*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'Средняя',*/}
                    {/*        value: '2',*/}
                    {/*    },*/}
                    {/*    {*/}
                    {/*        name: 'Большая',*/}
                    {/*        value: '3',*/}
                    {/*    }*/}
                    {/*]}/>*/}
                </div>
            </div>
        </Container>
    )
}
