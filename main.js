const cards = document.querySelectorAll(".card")

for(const card of cards){
    card.addEventListener("click",()=>{
        removeCard()

        card.classList.add("active")
        // card.classList.toggle("active")
    })
}

function removeCard () {
    cards.forEach((card)=>{
        card.classList.remove("active")
    })
}
