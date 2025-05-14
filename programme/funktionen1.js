// Copyright: www.sprachenlernen24.de, Udo Gollub, München


// funktionen1.js bezieht sich auf allgemeine Darstellungen, Listen, Audio-Ausgabe


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


var maxlektion=42;
if (sprachkuerzel.indexOf("2")>1) maxlektion=21;
if (sprachkuerzel.indexOf("2a")>1) maxlektion=9;
if (sprachkuerzel.indexOf("4a")>1) maxlektion=41;
if (sprachkuerzel.indexOf("4b")>1) maxlektion=40;
if (sprachkuerzel.indexOf("4e")>1) maxlektion=16;
if (sprachkuerzel.indexOf("4g")>1) maxlektion=32;
if (sprachkuerzel.indexOf("4h")>1) maxlektion=39;
if (sprachkuerzel.indexOf("4i")>1) maxlektion=20;
if (sprachkuerzel.indexOf("4j")>1) maxlektion=38;
if (sprachkuerzel.indexOf("4k")>1) maxlektion=18;
if (sprachkuerzel.indexOf("4m")>1) maxlektion=25;
if (sprachkuerzel.indexOf("4l")>1) maxlektion=34;
if (sprachkuerzel.indexOf("4x")>1) maxlektion=5;
if (sprachkuerzel.indexOf("5a")>1) maxlektion=18;
if (sprachkuerzel.indexOf("5b")>1) maxlektion=11;
if (sprachkuerzel.indexOf("5c")>1) maxlektion=13;

var bildcounter=0; var selectauswahl=0; var wortarten = new Array(); var wortartenja=0;
var bildanzahlcounter=0;
var sinhalacount=0;
var wwt=0; var schriftart="";
var m1=""; var m2=""; var m5=""; var m9=""; var m12="";
var vbildmax=1403;
var lueckenzeilenvar=0;
var langzeitmobil=0;
var vbild = new Array; var nbild = new Array;
var vbildpointer=1; 
var sprachhomepage = "&copy; www.sprachenlernen24.de";
if (unterrichtssprache !="deutsch") { var sprachhomepage = "&copy; www.worldlanguage-network.com"; }

vbildvorbereiten();


// #############################
function vbildvorbereiten() {
	for (x=1;x<=vbildmax;x++){
		vbild[x]=x;
	}
	for (y=0;y<20;y++){
		for (x=1;x<=vbildmax;x++){
			var zufall= Math.ceil(Math.random() * vbildmax );
			if (zufall==0) { zufall=1;}
			var zufalltemp=vbild[x];
			vbild[x]=vbild[zufall];
			vbild[zufall]=zufalltemp;  
		}
	}
	selectauswahl=0;
}

// ########################################################## Überschrift


function start (ueberschrift,stilrichtung,bgbild)
{


var diesertext=

 "<font face=\"verdana,arial,helvetica,sans serif\" size=4>"+
 "<center>&nbsp;<br><TABLE width=90% Border=0 bgcolor=\"#FFFFFF\" cellspacing=0 cellpadding=0><tr><td>"+
"<table bgcolor=\"#e4e4e4\" width=100% cellspacing=0 border=0 cellpadding=1><tr><td>"+
"<table bgcolor=\"#af7880\" width=100% cellspacing=0 border=0 cellpadding=1><tr><td>"+
"<table bgcolor=\"#a64654\" width=100% cellspacing=0 border=0 cellpadding=1><tr><td>"+
"<table bgcolor=\"#992233\"  width=100% background="+grundverzeichnis+"grafik/bg_d01.jpg valign=middle cellspacing=0 border=0 cellpadding=5 width=100%><tr><td>"+
"<font size=3 face=\"verdana,arial,helvetica,sans serif\" color=white>"+
"<b>"+ ueberschrift+"</b>"+
"<table bgcolor=\"#a64654\" width=100% cellspacing=0 border=0 cellpadding=1><tr><td>"+
"<table bgcolor=\"#af7880\" width=100% cellspacing=0 border=0 cellpadding=1><tr><td>"+
"<table bgcolor=\"#e4e4e4\" width=100% cellspacing=0 border=0 cellpadding=1><tr><td>"+
"<table bgcolor=\"#FFFFFF\" width=100% cellspacing=0 border=0 cellpadding=5><tr><td>"+
"<font size=2 face=\"verdana,arial,helvetica\">";

var diesertext="<head><link rel=\"stylesheet\" type=\"text/css\" href=\""+grundverzeichnis+"content/langues.css\"></head>"+
"<BODY><center>&nbsp;<br>"+
"<table bgcolor=\"#BEC0B8\" width=80% cellspacing=0 border=0 cellpadding=1><tr><td>"+
"<table bgcolor=\"#FFFFFF\" width=100% cellspacing=20 border=0 cellpadding=1><tr><td>"+
"<table bgcolor=\"#FFFFFF\" width=100% cellspacing=0 border=0 cellpadding=1><tr><td>"+
"<div id=\"normaltext\">"+
"<h1><div id=\"bg_rot\"><div id=\"ueberschrift03\">"+ueberschrift+"</div></div></h1><div id=\"normaltext\">";

//if (bgbild) diesertext=diesertext+"<body bgcolor=FAC832 background="+grundverzeichnis+"grafik/bg_c01.jpg>";
 
if (!stilrichtung){ document.write (diesertext);}
else { 
  if (stilrichtung==1){  parent[1].document.write (diesertext);}
  if (stilrichtung==2){  parent[1].parent[1].document.write (diesertext);}
}

}



function start2 (ueberschrift,stilrichtung,bgbild)
{

var diesertext="\n"+
"<h1><div id=\"bg_rot\"><div id=\"ueberschrift03\">"+ueberschrift+"</div></div></h1>";

if (!stilrichtung){ document.write (diesertext);}
else { 
  if (stilrichtung==1){  parent[1].document.write (diesertext);}
  if (stilrichtung==2){  parent[1].parent[1].document.write (diesertext);}
}

}



// ########################################################## Ende

function ende (stilrichtung)
{

	var diesertext="<br>&nbsp;</table></table></table></table></table></table></table></table></table></div></div></span></span><center><font size=1 face=verdana,tahoma,arial unicode ms,arial,helvetica color=111111>"+sprachhomepage+"<br>&nbsp;"

	if (stilrichtung<1){  document.write (diesertext); document.close();}
	if (stilrichtung>0 && stilrichtung<5){ 
		if (stilrichtung==1) { parent[1].document.write (diesertext);  parent[1].document.close();}
		if (stilrichtung==2) { parent[1].parent[1].document.write (diesertext); parent[1].parent[1].document.close();}
	}
	if (stilrichtung==5){
		document.write("</div></div></span></span><p><hr noshade size=2><font size=3 face=verdana,tahoma,arial unicode ms,arial,helvetica color=111111>"+spracheintrag_hinweis[13]);
		parent[1].document.write ("<br>&nbsp;</table></table></table></table></table></table></table></table></table></div></div></span></span><center><font size=1 face=verdana,tahoma,arial unicode ms,arial,helvetica color=111111>"+sprachhomepage+"<br>&nbsp;");
	}
}




