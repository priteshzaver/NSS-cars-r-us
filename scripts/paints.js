import { getColors, setColors } from "./database.js"

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setColors(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint package</option>'

    const arrayOfOptions = colors.map( (color) => {
        return `<option value="${color.id}">${color.color}</option>`
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}