// Copyright: www.sprachenlernen24.de, Udo Gollub, München 


var ta_aufg = new Array; var ta_start = new Array; var kekse = new Array; var ta_stats1 = new Array; 
var ta_spitzname = ""; var ta_spitznameoriginal = "";
var ta_sprache = "";
var ta_kursart = "";
var ta_lerntagnr = 1;
var ta_punkte = 0;
var ta_datum = "";
var ta_vokabelnr = 0;
var ta_textlektionnr = 1;
var ta_8 = "";
var ta_langzeitstunden = 0;
var ta_restminuten = 0;
var ta_ausgabe=""; var ta_startdatum="";
var ta_stufe=0; var ta_stufex=0; var ta_stufey=0;
var ta_aufgabe=0; var ta_statsges1=0; var prozentx=0; var prozenty=0; var ta_proz=0;
var ta_niveau="";
var ta_cookie = ""; var ta_tagesaufgabekeks = "";
var ta_build="2012_02_15";
var ta_tageinfolgegelernt=1; var tageinfolgetext=""; var tageinfolgezusatzmeilen=0;




var sonderbonustexte= new Array(
"Wenn Sie heute mindestens 20 neue Vokabeln lernen, erhalten Sie + 30 Sondermeilen. Wenn Sie sogar mindestens 30 neue Vokabeln lernen, erhalten Sie + 50 Sondermeilen geschenkt!", //0
"Heute erhalten Sie DOPPELTE Sondermeilen für jedes neu gelernte Wort; bei mehr als 20 neuen Vokabeln sogar die DREIFACHEN Sondermeilen fürs Vokabellernen geschenkt.", //1
"Heute erhalten Sie von uns 10 Sondermeilen geschenkt!", //2
"Langzeitgedächtnis-Lerntag: Für jedes Wort, das heute in Ihrem Langzeitgedächtnis (Stufe 0) landet, erhalten Sie + 3 Sondermeilen geschenkt!", //3
"Wenn Sie heute mindestens eine Viertelstunde lernen, erhalten Sie + 30 Sondermeilen. Wenn Sie heute mindestens eine halbe Stunde lernen, erhalten Sie sogar + 50 Sondermeilen geschenkt!", 
"Wenn Sie heute mindestens 20 Minuten lernen, erhalten Sie + 20 Sondermeilen geschenkt!", 
"Wenn Sie heute mindestens 15 neue Vokabeln lernen, erhalten Sie + 20 Sondermeilen geschenkt!", 
"Langzeitgedächtnis-Lerntag: Für jedes Wort, das heute in Ihrem Langzeitgedächtnis (Stufe 0) landet, erhalten Sie + 5 Sondermeilen geschenkt!", 
"Heute erhalten Sie von uns 15 Sondermeilen geschenkt!", 
"Wenn Sie heute mindestens 10 neue Vokabeln lernen, erhalten Sie + 10 Sondermeilen. Wenn Sie sogar mindestens 20 neue Vokabeln lernen, erhalten Sie + 30 Sondermeilen geschenkt!", 
"Wenn Sie heute mindestens 5 Minuten lernen, erhalten Sie + 10 Sondermeilen geschenkt!", //10
"Fortgeschrittene Lerner: Wenn Sie insgesamt mindestens 200 Vokabeln gelernt haben, erhalten Sie heute doppelte Sondermeilen fürs Vokabellernen geschenkt.", 
"Langzeitgedächtnis-Lerntag: Für jedes Wort, das heute in Ihrem Langzeitgedächtnis (Stufe 0) landet, erhalten Sie + 7 Sondermeilen geschenkt!", 
"Heute erhalten Sie von uns 20 Sondermeilen geschenkt!", 
"Wenn Sie heute mindestens 10 neue Vokabeln lernen, erhalten Sie DOPPELTE Sondermeilen fürs Vokabellernen geschenkt!", 
"Wenn Sie heute mindestens 12 Minuten lernen, erhalten Sie + 12 Sondermeilen geschenkt!", //15
"Fortgeschrittene Lerner: Wenn Sie insgesamt mindestens 400 Vokabeln gelernt haben, erhalten Sie heute DREIFACHE Sondermeilen fürs Vokabellernen geschenkt!", 
"Langzeitgedächtnis-Lerntag: Für jedes Wort, das heute in Ihrem Langzeitgedächtnis (Stufe 0) landet, erhalten Sie + 10 Sondermeilen geschenkt!", //17
"MAMMUT-LERNTAG: Wenn Sie heute mindestens 40 neue Vokabeln lernen, erhalten Sie + 100 (einhundert!) Sondermeilen geschenkt! Lesen Sie hierzu auf jeden Fall nochmal die Anleitung zur <a href=\"../content/de/besserlernen/assoziation/assoziation1.html\">Assoziations-Lernmethode</a> (<a href=\"../content/de/besserlernen/assoziation/assoziation_zusammen.html\">Zusammenfassung</a>) durch, da Sie sich nur damit soviele Wörter auf einmal merken können.",
"MAMMUT-LERNTAG: Wenn Sie heute mindestens 50 neue Vokabeln lernen, erhalten Sie + 100 (einhundert!) Sondermeilen geschenkt! Lesen Sie hierzu auf jeden Fall nochmal die Anleitung zur <a href=\"../content/de/besserlernen/assoziation/assoziation1.html\">Assoziations-Lernmethode</a> (<a href=\"../content/de/besserlernen/assoziation/assoziation_zusammen.html\">Zusammenfassung</a>) durch, da Sie sich nur damit soviele Wörter auf einmal merken können."
);

