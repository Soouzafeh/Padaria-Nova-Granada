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
        name: "Produto A",
        img: "",
        link: "/product/a"
    },
]

function ClearResults(){

}

function OnSearch(inputText){
    ClearResults()

    if(!(inputText instanceof String)) return;

    if(!inputText) {
        return;
    }else if(inputText.length < 2) {return;}
    else{
        const filteredProducts = allProducts.filter(
            (product) => {
                const words = product.name.split(" ");
                for(var i = 0; i < words.length; i++){
                    const word = words[i];
                    if(word.startsWith(inputText)) return true;
                    continue;
                }
                return false;
            }
        ).sort((a, b) => {return a.name - b.name}).slice(0, 4)

        for(var i = 0; i < filteredProducts.length; i++){
            const product = filteredProducts[i];
            if(!product) continue;
        }
    }
}