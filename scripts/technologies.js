import { getTechnology, setTechnologies } from "./database.js"

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnologies(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologies.map( (tech) => {
            return `<option value="${tech.id}">${tech.tech}</option>`
    })

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}