// ##########################################################

function ersetzen(wortstring,controlc,controlv) {
	wortstring=""+wortstring;
	while (wortstring.indexOf(controlc)>-1) {
		var spalte= wortstring.indexOf(controlc);
		var w1=wortstring.substring(0,spalte);
		var w2=controlv;
		var w3=wortstring.substring(spalte+controlc.length,wortstring.length);
		wortstring=""+w1+w2+w3+"";
	}
	return wortstring;
}


// ########################################################## Darstellen der Vokabeln


function textueberschrift(lektion)
{
	var c=0; var a="";
	while(v[c])
	{
		if (v[c+1]==lektion && a=="") { a=""+v[c+5]; }
		c=c+6;
	}
	if (eingabeart=="Express") { a=expresskurs_ueberschrift[lektion];  }
	if (sprachkuerzel.indexOf("2a")>1) { a="";  }
	return a;
}


// ########################################################## 

function darstellen(wert,lektion,ausgabe,verdecken,vmobile)
{
	// wert: 0=Liste 2=Drucken

	var divstart=""; if (eingabeart=="Vokabeln" && wert !=2 ) { divstart="<div id=weissbox>";  }

	var tabelle="";
	if (ausgabe<1){
		document.write("<body bgcolor=FFFFFF><font size=4 face='verdana,tahoma,arial unicode ms,arial,helvetica' color=111111>") ;
		if (wert == 0) {  tabelle="<table bgcolor=FFFFFF cellspacing=2 cellpadding=5 border=0>"; document.write("<table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td>"+divstart+tabelle+"<tr>");}
		if (wert == 1) { tabelle="<table bgcolor=FFFFFF cellspacing=2 cellpadding=5 border=0>"; document.write("<center><table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td>"+divstart+tabelle+"<tr>"); }
		if (wert == 2 && lektion>0) { tabelle="<table bgcolor=FFFFFF cellspacing=1 cellpadding=3 border=0>"; document.write("<table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td>"+divstart+tabelle+"<tr><td></td><td colspan=4><font size=2 face='verdana,tahoma,arial unicode ms,arial,helvetica' color=111111>"+spracheintrag_hinweis[14]+" "+lektion+"<br>&nbsp;</td></tr><tr>"); }
		if (wert == 2 && lektion==0) { tabelle="<table bgcolor=FFFFFF cellspacing=1 cellpadding=3 border=0>"; document.write("<table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td>"+divstart+tabelle+"<tr><td></td><td colspan=4><font size=2 face='verdana,tahoma,arial unicode ms,arial,helvetica' color=111111>"+spracheintrag_hinweis[15]+"<br>&nbsp;</td></tr><tr>"); }
	}
	else {
		if (wert == 0) { tabelle="<table bgcolor=FFFFFF cellspacing=2 cellpadding=5 border=0>"; parent[1].parent[1].document.write("<table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td>"+divstart+tabelle+"<tr>"); }
		if (wert == 1) { tabelle="<table bgcolor=FFFFFF cellspacing=2 cellpadding=5 border=0>"; parent[1].parent[1].document.write("<center><table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td>"+divstart+tabelle+"<tr>"); }
		if (wert == 2 && lektion>0) { tabelle="<table bgcolor=FFFFFF cellspacing=1 cellpadding=3 border=0>"; parent[1].parent[1].document.write("<table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td>"+divstart+tabelle+"<tr><td></td><td colspan=4><font size=2 face='verdana,tahoma,arial unicode ms,arial,helvetica' color=111111>"+spracheintrag_hinweis[14]+" "+lektion+"<br>&nbsp;</td></tr><tr>"); }
		if (wert == 2 && lektion==0) { tabelle="<table bgcolor=FFFFFF cellspacing=1 cellpadding=3 border=0>"; parent[1].parent[1].document.write("<table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td>"+divstart+tabelle+"<tr><td></td><td colspan=4><font size=2 face='verdana,tahoma,arial unicode ms,arial,helvetica' color=111111>"+spracheintrag_hinweis[15]+"<br>&nbsp;</td></tr><tr>"); }
	}

	// Generelles Layout:

	z1="<tr>"; z2="</tr>";
	var schriftart2=" face=\"verdana,tahoma,arial unicode ms,arial,helvetica\">";
	var schriftart=" face=\"verdana,tahoma,arial unicode ms,arial,helvetica\">";
	if (rechtsbuendig==1) { schriftart=" face=\"Arial (Arabic),Simplified Arabic, Traditional Arabic, arabic, verdana,tahoma,arial unicode ms,arial,helvetica\"><div align=right>";}
	if (sprache=="singhalesisch") { schriftart=" face=\"Madhura,verdana,tahoma,arial,helvetica\">";}
	if (lateinmachen==1) { schriftart=schriftart+"<font size=+1>";}
	if (lateinmachen==2) { schriftart=schriftart+"<font size=+2>";}
	m12="<td colspan=2 valign=top bgcolor=F9F9F0><font size=2 "+schriftart;
	if (wert==0){
			m1="<td bgcolor=F9F9F0 valign=top><font size=2 color=111111 "+schriftart;
			m2="</td>";
			m9="<td bgcolor=F9F9F0 valign=top width=40><font size=2 color=111111 "+schriftart;
	}
	if (wert==1){
			m1="<td bgcolor=FFFFFF valign=top><center><font size=4 color=111111 "+schriftart;
			m2="</td></tr><tr><td></td>";
			m9=m1;
	}
	if (wert==2){
			m1="<td bgcolor=FFFFFF valign=top><font size=2 color=111111 "+schriftart;
			m2="</td>";
			m12="<td colspan=2 valign=top><font size=2 color=111111 "+schriftart;
			m9=m1;
	}
	m5=m1+"</font></font><font size=2 color=111111 "+schriftart2;     
	var m1a=m1; var m1b=m5;
	if (verdecken==1 || verdecken==3) m1a="<td bgcolor=111111 valign=top onMousedown=\"this.style.color='#999999'\" onMouseout=\"this.style.backgroundColor='#111111'\" onMouseover=\"this.style.backgroundColor='#F7F7F7'\"><font size=2 "+schriftart+"";
	if (verdecken==2 || verdecken==3) m1b="<td bgcolor=111111 valign=top onMousedown=\"this.style.color='#999999'\" onMouseout=\"this.style.backgroundColor='#111111'\" onMouseover=\"this.style.backgroundColor='#F7F7F7'\"><font face=\"verdana,tahoma,arial unicode ms,arial,helvetica\">";
	if (verdecken==1 || verdecken==3) m12="<td colspan=2 valign=top bgcolor=111111 onMousedown=\"this.style.color='#999999'\" onMouseout=\"this.style.backgroundColor='#111111'\" onMouseover=\"this.style.backgroundColor='#F7F7F7'\"><font size=2 "+schriftart+"";
	var su=0; var c=0;

	// Alle Zeilen:

	var romanisierungauswahl=0;
	if (document.romanisierungform) {
		if (document.romanisierungform.romanisierung.value.length>0) { romanisierungauswahl=document.romanisierungform.romanisierung.options[document.romanisierungform.romanisierung.selectedIndex].value; }
	}

	var ausg_darstellengesamt=""; var ausg_darstellenohnebilder=""; var ausg_darstellenarr = new Array("","","","");
	var leerzeile=0; var ueberschriftfett=0; var diesfett="";
	var vorherigelektion=0;
	while(v[c])
	{
		if (v[c+1]==lektion || lektion==0)
		{
			leerzeile+=1; s=v[c+0]+".mp3"; s2="";
			for (g=0;g<s.length;g++)
			{
				su=0;
				if (s.substring(g,g+1) == " ") { su=1; }
				if (s.substring(g,g+1) == ",") { su=1; }
				if (s.substring(g,g+1) == "'") { su=1; }
				if (su == 0) {s2=s2 + s.substring(g,g+1); }
			}
			s1="";
			
			if (wert == 0) s1="\n<a href="+grundverzeichnis+"audio/"+s2+" target=ton><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a><br><img src=\""+grundverzeichnis+"grafik/null.gif\" border=0 width=24 height=1>";
			if (wert == 1) s1="\n<center><a href="+grundverzeichnis+"audio/"+s2+" target=ton><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a><br><img src=\""+grundverzeichnis+"grafik/null.gif\" width=24 height=1>";
			
			var toncode=m9+s1+m2;
			if (s2 == "0.mp3") { toncode="<td></td>";  s1=""; }
			var keinlatein="";

			// Wortarten:
			if (eingabeart == "Vokabeln") { 
				var wortartnr=0; var wortartgefunden=0;
				while(wortarten[wortartnr])
				{
					if (v[c+5].indexOf(wortarten[wortartnr])>-1) { 
						wortartgefunden=wortarten[wortartnr+1];
						if (v[c+5] == wortarten[wortartnr]) { wortartnr=999999; }
					}
					wortartnr+=3;
				}
				//v[c+5]=v[c+5]+wortartgefunden;
			}

			var v4temp= v[c+4].replace(/   /,"&nbsp; &nbsp; &nbsp;"); var v5temp= v[c+5].replace(/   /,"&nbsp; &nbsp; &nbsp;");
			v4temp= v4temp.replace(/   /,"&nbsp; &nbsp; &nbsp;");	v5temp= v5temp.replace(/   /,"&nbsp; &nbsp; &nbsp;");
			v5temp= umlautewandeln(v5temp);
			v5temp="</font></font><font face=\"verdana,arial,helvetica\" size=2>"+v5temp;
			v4temp= sonderzeichenumwandeln(v4temp);

			if (lateinmachen) keinlatein="\n<br><font face=\"verdana,tahoma,arial unicode ms,arial,helvetica\" size=2>"+latein(v4temp)+"</font><font color=111111 size=2 face=\"verdana,tahoma,arial unicode ms,arial,helvetica\">";
			if (lateinmachen && verdecken) keinlatein="<br><font face=\"verdana,tahoma,arial unicode ms,arial,helvetica\" size=2>"+latein(v4temp)+"";

			if (romanisierungauswahl==1) { keinlatein=""; }
			if (romanisierungauswahl==2) { keinlatein="<font face=\"verdana,arial,helvetica\" size=2>"+latein(v4temp); v4temp=""; }

			var farbe="";
			var textanfangswert=3;
			if (texteversion==2) {
					textanfangswert=6;
					if (sprachkuerzel.indexOf("3",0)>1) {textanfangswert=7;}
					if (wert==0 && v[c+2]==v[textanfangswert*6-3] && v[c+2].length>1 && !verdecken){ farbe="<font color=8B0000>"; }
					if (wert==0 && v[c+2]==v[textanfangswert*6-3+6] && v[c+2].length>1 && !verdecken){ farbe="<font color=0B0B56>"; }
			} else {
					textanfangswert=6;
					if (sprachkuerzel.indexOf("3",0)>1) {textanfangswert=7;}
					if (wert==0 && v[c+2]==v[textanfangswert*6-3] && v[c+2].length>1 && !verdecken){ farbe="<font color=8B0000>"; }
					if (wert==0 && v[c+2]==v[textanfangswert*6-3+6] && v[c+2].length>1 && !verdecken){ farbe="<font color=0B0B56>"; }
			}
			
			// Farben, Design der Wörter:
			if ((ueberschriftfett<1 || v[c+1]-vorherigelektion>0) && eingabeart=="Texte" && sprachkuerzel.indexOf("5")<1 && sprachkuerzel.indexOf("6")<1) { diesfett="<b>"; ueberschriftfett+=1; vorherigelektion=v[c+1]; if (lektion==0) { diesfett=diesfett+v[c+1]+". "; }  } else { diesfett=""; }
			m99=m5+farbe+v[c+3]+":"+m2+m1a+farbe+diesfett+schriftzeichen(v4temp)+keinlatein+m2;
			if (v[c+3].length<3) m99=m12+farbe+diesfett+schriftzeichen(v4temp)+keinlatein+m2;
			ausg_darstellen=z1+toncode+m99+m1b+farbe+diesfett+v5temp+m2+z2;
			if (ausgabe==2) ausg_darstellen=z1+toncode+m5+farbe+v5temp+m2+z2;
			if (ausgabe==3) ausg_darstellen=z1+toncode+m1+farbe+schriftzeichen(v4temp)+keinlatein+m2+z2;
			if (v[c+4].length<1) { ausg_darstellen=""; }
			if (lektion==0 && diesfett.length>0) { ausg_darstellen="<tr><td>&nbsp;</td></tr>"+ausg_darstellen; }


			ausg_darstellenarr[wortartgefunden]=ausg_darstellenarr[wortartgefunden]+ ausg_darstellen; 
			ausg_darstellenohnebilder=ausg_darstellenohnebilder+ ausg_darstellen;

			// Bilder einfügen: #################################
			bildcounter+=1;
			if (bildcounter>6 && eingabeart=="Vokabeln" && wert !=2) { 
				bildcounter=0; bildanzahlcounter+=1;
				var zufall = "" + vbild[vbildpointer] +".jpg";
				if (zufall.length<7) zufall = "0"+zufall+"";   if (zufall.length<7) zufall = "0"+zufall+"";  
				vbildpointer+=1; if (vbildpointer>=vbildmax) {vbildpointer=1;}
	
				if (sprachkuerzel.indexOf("5")<1) ausg_darstellen=ausg_darstellen+"\n<tr><td colspan=5><font size=1>&nbsp;<br><img src="+grundverzeichnis+"grafik2/v"+zufall+" width=320 hspace=20><br>&nbsp;</td></tr>\n";
				if (v[c+1+6]==lektion || lektion==0) ausg_darstellen=ausg_darstellen+"</td></tr></table></div>&nbsp;<div id=weissbox>"+tabelle+"<tr><td>\n";  // Weißer Kasten

			}

			var textbilder= new Array();
			textbilderfkt(); // Vorbereitung: fügt Bilder in Texte bzw. Express ein
	
			if (vmobile) { var textbilder= new Array(); }

			// Bilder im Text darstellen:    
			var zt=0;
			while (textbilder[zt]){
					if (lektion==textbilder[zt] && bildcounter==textbilder[zt+1] && (eingabeart=="Texte" || eingabeart=="Express") && wert !=2 ) { 
						if (textbilder[zt+3]=="a"){
							bildanzahlcounter+=1;
							ausg_darstellen="</table></table><table valign=top><tr valign=top><td valign=top><img src="+grundverzeichnis+"grafik/t"+textbilder[zt+2]+".jpg width="+textbilder[zt+4]+" vspace=2 hspace=3 valign=top></td><td><table cellspacing=2 cellpadding=5 border=0>"+ausg_darstellen;
						}
						if (textbilder[zt+3]=="b"){
							ausg_darstellen="</table></table><table valign=top><tr valign=top><td><table cellspacing=2 cellpadding=5 border=0>"+ausg_darstellen;
						}
						if (textbilder[zt+3]=="c"){
							bildanzahlcounter+=1;
							ausg_darstellen=ausg_darstellen+"</table><td valign=top><img src="+grundverzeichnis+"grafik/t"+textbilder[zt+2]+".jpg width="+textbilder[zt+4]+" vspace=2 hspace=3 valign=top></td></table><table><tr><td><table>";
						}
						if (textbilder[zt+3]=="d"){
							ausg_darstellen=ausg_darstellen+"</table></table><table><tr><td><table>";
						}
					}
					zt+=5;
			}
			// Ende Bilder einfügen #####################

			ausg_darstellengesamt=ausg_darstellengesamt+ausg_darstellen;	
		}
		c=c+6;
	}

	if (ausgabe<1){
		document.write(ausg_darstellengesamt);
	}
	else {

		var darstellenauswahl=0;
		if (document.wortartenform) {
			if (document.wortartenform.wortartenauswahl.value.length>0) { darstellenauswahl=document.wortartenform.wortartenauswahl.options[document.wortartenform.wortartenauswahl.selectedIndex].value; }
		}

		if (darstellenauswahl==0) { parent[1].parent[1].document.write(ausg_darstellengesamt); }
		if (darstellenauswahl==9) { parent[1].parent[1].document.write(ausg_darstellenohnebilder); }
		if (darstellenauswahl==1) { parent[1].parent[1].document.write(ausg_darstellenarr[1]); }
		if (darstellenauswahl==2) { parent[1].parent[1].document.write(ausg_darstellenarr[2]); }
		if (darstellenauswahl==3) { parent[1].parent[1].document.write(ausg_darstellenarr[3]); }
	}

	if (ausgabe<1){
		document.write("</table></td></tr></table>");
		document.close();
	}
	else {
		parent[1].parent[1].document.write("</table></td></tr></table>");
		if (wert==2) parent[1].parent[1].document.close();
	}

}

