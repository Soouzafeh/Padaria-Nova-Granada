
//customização

const allProducts = [
    /*

    {
        name: "product name",
        img: "img url",
        link: "url to product"
    },

    copia o que está acima desse texto para adicionar um novo resultado
    */

    {
        name: "Bolo de Morango",
        img: "",
        link: "/encomendas.html"
    },
    {
        name: "Produto B",
        img: "",
        link: "/encomendas.html"
    },
]

let itemsLimit = 4;

//end customização

//methods

function ClearResults() {
    $(".search-item").remove()
}

function OnSearch(inputText) {
    ClearResults()

    if (!inputText) {
        $("#searchBox").removeAttr("style")
        $("#search-suges").css("display", "none");
        return;
    } else if (inputText.length < 2) {
        $("#searchBox").removeAttr("style")
        $("#search-suges").css("display", "none");
        return;
    }
    else {

        $("#searchBox").css("width", "17.569546120058565vw");
        $("#searchBox").css("padding", "0 0.43923865300146414vw");

        $("#search-suges").css("display", "flex");

        const filteredProducts = allProducts.filter(
            (product) => {
                const words = product.name.toLowerCase().split(" ");
                for (var i = 0; i < words.length; i++) {
                    const word = words[i];
                    if (word.startsWith(inputText.toLowerCase())) return true;
                    continue;
                }

                return product.name.toLowerCase().startsWith(inputText.toLowerCase());
            }
        ).sort((a, b) => { return a.name - b.name }).slice(0, itemsLimit)

        if (filteredProducts.length === 0) {
            $("#searchBox").removeAttr("style")
            $("#search-suges").css("display", "none");
            return;
        }

        for (var i = 0; i < filteredProducts.length; i++) {
            const product = filteredProducts[i];
            if (!product) continue;

            $("#search-suges").append(`
            <a href="${product.link}">
                <div class="search-item" id="search-item">
                    <img height="64px" src="${product.img}">
                    <div class="info">
                        <p>${product.name}</p>
                    </div>
                </div>
            </a>
            `)

        }
    }
}

$("#searchBox").on("input", (e) => {
    const value = e.target.value.trim();
    OnSearch(value);
})

$("#searchBox").removeAttr("style")
$("#search-suges").css("display", "none");