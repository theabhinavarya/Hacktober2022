
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    
    counter.innerHTML='0';

    function updateCounter(){
        const target = Number(counter.getAttribute('data-target'));
        const c = Number(counter.innerHTML);
        const increment = target / 200;
        console.log(c);

        if (c < target) {
            counter.innerHTML=`${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }else{
            counter.innerHTML=target;
        }
    }
    updateCounter();
});

