const itens = []

function addItem() {
    const itemName = document.querySelector("#item").value

    const item = {
        name: itemName,
        checked: false
    }

    itens.push(item)

    document.querySelector("#item").value = ""

    console.log(itens)
}