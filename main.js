/* criou esse diabo aqui que eu fiquei 1 hora procurando um erro minusculo dps*/

let itens = []

function addItem() {
    const itemName = document.querySelector("#item").value

    if (itemName === ""){
        alert("Digite um item válido")
        return
    }

    const item = {
        name: itemName,
        checked: false
    }

    itens.push(item)

    document.querySelector("#item").value = ""

    showItensList()
}


/* a parte do diabo em que eu fiquei procurando erro*/
function showItensList() {
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""

    itens.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))

    itens.map((item, index) => {
        sectionList.innerHTML += `
        <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}" ${item.checked && "checked"}>
                    <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
                </div>
                <button onclick="removeItem('${item.name}')">
                    <img src="./assets/trash-icon.svg" alt="trash icon">
                </button>
            </div>
        `
    })

    localStorage.setItem("itens", JSON.stringify(itens))
}

/* checa o item (passa o tracinho)*/
function checkItem(itemName){
    const item = itens.find((item) => item.name === itemName)
    item.checked = !item.checked
    showItensList()
}

/*função de remover o item*/
function removeItem(itemName) {
    const itemIdex = itens.findIndex((item) => item.name === itemName)
    const divWarning = document.querySelector(".warning")
    /* função para sumir depois de 4 segundos*/
    divWarning.classList.remove("hide-warning")
    setTimeout(() => {
        divWarning.classList.add("hide-warning")
    }, 4000)

    if (itemIdex !== -1) {
        itens.splice(itemIdex, 1)
    }

    showItensList()
}

/* fechar o aviso*/
function addHideWarningClass() {
    document.querySelector(".warning").classList.add("hide-warning")
}

function verifyLocalStorageItens() {
    const localStorageItens = localStorage.getItem("itens")

    if (localStorageItens) {
        itens = JSON.parse(localStorageItens)
        showItensList()
    }
}

verifyLocalStorageItens()