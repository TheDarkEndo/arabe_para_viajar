// Copyright: www.sprachenlernen24.de, Udo Gollub, München 
 

// funktionen4.js und funktionen5.js beziehen sich auf Langzeittest


// Basiseinstellungen Start
var grundverzeichnis="../../";
var navname = navigator.userAgent;
if (navname.indexOf("Firefox")>1) { 
	var pfad = self.location.pathname;
	var r1= pfad.lastIndexOf("/"); if (r1<2) { r1= pfad.lastIndexOf("\\"); }
	var pfad2=pfad.substr(0,r1);

	r1= pfad2.lastIndexOf("/"); if (r1<2) { r1= pfad2.lastIndexOf("\\"); }
	pfad2=pfad2.substr(0,r1);

	r1= pfad2.lastIndexOf("/"); if (r1<2) { r1= pfad2.lastIndexOf("\\"); }
	pfad2=pfad2.substr(0,r1);
	grundverzeichnis=pfad2+"/";
}
// Basiseinstellungen Ende

// ##########################################################

var langzeitwert20=""; // 20er Code
var langzeittage=0;  // gelernte Tage
var langzeitminuten=0;  // gelernte Minuten
//var lerntagplus=1; // wie gestartet wird, für Lerntage-Anzahl
var ta_cookie2="";
var veraenderungsc=0; var ta_punkte1=0; 
var langzeitmobilspitzname="";


// ##########################################################
function schliessen(temp3,anleit,diktieren)
{

	startobjekt.visibility="hidden";
	startobjekt2.visibility="hidden";

	var iexpl=document.all;
	var zwei=document.getElementById;

	var spielobjekt;
	if (zwei) { spielobjekt=document.getElementById("spielbox").style; }
	else {if (iexpl) { spielobjekt=document.all.spielbox; } else { spielobjekt=document.spielbox; }}
	startobjekt.top=0;

	if (zwei || iexpl) {startobjekt.visibility="hidden"; } else {startobjekt.visibility="hidden"; }

	if (document.testit3) { if (document.testit3.startcodespitzname) { langzeitmobilspitzname = ""+document.testit3.startcodespitzname.value; } } 

	if (temp3>0) {
		if (zwei || iexpl) {spielobjekt.visibility="visible"; } else {spielobjekt.visibility="show";}
		daten_vorbereiten(temp3,anleit,diktieren);
	}
	else {
	  
		datenuebergabe=""+document.testit3.startcode.value;
		laengedaten=datenuebergabe.indexOf(",",0);
		laengedaten=datenuebergabe.indexOf(",",langzeit.length+1);

		langzeitstartwert=""+datenuebergabe.substring(0, datenuebergabe.indexOf(","))+"";
		rechendaten=""+datenuebergabe.substring(laengedaten+21, datenuebergabe.length)+"";

		langzeit=rechendaten.length/6;
		var langzeitwirklich=0;
		for (var t=0;t<=rechendaten.length;t+=6) {
			if (rechendaten.substring(t+1,t+2) == "0") langzeitwirklich+=1;
		}
		alertfenster(spracheintrag_hinweis[38]+" "+langzeitwirklich+spracheintrag_hinweis[39]+"","008800","FFFFFF");

		if (zwei || iexpl) {startobjekt2.visibility="visible"; } else {startobjekt2.visibility="show"; }
	}

}


// ##########################################################

