function mod_envi_start(){

}
function mod_sug_start(){

}

document.querySelector('.mod_envi_start button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
})
document.querySelector('.mod_sug_start button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
})