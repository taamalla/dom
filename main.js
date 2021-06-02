

var plus=document.getElementsByClassName("btn-plus")
var minus=document.getElementsByClassName("btn-minus")


// var remove=document.getElementsByClassName("sup")
// obj=document.getElementsByClassName("cart")
// for(i in obj){
// remove.addEventListener("click",function(){
//     obj[i].remove
// })
// }


function total(){
var prix=Array.from(document.getElementsByClassName("prix"))
var somme=document.getElementById("somme") 
var counter=Array.from(document.getElementsByClassName("counter"))
console.log(counter)
let sum=0
for(let i in counter){
    sum= sum + Number(counter[i].innerHTML)*Number(prix[i].innerHTML) 

}
somme.innerHTML=sum

}


for(var i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){

        // console.log(this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling)
        this.nextElementSibling.innerHTML=Number(this.nextElementSibling.innerHTML)+1
        total()
      
     
        
})
minus[i].addEventListener("click",function(){
    console.log(this.previousElementSibling.previousElementSibling)
    if(Number(this.previousElementSibling.innerHTML)>0) { this.previousElementSibling.innerHTML=Number(this.previousElementSibling.innerHTML)-1
    // this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=Number(this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)-i
    }
    else this.previousElementSibling.innerHTML=0
    total()
})
}
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
// like.addEventListener("click",function(){
//     this.nextElementSibling.innerHTML.color="red"
// })