const database = {
    colors: [
        { id: 1, color: "Silver", price: 1.00 },
        { id: 2, color: "Midnight Blue", price: 2.00 },
        { id: 3, color: "Firebrick Red", price: 3.00 },
        { id: 4, color: "Spring Green", price: 4.00 }
    ],
    interiors: [
        { id: 1, interior: "Beige Fabric", price: 1.00 },
        { id: 2, interior: "Charcoal Fabric", price: 2.00 },
        { id: 3, interior: "White Leather", price: 3.00 },
        { id: 4, interior: "Black Leather", price: 4.00 }
    ],
    technology: [
        { id: 1, tech: "Basic Package (basic sound system)", price: 1.00 },
        { id: 2, tech: "Navigation Package (includes integrated navigation controls)", price: 2.00 },
        { id: 3, tech: "Visibility Package (includes side and rear cameras)", price: 3.00 },
        { id: 4, tech: "Ultra Package (includes navigation and visibility packages)", price: 4.00 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 1.00 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 2.00 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 3.00 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 4.00 }
    ],
    customOrders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelId: 1,
            timestamp: 16895837301,
        }
    ],
    orderBuilder: {},
}

export const getColors = () => {
    return [ ...database.colors]
}
export const getInteriors = () => {
    return [ ...database.interiors]
}
export const getTechnology = () => {
    return [ ...database.technology]
}
export const getWheels = () => {
    return [ ...database.wheels]
}
export const getCustomOrders = () => {
    return [ ...database.customOrders]
}

export const setColors = (id) => {
    database.orderBuilder.colorId = id
}
export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnologies = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}





