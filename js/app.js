$(document).ready(function() {
  var paragraph = $('p'); // siempre en comillas simples, no se usan comilla dobles en js ni en jquery solo se usan en html
  var parrafo1 = paragraph[0];
  // usando metodos jquery en elemento dom no funcionan
  // var parrafoIncorrect = paragraph[0].text(); // esto va a lanzar error

  // esto si va a funcionar porqeu el signo de dolar convierte el elemento dom a elemento jquery y solo ellos hacen funcionar los metodos jquerys, no va ntre comillas porque es una variable
  var parrafoCorrect = $(paragraph[0]).text();

  // DISCLAIMER
  // con esto se van a onsolear todos los valores de los parrafos juntos porque ahora mismo es un objetos jquery porque paragraph es $('p')
  console.log(paragraph.text());


  // para seleccionar un elemento por jQuery
  // eq es un metodo jquery para seleccionar un elemento empieza desde 0
  console.log(paragraph.eq(0).text());

  // cambiando los textos de los parrafos
  paragraph.eq(0).text('maaaaa');
  paragraph.eq(1).text('papap');
  paragraph.eq(2).text('pollosss');
  paragraph.eq(3).text('papas');


  // devuelve  el objeto de hijos de ul
  console.log($('ul').children());
  console.log($('li'));
  // seleccionando al ul al primer hijo -devuelve un elemento dom
  // no es recomendable acceder con [0] por que devuelve un elemento dom y sera dificil acceder al valor
  // es mejor usar eq(0)
  console.log($('ul').children()[0]);

  // wrap() para envolver elementos dentro de otro elemento -


  // añadiendo una clase a un elemeto
  var  list = $('ul').children();


// se debe crear la clase al elemento jquery no al nodo
  // console.log(list.eq(0).text().addClass('verde')); //no funciona por que esta dirigido al nodo textos
  console.log(list.eq(0).addClass('verde').text()); // si funciona porque la clase se aplica al elemento jquery 


});
