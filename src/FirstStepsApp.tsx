import { ItemCounter } from "./sopping-cart/ItemCounter"

interface ItemInCart {
    productName: string,
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo Switch 2", quantity: 2 },
    { productName: "Control Switch", quantity: 4 },
    { productName: "Super Mario", quantity: 1 },
    { productName: "Splatoon", quantity: 5 },
    { productName: "Smash Bros", quantity: 7 }
]

export function FirstStepsApp() {
    return (<>
        <h1>Carrito de compras</h1>

        {itemsInCart.map(({ productName, quantity }) => (
            <ItemCounter key={productName} gameName={productName} quantity={quantity} />
        ))}

        {/* <ItemCounter gameName="Nintendo Switch 2" quantity={2} />
        <ItemCounter gameName="Nintendo Switch 3" quantity={5} />
        <ItemCounter gameName="PSOne" quantity={20} />
        <ItemCounter gameName="Xbox 360" quantity={1} /> */}
    </>)
}