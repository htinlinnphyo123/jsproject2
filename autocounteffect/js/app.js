const counters = document.querySelectorAll(".counter");
// console.log(counters);

counters.forEach(counter=>{
   
    counter.innerText ="0";


    const updatecounter=()=>{
        // console.log("hey")

    const target = Number(counter.getAttribute("data-target"));
    // console.log(typeof target,target);

    const ctr= Number(counter.innerText);
    // console.log(typeof ctr,ctr);

    const increment = target / 100 ;


    if(ctr<target){
        counter.innerText=ctr + increment;

        setTimeout(updatecounter,50);
    }
    // const increment=target/100;
    // // console.log(increment);

    // if(ctr<target){
    // counter.innertext=mathctr+increment;

    // setTimeout(updatecounter,10);
    // };
    // };

};
updatecounter();

});
