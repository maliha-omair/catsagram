// Your code here

async function createPage() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
    const data = await response.json()
    const url = data[0].url
    console.log(url)
    console.log(data)
    const urlparts = url.split("/")
    const catbreed = urlparts[urlparts.length-1]
    const img = document.createElement("img")
    const div = document.createElement("div")
    const fig = document.createElement("figure")
    const figcaption = document.createElement("figcaption")
    document.body.appendChild(div)
    div.appendChild(fig)
    img.setAttribute("src",url)
    figcaption.innerText = catbreed
    figcaption.setAttribute("id","figcaption")
    fig.setAttribute("id","fig")
    fig.appendChild(figcaption)
    fig.appendChild(img)
    document.getElementById("figcaption").style.textAlign = "center"
    document.getElementById("fig").style.alignItems = "center"

}

window.onload = createPage
