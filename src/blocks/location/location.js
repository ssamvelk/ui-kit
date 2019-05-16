//- Функция ymaps.ready() будет вызвана, когда
//- загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    //- Создание карты.
    var myMap = new ymaps.Map('map', {
        
        center: [37.79756851, -122.40899758],// Координаты центра карты.        
        zoom: 15,
        controls: [],

    });
    myMap.behaviors.disable('scrollZoom');//отключаем зум


    var CustomLayoutClass = ymaps.templateLayoutFactory.createClass(
        '<div class="location__balloon" id="location__balloon" style="">'+
        '<span>Meet us!</span>'+
        '<p>1259  CALIFORNIA ST<br>San Francisco, CA</p>'+
        '<img class="location__pin" src="/src/img/target.svg">'+
        '<img class="location__myLocation" src="/src/img/Icon-Pin.svg">'+            
        '</div>'
    );



    //------------------------Метка
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        //hintContent: 'Собственный значок метки',
        name: '',
        //autoPanDuration : 1000000
    }, 
    {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './src/img/Shape.png',
        // Размеры метки.
        iconImageSize: [59, 60],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        //iconImageOffset: [-155, 0],
        
        //draggable: true,
        hasHint: false,
        hideIconOnBalloonOpen: false,
        balloonAutoPan: false,
        balloonCloseButton: false,
        //balloonLayout: false,
        balloonShadow: false,
        balloonOffset: [-250, 150],
        balloonPane: 'balloon',
        //balloonContentLayout: CustomLayoutClass
        /*balloonContent: 
        [
            '<div class="location__balloon" id="location__balloon">'+
            '<span>Meet us!</span>'+
            '<p>1259  CALIFORNIA ST<br>San Francisco, CA</p>'+
            '<img class="location__pin" src="/src/img/target.svg">'+
            '<img class="location__myLocation" src="/src/img/Icon-Pin.svg">'+            
            '</div>'
        ],*/
    });


    myMap.geoObjects
        .add(myPlacemark)

    //myMap.Placemark.balloonContent = '111';
}




// Создание независимого экземпляра балуна и отображение его в центре карты.
//var balloon = new ymaps.Balloon(myMap);
// Здесь родительскими устанавливаются опции карты,
// где содержатся значения по умолчанию для обязательных опций.
//balloon.options.setParent(myMap.options);
    // Открываем балун в центре карты.
//balloon.open(myMap.getCenter());
        //options.closeButton: false,
        /* 
            balloonContentBody: [
            '<div class="location__balloon">',
            '<span>Meet us!</span>',
            '<img class="location__myLocation" src="/src/img/Icon-Pin.svg">',
            '<img class="location__pin" src="/src/img/target.svg"">',
            '<p>1259  CALIFORNIA ST<br>San Francisco, CA</p>',
            '</div>'
        ].join('')
        },

        */


    