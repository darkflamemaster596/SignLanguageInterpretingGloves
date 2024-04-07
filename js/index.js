function yuyan(){

}
function start(){

}

document.querySelector('.yuyan button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
})
document.querySelector('.start button').addEventListener('click',e=>{
    console.log(e.target.parentNode.classList+'被点击了')
})