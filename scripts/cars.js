import { Wheels } from "./wheels.js"
import { Technologies } from "./technologies.js"
import { Paints } from "./paints.js"
import { Interiors } from "./interiors.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./orders.js"

document.addEventListener(
    "click",
    (event) => {
       const itemClicked = event.target
       if (itemClicked.id.startsWith("orderButton")) {
        return addCustomOrder()
       }
    }
)

export const Cars = () => {
    return `
        <h1>Cars R' Us</h1>

        <article class="choices">
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}
            </section>
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            ${Orders()}
            
        </article>
    `
}