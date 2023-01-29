import { getColors, getInteriors, getTechnology, getWheels, getCustomOrders } from "./database.js";

const buildOrderListItem = (order) => {
    const colors = getColors()
    const interiors = getInteriors()
    const technologies = getTechnology()
    const wheels = getWheels()

    const foundColors = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnologies = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const totalCost = foundColors.price + foundInteriors.price + foundTechnologies.price + foundWheels.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} is a ${foundColors.color} car with ${foundWheels.wheel} wheels, ${foundInteriors.interior} interior, and the ${foundTechnologies.tech} for a total cost of ${costString}
    </li>`
}




export const Orders = () => {
    
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}