//NICHT AM ANFANG: 3 7 11 12 16 17
var sonderbonus= new Array("1","2","4","5","6","8","9","10","13","14","15","16","17","18","1","2","4","9","14","15","19",   "1","12","11","2","3","10","7","4","18","14","13","9","16","20","6","15","8","17","5","5","17","13","11","18","8","2","19","15","12","4","3","6","14","10","1","7","9","16","5","14","10","12","15","16","18","3","2","20","7","11","1","13","8","4","9","6","17","10","1","13","5","9","12","4","11","2","19","8","3","16","6","7","15","17","18","14","8","6","12","9","11","2","20","4","16","5","14","1","7","3","10","15","17","13","18");


// ##########################################

function tagesaufgabe_start(ta_menu)
{
	tagesaufgabe_cookielesen (ta_menu);
}


function tagesaufgabe_cookielesen (ta_menu)
{

	var temp3="";
	var keks = document.cookie;

	var i=0; 
	while(i < document.cookie.length)
	{
		var cookiename1="tagesaufgabe_"+sprachkuerzel;
		var j = i + cookiename1.length;
		if(document.cookie.substring(i, j) == cookiename1)
		{
			var endstr = document.cookie.indexOf(";", j);
			if(endstr == -1) endstr = document.cookie.length;
			keksinhalt=document.cookie.substring(j+1, endstr); temp3 = keksinhalt;
			keks = cookiename1+ "=" + keksinhalt;
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if(!i) break;
	}
	if (temp3.length>3) {
		var kekse = temp3.split ('#');
		ta_spitzname = kekse[0];
		ta_spitzname = ta_spitzname.toUpperCase().substr(0,1)+""+ta_spitzname.toLowerCase().substr(1);

		ta_sprache = kekse[1];
		ta_sprache = ta_sprache.toUpperCase().substr(0,1)+""+ta_sprache.toLowerCase().substr(1);
		ta_kursart = kekse[2];
		ta_lerntagnr = kekse[3]*1;
		ta_punkte = kekse[4]*1;
		ta_datum = kekse[5];
		ta_vokabelnr = kekse[6]*1;
		ta_textlektionnr = kekse[7];
		ta_8 = kekse[8]; // ta_stats1[]
			ta_stats1 = ta_8.split ('*'); for (x=0; x<7;x+=1) { ta_statsges1 += ""+ta_stats1[x]; }
		ta_langzeitstunden = kekse[9];
		ta_restminuten = kekse[10];
		ta_aufg[1] = kekse[11];
		ta_aufg[2] = kekse[12];
		ta_aufg[3] = kekse[13];
		ta_aufg[4] = kekse[14];
		ta_aufg[5] = kekse[15];
		ta_aufg[6] = kekse[16];
		ta_aufg[7] = kekse[17];
		ta_aufg[8] = kekse[18];
		ta_aufg[9] = kekse[19];

		ta_tageinfolgegelernt = kekse[20]; if (!ta_tageinfolgegelernt) { ta_tageinfolgegelernt=1; }

		ta_start[1] = kekse[21];
		ta_start[2] = kekse[22];
		ta_start[3] = kekse[23];
		ta_start[4] = kekse[24];
		ta_start[5] = kekse[25];
		ta_start[6] = kekse[26];
		ta_start[7] = kekse[27];
		ta_start[8] = kekse[28];
		ta_start[9] = kekse[29];
		ta_startdatum = kekse[31];
		ta_spitznameoriginal = kekse[32]; if (ta_spitznameoriginal == "") { ta_spitznameoriginal = ta_spitzname; }
		ta_cookie = kekse[33];


		if (ta_aufg[1]*1 + ta_aufg[2]*1 + ta_aufg[3]*1 + ta_aufg[4]*1 + ta_aufg[5]*1 + ta_aufg[6]*1 == 6) {
			var ta_jetzt = new Date();
			ta_jetzt = ta_jetzt.getTime();
			var zeitvergangen = ta_jetzt*1 - ta_datum*1;

			var testmann=1; if (ta_spitzname == "Testmann") { testmann=10000; }
			if (zeitvergangen>6*60*60*1000 / testmann) { 
				for (x=1;x<8;x+=1) { ta_aufg[x]=ta_start[x]; } 
				ta_lerntagnr+=1; 
				if (zeitvergangen>42*60*60*1000) { ta_tageinfolgegelernt=1; } else { ta_tageinfolgegelernt=ta_tageinfolgegelernt*1 +1; } // >42h = in jedem Fall neuer Tag
			}
		}
		if (ta_tageinfolgegelernt>2) { tageinfolgezusatzmeilen=5; }
		if (ta_tageinfolgegelernt>4) { tageinfolgezusatzmeilen=10; }
		if (ta_tageinfolgegelernt>6) { tageinfolgezusatzmeilen=20; }
		if (ta_tageinfolgegelernt>9) { tageinfolgezusatzmeilen=30; }
		if (ta_tageinfolgegelernt>13) { tageinfolgezusatzmeilen=50; }
		//alert (ta_tageinfolgegelernt + " "+tageinfolgezusatzmeilen);
		if (ta_tageinfolgegelernt>2) { tageinfolgetext="Sie haben bereits "+ta_tageinfolgegelernt+" Tage in Folge gelernt und erhalten daher heute automatisch + "+tageinfolgezusatzmeilen+" Zusatzmeilen geschenkt!"; }

		ta_ausgabe="<b>Ihre <a href=\"../content/de/tagesaufgaben.html\" style=\"text-decoration: underline;\" target=rahmen1>Tagesaufgaben</a> am "+ta_lerntagnr+". Tag,<br>"+ta_spitzname+":</b><br>";
		if (ta_aufg[1]*1 + ta_aufg[2]*1 + ta_aufg[3]*1 + ta_aufg[4]*1 + ta_aufg[5]*1 + ta_aufg[6]*1 < 6) {
			if (ta_lerntagnr>51) { ta_aufg[4]=1; }
			if (ta_aufg[1]==0) ta_ausgabe+="&nbsp;&#149;&nbsp;<a href=\"../content/de/aufgabe1.html\"  target=rahmen1>Vokabelaufgabe</a><br>";
			if (ta_aufg[2]==0) ta_ausgabe+="&nbsp;&#149;&nbsp;<a href=\"../content/de/aufgabe2.html\"  target=rahmen1>Textaufgabe</a><br>";

			if (ta_aufg[5]==0) ta_ausgabe+="&nbsp;&#149;&nbsp;<a href=\"../content/de/aufgabe5.html\"  target=rahmen1>Vokabelaufgabe</a><br>";
			if (ta_aufg[6]==0) ta_ausgabe+="&nbsp;&#149;&nbsp;<a href=\"../content/de/aufgabe6.html\"  target=rahmen1>Textaufgabe</a><br>";

			if (ta_aufg[3]==0) ta_ausgabe+="&nbsp;&#149;&nbsp;<a href=\"../content/de/aufgabe3.html\"  target=rahmen1>Grammatik lesen</a><br>";
			if (ta_aufg[7]==0) ta_ausgabe+="&nbsp;&#149;&nbsp;<a href=\"../content/de/aufgabe7.html\"  target=rahmen1>Grammatik-Übung</a><br>";

			if (ta_aufg[4]==0) ta_ausgabe+="&nbsp;&#149;&nbsp;<a href=\"../content/de/aufgabe4.html\"  target=rahmen1>Sonstige Aufgabe</a><br>";
			//alert(ta_aufg[1]*1 +" "+ ta_aufg[2]*1 +" "+ ta_aufg[3]*1 +" "+ ta_aufg[4]*1 +" "+ ta_aufg[5]*1 +" "+ ta_aufg[6]*1);
			tagesaufgabe_erreichtes(1);
		}
		else {
			var zeitvergangenmin = Math.round (zeitvergangen / (60*1000));
			ta_ausgabe+="Sie haben heute alle Tagesaufgaben gelöst! ";
			tagesaufgabe_erreichtes(1);
			var keks1 = "tagesaufgabe_"+sprachkuerzel+"=" + keksinhalt;
			var ekeks = escape (keks1); 
			ta_ausgabe+=""+
"<form method=\"post\" action=\"http://www.sprachenlernen24-download.de/lerngruppen/lerngruppen.php\" target=\"rahmen1\">"+
"<input type=\"hidden\" name=\"ta_spitzname\" value=\""+ta_spitzname+"\">"+
"<input type=\"hidden\" name=\"ta_sprache\" value=\""+ta_sprache+"\">"+
"<input type=\"hidden\" name=\"ta_lerntagnr\" value=\""+ta_lerntagnr+"\">"+
"<input type=\"hidden\" name=\"ta_punkte\" value=\""+ta_punkte+"\">"+
"<input type=\"hidden\" name=\"ta_vokabelnr\" value=\""+ta_vokabelnr+"\">"+
"<input type=\"hidden\" name=\"ta_stufe\" value=\""+ta_stufe+"\">"+
"<input type=\"hidden\" name=\"ta_proz\" value=\""+ta_proz+"\">"+
"<input type=\"hidden\" name=\"ta_langzeitstunden\" value=\""+ta_langzeitstunden+"\">"+
"<input type=\"hidden\" name=\"ta_restminuten\" value=\""+ta_restminuten+"\">"+
"<input type=\"hidden\" name=\"ta_kursart\" value=\""+ta_kursart+"\">"+
"<input type=\"hidden\" name=\"ta_build\" value=\""+ta_build+"\">"+
"<input type=\"hidden\" name=\"ta_startdatum\" value=\""+ta_startdatum+"\">"+
"<input type=\"hidden\" name=\"ta_spitznameoriginal\" value=\""+ta_spitznameoriginal+"\">"+
"<input type=\"hidden\" name=\"ta_niveau\" value=\""+ta_niveau+"\">"+
"<input type=\"hidden\" name=\"ta_cookie\" value=\""+ta_cookie+"\">"+
"<input type=\"hidden\" name=\"ta_cookie2\" value=\""+ekeks+"\">"+
"<input type=\"submit\" style=\"font-size:10px; font-family:verdana,tahoma,arial; border-style: solid; background-color: #dc0000; border: 2px solid #111111; color: #FFFFFF;padding: 1 1 1 1; margin: 0 0 0 0;\" name=\"Button\" value=\"Online übertragen\">"+
"</form>";



		}
		
		if (!ta_menu) ta_ausgabe="";


	}
	else {
		tagesaufgabe_anfang();
	}
}

function tagesaufgabe_cookieschreiben (mitdatum)
{

   if (ta_spitzname.length>0) {
	if (mitdatum) { ta_datum = new Date(); ta_datum = ta_datum.getTime(); }
	var zehntage = (ta_datum*1 + 90*24*60*60*1000)*1;



	var jetzt = new Date(); var ja=1;
	if (ta_startdatum) { if (ta_startdatum.length <6) ja=0; } 
	if (ja==1) { ta_startdatum = jetzt.getDate()+"."+(jetzt.getMonth()+1)*1+"."+jetzt.getFullYear(); }
	//alert (ta_startdatum);

	ta_8 = "";
	for (x=0;x<7;x+=1) { 
		if (!ta_stats1[x]) { ta_stats1[x] = 0; }
		ta_8 += ta_stats1[x]+"*"; 
	}
	var temp3=
	ta_spitzname+"#"+
	ta_sprache+"#"+
	ta_kursart+"#"+
	ta_lerntagnr+"#"+
	ta_punkte+"#"+
	ta_datum+"#"+
	ta_vokabelnr+"#"+
	ta_textlektionnr+"#"+
	ta_8+"#"+
	ta_langzeitstunden+"#"+
	ta_restminuten+"#"+
	ta_aufg[1]+"#"+
	ta_aufg[2]+"#"+
	ta_aufg[3]+"#"+
	ta_aufg[4]+"#"+
	ta_aufg[5]+"#"+
	ta_aufg[6]+"#"+
	ta_aufg[7]+"#"+
	ta_aufg[8]+"#"+
	ta_aufg[9]+"#"+
	ta_tageinfolgegelernt+"#"+
	ta_start[1]+"#"+
	ta_start[2]+"#"+
	ta_start[3]+"#"+
	ta_start[4]+"#"+
	ta_start[5]+"#"+
	ta_start[6]+"#"+
	ta_start[7]+"#"+
	ta_start[8]+"#"+
	ta_start[9]+"##"+
	ta_startdatum+"#"+
	ta_spitznameoriginal+"#"+
	ta_cookie+"#"+
	"########";

	//alert ("Schreiben: "+temp3);

	var ablauf = new Date();
	ablauf.setTime(ablauf.getTime() + (90*24*60*60*1000));
	document.cookie = "tagesaufgabe_"+sprachkuerzel+"="+temp3+"; expires="+ablauf+"; path=/;";
    }
}

// ##########################################

function tagesaufgabe_cookiewiederherstellen ()
{

	var ablauf = new Date();
	ablauf.setTime(ablauf.getTime() + (90*24*60*60*1000));

	var x = document.cookiewiederherstellen.cookiewiederherstellen1.value; 
	if (x.length>30) { 
		var x2 = unescape (x);
		document.cookie = x2+"; expires="+ablauf+"; path=/;"; 
		var x3 = x2.split ('#');

		if ( x3[33].length>1  && x3[33].indexOf("=")>0 ) { 
			document.cookie = ""+x3[33]+"; expires="+ablauf+"; path=/;"; 
		}

		alert ("Erfolgreich wiederhergestellt!"); top.frames[0].location.reload(); 
	}
	else  { alert ("Daten unvollständig, bitte neu eingeben!"); }
	
	
}

function tagesaufgabe_cookiewiederherstellen_mobil ()
{

	var ablauf = new Date();
	ablauf.setTime(ablauf.getTime() + (90*24*60*60*1000));

	var x = document.cookiewiederherstellen.cookiewiederherstellen1.value; 
	if (x.length>2) { 
		var x2 = unescape (x);

		document.cookie = ""+sprache+"x"+sprachkuerzel+"x"+eingabeart+"="+x2+"; expires="+ablauf+"; path=/;"; 

		alert ("Erfolgreich wiederhergestellt!"); 
	}
	else  { alert ("Daten unvollständig, bitte neu eingeben!"); }
	
	
}

// ##########################################

function tagesaufgabe_anfang()
{
	// schreibt Feld für Spitznamens-Eingabe
	ta_ausgabe=""+
	"<b>Ihre <a href=\"../content/de/tagesaufgaben.html\" style=\"text-decoration: underline;\" target=rahmen1>Tagesaufgaben</a>:</b><br>&nbsp;<br>Bitte geben Sie Ihren Spitznamen ein:<br><form method=\"post\" name=\"spitznameneingabe\" onSubmit=\"tagesaufgabe_init();\">"+
	"<input type=text size=12 maxlength=12 name=\"spitzname\" onSubmit=\"tagesaufgabe_init();\" style=\"font-size:9px; font-family:verdana,tahoma,arial\">"+
	"<input type=button id=bestellbutton value=\" OK \" onClick=\"tagesaufgabe_init();\" style=\"font-size:9px; font-family:verdana,arial,helvetica; font-weight:bold;\">"+
	"</form>";

	if (navigator.appName.indexOf("plorer")>0) ta_ausgabe="Tagesaufgabe:<br>Um die Tagesaufgaben lösen zu können, verwenden Sie bitte den <a href=\"http://www.mozilla-europe.org/de/firefox/\" target=\"firefox\" style=\"text-decoration: underline;\">Firefox-Browser</a>."; 



}

function tagesaufgabe_init()
{

	var jetztzeit = new Date();
	jetztzeit = jetztzeit.getTime();

	ta_spitzname = document.spitznameneingabe.spitzname.value;
	ta_spitznameoriginal = ta_spitzname+""+jetztzeit;

	if (ta_spitzname.length<3) { alert ("Bitte geben Sie Ihren Spitznamen ein\n(mindestens 3 Buchstaben)!\nIhren Spitznamen können Sie frei wählen."); return; }

	//alert (ta_spitzname);

	ta_sprache = sprache;

	var nurexpress=1;
	if (sprache == "aegyptisch" || sprache == "albanisch" || sprache == "amerikanisch" || sprache == "arabisch" || sprache == "brasilianisch" || sprache == "bulgarisch" || sprache == "chinesisch" || sprache == "daenisch" || sprache == "deutsch" || sprache == "englisch" || sprache == "estnisch" || sprache == "finnisch" || sprache == "franzoesisch" || sprache == "griechisch" || sprache == "hebraeisch" || sprache == "hindi" || sprache == "indonesisch" || sprache == "islaendisch" || sprache == "italienisch" || sprache == "japanisch" || sprache == "jordanisch" || sprache == "katalanisch" || sprache == "koreanisch" || sprache == "kroatisch" || sprache == "latein" || sprache == "lettisch" || sprache == "litauisch" || sprache == "malaysisch" || sprache == "marokkanisch" || sprache == "niederlaendisch" || sprache == "norwegisch" || sprache == "persisch" || sprache == "polnisch" || sprache == "portugiesisch" || sprache == "rumaenisch" || sprache == "russisch" || sprache == "schwedisch" || sprache == "serbisch" || sprache == "slowakisch" || sprache == "slowenisch" || sprache == "spanisch" || sprache == "suedamerika" || sprache == "suaheli" || sprache == "syrisch" || sprache == "thai" || sprache == "tschechisch" || sprache == "tuerkisch" || sprache == "tunesisch" || sprache == "ungarisch" || sprache == "vietnamesisch") { nurexpress=0; }

	ta_start[1]=0; ta_start[2]=1; ta_start[3]=1; ta_start[4]=0; ta_start[5]=1; ta_start[6]=1; ta_start[7]=1; ta_start[8]=0; ta_start[9]=0; 
	if (sprachkuerzel.indexOf("2")>1)	{ ta_kursart=1; ta_start[1]=1; ta_start[2]=1; ta_start[3]=nurexpress; ta_start[4]=0; ta_start[5]=0; ta_start[6]=0; }
	if (sprachkuerzel.length==2)		{ ta_kursart=2; ta_start[2]=0; ta_start[3]=0; ta_start[7]=0; }
	if (sprachkuerzel.indexOf("3")>0)	{ ta_kursart=3; ta_start[2]=0; ta_start[3]=0; ta_start[7]=0; } // Texte ja, Gr-Üb ja
	if (sprachkuerzel.indexOf("4")>0)	{ ta_kursart=4; ta_start[7]=0; } // Nur Vokabeln + Gr-Üb. 
	if (sprachkuerzel.indexOf("5a")>0)	{ ta_kursart="5a"; ta_start[2]=0; ta_start[3]=0; }
	if (sprachkuerzel.indexOf("5b")>0)	{ ta_kursart="5b"; ta_start[2]=0; ta_start[3]=0; }
	if (sprachkuerzel.indexOf("5c")>0)	{ ta_kursart="5c"; ta_start[2]=0; ta_start[3]=0; }
	if (sprachkuerzel.indexOf("6")>0)	{ ta_kursart="6";  ta_start[3]=1; }
	if (sprachkuerzel.indexOf("7")>0)	{ ta_kursart=7; ta_start[2]=0; ta_start[3]=0; ta_start[7]=0; } // 365
	if (sprachkuerzel.indexOf("7b")>0)	{ ta_kursart="7b"; ta_start[2]=0; ta_start[3]=0; ta_start[7]=0; } // B365
	if (sprachkuerzel.indexOf("7a")>1)	{ ta_kursart="7a"; ta_start[1]=1; ta_start[2]=1; ta_start[3]=nurexpress; ta_start[4]=0; ta_start[5]=0; ta_start[6]=0; } // 30t

	if (sprachkuerzel.indexOf("11")>0)	{ ta_kursart=11; ta_sprache = sprache2;}	// Nur Express
	if (sprachkuerzel.indexOf("12")>0)	{ ta_kursart=12; ta_sprache = sprache2; }	// Nur Vokabeln
	if (sprachkuerzel.indexOf("13")>0)	{ ta_kursart=13; ta_start[2]=1; ta_sprache = sprache2; } // Nur Vokabeln
	if (sprachkuerzel.indexOf("14")>0)	{ ta_kursart=14; ta_sprache = sprache2; } // Nur Vokabeln
	if (sprachkuerzel.indexOf("15a")>0)	{ ta_kursart="15a"; ta_sprache = sprache2; } 
	if (sprachkuerzel.indexOf("15b")>0)	{ ta_kursart="15b"; ta_sprache = sprache2; } 
	if (sprachkuerzel.indexOf("15c")>0)	{ ta_kursart="15c"; ta_sprache = sprache2; } 

	ta_lerntagnr = 1;
	ta_punkte = 0;
	ta_datum = 0;
	ta_vokabelnr = 0;
	ta_textlektionnr = 1;
	ta_8 = "";
	ta_langzeitstunden = "";
	ta_restminuten = "";
	ta_aufg[1] = ta_start[1]; // vok
	ta_aufg[2] = ta_start[2]; // txt
	ta_aufg[3] = ta_start[3]; // grammatik
	ta_aufg[4] = ta_start[4]; // blog
	ta_aufg[5] = ta_start[5]; // vok-express
	ta_aufg[6] = ta_start[6]; // txt-express
	ta_aufg[7] = ta_start[7]; // Grammatik-Übung
	ta_aufg[8] = ta_start[8]; // noch frei
	ta_aufg[9] = ta_start[9]; // noch frei
	tagesaufgabe_cookieschreiben ();
	top.frames[0].location.reload();

}

// ##########################################

function tagesaufgabe_uebergabe(var1,var2)
{
	ta_aufg[var1] = 1;
	if (var1 == 1 && var2) ta_vokabelnr = var2;
	if (var1 == 2 && var2) ta_textlektionnr = var2;
}

// ##########################################


function tagesaufgabe_stufeberechnen()
{
	ta_stufex=0; ta_stufey=30; 
	if (ta_punkte>30) { ta_stufe=1; ta_stufex=30; ta_stufey=100; }
	if (ta_punkte>100) { ta_stufe=2; ta_stufex=100; ta_stufey=190; }
	if (ta_punkte>190) { ta_stufe=3; ta_stufex=190; ta_stufey=300; }
	if (ta_punkte>300) { ta_stufe=4; ta_stufex=300; ta_stufey=430; }
	if (ta_punkte>430) { ta_stufe=5; ta_stufex=430; ta_stufey=580; }
	if (ta_punkte>580) { ta_stufe=6; ta_stufex=580; ta_stufey=750; }
	if (ta_punkte>750) { ta_stufe=7; ta_stufex=750; ta_stufey=940; }
	if (ta_punkte>940) { ta_stufe=8; ta_stufex=940; ta_stufey=1150; }
	if (ta_punkte>1150) { ta_stufe=9; ta_stufex=1150; ta_stufey=1380; }
	if (ta_punkte>1380) { ta_stufe=10; ta_stufex=1380; ta_stufey=1630; }
	if (ta_punkte>1630) { ta_stufe=11; ta_stufex=1630; ta_stufey=1900; }
	if (ta_punkte>1900) { ta_stufe=12; ta_stufex=1900; ta_stufey=2190; }
	if (ta_punkte>2190) { ta_stufe=13; ta_stufex=2190; ta_stufey=2500; }
	if (ta_punkte>2500) { ta_stufe=14; ta_stufex=2500; ta_stufey=2830; }
	if (ta_punkte>2830) { ta_stufe=15; ta_stufex=2830; ta_stufey=3180; }
	if (ta_punkte>3180) { ta_stufe=16; ta_stufex=3180; ta_stufey=3550; }
	if (ta_punkte>3550) { ta_stufe=17; ta_stufex=3550; ta_stufey=3940; }
	if (ta_punkte>3940) { ta_stufe=18; ta_stufex=3940; ta_stufey=4350; }
	if (ta_punkte>4350) { ta_stufe=19; ta_stufex=4350; ta_stufey=4780; }
	if (ta_punkte>4780) { ta_stufe=20; ta_stufex=4780; ta_stufey=5230; }
	if (ta_punkte>5230) { ta_stufe=21; ta_stufex=5230; ta_stufey=5700; }
	if (ta_punkte>5700) { ta_stufe=22; ta_stufex=5700; ta_stufey=6190; }
	if (ta_punkte>6190) { ta_stufe=23; ta_stufex=6190; ta_stufey=6700; }
	if (ta_punkte>6700) { ta_stufe=24; ta_stufex=6700; ta_stufey=7230; }
	if (ta_punkte>7230) { ta_stufe=25; ta_stufex=7230; ta_stufey=7780; }
	if (ta_punkte>7780) { ta_stufe=26; ta_stufex=7780; ta_stufey=8350; }
	if (ta_punkte>8350) { ta_stufe=27; ta_stufex=8350; ta_stufey=8940; }
	if (ta_punkte>8940) { ta_stufe=28; ta_stufex=8940; ta_stufey=9550; }
	if (ta_punkte>9550) { ta_stufe=29; ta_stufex=9550; ta_stufey=10180; }
	if (ta_punkte>10180) { ta_stufe=30; ta_stufex=10180; ta_stufey=10830; }
	if (ta_punkte>10830) { ta_stufe=31; ta_stufex=10830; ta_stufey=11500; }
	if (ta_punkte>11500) { ta_stufe=32; ta_stufex=11500; ta_stufey=12190; }
	if (ta_punkte>12190) { ta_stufe=33; ta_stufex=12190; ta_stufey=12900; }
	if (ta_punkte>12900) { ta_stufe=34; ta_stufex=12900; ta_stufey=13630; }
	if (ta_punkte>13630) { ta_stufe=35; ta_stufex=13630; ta_stufey=14380; }
	if (ta_punkte>14380) { ta_stufe=36; ta_stufex=14380; ta_stufey=15150; }
	if (ta_punkte>15150) { ta_stufe=37; ta_stufex=15150; ta_stufey=15940; }
	if (ta_punkte>15940) { ta_stufe=38; ta_stufex=15940; ta_stufey=16750; }
	if (ta_punkte>16750) { ta_stufe=39; ta_stufex=16750; ta_stufey=17580; }
	if (ta_punkte>17580) { ta_stufe=40; ta_stufex=17580; ta_stufey=20000; }
	if (ta_punkte>20000) { ta_stufe=41; ta_stufex=20000; ta_stufey=22000; }
	if (ta_punkte>22000) { ta_stufe=42; ta_stufex=22000; ta_stufey=25000; }
	if (ta_punkte>25000) { ta_stufe=43; ta_stufex=25000; ta_stufey=30000; }
	if (ta_punkte>30000) { ta_stufe=44; ta_stufex=30000; ta_stufey=35000; }
	if (ta_punkte>35000) { ta_stufe=45; ta_stufex=35000; ta_stufey=40000; }
	if (ta_punkte>40000) { ta_stufe=46; ta_stufex=40000; ta_stufey=50000; }
	if (ta_punkte>50000) { ta_stufe=47; ta_stufex=50000; ta_stufey=60000; }
	if (ta_punkte>60000) { ta_stufe=48; ta_stufex=60000; ta_stufey=70000; }
	if (ta_punkte>70000) { ta_stufe=59; ta_stufex=70000; ta_stufey=99999; }
}

function tagesaufgabe_erreichtes(ta_klein)
{

	tagesaufgabe_stufeberechnen();
	var ta_stufe2=ta_stufe*1+1;
	var x1=ta_stufey*1-ta_punkte*1;
	var x2=ta_stufey*1-ta_stufex*1;
	prozenty=x1/x2 * 165;
	prozentx=(x2-x1)/x2 * 165;
	ta_proz =  Math.floor((x2-x1)/x2 *100); if (ta_proz==100) ta_proz = 99; 


	var ta_stufenziel=0; ta_niveau=""; var ta_ref=0; var ta_niveaubild2=""; var ta_niveaubild1=""; 
	if (ta_kursart=="2") { 
		// Basiskurs
		if (ta_vokabelnr<1250) { ta_stufenziel=1250-ta_vokabelnr*1; ta_niveau="A2"; ta_niveaubild1="a2"; ta_ref=1;} 
		if (ta_vokabelnr<700)  { ta_stufenziel=700-ta_vokabelnr*1;  ta_niveau="A1"; ta_niveaubild1="a1"; ta_ref=1;} 
		if (ta_vokabelnr>699)  { ta_niveaubild2="a1"; }
		if (ta_vokabelnr>1249) { ta_niveaubild2="a2"; }
	}
	if (ta_kursart=="3") { 
		// Aufbaukurs
		if (ta_vokabelnr<1750) { ta_stufenziel=1750-ta_vokabelnr*1; ta_niveau="B2"; ta_niveaubild1="b2"; ta_ref=1;} 
		if (ta_vokabelnr<900)  { ta_stufenziel=900-ta_vokabelnr*1;  ta_niveau="B1"; ta_niveaubild1="b1"; ta_ref=1;} 
		if (ta_vokabelnr>899)  { ta_niveaubild2="b1"; }
		if (ta_vokabelnr>1749) { ta_niveaubild2="b2"; }
	}
	if (ta_kursart=="4") { 
		// Fachwortschatz
		if (ta_vokabelnr<1900) { ta_stufenziel=1900-ta_vokabelnr*1; ta_niveau="C2"; ta_niveaubild1="c2"; ta_ref=1;} 
		if (ta_vokabelnr<1000)  { ta_stufenziel=1000-ta_vokabelnr*1;  ta_niveau="C1"; ta_niveaubild1="c1"; ta_ref=1;} 
		if (ta_vokabelnr>999)  { ta_niveaubild2="c1"; }
		if (ta_vokabelnr>1899) { ta_niveaubild2="c2"; }
	}
	if (ta_kursart=="5a") { 
		// Business1
		if (ta_vokabelnr<550) { ta_stufenziel=550-ta_vokabelnr*1; ta_niveau="C2"; ta_niveaubild1="c2"; ta_ref=1;} 
		if (ta_vokabelnr>549) { ta_niveaubild2="c2"; }
	}
	if (ta_kursart=="5b") { 
		// Business2
		if (ta_vokabelnr<600) { ta_stufenziel=600-ta_vokabelnr*1; ta_niveau="C2"; ta_niveaubild1="c2"; ta_ref=1;} 
		if (ta_vokabelnr>599) { ta_niveaubild2="c2"; }
	}
	if (ta_kursart=="5c") { 
		// Business3
		if (ta_vokabelnr<700) { ta_stufenziel=700-ta_vokabelnr*1; ta_niveau="C2"; ta_niveaubild1="c2"; ta_ref=1;} 
		if (ta_vokabelnr>699) { ta_niveaubild2="c2"; }
	}

	if (ta_niveaubild2.length >0 && !ta_klein) ta_ausgabe+="&nbsp;<hr size=1 noshade>Herzlichen Glückwunsch!<br>Sie haben folgendes Niveau erreicht:<br><img src="+grundverzeichnis+"grafik/"+ta_niveaubild2+".gif>";
	if (ta_ref==1 && !ta_klein) ta_ausgabe+="<hr size=1 noshade><table border=0><tr><td width=*><span id=\"normaltext\">Sie sind bei Vokabel Nr. "+ta_vokabelnr+" angelangt und werden in "+ta_stufenziel+" Vokabeln das Niveau "+ta_niveau+" des <a href=\"http://de.wikipedia.org/wiki/Gemeinsamer_Europ%C3%A4ischer_Referenzrahmen\">Gemeinsamen Europäischen Referenzrahmens</a> erreichen!</span></td><td width=60><img src="+grundverzeichnis+"grafik/"+ta_niveaubild1+".gif></td></tr></table>";



	ta_ausgabe+="<hr size=1 noshade>Lernmeilen: "+ta_punkte+"<br>Sie haben Stufe "+ta_stufe+" erreicht.<br>";
	ta_ausgabe+="Sie haben bereits "+ta_proz+"% von Stufe "+ta_stufe2+" erreicht.";
	if (!ta_klein) { 
		ta_ausgabe+="<br>&nbsp;<br><table border=0 cellpadding=0 cellspacing=0><tr><td><span style=\"font-size:6pt; font-face:verdana,arial,helvetica;\">"+ta_stufe+"&nbsp;</td><td><table border=0 cellpadding=0 bgcolor=333333 cellspacing=1 cellpadding=0><tr><td><img src="+grundverzeichnis+"grafik/punkt.gif height=9 width="+prozentx+"><img src="+grundverzeichnis+"grafik/punkt4.gif height=9 width="+prozenty+"></td></tr></table></td><td><span style=\"font-size:6pt; font-face:verdana,arial,helvetica;\">&nbsp;"+ta_stufe2+"</td></tr></table>";
		if (ta_aufgabe==1)  ta_ausgabe+="&nbsp;<br>(Für die Vokabelaufgabe erhalten Sie 2 Lernmeilen pro neuer Vokabel)";
		if (ta_aufgabe==2)  ta_ausgabe+="&nbsp;<br>(Für die Textaufgabe erhalten Sie 5 Lernmeilen pro Lerntag)";
		if (ta_aufgabe==3)  ta_ausgabe+="&nbsp;<br>(Für die Grammatikaufgabe erhalten Sie 5 Lernmeilen pro Lerntag)";
		if (ta_aufgabe==4)  ta_ausgabe+="&nbsp;<br>(Für die sonstige Aufgabe erhalten Sie 3 Lernmeilen pro Lerntag)";
		if (ta_aufgabe==5)  ta_ausgabe+="&nbsp;<br>(Für die Vokabelaufgabe erhalten Sie 2 Lernmeilen pro neuer Vokabel)";
		if (ta_aufgabe==6)  ta_ausgabe+="&nbsp;<br>(Für die Textaufgabe erhalten Sie 5 Lernmeilen pro Lerntag)";

		ta_ausgabe+="<br>&nbsp;<br>So viele Vokabeln haben Sie in den letzten sieben Tagen neu gelernt:";
		ta_statsges1=0;
		for (x=0; x<7;x+=1) { ta_ausgabe+="<br>Tag "+ (x+1)*1 + ": "+ta_stats1[x]+" Vokabeln"; ta_statsges1+=ta_stats1[x]*1;}
		ta_ausgabe+="<br>Gesamt: "+ta_statsges1+" Vokabeln";
	}




}


function tagesaufgabe_namensaenderung()
{
	tagesaufgabe_cookielesen();
	ta_spitzname = document.spitznameneingabe2.spitzname2.value;
	tagesaufgabe_cookieschreiben();
	top.frames[0].location.reload();
	self.location.reload();
}


function tagesaufgabe_statsshift(ta_statsshift)
{
	for (x=7; x>-1 ;x-=1) { ta_stats1[x+1] = ta_stats1[x]; }
	ta_stats1[0] = ta_statsshift*1;

}



function tagesaufgabe_()
{


}