//### Neu starten:
function daten_vorbereiten(temp3,anleit,diktieren)
{

	// Legt Datensatz fest
	// Anstatt der while-v - Schleife bei anzeige2 oben


	// 0: mit Startcode starten
	// 1: startet ganz neu bei 0
	// 2: wieviel NEUE sollen hinzukommen?

	if (temp3==1) {
		//Neu starten
		langzeit=document.testit3.anzahlauswahl.options[document.testit3.anzahlauswahl.selectedIndex].value;
		ta_punkte1=langzeit*2;
		anzahlvok=0;
		c=0;
		while(anzahlvok<langzeit)
		{

			s=v[c+0]+".mp3";
			s2="";
			for (g=0;g<s.length;g++)
			{
				su=0;
				if (s.substring(g,g+1) == " ") { su=1; }
				if (s.substring(g,g+1) == ",") { su=1; }
				if (s.substring(g,g+1) == "'") { su=1; }
				if (su == 0) {s2=s2 + s.substring(g,g+1); }
			}
			var targetton=" target=ton"; if (langzeitmobil>0) { var targetton=""; }
			s1="<td><a href="+grundverzeichnis+"audio/"+s2+""+targetton+"><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a></td><td>&nbsp; &nbsp;</td>";
			if (s2 == "0.mp3") { s1=""; }
			vt[anzahlvok]=s1+"";
			s1="<center><a href="+grundverzeichnis+"audio/"+s2+""+targetton+"><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a>";

			if (langzeitmobil) {

				s1=""+
				"<div align=\"center\"><object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0\" width=\"40\" height=\"40\" id=\"audioplayer\" align=\"middle\">"+
				"<param name=\"allowScriptAccess\" value=\"sameDomain\" />"+
				"<param name=\"allowFullScreen\" value=\"false\" />"+
				"<param name=\"movie\" value=\""+grundverzeichnis+"programme/audio-sprachenlernen24.swf\" />"+
				"<param name=\"quality\" value=\"high\" />"+
				"<param name=\"bgcolor\" value=\"#ffffff\" />"+
				"<param name=\"flashvars\" value=\"filepath="+grundverzeichnis+"audio/"+s2+"&autoplay=true\">"+
				"<param name=\"wmode\" value=\"transparent\">"+
				"<embed src=\""+grundverzeichnis+"programme/audio-sprachenlernen24.swf\" width=\"40\" height=\"40\" align=\"middle\" quality=\"high\" bgcolor=\"#ffffff\" name=\"audioplayer\" allowScriptAccess=\"sameDomain\" allowFullScreen=\"false\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.adobe.com/go/getflashplayer\" flashvars=\"filepath="+grundverzeichnis+"audio/"+s2+"&autoplay=true\" wmode=\"transparent\" />    "+
				"</object></div>";
			}


			if (s2 == "0.mp3") { s1="<center>"; }
			v0[anzahlvok]=s1;
			vton[anzahlvok]=""+v[c+0]+".mp3";
			v1[anzahlvok]=v[c+4];
			v2[anzahlvok]=v[c+5];
			vlangzeit[anzahlvok]=9;
			vpause[anzahlvok]=0;
			vrichtig[anzahlvok]=0;
			vfalsch[anzahlvok]=0;
			vlangzeitfalsch[anzahlvok]=0;
			vnummer[anzahlvok]=""+anzahlvok;
			mischung[anzahlvok]=anzahlvok;

			vwortartgrob[anzahlvok]=0; vwortartfein[anzahlvok]=0;
			if (wortartenja) {
				if (eingabeart == "Vokabeln" || eingabeart == "Express") { // Wortarten
					var wortartnr=0; vwortartgrob[anzahlvok]=0; vwortartfein[anzahlvok]=0;
					while(wortarten[wortartnr])
					{
						if (v[c+5].indexOf(wortarten[wortartnr])>-1) { 
							vwortartgrob[anzahlvok]=wortarten[wortartnr+1]; vwortartfein[anzahlvok]=wortarten[wortartnr+2]; 
							if (v[c+5] == wortarten[wortartnr]) { wortartnr=999999; }
						}
						wortartnr+=3;
					}
				}
			}

			anzahlvok+=1; anzahlvok2+=1;
			c=c+6;
		}

		anzeigevok=-1;
		anzahlvok2=anzahlvok;
		langzeit=langzeit*1;
		langzeitstartwert=(langzeit*1)+1;
	}

	else {
		//Daten-Übergabe - nicht neu starten:
		// langzeitstartwert,code

		var abzuganzahlvok=0; var langfalschtemp=9;
		var nochweiterlernen=0;

		if (runde<2) { anzahlvok=0;anzahlvok2=0; c=0; var langfalschtemp=9; langzeitstartwert=langzeitstartwert*1; }
		else {
			// schreibt richtigwerte in alte vok, wenn 2. runde:
			nochweiterlernen=anzahlvok;
		}

		//alert (anzahlvok+" "+langzeit+" "+runde);
		runde =1;

		veraenderungsc=document.testit2.veraenderungcode.options[document.testit2.veraenderungcode.selectedIndex].value*1;
		langzeit=(langzeit*1)+(veraenderungsc*1);
		ta_punkte1=veraenderungsc*2;
		if (langzeit<2) { veraenderungsc=veraenderungsc-(2-langzeit); langzeit=2;}

		//alert (langzeit+" "+	veraenderungsc+" "+anzahlvok);

		while(anzahlvok<langzeit)
		{
			langfalschtemp=9; vpause0=0;
			if (rechendaten.length>=(anzahlvok+1)*6){
				langfalschtemp=rechendaten.substring(anzahlvok*6,anzahlvok*6+1);
				vpause0=rechendaten.substring(anzahlvok*6+1,anzahlvok*6+2)*1;
				c=rechendaten.substring(anzahlvok*6+2,anzahlvok*6+6);
				c=c*6;
			}
			else {
				if (v[(langzeitstartwert-1)*6]) {
					c=(langzeitstartwert-1)*6; langzeitstartwert=langzeitstartwert+1;
				}
				else {
					c=6; langzeitstartwert=3;
				}
			}
			if (v[c+4]) {
				s=v[c+0]+".mp3";
				s2="";
				for (g=0;g<s.length;g++)
				{
					su=0;
					if (s.substring(g,g+1) == " ") { su=1; }
					if (s.substring(g,g+1) == ",") { su=1; }
					if (s.substring(g,g+1) == "'") { su=1; }
					if (su == 0) {s2=s2 + s.substring(g,g+1); }
				}

				//s1="<td><a href="+grundverzeichnis+"audio/"+s2+" target=ton><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a></td><td>&nbsp; &nbsp;</td>";
				s1="<center><a href="+grundverzeichnis+"audio/"+s2+" target=ton><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a>";
				//alert (langzeitmobil);
				if (langzeitmobil) {

					s1=""+
					"<div align=\"center\"><object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0\" width=\"40\" height=\"40\" id=\"audioplayer\" align=\"middle\">"+
					"<param name=\"allowScriptAccess\" value=\"sameDomain\" />"+
					"<param name=\"allowFullScreen\" value=\"false\" />"+
					"<param name=\"movie\" value=\""+grundverzeichnis+"programme/audio-sprachenlernen24.swf\" />"+
					"<param name=\"quality\" value=\"high\" />"+
					"<param name=\"bgcolor\" value=\"#ffffff\" />"+
					"<param name=\"flashvars\" value=\"filepath="+grundverzeichnis+"audio/"+s2+"&autoplay=true\">"+
					"<param name=\"wmode\" value=\"transparent\">"+
					"<embed src=\""+grundverzeichnis+"programme/audio-sprachenlernen24.swf\" width=\"40\" height=\"40\" align=\"middle\" quality=\"high\" bgcolor=\"#ffffff\" name=\"audioplayer\" allowScriptAccess=\"sameDomain\" allowFullScreen=\"false\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.adobe.com/go/getflashplayer\" flashvars=\"filepath="+grundverzeichnis+"audio/"+s2+"&autoplay=true\" wmode=\"transparent\" />    "+
					"</object></div>";
				}

				if (s2 == "0.mp3") { s1=""; }
				vt[anzahlvok]=s1+"";

				v0[anzahlvok]=s1;
				v1[anzahlvok]=v[c+4];
				v2[anzahlvok]=v[c+5];
				vton[anzahlvok]=""+v[c+0]+".mp3";
				vlangzeit[anzahlvok]=langfalschtemp;
				vrichtig[anzahlvok]=0;
				vfalsch[anzahlvok]=0;
				vpause[anzahlvok]=vpause0;
				if (vpause0==0) anzahlvok2+=1;
				vlangzeitfalsch[anzahlvok]=0;
				vnummer[anzahlvok]=""+(c/6);
				mischung[anzahlvok]=anzahlvok;

				vwortartgrob[anzahlvok]=0; vwortartfein[anzahlvok]=0;
				if (wortartenja) {
					if (eingabeart == "Vokabeln" || eingabeart == "Express") { // Wortarten
						var wortartnr=0; vwortartgrob[anzahlvok]=0; vwortartfein[anzahlvok]=0;
						while(wortarten[wortartnr])
						{
							if (v[c+5].indexOf(wortarten[wortartnr])>-1) { 
								vwortartgrob[anzahlvok]=wortarten[wortartnr+1]; vwortartfein[anzahlvok]=wortarten[wortartnr+2]; 
								if (v[c+5] == wortarten[wortartnr]) { wortartnr=999999; }
							}
							wortartnr+=3;
						}
					}
				}


			}
			else { abzuganzahlvok+=1; }
			anzahlvok+=1;
		}

		if (nochweiterlernen>0) { anzeigevok=0; for (c2=0;c2<nochweiterlernen*6;c2=c2+6) { vrichtig[c2]=1; vfalsch[c2]=0; } }

		anzahlvok=anzahlvok-abzuganzahlvok;
		//anzahlvok2=anzahlvok;
		langzeit=langzeit-abzuganzahlvok;
	}

	mischen(1);
	neuevok(1,0,anleit,diktieren); 

}
// ##########################################################

