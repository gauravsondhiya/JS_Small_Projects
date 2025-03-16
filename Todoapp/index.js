document.getElementById("btn").addEventListener("click", btnclick);

let data = JSON.parse(localStorage.getItem("data")) || [];
function btnclick() {
  let inputvalue = document.getElementById("inputbox").value;
  if(inputvalue!=""){
    data.push(inputvalue);
    localStorage.setItem("data", JSON.stringify(data));
    
    showoutput()
    document.getElementById("gaur").innerText=" "
    document.getElementById("inputbox").value = ""
  }else{
   document.getElementById("gaur").innerText="Enter Todo"
  }
  
}
function showoutput(){
  document.getElementById("values").innerText=""
  data.map((values,i)=>{
    let h2= document.createElement("h1")
    h2.innerText = i+1


    let big1 = document.createElement("div")
    big1.setAttribute("id","big1")
  
    let h1= document.createElement("h1")
    h1.innerText = values
    let btndelete = document.createElement("button")
    btndelete.addEventListener("click",()=>{
      valuesdelete(values)    
    })
    btndelete.innerText= "Done"
    btndelete.setAttribute("id","deletebtn")
    big1.append(h2,h1,btndelete)
    
  
    document.getElementById("values").append(big1)
  })
}

function valuesdelete(values){
 data = data.filter((dl)=> dl!= values)
localStorage.setItem("data", JSON.stringify(data)); 
showoutput()
}
showoutput()