function darstellen_mobil(lektion)
{
	var schriftart1="<font face=\"verdana,tahoma,arial unicode ms,arial,helvetica\" size=2>"; var schriftart2=schriftart1;
	if (rechtsbuendig==1) { schriftart1="<font face=\"Arial (Arabic),Simplified Arabic, Traditional Arabic, arabic, verdana,tahoma,arial unicode ms,arial,helvetica\" size=2><div align=right>"; }
	if (sprache=="singhalesisch") { schriftart="<font face=\"Madhura,verdana,tahoma,arial,helvetica\" size=2>"; }
	var schriftart3="<font face=\"Times New Roman,Times,serif\" size=2>"; 
	var c=0;
	document.write("<table border=0 cellpadding=2 cellspacing=0>");
	while(v[c])
	{
		if (v[c+1]==lektion)
		{
			s=v[c+0]+".mp3"; var s2="";
			for (g=0;g<s.length;g++)
			{
				su=0;
				if (s.substring(g,g+1) == " ") { su=1; }
				if (s.substring(g,g+1) == ",") { su=1; }
				if (s.substring(g,g+1) == "'") { su=1; }
				if (su == 0) {s2=s2 + s.substring(g,g+1); }
			}
			var s1="";
			s1="\n<a href="+grundverzeichnis+"audio/"+s2+" target=ton><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a>";
			
			var toncode="<td>"+s1+"</td>";


				toncode=""+
				"<td><div align=\"center\"><object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0\" width=\"40\" height=\"40\" id=\"audioplayer\" align=\"middle\">"+
				"<param name=\"allowScriptAccess\" value=\"sameDomain\" />"+
				"<param name=\"allowFullScreen\" value=\"false\" />"+
				"<param name=\"movie\" value=\"../programme/audio-sprachenlernen24.swf\" />"+
				"<param name=\"quality\" value=\"high\" />"+
				"<param name=\"bgcolor\" value=\"#ffffff\" />"+
				"<param name=\"flashvars\" value=\"filepath=../audio/"+s2+"&autoplay=false\">"+
				"<param name=\"wmode\" value=\"transparent\">"+
				"<embed src=\"../programme/audio-sprachenlernen24.swf\" width=\"40\" height=\"40\" align=\"middle\" quality=\"high\" bgcolor=\"#ffffff\" name=\"audioplayer\" allowScriptAccess=\"sameDomain\" allowFullScreen=\"false\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.adobe.com/go/getflashplayer\" flashvars=\"filepath=../audio/"+s2+"&autoplay=false\" wmode=\"transparent\" />    "+
				"</object></div></td>";


			if (s2 == "0.mp3") { toncode=""; }
			var keinlatein="";

			var v4temp= v[c+4].replace(/   /,"&nbsp; &nbsp; &nbsp;"); var v5temp= v[c+5].replace(/   /,"&nbsp; &nbsp; &nbsp;");
			v4temp= v4temp.replace(/   /,"&nbsp; &nbsp; &nbsp;");	v5temp= v5temp.replace(/   /,"&nbsp; &nbsp; &nbsp;");
			if (lateinmachen) { keinlatein="<br>"+schriftart2+latein(v4temp); }
			v4temp= sonderzeichenumwandeln(v4temp);
			v5temp= umlautewandeln(v5temp);

			var ausgabeblock="<td>"+schriftart1+v4temp+keinlatein+"</font><br>"+schriftart3+"&nbsp; &nbsp; &nbsp;<i>"+v5temp+"</i></font>";

			document.write("<tr>"+toncode+ausgabeblock+"</td></tr><tr><td colspan=2><hr size=1 noshade></td></tr>");
		}
		c=c+6;
	}
	document.write("</table>");
}