function daten_ende(vmobile)
{

	// Ende des Lernens, Code-Ausgabe:

	var temp3=""+langzeitstartwert+","; 

	if (datenuebergabe.length>20) {
		langzeitwert20=""+datenuebergabe.substring(laengedaten+1, laengedaten+21)+"";
		if (langzeitwert20.length>19) {
			// gelernte Tage: Pos 1-3 minus 100
			// gelernte Minuten: Pos 4-9 minus 100.000
			langzeittage=langzeitwert20.substring(0, 3);
			langzeitminuten=langzeitwert20.substring(3, 9);
			langzeittage=(langzeittage*1-100)*1;
			langzeittage+=1;
			langzeitminuten=(langzeitminuten*1-100000)*1;
		}
	}

	//alert (langzeitwert20+" "+langzeittage+" Tage; Minuten: "+langzeitminuten);
	//alert (langzeittage+" "+langzeitminuten);

	var langzeitt2=(langzeittage*1+100)*1;
	var langzeitm2=(langzeitminuten*1+100000)*1+zeitdauer;
	var auffuellwert="13333330000";

	temp3=""+temp3+""+langzeitt2+""+langzeitm2+""+auffuellwert+"";

	//alert (langzeittage+" "+langzeitminuten+" x \n"+"\nTage: "+langzeittage+" "+langzeitminuten+"\n"+"\nTage2: "+langzeitt2+" "+langzeitm2+"\n"+langzeitwert20+"\nWert: ");

	var temp4=0; var temp7=1;
	var vauswertung= new Array;
	var vpause2=0;
	for (c=0;c<50;c++) vauswertung[c]=0;


	for (c=0;c<langzeit;c++){
		while (vnummer[c].length<4) { vnummer[c]="0"+vnummer[c]+""; }
		if (vlangzeit[c]>10) vlangzeit[c]=5;
		vpause2=vpause[c];
		if (vpause[c]>0) vpause2-=1;
		if (vlangzeit[c]>0 || vlangzeit[c]==8) { temp3=""+temp3+""+vlangzeit[c]+""+vpause2+""+vnummer[c]+""; temp4++;}
		if ((v[(vnummer[c]*6)+1]*1)-1 > temp7) temp7=(v[(vnummer[c]*6)+1]*1)-1;
		vauswertung[vlangzeit[c]]+=1; vauswertung[30]+=1;
	}
	for (c=0;c<6;c++) {
		vauswertung[c+10]=100*vauswertung[c]/vauswertung[30];
		if (vauswertung[49]<vauswertung[c+10]) vauswertung[49]=vauswertung[c+10];
	}
	var laengebalken=150; if (langzeitmobil>0) { laengebalken=50; }
	for (c=0;c<6;c++) {
		vauswertung[c+40]=laengebalken*vauswertung[c+10]/vauswertung[49];
		if (vauswertung[c+40]<2) vauswertung[c+40]=2;
		vauswertung[c+10]=""+vauswertung[c+10]+"";
		if (vauswertung[c+10].indexOf(".")>-1) vauswertung[c+10]=vauswertung[c+10].substr(0,vauswertung[c+10].indexOf("."));
		vauswertung[c+40]=""+vauswertung[c+40]+"";
		if (vauswertung[c+40].indexOf(".")>-1) vauswertung[c+40]=vauswertung[c+40].substr(0,vauswertung[c+40].indexOf("."));
		vauswertung[c+20]="<tr><td><font face='verdana,tahoma,arial,helvetica' size=2 color=FFFFFF>"+spracheintrag_hinweis[29]+" "+c+": "+vauswertung[c]+" / "+vauswertung[30]+" ("+vauswertung[c+10]+" %)</td><td><img src="+grundverzeichnis+"grafik/punkt3.gif height=14 width="+vauswertung[c+40]+"></td><td><font face='verdana,tahoma,arial,helvetica' size=2 color=FFFFFF>";
	}
	var temp5=langzeit-temp4;
	var ablauf = new Date();
	ablauf.setTime(ablauf.getTime() + (42*24*60*60*1000));

	var temp8=""; var temp9="";
	if (temp7==1) temp9="";

	ta_cookie2 = ""+sprache+"x"+sprachkuerzel+"x"+eingabeart+"="+temp3+"; expires="+ablauf+"; path=/;";
	var ta_cookie3 = "Spitzname-"+sprache+"_"+sprachkuerzel+"="+langzeitmobilspitzname+"; expires="+ablauf+"; path=/;";

	document.cookie = ta_cookie2;
	document.cookie = ta_cookie3;

	if (document.cookie.length<1) alert (spracheintrag_hinweis[40]);
	temp6="<br>"+spracheintrag_hinweis[41]+" "+temp5+" "+spracheintrag_hinweis[42]+" "+((langzeitstartwert-langzeit+temp5-1)*1)+".";
	if (temp5==0) temp6="";

	var gesamtanzahl=richtiganzahl+falschanzahl;
	var prozentgewusst=100*richtiganzahl/gesamtanzahl;
	prozentgewusst=""+prozentgewusst+"";
	if (prozentgewusst.indexOf(".")>-1) prozentgewusst=prozentgewusst.substr(0,prozentgewusst.indexOf("."));
	var prozentfalsch=(100-(prozentgewusst*1))*1;
	var prozentgewusst2=prozentgewusst*2;
	var prozentfalsch2=prozentfalsch*2;

	var mehrtagestats="";
	if (langzeittage>1) {
		var langzeitstunden = Math.floor(langzeitminuten/60);
		var restminuten = langzeitminuten-(langzeitstunden*60);
		var durchschnittsmin=Math.floor(langzeitminuten/langzeittage);
		mehrtagestats="<br>"+spracheintrag_hinweis[62]+" "+langzeittage+" "+spracheintrag_hinweis[63]+" "+langzeitstunden+"&nbsp;h&nbsp;"+restminuten+"&nbsp;min "+spracheintrag_hinweis[64]+". <br>"+spracheintrag_hinweis[65]+" "+durchschnittsmin+" min "+spracheintrag_hinweis[66]+".";

		if (langzeitstartwert>100) mehrtagestats=mehrtagestats+"<br>"+spracheintrag_hinweis[67]+" "+Math.floor((60*langzeitminuten)/langzeitstartwert)+" "+spracheintrag_hinweis[68]+".";
	}

	var cookielaenge=100; var onlineuebertragentext="";
	if (langzeitmobil>0) { // nur bei mobiler Version:
		var cookielaenge=20; 

		onlineuebertragentext=""+
"<form method=\"post\" action=\"http://www.sprachenlernen24-download.de/lerngruppen/lerngruppenmobil.php\">"+
"<input type=\"hidden\" name=\"ta_spitzname\" value=\""+langzeitmobilspitzname+"\">"+
"<input type=\"hidden\" name=\"ta_sprache\" value=\""+sprache+"\">"+
"<input type=\"hidden\" name=\"ta_lerntagnr\" value=\""+langzeittage+"\">"+
"<input type=\"hidden\" name=\"ta_langzeitstunden\" value=\""+langzeitstunden+"\">"+
"<input type=\"hidden\" name=\"ta_restminuten\" value=\""+restminuten+"\">"+
"<input type=\"hidden\" name=\"ta_vokabelnr\" value=\""+langzeitstartwert+"\">"+
"<input type=\"hidden\" name=\"ta_kursart\" value=\""+sprachkuerzel+"\">"+
"<input type=\"hidden\" name=\"ta_cookie\" value=\""+temp3+"\">"+
"<input type=\"submit\" style=\"font-size:16px; font-family:verdana,tahoma,arial; border-style: solid; background-color: #dc0000; border: 2px solid #111111; color: #FFFFFF;padding: 1 1 1 1; margin: 0 0 0 0;\" name=\"Button\" value=\" Online übertragen \">"+
"</form>";
	}
	if (unterrichtssprache == "deutsch") {
		onlineuebertragentext="";
		//alert (tageinfolgezusatzmeilen+" "+tageinfolgetext);
		if (tageinfolgezusatzmeilen>0) { onlineuebertragentext=onlineuebertragentext+"<hr size=1 width=100%><b>Zusatzmeilen:</b><br>"+tageinfolgetext+"<br>"; }
		// Überprüfen, ob dies erfüllt ist:
		var ta_sonderpunkte=0; var sonderbonusmultiplikator=1; var onlineuebertragentextzusatz="";
		//alert (ta_lerntagnr+" "+sonderbonus[(ta_lerntagnr-5)%108]-1+" "+(ta_lerntagnr-5)%108);
		if (ta_lerntagnr>4) {
			onlineuebertragentext=onlineuebertragentext+"<hr size=1 width=100%><b>Sonderbonus:</b><br>"+sonderbonustexte[sonderbonus[(ta_lerntagnr-5)%108]-1]+"<br>";
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 0) { // Punkte für NEUE Vokabeln
				onlineuebertragentextzusatz="Leider haben Sie nur "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher diese Sondermeilen nicht.";
				if (veraenderungsc>19) { ta_sonderpunkte=30; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher 30 Sondermeilen geschenkt!"; }
				if (veraenderungsc>29) { ta_sonderpunkte=50; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher 50 Sondermeilen geschenkt!"; }
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 1) {  // Multiplikator für NEUE Vokabeln
				onlineuebertragentextzusatz="Leider haben Sie nur "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher diese Sondermeilen nicht.";
				if (veraenderungsc>19) { 
					sonderbonusmultiplikator=2; 
					onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher die DOPPELTEN Meilen ("+ta_punkte1*2+" statt "+ta_punkte1+") gutgeschrieben!"; 
				}
				if (veraenderungsc>29) { 
					sonderbonusmultiplikator=3; 
					onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher die DREIFACHEN Meilen ("+ta_punkte1*2+" statt "+ta_punkte1+") gutgeschrieben!"; 
				}
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 2) { ta_sonderpunkte=10; }  // Geschenkt
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 3) {  // Stufe 0 (Langzeit)
				ta_sonderpunkte=vauswertung[0]*3; 
				if (vauswertung[0]<1)  { onlineuebertragentextzusatz="Leider haben Sie heute mit keiner Ihrer Vokabeln Stufe 0 erreicht."; }
				if (vauswertung[0]==1) { onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute mit einer Ihrer Vokabeln Stufe 0 erreicht und erhalten dafür drei Zusatzmeilen geschenkt!"; }	
				if (vauswertung[0]>1)  { onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute mit "+vauswertung[0]+" Ihrer Vokabeln Stufe 0 erreicht und erhalten dafür + "+vauswertung[0]*3+" Zusatzmeilen geschenkt!"; }	
			} 
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 4) { // Zeitdauer
				onlineuebertragentextzusatz="Schade! Leider haben Sie heute nicht lang genug gelernt.";
				if (zeitdauer>14) { ta_sonderpunkte=30; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute "+zeitdauer+" Minuten gelernt und erhalten daher + 30 Sondermeilen geschenkt!"; }
				if (zeitdauer>29) { ta_sonderpunkte=50; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute "+zeitdauer+" Minuten gelernt und erhalten daher + 50 Sondermeilen geschenkt!"; }
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 5) { 
				onlineuebertragentextzusatz="Schade! Leider haben Sie heute nicht lang genug gelernt.";
				if (zeitdauer>19) { ta_sonderpunkte=20; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute "+zeitdauer+" Minuten gelernt und erhalten daher + 20 Sondermeilen geschenkt!"; }
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 6) { 
				onlineuebertragentextzusatz="Leider haben Sie nur "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher diese Sondermeilen nicht.";
				if (veraenderungsc>14) { ta_sonderpunkte=20; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher + 20 Sondermeilen geschenkt!"; }
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 7) { 
				ta_sonderpunkte=vauswertung[0]*5; 
				if (vauswertung[0]<1)  { onlineuebertragentextzusatz="Leider haben Sie heute mit keiner Ihrer Vokabeln Stufe 0 erreicht."; }
				if (vauswertung[0]==1) { onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute mit einer Ihrer Vokabeln Stufe 0 erreicht und erhalten dafür fünf Zusatzmeilen geschenkt!"; }	
				if (vauswertung[0]>1)  { onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute mit "+vauswertung[0]+" Ihrer Vokabeln Stufe 0 erreicht und erhalten dafür + "+vauswertung[0]*5+" Zusatzmeilen geschenkt!"; }	
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 8) { ta_sonderpunkte=15; }
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 9) { 
				onlineuebertragentextzusatz="Leider haben Sie nur "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher diese Sondermeilen nicht.";
				if (veraenderungsc>9) { ta_sonderpunkte=10; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher + 30 Sondermeilen geschenkt!"; }
				if (veraenderungsc>19) { ta_sonderpunkte=30; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher + 50 Sondermeilen geschenkt!"; }
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 10) { 
				onlineuebertragentextzusatz="Schade! Leider haben Sie heute nicht lang genug gelernt.";
				if (zeitdauer>4) { ta_sonderpunkte=10; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute "+zeitdauer+" Minuten gelernt und erhalten dafür + 10 Sondermeilen geschenkt!"; }
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 11) { // >200 Gesamtvok->2x
				onlineuebertragentextzusatz="Diesen Bonus würden Sie erhalten, wenn Sie insgesamt über 200 Vokabeln gelernt hätten.";
				if (langzeitstartwert>199 || ta_vokabelnr>199) { 
					sonderbonusmultiplikator=2;
					onlineuebertragentextzusatz="Da Sie insgesamt über 200 Vokabeln gelernt haben, erhalten Sie heute die DOPPELTEN Meilen ("+ta_punkte1*2+" statt "+ta_punkte1+") gutgeschrieben. Herzlichen Glückwunsch!"; 
				}
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 12) { 
				ta_sonderpunkte=vauswertung[0]*7; 
				if (vauswertung[0]<1)  { onlineuebertragentextzusatz="Leider haben Sie heute mit keiner Ihrer Vokabeln Stufe 0 erreicht."; }
				if (vauswertung[0]==1) { onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute mit einer Ihrer Vokabeln Stufe 0 erreicht und erhalten dafür sieben Zusatzmeilen geschenkt!"; }	
				if (vauswertung[0]>1)  { onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute mit "+vauswertung[0]+" Ihrer Vokabeln Stufe 0 erreicht und erhalten dafür + "+vauswertung[0]*7+" Zusatzmeilen geschenkt!"; }	
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 13) { ta_sonderpunkte=20; }
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 14) { 
				onlineuebertragentextzusatz="Leider haben Sie nur "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher diese Sondermeilen nicht.";
				if (veraenderungsc>9) { ta_sonderpunkte=30; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher + 30 Sondermeilen geschenkt!"; }

			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 15) { 
				onlineuebertragentextzusatz="Schade! Leider haben Sie heute nicht lang genug gelernt.";
				if (zeitdauer>11) { ta_sonderpunkte=12; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute "+zeitdauer+" Minuten gelernt und erhalten dafür + 12 Sondermeilen geschenkt!"; }
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 16) { 
				onlineuebertragentextzusatz="Diesen Bonus würden Sie erhalten, wenn Sie insgesamt über 200 Vokabeln gelernt hätten.";
				if (langzeitstartwert>399 || ta_vokabelnr>399) { 
					sonderbonusmultiplikator=3;
					onlineuebertragentextzusatz="Da Sie insgesamt über 400 Vokabeln gelernt haben, erhalten Sie heute die DREIFACHEN Meilen ("+ta_punkte1*3+" statt "+ta_punkte1+") gutgeschrieben. Herzlichen Glückwunsch!"; 
				}

			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 17) { 
				ta_sonderpunkte=vauswertung[0]*10; 
				if (vauswertung[0]<1)  { onlineuebertragentextzusatz="Leider haben Sie heute mit keiner Ihrer Vokabeln Stufe 0 erreicht."; }
				if (vauswertung[0]==1) { onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute mit einer Ihrer Vokabeln Stufe 0 erreicht und erhalten dafür zehn Zusatzmeilen geschenkt!"; }	
				if (vauswertung[0]>1)  { onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben heute mit "+vauswertung[0]+" Ihrer Vokabeln Stufe 0 erreicht und erhalten dafür + "+vauswertung[0]*10+" Zusatzmeilen geschenkt!"; }	

			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 18) { // MAMMUT 40
				onlineuebertragentextzusatz="Leider haben Sie nur "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher diese Sondermeilen nicht.";
				if (veraenderungsc>39) { ta_sonderpunkte=100; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher 100 Sondermeilen geschenkt!"; }
			}
			if (sonderbonus[(ta_lerntagnr-5)%108]-1 == 19) { // MAMMUT 50
				onlineuebertragentextzusatz="Leider haben Sie nur "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher diese Sondermeilen nicht.";
				if (veraenderungsc>49) { ta_sonderpunkte=100; onlineuebertragentextzusatz="Herzlichen Glückwunsch! Sie haben "+veraenderungsc+" neue Vokabeln gelernt und erhalten daher 100 Sondermeilen geschenkt!"; }
			}
		}
	}

	var fokussierentext="document.code1.code.focus(); document.code1.code.select();"; if (langzeitmobil>0) { fokussierentext=""; }
	alertfenster("<font size=2>"+spracheintrag_hinweis[43]+"<p>"+spracheintrag_hinweis[0]+richtiganzahl+" / "+gesamtanzahl+" ("+prozentgewusst+" %). <br>"+spracheintrag_hinweis[1]+falschanzahl+" /  "+gesamtanzahl+" ("+prozentfalsch+" %). <br><table cellpadding=1 bgcolor=333333 cellspacing=0><tr><td><img src="+grundverzeichnis+"grafik/punkt.gif height=14 width="+prozentgewusst2+"><img src="+grundverzeichnis+"grafik/punkt2.gif height=14 width="+prozentfalsch2+"></td></tr></table><p>"+spracheintrag_hinweis[10]+" "+zeitdauer+" "+spracheintrag_hinweis[11]+"."+temp6+"<br>"+spracheintrag_hinweis[44]+" "+langzeitstartwert+"."+temp8+mehrtagestats+"<br><br>"+spracheintrag_hinweis[45]+"<br><table>"+vauswertung[20]+" "+spracheintrag_hinweis[46]+"</td></tr>"+vauswertung[21]+" "+spracheintrag_hinweis[47]+"</td></tr>"+vauswertung[22]+" "+spracheintrag_hinweis[48]+"</td></tr>"+vauswertung[23]+" "+spracheintrag_hinweis[49]+"</td></tr>"+vauswertung[24]+" "+spracheintrag_hinweis[50]+"</td></tr>"+vauswertung[25]+" "+spracheintrag_hinweis[51]+"</td></tr></table>\n<p>"+spracheintrag_hinweis[52]+"<br><form name=code1><input type=text name=code value=\""+temp3+"\" size="+cookielaenge+" style=\"font-family:arial narrow,arial,verdana,tahoma,arial; font-size:11px; \"><br><font size=2>"+spracheintrag_hinweis[53]+"<br><script language=JavaScript>"+fokussierentext+"</script></form><br>"+onlineuebertragentext+"\n"+onlineuebertragentextzusatz+"","008800","FFFFFF",1);
	//alert (onlineuebertragentextzusatz);

	if ((eingabeart=="Vokabeln" || eingabeart=="Express") && langzeitmobil<1) { 
		//alert (langzeit+ " "+veraenderungsc+ " // "+ta_punkte1+" Punkte");
		tagesaufgabe_start();
		ta_cookie = ta_cookie2;
		ta_aufg[1]=1; ta_aufg[5]=1;
		ta_langzeitstunden=langzeitstunden;
		ta_restminuten=restminuten; var ta_punkte2=0;
		if (ta_abbruch<1) {
			ta_punkte2=ta_punkte1 / 2;
			ta_punkte +=ta_punkte1 * sonderbonusmultiplikator;
			ta_punkte +=ta_sonderpunkte*1;
			if (tageinfolgezusatzmeilen>0) { ta_punkte +=tageinfolgezusatzmeilen; } // Bonus für in Folge gelernte Tage

		}
		tagesaufgabe_statsshift(ta_punkte2);
		if (langzeitstartwert > ta_vokabelnr) ta_vokabelnr =langzeitstartwert;
		tagesaufgabe_cookieschreiben (1);
		top.frames[0].location.reload();
	}

	//spielobjekt.visibility="hidden";
	if (zwei || iexpl) {startobjekt.visibility="hidden"; } else {startobjekt2.visibility="hidden"; }
	if (vmobile)	{	if (zwei || iexpl) {endobjekt3.visibility="visible"; } else {endobjekt3.visibility="show"; } }
	else 		{	if (zwei || iexpl) {startobjekt2.visibility="visible"; } else {startobjekt2.visibility="show"; } }

	parent[1].document.write("</td></tr></table></td></tr></table></td></tr></table>");
	parent[1].document.close();
}


// ##########################################################

