const codes=document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code,index)=>{

    code.addEventListener('keydown',(e)=>{

        if(e.key>=0 && e.key<=9) {

            // codes[index +1].focus();

            codes[index].value = "";

            if (index !== 5) {
                setTimeout(() => codes[index + 1].focus(), 10);
            };

        }else if(e.key === 'Backspace'){

            if(index!==0){
                setTimeout(()=>codes[index-1].focus(),10);
            }
        }

    })
})

const name=["john","doe","simon","John","java","jack","tesn","Simon"];

function removeDuplicate(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(!newArray.includes(arr[i].toLowerCase()));
        newArray.push(arr[i].toLowerCase());

        return newArray;
    }

    console.log(removeDuplicate(name));


}