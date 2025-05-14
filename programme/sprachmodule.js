//##################################################################################



if (unterrichtssprache=="spanisch") {

var spracheintrag_menu= new Array();
spracheintrag_menu[0]= "Por favor, elija lección:";
spracheintrag_menu[1]= "Selección de lecciones";
spracheintrag_menu[2]= "Aviso legal";
spracheintrag_menu[3]= "INSTRUCCIONES";
spracheintrag_menu[4]= "Instrucciones";
spracheintrag_menu[5]= "Estudiar correctamente";
spracheintrag_menu[6]= "Empiece así";
spracheintrag_menu[7]= "Ajustes de audio";
spracheintrag_menu[8]= "Preguntas frecuentes";
spracheintrag_menu[9]= "Curso";
spracheintrag_menu[10]= "LEER";
spracheintrag_menu[11]= "Lista";
spracheintrag_menu[12]= "Quick-Show";
spracheintrag_menu[13]= "Búsqueda";
spracheintrag_menu[14]= "ESTUDIAR";
spracheintrag_menu[15]= "Lista de ejercicios oculta";
spracheintrag_menu[16]= "Estudiar sólo";
spracheintrag_menu[17]= "Fichas";
spracheintrag_menu[18]= "TESTS";
spracheintrag_menu[19]= "¡Test!";
spracheintrag_menu[20]= "Elección variada";
spracheintrag_menu[21]= "Repaso relámpago";
spracheintrag_menu[22]= "Dictado";
spracheintrag_menu[23]= "MÉTODO A LARGO PLAZO";
spracheintrag_menu[24]= "MÉTODO A LARGO PLAZO ULTRA";
spracheintrag_menu[25]= "Entrada de texto";
spracheintrag_menu[26]= "Final de la palabra";
spracheintrag_menu[27]= "Texto";
spracheintrag_menu[28]= "Menú principal";
spracheintrag_menu[29]= "Términos";
spracheintrag_menu[30]= "Gramática";
spracheintrag_menu[31]= "Ejercicios";
spracheintrag_menu[32]= "Repaso de gramática";
spracheintrag_menu[33]= "Diccionario+búsqueda";
spracheintrag_menu[34]= "Términos ocultos";
spracheintrag_menu[35]= "Lista de vocabulario";
spracheintrag_menu[36]= "Texto oculto";
spracheintrag_menu[37]= "Texto con vacíos 1";
spracheintrag_menu[38]= " Texto con vacíos 2";
spracheintrag_menu[39]= " Texto con vacíos 1-test";
spracheintrag_menu[40]= " Texto con vacíos 2-test";
spracheintrag_menu[41]= "Ensalada de palabras";
spracheintrag_menu[42]= " - Curso básico";
spracheintrag_menu[43]= " - Curso para viajar";
spracheintrag_menu[44]= " - Curso avanzado";
spracheintrag_menu[45]= " - Curso para negocios";
spracheintrag_menu[46]= " - Curso de gramática";
spracheintrag_menu[47]= " - Curso de conversación";
spracheintrag_menu[48]= "Audio automático";
spracheintrag_menu[49]= "Audio no automático";
spracheintrag_menu[50]= "Sólo lección";
spracheintrag_menu[51]= "Todas las lecciones";
spracheintrag_menu[52]= "Ambos";
spracheintrag_menu[53]= "anverso";
spracheintrag_menu[54]= "reverso";
spracheintrag_menu[55]= "Sí, lo sé.";
spracheintrag_menu[56]= "¡Mostrar soluciones!";
spracheintrag_menu[57]= "No, no lo sé";
spracheintrag_menu[58]= "Texto con vacíos";
spracheintrag_menu[59]= "Lección";
spracheintrag_menu[60]= "Texto";
spracheintrag_menu[61]= " - Vocabulario especializado";


var spracheintrag_ueberschrift= new Array(
""
);

var spracheintrag_anleitung= new Array(
""
);

var spracheintrag_hinweis= new Array();
spracheintrag_hinweis[0]= "Correcto: ";
spracheintrag_hinweis[1]= "Incorrecto: ";
spracheintrag_hinweis[2]= " Ronda: ";
spracheintrag_hinweis[3]= "<br>Duración del estudio hasta aquí: ";
spracheintrag_hinweis[4]= "Por favor, haga una pausa de cinco minutos";
spracheintrag_hinweis[5]= "--- Por favor, elija: ---";
spracheintrag_hinweis[6]= "¡Lo ha completado todo!";
spracheintrag_hinweis[7]= " desde ";
spracheintrag_hinweis[8]= "Incorrecto: ";
spracheintrag_hinweis[9]= "¡Muchas felicidades!";
spracheintrag_hinweis[10]= "Duración del estudio:";
spracheintrag_hinweis[11]= "Minutos";
spracheintrag_hinweis[12]= "(Cuenta como erróneo porque la solución estaba insertada)";
spracheintrag_hinweis[13]= "Piense enseguida en un ejemplo para cada capítulo de la gramática. Con esto aprenderá gramática con mucha más facilidad.";
spracheintrag_hinweis[14]= "Lección";	
spracheintrag_hinweis[15]= "Todas las lecciones";
spracheintrag_hinweis[16]= "Breve repaso de los últimos siete errores introducidos";
spracheintrag_hinweis[17]= "¡Ponga en el orden correcto!&nbsp;<br>&nbsp;Für \"(1)hacia (2)casa (3)él (4)va\"<br>&nbsp;Simplemente introdúzcalo \"3412\"";
spracheintrag_hinweis[18]= "Combinaciones de teclado útiles:";
spracheintrag_hinweis[19]= "Return&gt;</span> &nbsp; evaluar respuesta<br>&nbsp;<span>%</span>  &nbsp; borrar respuesta<br>&nbsp;<span>&gt;</span> &nbsp; Próxima palabra<br>&nbsp;<span>=</span> &nbsp; Mostrar solución<br>&nbsp;<span>Campo vacío</span> und <span>&lt;Return&gt;</span>: Mostrar solución<p>Cuando sitúe el puntero encima de las palabras,<br> se marcarán con colores distintos. <br>Usted estudia con una \"óptica\" especial de las palabras, <br>los colores le pueden servir  <br>como regla mnemotécnica para estudiar.<br>Cuanto más clara sea una vocal, más claro será su color.<p>Cuando tenga dos posibilidades para una palabra<br>y no sepa seguro cuál es la correcta,&nbsp;<br>  escriba las dos. El programa elegirá<br>entonces la solución correcta.";
spracheintrag_hinweis[20]= "Instrucciones para el resumen relámpago:&nbsp;</b></td></tr><tr><td><table width=100% bgcolor=FFFFFF cellspacing=0 border=0 cellpadding=3><font face='verdana,tahoma,arial,helvetica' size=2 color=FFFFFF><p>&nbsp;1. Piense cuál debe de ser la solución correcta&nbsp;<br>&nbsp; &nbsp; &nbsp;(reflexione sobre la respuesta)&nbsp;<br>&nbsp;2. Haga clic sobre  'Mostrar soluciones'<br>&nbsp;3. Decida sinceramente si su respuesta<br>&nbsp;&nbsp; &nbsp; es correcta o falsa y haga clic sobre <br>&nbsp;&nbsp; &nbsp; 'Sí, la sabía' oder  'No, no la sabía'<br>&nbsp;4. Si prefiere hacer el test con el teclado, <br>&nbsp;&nbsp; &nbsp; puede usar las combinaciones 'Alt'+1, 'Alt'+2 y 'Alt'+3 <br>&nbsp;&nbsp; &nbsp; ('Ctrl' statt 'Alt' unter Mac OS X).";
spracheintrag_hinweis[21]= "breve repaso";
spracheintrag_hinweis[22]= "En este apartado puede repasar las siete últimas respuestas incorrectas.\\n&nbsp;\\Para estudiar mejor, ponga \\nel cursor encima de los campos que quiere ocultar.\\n Un nuevo clic hará los campos de nuevo visibles.";
spracheintrag_hinweis[23]= "Minutos";
spracheintrag_hinweis[24]= "¡Se ha equivocado en el orden!";
spracheintrag_hinweis[25]= "Nr."; //Número, abreviado
spracheintrag_hinweis[26]= "Hoy se repetirá"; //Satz heißt: wird heute noch 1x, 2x oder 3x wiederholt
spracheintrag_hinweis[27]= "vez/veces.";
spracheintrag_hinweis[28]= "¡En la memoria a largo plazo!";
spracheintrag_hinweis[29]= "Nivel"; // im Sinne von Level, Ebene
spracheintrag_hinweis[30]= "y ninguna pausa";
spracheintrag_hinweis[31]= "y un día de pausa";
spracheintrag_hinweis[32]= "y";
spracheintrag_hinweis[33]= "día de pausa"; //y 5 días de pausa
spracheintrag_hinweis[34]= "Incorrecto";
spracheintrag_hinweis[35]= "La entrada se borrará <br>y usted ya no tiene que estudiarla más.";
spracheintrag_hinweis[36]= "Español"; // Hier Unterrichtssprache eintragen (English, Francais, Türkiye)
spracheintrag_hinweis[37]= "¡Ha cambiado de lengua!";
spracheintrag_hinweis[38]= "Hoy repase";
spracheintrag_hinweis[39]= " Entradas. <br>Cuántas <b>nuevas</b> entradas quiere usted estudiar <b>adicionalmente</b> hoy?";
spracheintrag_hinweis[40]= "Por favor, active las cookies (En herramientas/opciones/privacidad)";
spracheintrag_hinweis[41]= "En su memoria a largo plazo se encuentran desde hoy";
spracheintrag_hinweis[42]= "Entradas, <br>en total son";
spracheintrag_hinweis[43]= "¡Muchas felicidades. Lo ha resuelto todo!";
spracheintrag_hinweis[44]= "Se encuentra ya en el nr.";
spracheintrag_hinweis[45]= "Valoración:";
spracheintrag_hinweis[46]= "(serán sustituidos la próxima vez)";
spracheintrag_hinweis[47]= "(introducir 1 más)";
spracheintrag_hinweis[48]= "(introducir 2 más)";
spracheintrag_hinweis[49]= "(introducir 3 más)";
spracheintrag_hinweis[50]= "(introducir 4 más)";
spracheintrag_hinweis[51]= "(introducir 5 más)";
spracheintrag_hinweis[52]= "Su código para poder seguir estudiando mañana:";
spracheintrag_hinweis[53]= "Este código se grabará como una cookie en su ordenador.";
spracheintrag_hinweis[54]= "Búsqueda en todo el texto";
spracheintrag_hinweis[55]= "Por favor, introduzca su código de inicio";
spracheintrag_hinweis[56]= "o, si empieza por primera vez en absoluto, la cantidad de términos:";
spracheintrag_hinweis[57]= "Por favor, elija:";
spracheintrag_hinweis[58]= "Cuántas <b>nuevas</b> entradas quiere estudiar hoy <b>adicionalmente</b>?";
spracheintrag_hinweis[59]= "correcto";
spracheintrag_hinweis[60]= "terminado"; // finished
spracheintrag_hinweis[61]= "en curso"; // ongoing
spracheintrag_hinweis[62]= "Usted tiene una"; // (Anzahl der Tage)
spracheintrag_hinweis[63]= "días y aprendido"; //(5 Stunden) 
spracheintrag_hinweis[64]= "completamente";
spracheintrag_hinweis[65]= "Se trata de la media"; // (5 Stunden)
spracheintrag_hinweis[66]= "cada día";
spracheintrag_hinweis[67]= "Por todos los días, estaban "; // (12 Sekunden)
spracheintrag_hinweis[68]= "segundos para cada palabra.";
spracheintrag_hinweis[69]= "Startcode";
spracheintrag_hinweis[70]= "(No se ha encontrado ningún resultado.)";
spracheintrag_hinweis[71]="Tipp:";
spracheintrag_hinweis[72]="";
spracheintrag_hinweis[73]="";
spracheintrag_hinweis[74]="";
spracheintrag_hinweis[75]="";
spracheintrag_hinweis[76]="";
spracheintrag_hinweis[77]="";
spracheintrag_hinweis[78]="";
spracheintrag_hinweis[79]="";
spracheintrag_hinweis[80]="";


var zitatanzahl=20;
var zitat= new Array(
"<img src=../../grafik/portrait100_001.jpg vspace=5 hspace=5><br>\"Por cierto, cuando ponga el puntero del ratón encima de las palabras, las vocales claras se destacarán con colores claros, y las ocuras con colores oscuros. Si usted es un estudiante visual, quizás esto le ayude en la memorización.\"",
"<img src=../../grafik/portrait100_002.jpg vspace=5 hspace=5><br>\"Continúe practicando!\"",
"<img src=../../grafik/portrait100_003.jpg vspace=5 hspace=5><br>\"¡No está nada mal!\"",
"<img src=../../grafik/portrait150_38.jpg vspace=5 hspace=5><br>\"¡Esto va muy bien!\"",
"<img src=../../grafik/portrait100_005.jpg vspace=5 hspace=5><br>\"¡Ha funcionado bien!\"",
"<img src=../../grafik/portrait150_32.jpg vspace=5 hspace=5><br>\"Para estudiar mejor, ponga el puntero del ratón encima de los campos que quiere ocultar. Un nuevo clic hará que los campos sean visibles de nuevo.\"",
"<img src=../../grafik/portrait150_005.jpg vspace=5 hspace=5><br>\"¡Es usted genial!\"",
"<img src=../../grafik/portrait150_033.jpg vspace=5 hspace=5><br>\"¡Hoy es realmente su día para estudiar!\"",
"<img src=../../grafik/portrait100_009.jpg vspace=5 hspace=5><br>\"Si continúa estudiando a este ritmo, acabará el curso muy pronto!\"",
"<img src=../../grafik/portrait150_030.jpg vspace=5 hspace=5><br>\"¡Muy bien!\"",
"<img src=../../grafik/portrait100_011.jpg vspace=5 hspace=5><br>\"¡Siga así!!\"",
"<img src=../../grafik/portrait150_027.jpg vspace=5 hspace=5><br>\"¡Lo tiene dominado!\"",
"<img src=../../grafik/portrait100_013.jpg vspace=5 hspace=5><br>\"Repase las últimas siete palabras. El estudio de grupos de siete palabras es más efectivo que con cualquier otra cantidad de palabras!\"",
"<img src=../../grafik/portrait150_011.jpg vspace=5 hspace=5><br>\"¡Qué bárbaro!\"",
"<img src=../../grafik/portrait150_029.jpg vspace=5 hspace=5><br>\" Por cierto, en el test no siempre lo tiene que introducir todo de forma completamente exacta para que la respuesta cuente como correcta. Los sognos de puntuación, paréntesis, los espacios en blanco y las mayúsculas y minúsculas erróneos se ignorarán. En los términos con dos posibilidades, puede introducir 'palabra 2, palabra1' en lugar de 'palabra 1, palabra2'.\"",
"<img src=../../grafik/portrait150_028.jpg vspace=5 hspace=5><br>\"¡Nos quitamos el sombrero! ¡Es usted el campeón del estudio! \"",
"<img src=../../grafik/portrait100_021.jpg vspace=5 hspace=5><br>\"¡Siga así. Lo hace muy bien!\"",
"<img src=../../grafik/portrait150_025.jpg vspace=5 hspace=5><br>\"¡Perfecto. Siga así!\"",
"<img src=../../grafik/portrait150_021.jpg vspace=5 hspace=5><br>\"¡Esto va bien por hoy!\"",
"<img src=../../grafik/portrait150_022.jpg vspace=5 hspace=5><br>\"¡Según nuestra opinión, hace usted grandes progresos!\""
);


var expresskurs_ueberschrift= new Array(
"",
"Saludos",
"Lo más importante",
"Presentarse",
"Emergencia",
"Defensas",
"Búsqueda",
"Direcciones",
"Hotel",
"Dinero",
"Comida",
"Preguntas",
"Comunicación",
"Compra",
"Coche",
"Taxi",
"Autobús y tren",
"Visitas",
"Pagar",
"Enfermedades",
"Tiempo",
"Colores"
);

var grammatikkapitel= new Array(
"","Sobre la lengua","Artículo","Substantivos","Adjetivos &amp; Adverbios","Verbos",
"Pronombres","Construcción de la frase","Útil","Pagar");
}


var business_ueberschrift_a= new Array(
"",
"Al Teléfono I",
"Al Teléfono II",
"Al Teléfono III",
"Al Teléfono IV",
"Carta de negocios I",
"Carta de negocios II",
"E-Mail I",
"E-Mail II",
"El Fax",
"Charlar I",
"Charlar II",
"Charlar III",
"Citas",
"Pedidos",
"Conseguir información",
"Reuniones",
"Formularios",
"Solucionar problemas"
);

var business_ueberschrift_b= new Array(
"",
"Prácticas",
"Solicitud I",
"Solicitud II",
"Curriculum",
"Entrevista de trabajo I",
"Entrevista de trabajo",
"Solicitud III",
"Organización empresarial",
"Mobiliario de oficina",
"Trabajar con el ordenador I",
"Trabajar con el ordenador II"
);

var business_ueberschrift_c= new Array(
"",
"Comunicación I",
"Comunicación II",
"Proyecto de trabajo I",
"Proyecto de trabajo II",
"Contactar con clientes I",
"Contactar con clientes II",
"Feria I",
"Feria II",
"Conferencia",
"Viaje de negocios",
"Comida de negocios",
"Reclamación",
"Aviso"
);

//##################################################################################