//################################################
function textbilderfkt() {

	if (eingabeart=="Texte") {

		if (sprachkuerzel.length <3) { // Basis
			textbilder= ( 
			"1","3","002","a","200",
			"2","5","003","a","200",
			"3","1","","b","",
			"3","5","073","c","200",
			"3","6","074","a","200",
			"4","1","005","a","250",
			"5","6","","b","300",
			"5","10","072","c","300",
			"6","6","076","a","250",
			"7","1","011","a","200",
			"7","4","","b","",
			"7","8","012","c","200",
			"8","1","013","a","200",
			"9","1","","b","",
			"9","7","075","c","250",
			"10","1","015","a","200",
			"10","6","","b","",
			"10","9","016","c","200",
			"11","1","","b","",
			"11","11","017","c","180",
			"12","1","068","a","200",
			"12","8","","d","",
			"13","4","077","a","250",
			"14","1","","b","",
			"14","5","079","c","150",
			"14","6","078","a","125",
			"15","7","080","a","250",
			"16","2","","b","",
			"16","6","024","c","250",
			"17","6","025","a","200",
			"18","1","070","a","150",
			"19","1","","b","", 
			"19","8","028","c","250", 
			"19","9","027","a","250",    
			"20","1","","b","",
			"20","5","029","c","250",
			"20","6","030","a","200",
			"21","1","031","a","200",
			"22","1","","b","",
			"22","17","050","c","150",
			"23","1","036","b","",
			"23","17","081","c","180",
			"24","1","033","a","180",
			"24","9","","b","",
			"24","21","034","c","200",
			"25","1","035","a","200",
			"26","1","","b","",
			"26","5","051","c","150",
			"26","6","082","a","200",
			"27","1","036","b","",
			"27","18","036","c","180",
			"28","7","083","a","180",
			"29","1","","b","",
			"29","6","071","c","120",
			"30","1","067","a","199",
			"31","1","","b","",
			"31","25","084","c","150",
			"32","1","057","a","180",
			"33","1","086","a","250",
			"33","6","","b","",
			"33","22","085","c","180",
			"34","1","039","a","200",
			"35","1","","b","",
			"35","9","087","c","200",
			"35","10","088","a","200",
			"36","1","042","a","200",
			"37","1","","b","",
			"37","14","044","c","150",
			"37","15","045","a","250",
			"38","4","","b","",
			"38","22","046","c","150",
			"39","1","","b","",
			"39","8","053","c","200",
			"40","1","049","a","150",
			"41","1","","b","",
			"41","15","054","c","200",
			"42","1","","b","",
			"42","8","061","c","200",
			"42","9","048","a","200",
			"","","",""
			);

		     if (texteversion==2) { 
	 		textbilder= ( 
			"1","3","002","a","200",
			"2","1","013","a","200",
			"3","5","003","a","200",
			"4","1","","b","",
			"4","7","075","c","250",
			"5","1","005","a","250",
			"6","1","","b","",
			"6","11","017","c","180",
			"7","6","","b","300",
			"7","10","072","c","300",
			"8","6","076","a","250",
			"9","1","011","a","200",
			"9","4","","b","",
			"9","8","012","c","200",
			"10","1","015","a","200",
			"10","6","","b","",
			"10","9","016","c","200",
			"11","7","080","a","250",
			"12","1","","b","",
			"12","6","071","c","120",
			"13","4","077","a","250",
			"14","1","067","a","199",
			"15","1","","b","",
			"15","5","079","c","150",
			"15","6","078","a","125",
			"16","1","068","a","200",
			"16","8","","d","",
			"17","2","","b","",
			"17","6","024","c","250",
			"18","6","025","a","200",
			"19","1","070","a","150",
			"20","1","","b","", 
			"20","8","028","c","250", 
			"20","9","027","a","250",    
			"21","1","","b","",
			"21","5","029","c","250",
			"21","6","030","a","200",
			"22","1","033","a","180",
			"22","9","","b","",
			"22","21","034","c","200",
			"23","1","","b","",
			"23","5","051","c","150",
			"23","6","082","a","200",
			"24","1","","b","",
			"24","5","073","c","200",
			"24","6","074","a","200",
			"25","1","035","a","200",
			"26","1","036","b","",
			"26","18","036","c","180",
			"27","7","083","a","180",
			"28","1","031","a","200",
			"29","1","","b","",
			"29","17","050","c","150",
			"30","1","036","b","",
			"30","17","081","c","180",
			"31","1","","b","",
			"31","25","084","c","150",
			"32","1","057","a","180",
			"33","1","086","a","250",
			"33","6","","b","",
			"33","22","085","c","180",
			"34","1","039","a","200",
			"35","1","","b","",
			"35","9","087","c","200",
			"35","10","088","a","200",
			"36","1","042","a","200",
			"37","1","","b","",
			"37","14","044","c","150",
			"37","15","045","a","250",
			"38","4","","b","",
			"38","22","046","c","150",
			"39","1","","b","",
			"39","10","053","c","200",
			"40","1","049","a","150",
			"41","1","226","a","250",
			"41","8","","b","",
			"42","1","235","a","200",
			"42","6","","b","",

			"","","",""
			); 
		     }
		}


 
		// Aufbaukurs:
		if (sprachkuerzel.indexOf("3",0)>1) {
			textbilder=( 
			"1","5","201","a","200",

			"2","6","","b","",
			"2","14","202","c","150",

			"3","4","203","a","180",
			"4","3","204","a","150",

			"5","1","205b","a","180",
			"5","9","","b","",
			"5","13","205a","c","300",

			"6","1","206","a","250",
			"6","7","","b","",

			"7","9","","b","",
			"7","14","207","c","250",

			"8","1","208","a","200",

			"9","8","","b","",
			"9","13","209","c","300",

			"10","1","","b","",
			"10","16","210","c","180",

			"11","1","211","a","250",
			"11","8","","b","",

			"12","2","212b","a","200",
			"12","7","","b","",
			"12","13","","b","",
			"12","17","212a","c","200",

			"13","8","213","a","250",

			"14","1","","b","",
			"14","13","214","c","200",

			"15","6","215","a","250",

			"16","1","","b","",
			"16","6","216","c","200",

			"17","1","217","a","150",

			"18","1","","b","",
			"18","5","218","c","200",

			"19","1","","b","",
			"19","12","219","c","120",

			"20","1","","b","",
			"20","6","220","c","200",

			"21","1","","b","",
			"21","6","221","c","200",

			"22","1","222","a","120",

			"23","1","223c","a","300",
			"23","4","","b","",
			"23","9","223d","c","150",
			"23","10","223a","a","150",

			"24","1","224b","a","250",
			"24","6","","b","",
			"24","14","224a","a","250",

			"25","1","225","a","200",
			"25","7","","b","",

			"26","1","226","a","250",
			"26","8","","b","",

			"27","1","","b","",
			"27","15","227","c","180",

			"28","1","228","a","300",
			"28","7","","b","",

			"29","1","","b","",
			"29","6","229a","c","200",

			"30","1","","b","",
			"30","16","230","c","150",

			"31","1","","b","",
			"31","7","231","c","150",

			"32","7","232","a","200",
			"32","12","","b","",

			"33","1","233","a","200",
			"33","5","","b","",

			"34","1","","b","",
			"34","11","234","c","150",

			"35","1","235","a","200",
			"35","6","","b","",

			"36","4","","b","",
			"36","12","236","c","120",

			"37","1","237","a","200",
			"37","9","","b","",

			"38","12","238","a","250",

			"39","4","","b","",
			"39","13","239","c","200",

			"40","1","240b","a","60",
			"40","6","","b","",
			"40","11","240d","c","60",
			"40","12","240c","a","60",

			"41","1","241","a","200",
			"41","7","","b","",

			"42","1","","b","",
			"42","5","242","c","300",

			"","","",""
			);
		}

	}
			
	if (eingabeart=="Express") {
			textbilder= ( 
			"1","1","501","a","100",
			"2","1","502","a","100",
			"3","1","503","a","150",
			"4","1","504","a","150",
			"5","1","505","a","150",
			"6","1","506","a","150",
			"7","1","507a","a","150",
			"8","1","508","a","150",
			"9","1","509","a","150",
			"10","1","510","a","150",
			"11","1","511","a","150",
			"12","1","512","a","150",
			"13","1","513","a","150",
			"14","1","514","a","150",
			"15","1","515","a","150",
			"16","1","516","a","100",
			"17","1","517","a","150",
			"18","1","518a","a","250",
			"19","1","519a","a","250",
			"20","1","520","a","150",
			"21","1","521a","a","250",
			"","","",""
			);
	}
}

