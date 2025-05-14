
var lektionennamen= new Array;

var diese_lektion=0;
var dieser_zaehler=0;


if ( sprachkuerzel.indexOf("2") > 0) { 

lektionennamen = new Array(    
"","Saludos",
"","Lo más importante",
"","Presentarse",
"","Emergencia",
"","Defensas",
"","Búsqueda",
"","Direcciones",
"","Hotel",
"","Dinero",
"","Comida",
"","Preguntas",
"","Comunicación",
"","Compra",
"","Coche",
"","Taxi",
"","Autobús y tren",
"","Visitas",
"","Pagar",
"","Enfermedades",
"","Zeit",
"","Colores"
);



}


if ( sprachkuerzel.indexOf("2") < 0 && sprachkuerzel.indexOf("3") < 0  && sprachkuerzel.indexOf("4") < 0  && sprachkuerzel.indexOf("5") < 0 ) { 

lektionennamen = new Array(  
"","De vacaciones",
"","En el hotel",
"","En la playa",
"","El desayuno",
"","En la estación",
"","Perdido en la ciudad",
"","En la oficina de cambio",
"","En la cafetería",
"","La visita a la ciudad",
"","El pronóstico del tiempo",
"","Genial con Mary",
"","De vuelta en Inglaterra",
"","El centro deportivo",
"","Recogiendo",
"","La lista de la compra",
"","Peter cocina para Mary",
"","El piso de Peter",
"","La excursión",
"","La carta",
"","En la gasolinera",
"","Reservando un vuelo",
"","Haciendo la maleta",
"","El anillo",
"","En el aeropuerto",
"","En la joyería",
"","El sueño",
"","Almuerzo en el coche",
"","De compras",
"","Nueva ropa para Peter",
"","Cocinando",
"","El regalo de cumpleaños",
"","El accidente",
"","En la farmacia",
"","En el cine",
"","De canguro",
"","Pidiendo unos esquís nuevos",
"","El movimiento",
"","El día lluvioso",
"","El curos de idiomas",
"","La fiesta familiar",
"","Alquilando un coche",
"","Visita a los padres"
);



}

if ( sprachkuerzel.indexOf("3") > 0) {

lektionennamen = new Array(    
"","En busca de piso",
"","Una nueva cuenta",
"","Vamos a amueblar la casa",
"","Instrucciones de uso",
"","La reclamación",
"","Cocinar para los amigos",
"","En el estadio de fútbol",
"","En la montaña",
"","Fin de semana en una cabaña",
"","Una vuelta en bicicleta",
"","La picadura de avispa",
"","Ir a dormir",
"","El viaje al pueblo",
"","El viiaje a casa",
"","Las fotos de Peter",
"","La llamada",
"","La compra de un teléfono móvil",
"","Pelea",
"","El mal de amores",
"","La molestia",
"","La condena",
"","El robo",
"","En el zoo ",
"","En la sala de espera",
"","El caos circulatorio",
"","La avería",
"","La compra de un coche",
"","Cosa de negocios",
"","Érase una vez...",
"","Un desastre natural",
"","En el bar",
"","Conocerse",
"","La invitación",
"","En la ciudad",
"","El parentesco",
"","¡Se busca músico!",
"","La boda",
"","El zodíaco",
"","La lucha de poderes",
"","Una nueva vida",
"","El mercado de trabajo",
"","Trabajar en el extranjero"
);


}




if ( sprachkuerzel.indexOf("4") > 0) {

lektionennamen = new Array(    
"","Saber conversar",
"","Saber hablar",
"","Amor y coqueteo",
"","Formación y escuela",
"","Profesiones",
"","Vida social",
"","Solicitud de empleo",
"","Términos para las autoridades",
"","Finanzas",
"","Investigación y técnica",
"","Computadoras",
"","Oficios",
"","Construcción",
"","Materiales",
"","Términos de novelas policíacas",
"","Noticias y política",
"","En el hogar",
"","Cocina",
"","Alimentos 1",
"","Alimentos 2",
"","Transporte y circulación",
"","Agua, campo, aire",
"","Animales",
"","Plantas",
"","Agricultura",
"","Deporte y juegos",
"","Tiempo libre",
"","Ropa",
"","Habitar y amueblar",
"","Música",
"","Cuentos y fantasía",
"","Enfermedades, heridas",
"","Medicinas y metodos curativos",
"","El cuerpo 1",
"","El cuerpo 2",
"","Discusiones",
"","Lenguaje coloquial",
"","Familia",
"","Entorno y medio ambiente",
"","Religión",
"","Paises y regiones",
"","Guerra y paz"
);



}






while(v[dieser_zaehler])
{
 if (v[dieser_zaehler+1]>diese_lektion)
 {
   diese_lektion+=1;
   lektionennamen[(diese_lektion-1)*2]="lektion"+diese_lektion+".html";
   if ( sprachkuerzel.indexOf("2") > 0) { lektionennamen[(diese_lektion-1)*2+1]=v[dieser_zaehler+5]; }

 }
 dieser_zaehler=dieser_zaehler+6;
}


function ueberschriftname(nummerlektion)
{
document.write(spracheintrag_hinweis[14]+" "+nummerlektion+":<br>"+lektionennamen[(nummerlektion-1)*2+1]);
}


function Go(ziel,rueckzug)
{
if(ziel == "nichts")
{
document.forms[0].reset();
document.forms[0].elements[0].blur();
return;
}
else
{
var ziellektion=ziel.substring(ziel.indexOf("ktion",0)+5);
ziellektion=ziellektion.substring(0,ziellektion.indexOf(".",0));
//alert("2mmm"+ziellektion+"mmm");


if (rueckzug == 1)
{
  top.frames[0].location.href="../uebersicht/"+ziel;
  self.location="../grafik/startseite"+ziellektion+".html";
}
else
{
  top.frames[1].location="../grafik/startseite"+ziellektion+".html";
  self.location.href = ziel;
  document.forms[0].reset();
  document.forms[0].elements[0].blur();
}

}
}


