const labels=document.querySelectorAll(".form-control label");
// console.log(labels);

labels.forEach((label)=>{
    // console.log(label.innerText.split()); //split method
    // console.log(label.innerText.split("")) //double quote in split()

    label.innerHTML=label.innerText
        .split("")
        .map((letter,index)=>
        `<span style="transition-delay: ${index * 50}ms">${letter}</span>`).join("")

        console.log(label.innerHTML);
})