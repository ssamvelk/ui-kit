  $( function() {
    $( "#datepicker" ).datepicker(
      {

        //dayNames: [ "Понедельник", "Вторник", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
        dayNamesMin: [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ],
        firstDay: 1,
        dateFormat: "dd-mm-yy",
        showButtonPanel: true,
        currentText: 'Today',
        //closeText: "Close",
        showOtherMonths: true
        
        
      }
    );
  } );

  
  //$('#datepicker').datepicker($.datepicker.regional["ru"]);
/*  
  $( function() {
    $( "#draggable" ).draggable();
    $( "#slider" ).slider();
    console.log('JQ Привет!');
  } );


*/