// ##########################################################

function lueckentext(lektion,wortodersilbe)
{
 
	var romanisierungauswahl=0;
	if (document.romanisierungform) {
		if (document.romanisierungform.romanisierung.value.length>0) { romanisierungauswahl=document.romanisierungform.romanisierung.options[document.romanisierungform.romanisierung.selectedIndex].value; }
	}

	lueckentextoben(); // Design am oberen Rand

	// Design:
	z1="<tr>"; z2="</tr>";
	m12="<td colspan=2 valign=top bgcolor=F7F7F7>"+schriftart+"";
	m1="<td bgcolor=F7F7F7 valign=top>"+schriftart+"";
	m2="</td>";
	m9="<td bgcolor=F7F7F7 valign=top width=40>"+schriftart+"";
	var su=0; var c=0;

	var leerzeile=0; var lueckenzeile=0; var lueckenzeile2=1; var zeile=0; var lueckensprache=0; 
	var lueckeneins=0;
	// Zeilen durchgehen:
	while(v[c])
	{
		if (v[c+1]==lektion)
		{
			zeile++;
			leerzeile+=1; s=v[c+0]+".mp3"; s2="";
			for (g=0;g<s.length;g++)
			{
				su=0;
				if (s.substring(g,g+1) == " ") { su=1; }
				if (s.substring(g,g+1) == ",") { su=1; }
				if (s.substring(g,g+1) == "'") { su=1; }
				if (su == 0) {s2=s2 + s.substring(g,g+1); }
			}
			s1="<a href="+grundverzeichnis+"audio/"+s2+" target=ton><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a><br><img src=\""+grundverzeichnis+"grafik/null.gif\" border=0 width=24 height=1>";
			var toncode=m9+s1+m2;
			if (s2 == "0.mp3") { toncode="<td></td>";  s1=""; }

			if (lateinmachen!=0) { v[c+4] = umlautewandeln( v[c+4] ); } 
			v[c+5] = umlautewandeln( v[c+5] );
			var farbe="";
			if (v[c+2]==v[15] && v[c+2].length>1){ farbe="<font color=0B0B56>"; }
			if (v[c+2]==v[21] && v[c+2].length>1){ farbe="<font color=8B0000>"; }

			var satz_a=v[c+4]; var satz_b=v[c+5]; 

			if (lateinmachen==2) { 
				var satz1=v[c+4].substr(0,v[c+4].indexOf("---")); 
				//if (romanisierungauswahl==2) { satza=""; }
				satz_a=satz_a.substr(satz_a.indexOf("---")+3); 
			}

			if (document.lueckentextfunktion.deutschtext.options[document.lueckentextfunktion.deutschtext.selectedIndex].value <2) { var satz=""+satz_a; }
			else { var satz=""+satz_b;}  

			if (lateinmachen==0) satz = umlautewandeln( satz );
			satz=satzlueckemachen(satz,zeile,wortodersilbe);

			do {
				var satztemp=satz;
				satz = satz.replace(/\&_/,"_");
				satz = satz.replace(/\*_/,"_");
				satz = satz.replace(/#_/,"_");
			} while (satztemp != satz)

			if (document.lueckentextfunktion.deutschtext.options[document.lueckentextfunktion.deutschtext.selectedIndex].value <2) { satz_a=satz; }
			else { satz_b=satz;}

			var keinlatein="";
			if (lateinmachen==1) { 
				keinlatein="<br></font><font color=992233 size=2 face=\"verdana,tahoma,arial unicode ms,arial,helvetica\">"+latein(satz_a)+"</font><font color=111111 size=2 face=\"verdana,tahoma,arial unicode ms,arial,helvetica\">";
			}
			if (lateinmachen==2) keinlatein="<br></font><font color=992233 size=2 face=\"verdana,tahoma,arial unicode ms,arial,helvetica\">"+satz1+"</font><font color=111111 size=2 face=\"verdana,tahoma,arial unicode ms,arial,helvetica\">";
			if (romanisierungauswahl==1) { keinlatein=""; }
			if (romanisierungauswahl==2) { keinlatein=""; }

			m99=m1+farbe+v[c+3]+":"+m2+m1+farbe+satz_a+keinlatein+m2;
			if (v[c+3].length<3) m99=m12+farbe+satz_a+keinlatein+m2;

			if (document.lueckentextfunktion.deutschtext.options[document.lueckentextfunktion.deutschtext.selectedIndex].value ==3) { m99=m12+m2;}

			var deutsch=m1+farbe+satz_b+m2;
			if (document.lueckentextfunktion.deutschtext.options[document.lueckentextfunktion.deutschtext.selectedIndex].value == 0) deutsch="";
			ausg_darstellen=z1+toncode+m99+deutsch+z2;

			parent[1].parent[1].document.write(ausg_darstellen);
		}
		c=c+6;
	}
	if ( (lueckenzeile2==1 && lueckenzeile>0) || (lueckenzeile+1==lueckenzeile2 && lueckenzeile>0)) {
		// Ton:
		if (document.automatisch.automatischbox.value.length>0) var automatischton=document.automatisch.automatischbox.options[document.automatisch.automatischbox.selectedIndex].value;
		if (automatischton==1) top.parent[0].parent[1].location.href=""+grundverzeichnis+"audio/"+v[lueckensprache]+".mp3";
		if (automatischton==2) aussprache(1,v[lueckensprache]+".mp3");
	}

	parent[1].parent[1].document.write("</td></tr></table></td></tr></table>\&nbsp;");
	ende();
	parent[1].parent[1].document.write("<br>\&nbsp;");
	parent[1].parent[1].document.close();
}


//########################
function satzlueckemachen(satzvariable,zeile,wortodersilbe)
{
var lueckeneins=0;
// Herausstreichen von Wörtern für Lückentext:
var a=0; var b=0; var x=0;
var luecke= new Array;
while (satzvariable.indexOf(" ")>-1 && a<20){
  var positionleer=satzvariable.indexOf(" ");
  luecke[a]=satzvariable.substr(0,positionleer);
  satzvariable=satzvariable.substr(positionleer+1,satzvariable.length-positionleer+1);
  a++;
}

luecke[a]=satzvariable; satzvariable="";
for (x=0;x<a+1;x++){
  lueckencounter++;
  var gezeichnet=0;
  if (lueckencounter>=lmax && (luecke[x].length*schwerwert<schwer+4) && wortstart) {
    wortstart-=1; lueckencounter=0; satzvariable=satzvariable+luecke[x]+" "; gezeichnet=1;
    lueckenzeile=zeile; lueckensprache=c;
  }
  if (lueckencounter>=lmax && (luecke[x].length*schwerwert<schwer+4)) {
	silbestartwert=0; 
    if (wortodersilbe) { satzvariable=satzvariable+worthalbieren(0,luecke[x]); }
	else {satzvariable=satzvariable+"__________";}

    satzvariable=satzvariable+" "; lueckencounter=0; gezeichnet=1;
  }
  if (gezeichnet==0) { satzvariable=satzvariable+luecke[x]+" "; }
}

satzvariable=langelueckenweg(satzvariable);

//alert (satzvariable);
return satzvariable;

}

//#############


function worthalbieren(mitloesung,wortx)
{
var wort2=""; var silbestartwert=Math.floor(wortx.length/2)+1; 
while (silbestartwert==0 || (wortx.substr(silbestartwert).indexOf(";")>-1 && wortx.substr(silbestartwert-2,1)!=";")){
  silbestartwert +=1;
} 

for (b=0; b<wortx.length;b++){
  var y=wortx.substr(b,1);
  if (y !="!" && y!="?" && y!="." && y!=":" && y!="," && b+1>=silbestartwert){
    if (!mitloesung) { wort2=wort2+"_"; } else {wort2=wort2+y;}
  }
  else { if (!mitloesung) { wort2=wort2+y;} }
}
wort2=langelueckenweg(wort2);
//alert (wort2);
return (wort2);

}
//#######################

function langelueckenweg(satzvariable)
{
	// Zu lange Lücken entfernen:
	do {
		var satztemp=satzvariable;
		satzvariable = satzvariable.replace(/;_ /,"; _");
		satzvariable = satzvariable.replace(/&_/,"_");
		satzvariable = satzvariable.replace(/_ /,"_&nbsp;&nbsp; ");
		satzvariable = satzvariable.replace(/__________/,"_________");
	} while (satztemp != satzvariable)
	return (satzvariable);
}
//#############################

function lueckentextoben()
{
	parent[1].parent[1].document.write("<style type=\"text/css\">a:link { text-decoration:none; color:#111111 }a:visited { text-decoration:none; color:#111111; }a:hover { text-decoration:underline; color:#992233;  }a:active { text-decoration:none; color:#111111}a:focus { text-decoration:underline; color:#992233;  }</style>");
	var lektionlektion=lektion;
	if (eingabeart == "Übungen") { spracheintrag_hinweis[14]="Lerntag Nr."; lektionlektion=ta_lerntagnr;}

	start ("<table border=0 valign=middle><tr><td><img src="+grundverzeichnis+"grafik3/"+sprache+"_fahne100.gif height=50 width=70 style=\"border:1pt solid white\"></td><td valign=middle><font color=FFFFFF face=\"verdana,arial,helvetica\" size=3><b>&nbsp; "+spracheintrag_menu[58]+" "+spracheintrag_hinweis[14]+" "+lektionlektion+"&nbsp; </td></tr></table>",2); 
	 
	parent[1].parent[1].document.write("<body bgcolor=FFFFFF background="+grundverzeichnis+"grafik/bg_c01.jpg><font size=4 face='verdana,tahoma,arial unicode ms,arial,helvetica' color=111111>") ;
	parent[1].parent[1].document.write("<table bgcolor=FFFFFF cellspacing=1 cellpadding=0 border=0><tr><td><table bgcolor=FFFFFF cellspacing=2 cellpadding=5 border=0><tr>");
}

// ########################################################## ALLE Vokabeln





function alle_vokabeln(seite,vok_unit,unten)
{

  if (unten>0)  { parent[1].location.href=""; parent[1].location.href=""; parent[1].document.write("<center><div style=\"page-break-inside:avoid; page-break-after:always; height:22cm; margin-left:1cm; margin-right:1cm; margin-top:1cm; margin-bottom:1cm; \"><table bgcolor=FFFFFF width=100% cellspacing=0 cellpadding=4 border=1>");}
  else { document.write("<center><div style=\"page-break-inside:avoid; page-break-after:always; height:22cm; margin-left:1cm; margin-right:1cm; margin-top:1cm; margin-bottom:1cm; \"><table style=\"page-break-inside:avoid;\" bgcolor=FFFFFF width=100% cellspacing=0 cellpadding=4 border=1>");}

  var su=0; var c=0;

  einreihung=0; druckbereich=0;

  var vok5= new Array; var vok0= new Array; var vok1= new Array; var vok2= new Array; var vok3= new Array;
  // Seite: 0 Beide, 1 Fremdsprache, 2 Deutsch

  var c1=0;
  while(v[c])
  {
   if (vok_unit==0  || v[c+1] == vok_unit)
   {
    einreihung+=1;
    vok0[einreihung]=sonderzeichenumwandeln (v[c+1]);
    vok1[einreihung]=v[c+4];
    if (lateinmachen==0) vok1[einreihung]=sonderzeichenumwandeln (vok1[einreihung]);
    else                            vok1[einreihung]=schriftzeichen(vok1[einreihung])+" / "+latein(vok1[einreihung]);


    vok2[einreihung]=v[c+5];
    vok3[einreihung]=(c/6)+1;
    var wwwadr="&nbsp;";
    c1+=1;
    //if (c1 % 20 == 1) wwwadr="www.sprachenlernen24.de";
    //if (c1 % 20 == 6) wwwadr="www.onlinemediaworld.com";
    //if (c1 % 20 == 11) wwwadr="www.sprachenlernen24.de";
    //if (c1 % 20 == 16) wwwadr="www.online-media-world.com";
    if (unterrichtssprache !="deutsch") { var sprachhomepage = "www.worldlanguage-network.com"; }

    vok5[einreihung]="<td width=33.33% style=\"height:4.5cm\"><center><font size=2 face=verdana,tahoma,arial unicode ms,arial,helvetica color=111111>&nbsp;<br>"+vok1[einreihung]+"&nbsp;<p>"+vok2[einreihung]+"<font size=1><br>&nbsp;<br>"+wwwadr+"<br>("+spracheintrag_hinweis[14]+" "+vok0[einreihung]+", "+spracheintrag_hinweis[25]+" "+vok3[einreihung]+")</td>";

    if (seite == 1) vok5[einreihung]="<td width=33.33% style=\"height:4.5cm\"><center><font size=2 face=verdana,tahoma,arial unicode ms,arial,helvetica color=111111>&nbsp;<p>"+vok2[einreihung]+"<br></font><div style=\"visibility: hidden;\"><font size=2 face=verdana,tahoma,arial unicode ms,arial,helvetica color=FFFFFF>"+vok1[einreihung]+"</div><font size=1 color=111111><br>&nbsp;<br>"+"<br>("+spracheintrag_hinweis[14]+" "+vok0[einreihung]+", "+spracheintrag_hinweis[25]+" "+vok3[einreihung]+")</td>";

    if (seite == 2) vok5[einreihung]="<td width=33.33% style=\"height:4.5cm\"><center><font size=2 face=verdana,tahoma,arial unicode ms,arial,helvetica color=111111>&nbsp;<p>"+vok1[einreihung]+"<br></font><div style=\"visibility: hidden;\"><font size=2 face=verdana,tahoma,arial unicode ms,arial,helvetica color=FFFFFF>"+vok2[einreihung]+"</div><font size=1 color=111111><br>&nbsp;<br>"+"<br>("+spracheintrag_hinweis[14]+" "+vok0[einreihung]+", "+spracheintrag_hinweis[25]+" "+vok3[einreihung]+")</td>";

    /*if (seite == 1) vok5[einreihung]="<td width=33.33% style=\"height:4.5cm\"><center><font size=2 face=verdana,tahoma,arial unicode ms,arial,helvetica color=blue k=111111>&nbsp;<br>&nbsp;<br>&nbsp;<br>"+vok2[einreihung]+"&nbsp;<br>&nbsp;<br><font size=1>&nbsp;<br>&nbsp;<br>&nbsp;</td>";

    if (seite == 2) vok5[einreihung]="<td width=33.33% style=\"height:4.5cm\"><center><font size=2 face=verdana,tahoma,arial unicode ms,arial,helvetica color=red m=111111>&nbsp;<br>&nbsp;<br>&nbsp;<br>"+vok1[einreihung]+"&nbsp;<br>&nbsp;<br><font size=1>"+wwwadr+"<br><font size=1>("+spracheintrag_hinweis[14]+" "+vok0[einreihung]+", "+spracheintrag_hinweis[25]+" "+vok3[einreihung]+")<br>&nbsp;</td>";*/

    if (seite == 5) vok5[einreihung]="<td width=33.33% style=\"height:4.5cm\"><center><font size=2 face=verdana,tahoma,arial unicode ms,arial,helvetica color=111111>&nbsp;<br>&nbsp;<br>&nbsp;<br><font size=1>&nbsp;<br>&nbsp;<br>&nbsp;</td>";

    if (einreihung>2){

     if (seite == 1){ zeile="<tr>"+vok5[3]+vok5[2]+vok5[1]+"</tr>"; }
     else { zeile ="<tr>"+vok5[1]+vok5[2]+vok5[3]+"</tr>"; }

     if (seite == 5 && c>5*8){
     }
     else
     {
      if (unten>0) { parent[1].document.write(zeile); }
      else   {  document.write(zeile); }
     }

     einreihung=0;
     vok5[1]="<td width=33.33%>&nbsp;</td>";
     vok5[2]=vok5[1];
     vok5[3]=vok5[1];

     druckbereich+=1;
     if (druckbereich>4)
     {
       druckbereich=0;
       if (unten>0) {  parent[1].document.write("</table></div><div style=\"page-break-inside:avoid; page-break-after:always; height:22cm; margin-left:1cm; margin-right:1cm; margin-top:1cm; margin-bottom:1cm; \">\n<table style=\"page-break-inside:avoid;\" bgcolor=FFFFFF width=100% cellspacing=0 cellpadding=4 border=1>");}
       else { document.write("</table></div><div style=\"page-break-inside:avoid; height:22cm; page-break-after:always; margin-left:1cm; margin-right:1cm; margin-top:1cm; margin-bottom:1cm; \"><table style=\"page-break-inside:avoid;\" bgcolor=FFFFFF width=100% cellspacing=0 cellpadding=4 border=1>"); }
     }
    }
   }
   c=c+6;
  }

  // Restliche Karten schreiben:

  if (einreihung > 0){
   if (seite == 1){  zeile="<tr>"+vok5[3]+vok5[2]+vok5[1]+"</tr>"; }
   else { zeile="<tr>"+vok5[1]+vok5[2]+vok5[3]+"</tr>"; }
   if (unten>0) { parent[1].document.write(zeile); }
   else { document.write(zeile);}
  }

  if (unten>0) {  parent[1].document.write("</table>"); parent[1].document.close();  }
  else  { document.write("</table>"); document.close(); }
}




//#################################################################################################

function schriftzeichen(wwt)
{
	if (lateinmachen==2) {
		var wwtorig=wwt;
		wwt=wwt.substr(0,wwt.indexOf("---"));
		if (sprache=="singhalesisch") { 
			if (selectauswahl==1) { sinhalacount=sinhalacount+1; wwt=latein(wwtorig);}
			else { wwt="<font face=\"Madhura,verdana,tahoma,arial,helvetica\">"+wwt;}
		}
	}
	if (lateinmachen==0) wwt=sonderzeichenumwandeln (wwt);
	return wwt;
}






// ############################################################################################



