const products = [
    {
        img: "https://picsum.photos/200",
        title: "Product 1",
        manufacturer: "Adidas",
        price: 150,
        priceVat: 180,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ad, architecto, aut blanditiis similique reprehenderit harum enim possimus molestiae dignissimos totam commodi deserunt. Eius harum temporibus fuga corrupti consequatur tenetur ex laborum id ab explicabo!"
    },
    {
        img: "https://picsum.photos/200",
        title: "Product 2",
        manufacturer: "Nike",
        price: 180,
        priceVat: 210,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi perspiciatis placeat ex nam omnis eius, autem ut neque harum est facere amet facilis alias voluptates dolore, iusto optio qui iure adipisci deserunt. Ipsum, quam quod!"
    }
]

const container = document.getElementById("container")

function createCard() {
    products.forEach(product => {
        const card = document.createElement("article")
        card.classList.add("container")

        const imgArea = document.createElement("section")
        imgArea.classList.add("img")
        const img = document.createElement("img")
        img.setAttribute("src", product.img)
        imgArea.append(img)

        const textArea = document.createElement("section")
        textArea.classList.add("text")
        const productTitle = document.createElement("h1")
        productTitle.innerText = product.title
        const productManufacturer = document.createElement("h2")
        productManufacturer.innerText = product.manufacturer
        const productDescription = document.createElement("p")
        productDescription.innerText = product.description
        textArea.append(productTitle, productManufacturer, productDescription)

        const infosArea = document.createElement("section")
        infosArea.classList.add("infos")

        const priceArea = document.createElement("div")
        const productPrice = document.createElement("p")
        productPrice.classList.add("price")
        productPrice.innerText = product.price
        
        const producPriceVAT = document.createElement("p")
        producPriceVAT.classList.add("price-vat")
        producPriceVAT.innerText = product.priceVat
        priceArea.append(productPrice, producPriceVAT)

        const button = document.createElement("button")
        button.innerText = "Add To Cart"

        infosArea.append(priceArea, button)

        card.append(imgArea, textArea, infosArea)
        container.append(card)
    })
}

createCard()