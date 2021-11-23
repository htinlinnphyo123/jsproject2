const boxes=document.querySelectorAll('.box');
// console.log(box);

function checkboxes(){

    const innerheight = window.innerHeight /5 *4;
    // console.log(innerheight);

    boxes.forEach(box=>{
        // console.log(box);

    const topbox = box.getBoundingClientRect().top;
        // console.log(topbox); document top ka nay p lat shi division yae bottom or top lay ko pyw tr

    if (topbox<innerheight){
        box.classList.add('show');
    }else{
        box.classList.remove('show');
    }
    });
}
checkboxes();

window.addEventListener('scroll',checkboxes);