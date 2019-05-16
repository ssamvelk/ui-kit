let list = document.querySelector('.stage__list'),
    items = document.querySelectorAll('.stage__item');


    function stageTogle (){
        if (!this.classList.contains('stage__item--active')){//если неактивен
            
                for(i= this.getAttribute("value")-1; i>=0; i--){
                    //alert(this.getAttribute("value"));
                    items[i].classList.add('stage__item--active');    
                    
                } 
        }
        else {//если активен
            for(i=this.getAttribute("value")-1; i<items.length; i++){
                items[i].classList.remove('stage__item--active');
            }
        }
        
    };


 for (i=0; i<items.length; i++){
    items[i].onclick= stageTogle;
 }
