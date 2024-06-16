let num=document.querySelector(".num")
const Cbtn=document.getElementById("Cbtn")
const Fbtn=document.getElementById("Fbtn")
const output=document.getElementById("output")
const form=document.querySelector("form")
let Ans;


form.addEventListener('input',( )=>{
    let x=Number(num.value)

    if (Cbtn.checked) {
        Ans = (5/9) * (x - 32); //
        Ans=Ans.toFixed(2); Ans=parseFloat(Ans)
        output.innerHTML=`${x}°C = ${Ans}°F`
    } else if (Fbtn.checked) {
        Ans = (x * 9/5) + 32; //
        Ans=Ans.toFixed(2); Ans=parseFloat(Ans)
        output.innerHTML=`${x}°F = ${Ans}°C`
    }

})

