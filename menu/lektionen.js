
var lektionennamen= new Array;

var diese_lektion=0;
var dieser_zaehler=0;


if ( sprachkuerzel.indexOf("2") > 0) { 

lektionennamen = new Array(    
"","Saludos",
"","Lo m�s importante",
"","Presentarse",
"","Emergencia",
"","Defensas",
"","B�squeda",
"","Direcciones",
"","Hotel",
"","Dinero",
"","Comida",
"","Preguntas",
"","Comunicaci�n",
"","Compra",
"","Coche",
"","Taxi",
"","Autob�s y tren",
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
"","En la estaci�n",
"","Perdido en la ciudad",
"","En la oficina de cambio",
"","En la cafeter�a",
"","La visita a la ciudad",
"","El pron�stico del tiempo",
"","Genial con Mary",
"","De vuelta en Inglaterra",
"","El centro deportivo",
"","Recogiendo",
"","La lista de la compra",
"","Peter cocina para Mary",
"","El piso de Peter",
"","La excursi�n",
"","La carta",
"","En la gasolinera",
"","Reservando un vuelo",
"","Haciendo la maleta",
"","El anillo",
"","En el aeropuerto",
"","En la joyer�a",
"","El sue�o",
"","Almuerzo en el coche",
"","De compras",
"","Nueva ropa para Peter",
"","Cocinando",
"","El regalo de cumplea�os",
"","El accidente",
"","En la farmacia",
"","En el cine",
"","De canguro",
"","Pidiendo unos esqu�s nuevos",
"","El movimiento",
"","El d�a lluvioso",
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
"","La reclamaci�n",
"","Cocinar para los amigos",
"","En el estadio de f�tbol",
"","En la monta�a",
"","Fin de semana en una caba�a",
"","Una vuelta en bicicleta",
"","La picadura de avispa",
"","Ir a dormir",
"","El viaje al pueblo",
"","El viiaje a casa",
"","Las fotos de Peter",
"","La llamada",
"","La compra de un tel�fono m�vil",
"","Pelea",
"","El mal de amores",
"","La molestia",
"","La condena",
"","El robo",
"","En el zoo ",
"","En la sala de espera",
"","El caos circulatorio",
"","La aver�a",
"","La compra de un coche",
"","Cosa de negocios",
"","�rase una vez...",
"","Un desastre natural",
"","En el bar",
"","Conocerse",
"","La invitaci�n",
"","En la ciudad",
"","El parentesco",
"","�Se busca m�sico!",
"","La boda",
"","El zod�aco",
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
"","Formaci�n y escuela",
"","Profesiones",
"","Vida social",
"","Solicitud de empleo",
"","T�rminos para las autoridades",
"","Finanzas",
"","Investigaci�n y t�cnica",
"","Computadoras",
"","Oficios",
"","Construcci�n",
"","Materiales",
"","T�rminos de novelas polic�acas",
"","Noticias y pol�tica",
"","En el hogar",
"","Cocina",
"","Alimentos 1",
"","Alimentos 2",
"","Transporte y circulaci�n",
"","Agua, campo, aire",
"","Animales",
"","Plantas",
"","Agricultura",
"","Deporte y juegos",
"","Tiempo libre",
"","Ropa",
"","Habitar y amueblar",
"","M�sica",
"","Cuentos y fantas�a",
"","Enfermedades, heridas",
"","Medicinas y metodos curativos",
"","El cuerpo 1",
"","El cuerpo 2",
"","Discusiones",
"","Lenguaje coloquial",
"","Familia",
"","Entorno y medio ambiente",
"","Religi�n",
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


