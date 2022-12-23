
const cancel=document.getElementById("cancel")
const menu=document.getElementById("menu")
const toggel=document.getElementById('toggel')
const handelmenubar=()=>{
    menu.classList.remove("hidden")
    toggel.classList.add("hidden")
    cancel.classList.remove("hidden")
}

const handelcancelbar=()=>{
    menu.classList.add("hidden")
    cancel.classList.add("hidden")
    toggel.classList.remove("hidden")
}