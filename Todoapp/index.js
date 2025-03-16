document.getElementById("btn").addEventListener("click", btnclick);

let data = JSON.parse(localStorage.getItem("data")) || [];
function btnclick() {
  let inputvalue = document.getElementById("inputbox").value;
  data.push(inputvalue);
  localStorage.setItem("data", JSON.stringify(data));
  showoutput()
}
function showoutput(){
  document.getElementById("output").innerText=""
  data.map((values)=>{
    let h1= document.createElement("h1")
    h1.innerText = values
    let btndelete = document.createElement("button")
    btndelete.addEventListener("click",()=>{
      valuesdelete(values)    
    })
    btndelete.innerText= "Done"
    document.getElementById("output").append(h1,btndelete)
  })
}

function valuesdelete(values){
 data = data.filter((dl)=> dl!= values)
localStorage.setItem("data", JSON.stringify(data)); 
showoutput()
}
showoutput()
