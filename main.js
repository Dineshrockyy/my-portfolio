
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
    toggel.classList.remove("hidden ")
}

function sendmail(){
    const params={
       name:document.getElementById("name").value,
       email:document.getElementById("email").value,
       message:document.getElementById("text").value,
    }

    const service_id="service_3y48ao8";
    const template_id="template_48ngd7h";

    if(params.name==="" || params.email==="" || params.message===""){
        document.getElementById("denied").classList.remove("hidden")
        document.getElementById("success").classList.add("hidden")
    }else{
        emailjs.send(service_id,template_id,params)
.then(
    res =>{
        document.getElementById("name").value=""
        document.getElementById("email").value=""
        document.getElementById("text").value=""
        document.getElementById("success").classList.remove("hidden")
        document.getElementById("denied").classList.add("hidden")
        console.log(res)

    }
)
.catch((err)=>{console.log(err)})
}
    }