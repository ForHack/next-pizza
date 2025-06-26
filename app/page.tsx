import {Container, Filters, ProductGroupList, Title, TopBar} from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>

            <TopBar/>

            <Container className="mt-9 pb-14">
                <div className="flex gap-[80px]">
                    {/*  Филтьрация  */}
                    <div className="w-[250px]">
                        <Filters/>
                    </div>

                    {/*  Список товаров  */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductGroupList
                                title="Пиццы"
                                items={[
                                    {
                                        id: 1,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0195f593c11876cd886af0a034a96e57.avif",
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 2,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0195f593c11876cd886af0a034a96e57.avif",
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 3,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0195f593c11876cd886af0a034a96e57.avif",
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 4,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0195f593c11876cd886af0a034a96e57.avif",
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 5,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0195f593c11876cd886af0a034a96e57.avif",
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 6,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0195f593c11876cd886af0a034a96e57.avif",
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                ]} categoryId={1}/>

                            <ProductGroupList
                                title="Комбо"
                                items={[
                                    {
                                        id: 1,
                                        name: "Чизбургер пицца",
                                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0195f593c11876cd886af0a034a96e57.avif",
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                ]} categoryId={2}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
