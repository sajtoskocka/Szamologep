let elsoSzamjegySzovege = ""
let masodikSzamjegySzovege = ""
let muvelet = ""

const szamElemek = document.getElementsByClassName("szamok")
const inputElem = document.getElementById("gombok")
szamElemek[0].addEventListener("click",fv )
szamElemek[1].addEventListener("click", fv1)

function fv(event){
    console.log(event.target.id)
    inputElem.value += event.target.id
}

function fv1(event){
    console.log(event.target.id)
    inputElem.value += event.target.id
}