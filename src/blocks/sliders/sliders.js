let i = document.querySelector('.slider--red'),
    o = document.querySelector('.slider__popper'),
    input = document.querySelector('.slider--blue'),
    per;

o.innerHTML = i.value;

i.oninput = function(){
    o.innerHTML = this.value;
    per = (i.value*2.6)-7-(i.value*0.2);
    o.style.left = per.toString() + "px";
    i.attributes.value = this.value;
};

input.setAttribute("step", "25");
input.oninput = function () {
    input.setAttribute("value", this.value); //-идентично input.attributes.value
};


/*
    $(function(){
        let i = this.value;
        $( "#result-polzunok" ).text($(".slider" ).attr("i"));
    
        //$('#slider').slider();
    
        $('h1').css('color', 'blue');
    
    });

} 

/*
                br
                div(id="slider")
                script
                    include ../blocks/sliders/sliders.js 





console.log(this.value)
                    */

                    /*
function Val() {
    let i = document.querySelector('.slider--red'),
        o = document.querySelector('.slider__popper'),
        per;

        per = (i.value*2.6)-7-(i.value*0.2);

        o.innerHTML = i.value;
    
    // use 'change' instead to see the difference in response
    i.addEventListener('oninput', function () {
        o.innerHTML = i.value;        
    }, false);
    o.style.left = per.toString() + "px"; 
        //console.log(per);    
}
*/
