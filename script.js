//your JS code here. If required.
let uniqueId=1;
let inputArr=document.getElementsByTagName("input");
document.querySelector("button").addEventListener("click",()=>{
   let div=document.createElement("div");
   for(let i=0;i<inputArr.length;i++){
    if(inputArr[i].value===""){
        alert('One field is Empty');
        return;
    }
    let h5=document.createElement("h5");
    h5.textContent=inputArr[i].value;
    div.append(h5);
   }
   let but=document.createElement("button");
   div.id="a"+uniqueId;
   div.classList.add("tableh5");
   but.textContent="X";
   div.append(but);
   document.querySelector("#added-data").append(div);
   uniqueId+=1;
})
document.querySelector("#added-data").addEventListener("click",(e)=>{
  e.target.parentElement.remove();
})