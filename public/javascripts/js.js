function offkaro(){
    document.querySelectorAll("#files form").forEach(function(furm){
furm.style.display = "none"
    })
}
var files = document.querySelector(".files")
var popup = document.querySelector("#popup")
var popupform = document.querySelector("#popup form")
var inp = document.querySelector("#inp")

files.addEventListener("click",function(dets){
  if(dets.target.id === "edit"){
    var val = dets.srcElement.parentElement.parentElement.textContent.trim()
inp.value = val
popup.style.display = "flex"
popupform.setAttribute("action",`/updatename/${val}`)
  }
})
var a = document.querySelector("#a")
var b = document.querySelector("#b")
var c = document.querySelector("#c")
var d = document.querySelector("#d")
var val = 0
a.addEventListener("click",function(){
  offkaro()
  if(val == 0){
    c.style.display = "block"
    val = 1
  }
  else{
    c.style.display = "none"
    val = 0
  }
})
b.addEventListener("click",function(){
    offkaro()
    if(val == 0){
      d.style.display = "block"
      val = 1
    }
    else{
      d.style.display = "none"
      val = 0
    }
  })