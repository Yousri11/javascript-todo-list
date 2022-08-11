let a=document.querySelector("input")
let b=document.querySelector("button")
let pf=document.querySelector(".all2")
let nb=localStorage.length;
let y=new Map();


for(let i=0;i<localStorage.length;i++)
{
   let c=document.createElement("div")
      let d=document.createElement("div")
      c.setAttribute("class","idk")
      d.setAttribute("class","j")
      let e=document.createElement("p")
      e.innerHTML=localStorage.key(i);
      d.appendChild(e);
      c.appendChild(d);
      let f=document.createElement("button")
      let h=document.createTextNode("delete")
      f.setAttribute("id",i);
      f.appendChild(h)
      c.appendChild(f);
      pf.appendChild(c);
      f.onclick=function(){
         pf.removeChild(c)
         localStorage.removeItem(e.innerHTML)
      }
}
b.onclick=function(){
   if(a.value!==""){
      nb++;
      let c=document.createElement("div")
      let d=document.createElement("div")
      c.setAttribute("class","idk")
      d.setAttribute("class","j")
      let e=document.createElement("p")
      e.innerHTML=a.value;
      d.appendChild(e);
      c.appendChild(d);
      let f=document.createElement("button")
      let h=document.createTextNode("delete")
      f.setAttribute("id",nb);
      f.appendChild(h)
      c.appendChild(f);
      pf.appendChild(c);
      localStorage.setItem(a.value,a.value)
      
      a.value="";
      
   }
}
