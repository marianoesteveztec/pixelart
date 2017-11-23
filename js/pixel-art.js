var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');
var $indicadorDeColor = $('#indicador-de-color');
var $balde = $("#balde-de-color");

    $colorPersonalizado.change(function() {
      // Se guarda el color de la rueda en colorActual
      var colorActual = $colorPersonalizado.val();
      // Completar para que cambie el indicador-de-color al colorActual
      $indicadorDeColor.css("background-color",colorActual);
      $balde.css("background-color",colorActual);
    });


// Mi Codigo

  var $paleta = $("#paleta");
  var $grillaPixeles = $("#grilla-pixeles");
  var clickStatus = false;

/*  función para generar la paleta de colores. Ingreso nombresDeColor,
  y por cada color crear un elemento div y asigna un background-color: color
  y la clase color-paleta.*/

      function generarColorPaleta(item) {
          var $nuevoDiv =$  ('<div>',
                            { "class":'color-paleta'}
                            );
          $nuevoDiv.css("background-color",item)
          $paleta.append($nuevoDiv);
      };

   /*Creá una función para generar la grilla de píxeles donde el usuario va a dibujar.*/

      function grillaPixeles(){
          for (var i = 0; i < 1749; i++) {
            var $nuevoPixel = $('<div>');
            $grillaPixeles.append($nuevoPixel);
        }
      };

    /*seleccionar un color de la paleta. Al hacer clic en algún color, el indicador-de-color cambie y refleje la selección.*/

    function seleccionarColor(){
      $indicadorDeColor.css("background-color",$(this).css("background-color"));
      $balde.css("background-color",$(this).css("background-color"));
    };

    /* El usuario pueda pintar un píxel al hacer clic en un cuadrado de la grilla.*/

    function pintarPixel(event){
      $(event.target).css("background-color",$indicadorDeColor.css("background-color"));
    };


    //Clickeo pixel
    function clickDown(){
      clickStatus = true;
      //console.log("trueee");
    }

    //Suelto pixel
    function clickUp(){
      clickStatus = false;
      //console.log("falsee");
    }

    function pintarArrastre(event){
      if (clickStatus) {
          pintarPixel(event);
      }
    };

    function borrarTodo(){
      var limpiar = window.confirm("Seguro que quiere limpiar la grilla?");
      if(limpiar){
        $("#grilla-pixeles").css("background-color","White").fadeOut( );
        $("#grilla-pixeles div").css("background-color","White");
        $("#grilla-pixeles").css("background-color","White").fadeIn();
      }
    };

      //pintar balde
      function pintarBalde(){
        $("#grilla-pixeles div").css("background-color",$balde.css("background-color")).fadeIn();
      }

    /* Ejecutar funciones - MAIN -                                             */

    //Genero paleta
      nombreColores.forEach(generarColorPaleta);
    //Genero grilla
      grillaPixeles();
      //Funcion seleccionar color paleta
      $paleta.children(".color-paleta").click(seleccionarColor);
      //Pintar en grilla
      $grillaPixeles.children("div").click(pintarPixel);
      //cambio estado ante click
      $grillaPixeles.children("div").mousedown(clickDown);
      $grillaPixeles.children("div").mouseup(clickUp);
      //veo estado y si es verdadero pinto por arrastre
      $grillaPixeles.children("div").hover(pintarArrastre,);
      //borrar todo
      $("#borrar").click(borrarTodo);
      //Save
      $("#guardar").click(guardarPixelArt);
      //cargar superheroe
	    $("#batman").click(function() {cargarSuperheroe(batman)});
	    $("#wonder").click(function() {cargarSuperheroe(wonder)});
    	$("#flash").click(function() {cargarSuperheroe(flash)});
      $("#invisible").click(function() {cargarSuperheroe(invisible)});
      //pintar balde
      $balde.dblclick(pintarBalde);
