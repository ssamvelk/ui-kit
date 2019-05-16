let selectButton = document.querySelector('.form-elem__select-lbl'),
    selectList = document.querySelector('.form-elem__select-list'),
    selectMainFild = document.querySelector('.form-elem__select'),
    selectItems = document.querySelectorAll('.form-elem__select-item');

    console.log(selectButton);

//lbl.setAttribute('lll', 111);
selectButton.addEventListener('click', function(){
    //alert(111); элемент.classList.toggle('класс'); элемент.classList.contains('класс');
        selectList.classList.toggle('select-list--disabled');
});


selectList.onclick = function(event){
    let target = event.target;
    selectMainFild.value = target.innerHTML;
    selectList.classList.toggle('select-list--disabled');
}
