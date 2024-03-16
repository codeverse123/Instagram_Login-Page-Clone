const hide = document.getElementById("hide");
const pass = document.getElementById("password")
const show = document.getElementById("show")
hide.addEventListener("click",()=>{
    pass.type = "password"
    hide.style.display = "none"
    show.style.display = "block"
})
show.addEventListener("click",()=>{
    pass.type = "text"
    hide.style.display = "block"
    show.style.display = "none"
})