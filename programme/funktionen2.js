// Copyright: www.sprachenlernen24.de, Udo Gollub, München 


// funktionen2.js und funktionen3.js bezieht sich auf Karteikarten, Tests, Sonderzeichen

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


if (!lektion){ var lektion=0; }

var sprachwechsel=0;
var anzeigevok2=0; var gesamtanzahl=0;
var langzeit=0; var langzeitstartwert=0; var rechendaten=""; var laengedaten=0; var datenuebergabe="";
var v0= new Array; var v1= new Array; var v2= new Array; var vt= new Array; var vton= new Array; 
var vrichtig= new Array; var vfalsch= new Array; var vlangzeitfalsch= new Array; var vlangzeit= new Array; var vwortartgrob= new Array; var vwortartfein= new Array; 
var vpause= new Array; var ultralang=0; 
var vnummer= new Array; var mischung= new Array;
var anzahlvok=0; var anzahlvok2=0; var alttest="";
var travail=0; var testen=0; var siebenletztes=0;
var richtiganzahl=0; var falschanzahl=0; var punkte=0; var vpause0=0;
var vorher0=""; var vorher1=""; var vorher2=""; var vorher3="";
var selectauswahl=0; var anzahlausw=5; var einfaerbeninfo=0;
var startzeit=new Date();
var zeitdauer=0; var zeitdauer2=0; var mitloesungmodus=0;
var siebenmachen=0; var siebenmachen2=0; var mischenmodus=0;
var sieben = new Array; var sieben2 = new Array;
var c=0; var temp2=""; var backgroundquickshow=0;
var blitzwiederholung=0;
var sperre=0; var runde=1; var rundeplus1=""; var rundeminutengesamt=0; var rundeplus2=""; 
var s1=""; var s2="";
var keinlatein=""; var wortsalatvar=0;
var ausgabeblock=""; var ta_abbruch=0;

var tafeljetzt = new Date(); var tafeljetztm = Date.parse(tafeljetzt)/(1000*60*60); tafeljetztm =Math.round (tafeljetztm);
var tafeldarstellen=tafeljetztm;

var runderichtig = new Array;
var rundegesamt = new Array;
var rundeminuten = new Array;

for (var t=1;t<1000;t++) { runderichtig[t]=0; rundegesamt[t]=0; rundeminuten[t]=0; }

var vbildmax=1403; var nbildmax=61;
var lueckenzeilenvar=0;
var vbild = new Array; var nbild = new Array;
var vbildpointer=1; var nbildpointer=1; var zitatpointer=1;
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
//

for (x=1;x<=nbildmax;x++){
  nbild[x]=x;
}
for (y=0;y<20;y++){
	for (x=1;x<=nbildmax;x++){
		var zufall= Math.ceil(Math.random() * nbildmax );
		if (zufall==0) { zufall=1;}
		var zufalltemp=nbild[x];
		nbild[x]=nbild[zufall];
		nbild[zufall]=zufalltemp;  
	}
}
//

for (y=0;y<20;y++){
	for (x=0;x<zitatanzahl;x++){
		var zufall= Math.floor(Math.random() * zitatanzahl *0.9999);
		if (zufall==zitatanzahl) { zufall=1;}
		var zufalltemp=zitat[x];
		zitat[x]=zitat[zufall];
		zitat[zufall]=zufalltemp;  
	}
}

// Vorbereiten der Daten:
while(v[c])
{
	if (v[c+1]==lektion) {
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
		s1="<td><a href="+grundverzeichnis+"audio/"+s2+""+targetton+"><img src=\""+grundverzeichnis+"grafik/lautsprecher2.gif\" border=0></a></td><td>&nbsp; &nbsp;</td>";
		if (s2 == "0.mp3") { s1=""; }
		vt[anzahlvok]=s1+"";
		s1="<center><a href="+grundverzeichnis+"audio/"+s2+""+targetton+"><img src=\""+grundverzeichnis+"grafik/lautsprecher2.gif\" border=0></a><br><img src=\""+grundverzeichnis+"grafik/null.gif\" width=24 height=1>";

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
		vlangzeit[anzahlvok]=5;
		vrichtig[anzahlvok]=0;
		vfalsch[anzahlvok]=0;
		vpause[anzahlvok]=0;
		vlangzeitfalsch[anzahlvok]=0;
		vnummer[anzahlvok]=anzahlvok;
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
	}
	c=c+6;
}

anzeigevok=-1;
mischen(1);
var untenanzeigenstart=0;
var tafelarray=new Array (
"wolken1.jpg","",
"strand2.jpg","",
"tafel1.jpg","",
"gebetsfahnen1.jpg","",
"Hintergrund10.jpg","",
"tafel3.jpg","",
"Hintergrund11.jpg","",
"Hintergrund12.jpg","",
"tafel3.jpg","",
"Hintergrund13.jpg","",
"Hintergrund14.jpg","",
"tafel3.jpg","",
"Hintergrund15.jpg","111111",
"Hintergrund16.jpg","111111",
"tafel3.jpg","",
"Hintergrund17.jpg","111111",
"Hintergrund18.jpg","111111",
"tafel3.jpg","",
"Hintergrund19.jpg","",
"Hintergrund20.jpg",""
);


// ########################################################## Neue Vokabel suchen

function neuevok(veraenderung,mitloesung,anleit,schreibenlernen,fokussieren,vmobile,vmobilelangzeit)
{
	if (document.testit) { if (document.testit.testvokabel) { document.testit.testvokabel.focus(); } }
	var a=1; var b=0; sperre=0; mitloesungmodus=mitloesung;
	while (a==1 && b<9999){
		anzeigevok+=veraenderung;
		if (anzeigevok<0) { anzeigevok=anzahlvok-1; }
		if (anzeigevok>anzahlvok-1) { 
			anzeigevok=0; runde +=1; rundeplus1="<font size=+2 color=992233>"; rundeplus2="</font>"; 
			var rundeminutenges=0;
			for (var t=1;t<runde;t++) { rundeminutenges+=rundeminuten[t]; }
			rundeminuten[runde-1]=zeitdauer-rundeminutenges;
			if (mischenmodus) { mischen(1); }
		}
		a=vrichtig[mischung[anzeigevok]]; b+=1;
		if (vpause[mischung[anzeigevok]]*1>0) a=1; // VPAUSE > 0 = überspringen
	}
	if (b>8998){
		if (selectauswahl) { document.testit.testvokabel.length = 1; }
		var endzeit=new Date(); zeitdauer=Math.round((endzeit-startzeit)/(1000*60));
		var gesamtanzahl=richtiganzahl+falschanzahl;
		var prozentgewusst=100*richtiganzahl/gesamtanzahl;
		prozentgewusst=""+prozentgewusst+"";
		if (prozentgewusst.indexOf(".")>-1) { prozentgewusst=prozentgewusst.substr(0,prozentgewusst.indexOf(".")); }
		var prozentfalsch=(100-(prozentgewusst*1))*1;
		var prozentgewusst2=prozentgewusst*2;
		var prozentfalsch2=prozentfalsch*2;
		if (langzeit==0) { alertfenster(spracheintrag_hinweis[6]+"<p><font size=3>"+spracheintrag_hinweis[0]+richtiganzahl+spracheintrag_hinweis[7]+gesamtanzahl+" ("+prozentgewusst+" %). <br>"+spracheintrag_hinweis[8]+falschanzahl+spracheintrag_hinweis[7]+gesamtanzahl+" ("+prozentfalsch+" %). <br><table cellpadding=1 cellspacing=0 bgcolor=111111><tr><td><img src="+grundverzeichnis+"grafik/punkt.gif height=14 width="+prozentgewusst2+"><img src="+grundverzeichnis+"grafik/punkt2.gif height=14 width="+prozentfalsch2+"></td></tr></table><font size=5><p>"+spracheintrag_hinweis[9]+"<br>"+spracheintrag_hinweis[10]+" "+zeitdauer+" "+spracheintrag_hinweis[11]+".","008800","FFFFFF"); }
		else { daten_ende(vmobilelangzeit); }
	}
	else {
		if (selectauswahl) { selectmachen(); }
		unten_anzeigen(mitloesung,anleit,schreibenlernen,0,blitzwiederholung,fokussieren,veraenderung,vmobile);
	}
}


// ########################################################## unten anzeigen

function unten_anzeigen(mitloesung1,anleit,schreibenlernen,siebenmerken,blitzwiederholung,fokussieren,veraenderung,vmobile)
{
	if (!vmobile) var vmobile=0;
	var ausgabeblock2="";
	var kastenunten1="<table cellspacing=0 cellpadding=0 border=0><tr><td><table cellspacing=0 cellpadding=0 border=0><tr>"+
	"<td width=9 height=9><img src="+grundverzeichnis+"grafik/tab_gr1.gif width=9 height=9></td>"+
	"<td width=* background="+grundverzeichnis+"grafik/tab_gr2.gif></td>"+
	"<td width=9><img src="+grundverzeichnis+"grafik/tab_gr3.gif width=9 height=9></td>"+
	"</tr><tr><td background="+grundverzeichnis+"grafik/tab_gr4.gif></td><td background="+grundverzeichnis+"grafik/tab_gr5.gif><table width=100% cellspacing=0 border=0 cellpadding=10><tr><td><img src="+grundverzeichnis+"grafik/nichts.gif width=20 height=9></td><td><center>";

	var kastenunten2= "<br><img src="+grundverzeichnis+"grafik/nichts.gif width=20 height=6></td><td><img src="+grundverzeichnis+"grafik/nichts.gif width=20 height=9></td></tr></table></td><td background="+grundverzeichnis+"grafik/tab_gr6.gif></td></tr><tr><td width=9><img src="+grundverzeichnis+"grafik/tab_gr7.gif width=9 height=9></td>"+
	"<td width=* background="+grundverzeichnis+"grafik/tab_gr8.gif></td>"+
	"<td width=9><img src="+grundverzeichnis+"grafik/tab_gr9.gif width=9 height=9></td></tr>"+
	"</table></td></tr></table>";

	var schriftfarbe="111111"; var schriftfarbekomma="AA0000"; var schriftfarberot="993322";
	tafeldarstellen+=1;

	var romanisierungauswahl=0;
	if (document.romanisierungform) {
		if (document.romanisierungform.romanisierung.value.length>0) { romanisierungauswahl=document.romanisierungform.romanisierung.options[document.romanisierungform.romanisierung.selectedIndex].value; }
	}

	if (tafeldarstellen%10==9) {
		// Tafel:
		var tafelbild="tafel3.jpg"; 
		schriftfarbe="DDDDDD"; schriftfarbekomma="BBBBBB"; schriftfarberot="DDDDDD";

		for (var x=9;x<200;x+=10) {
			if (tafeldarstellen%200==x) { 
				tafelbild = tafelarray[(x-9)/5]; 
				if (tafelarray[(x-9)/5 +1].length>1) { schriftfarbe="111111";schriftfarbekomma="111111"; schriftfarberot="111111"; }
			}
		}

		kastenunten1="<table cellpadding=0 border=0 style=\"padding:20px 60px 20px 60px;\ border: 1px solid #3a0e00; background: #3D6C63 url("+grundverzeichnis+"grafik/"+tafelbild+") repeat top left; -moz-border-radius: 7px; -moz-box-sizing: border-box;\"><tr><td>";
		kastenunten2="</td></tr></table>"; 
	}

	if (untenanzeigenstart==0) {
		for (var x=0;x<40;x+=2) {
			kastenunten2=kastenunten2+"<img src="+grundverzeichnis+"grafik/"+tafelarray[x]+" height=0 width=0>"; untenanzeigenstart=1;
		}
	}

	if (langzeitmobil>0 && 1==0) { /// DIES HIER NOCH ENTFERNEN
		kastenunten1="<table cellpadding=0 border=0 style=\"padding:5px 5px 5px 5px;\ border: 1px solid #3a0e00; -moz-border-radius: 5px; -moz-box-sizing: border-box;\"><tr><td>";
		kastenunten2="</td></tr></table>"; 

		//WIE FRÜHER:
		var kastenunten1="<table cellspacing=0 cellpadding=0 border=0><tr><td><table cellspacing=0 cellpadding=0 border=0><tr>"+
		"<td width=9 height=9><img src="+grundverzeichnis+"grafik/tab_gr1.gif width=9 height=9></td>"+
		"<td width=* background="+grundverzeichnis+"grafik/tab_gr2.gif></td>"+
		"<td width=9><img src="+grundverzeichnis+"grafik/tab_gr3.gif width=9 height=9></td>"+
		"</tr><tr><td background="+grundverzeichnis+"grafik/tab_gr4.gif></td><td background="+grundverzeichnis+"grafik/tab_gr5.gif><table width=100% cellspacing=0 border=0 cellpadding=10><tr><td><img src="+grundverzeichnis+"grafik/nichts.gif width=20 height=9></td><td><center>";

		var kastenunten2= "<br><img src="+grundverzeichnis+"grafik/nichts.gif width=20 height=6></td><td><img src="+grundverzeichnis+"grafik/nichts.gif width=20 height=9></td></tr></table></td><td background="+grundverzeichnis+"grafik/tab_gr6.gif></td></tr><tr><td width=9><img src="+grundverzeichnis+"grafik/tab_gr7.gif width=9 height=9></td>"+
		"<td width=* background="+grundverzeichnis+"grafik/tab_gr8.gif></td>"+
		"<td width=9><img src="+grundverzeichnis+"grafik/tab_gr9.gif width=9 height=9></td></tr>"+
		"</table></td></tr></table>";


		var schriftfarbe="111111"; var schriftfarbekomma="AA0000"; var schriftfarberot="993322";
	}

	if (!blitzwiederholung && mitloesung1) { 
		vlangzeit[mischung[anzeigevok]]=5; 
		vfalsch[mischung[anzeigevok]]=1; vlangzeitfalsch[mischung[anzeigevok]]=1;
		if (runde>4) { vfalsch[mischung[anzeigevok]]=2; }
		falschanzahl=falschanzahl+1;
	}
	travail=1; test=""; mitloesung2=""; 
	if (!vmobile) parent[1].document.close();

	backgroundquickshow=Math.round(tafeldarstellen/11)%15;
	var widthheight="width=\"100%\" height=\"60%\""; if (langzeitmobil>0) { widthheight="width=\""+window.innerWidth+"\"";}
	ausgabeblock="<body style=\"background: #f4eed4 url("+grundverzeichnis+"grafik/background_quickshow"+backgroundquickshow+".jpg) no-repeat fixed center center\"><table "+widthheight+" border=0 cellpadding=0 cellspacing=0><tr><td height=1 bgcolor=993322 background="+grundverzeichnis+"grafik/bg_a01.jpg><img src="+grundverzeichnis+"grafik/nichts.gif height=1 width=10></td></tr>";

	//Vorher-Block (über dem Fenster):
		var keinlatein="";
		// Lateinische Schrift:
		if (lateinmachen) { keinlatein="<br><font color=993322>"+latein(vorher1)+""; }

		var schriftgross1=""; var schriftgross2="";  var schriftuni1=""; var schriftuni2="";
		if (lateinmachen) { schriftgross1="<font size=+2 face=\"arial unicode, Lucida Sans Unicode, Verdana, Arial, Helvetica, Sans Serif\" color=\""+schriftfarbe+"\">"; schriftgross2="</font>"; }
		if (lateinmachen) { schriftuni1="<font size=+1 face=\"arial unicode, Lucida Sans Unicode, Verdana, Arial, Helvetica, Sans Serif\" color=\""+schriftfarbe+"\">"; schriftuni2="</font>"; }

		if (romanisierungauswahl==1) { keinlatein=""; }
		if (romanisierungauswahl==2) { keinlatein=""+latein(vorher1)+""; vorher1=""; }

		//Vorher-Block (über dem Fenster):
		if (vorher0.indexOf("audio/0.mp3")>-1) vorher0="";
		var positionierungmitte=" valign=middle"; if (langzeitmobil>0) { positionierungmitte=" valign=top"; }
		if (vorher2.length>0) { ausgabeblock=ausgabeblock+"<tr><td align=center valign=top><center><font face='verdana,tahoma,arial,helvetica' size=2 color='999999'><center><table bgcolor=ECE4BE background="+grundverzeichnis+"grafik/bg_c02.jpg width=100% cellspacing=0 cellpadding=0><tr><td><center><table border=0 cellspacing=4 cellpadding=2><tr><td valign=middle>"+vorher0+"</td><td>&nbsp;</td><td valign=middle><font face='verdana,tahoma,arial,helvetica' size=2 color='999999'>"+schriftgross1+schriftzeichen(vorher1)+schriftgross2+keinlatein+"</td><td>&nbsp;</td><td valign=middle><font face='verdana,tahoma,arial,helvetica' size=2 color='999999'>"+vorher2+"</td><td valign=middle><font face='verdana,tahoma,arial,helvetica' size=2 color='999999'>"+vorher3+"</td></tr></table></td></tr><tr><td height=1 bgcolor=993322 background="+grundverzeichnis+"grafik/bg_a01.jpg><img src="+grundverzeichnis+"grafik/nichts.gif height=1 width=10></td></tr></table></tr><tr"+positionierungmitte+"><td align=center"+positionierungmitte+">"; }
		else { ausgabeblock=ausgabeblock+"<tr><td align=center"+positionierungmitte+"><center>"; }

		vorher0=""; vorher1=""; vorher2=""; vorher3="";
		var vnummer2=(vnummer[mischung[anzeigevok]]*1)+1; var stufennummer="";
		if (langzeit) { stufennummer=" ("+spracheintrag_hinweis[29]+": "+vlangzeit[mischung[anzeigevok]]+")"; if (vlangzeit[mischung[anzeigevok]]>5) { stufennummer=" (---)";}}
		ausgabeblock=ausgabeblock+"<font size=1><font face='verdana,tahoma,arial,helvetica' size=1 color=999999>"+spracheintrag_hinweis[25]+" "+vnummer2+stufennummer+"<table cellspacing=0 border=0 cellpadding=5><tr><td>"+kastenunten1;
		ausgabeblock2=spracheintrag_hinweis[25]+" "+vnummer2+stufennummer;

	//Karteikarte:
	if (lateinmachen!=1) var v1x = schriftzeichen(v1[mischung[anzeigevok]]);
	if (lateinmachen==1) var v1x = v1[mischung[anzeigevok]];
	if (lateinmachen<1) v1x = umlautewandeln(v1x);
	var v2x = umlautewandeln(v2[mischung[anzeigevok]]); var v12y="";
	//alert (v1x+ " "+umlautewandeln(v1x));

	if (wortsalatvar) { 
		if (sprachwechsel) { v12y=wortsalat(1,v2x,anzeigevok); v2x=wortsalat(0,v2x,anzeigevok); }
		else {
			var v1xx=v1x; if (lateinmachen==2) {v1xx=latein(v1[mischung[anzeigevok]]);}
			v12y=wortsalat(1,v1xx,anzeigevok); v1x=wortsalat(0,v1xx,anzeigevok);
		}
	}
	if (lueckenzeilenvar) { 
		if (sprachwechsel) { v12y=lueckenzeile(1,v2x,anzeigevok,lueckenzeilenvar); v2x=lueckenzeile(0,v2x,anzeigevok,lueckenzeilenvar); }
		else { 
			var v1xx=v1x; 
			if (lateinmachen==2) {v1xx=umlautewandeln(latein(v1[mischung[anzeigevok]])); }
			v12y=lueckenzeile(1,v1xx,anzeigevok,lueckenzeilenvar); v1x=lueckenzeile(0,v1xx,anzeigevok,lueckenzeilenvar); 
		}
	}
	v1x=alpha_in_zahl(v1x);

	var kommaausgabeblock="";
	if (eingabeart=="Vokabeln" && !mitloesung1) {
		var kommas1; var kommas1s; var kommas2=1;
		if (sprachwechsel) { kommas1=v0[mischung[anzeigevok]];}
		else { kommas1=v1x; }
		while (kommas1.indexOf(",")>-1) { kommas2+=1; kommas1=kommas1.substring(kommas1.indexOf(",")+1)}

		if (sprachwechsel) { kommas1s=v0[mischung[anzeigevok]];}
		else { kommas1s=v1x; }
		//alert (kommas1s);
		while (kommas1s.indexOf("/")>0) { kommas2+=1; kommas1s=kommas1s.substring(kommas1s.indexOf("/")+2)}

		if (kommas2>1) { kommaausgabeblock="</td></tr><tr><td></td><td align=right><font size=2 face=\"verdana,arial,helvetica\" color="+schriftfarbekomma+">"+kommas2; }
	}


	if (lateinmachen==0 && !vmobile) { v1x=einfaerben(v1x,1); }
	if (!vmobile) { v2x=einfaerben(v2x,2); }
	keinlatein=""; 
	var v12yl="";



	if (lateinmachen==1) {v12yl=latein(v1[mischung[anzeigevok]]); v12yl=einfaerben(v12yl,1);}

	if (lateinmachen==1) {
		v12yl=latein(v1[mischung[anzeigevok]]); 
		if (!vmobile) { v12yl=einfaerben(v12yl,1); }
	}
	if (lateinmachen==2) {v12yl=schriftzeichen(v1[mischung[anzeigevok]]);}

	if (wortsalatvar && lateinmachen==1) {v12yl=latein(wortsalat(0,v1[mischung[anzeigevok]],anzeigevok));}
	if (lueckenzeilenvar && lateinmachen==1) {v12yl=latein(lueckenzeile(0,v1[mischung[anzeigevok]],anzeigevok,lueckenzeilenvar));}

	if (lateinmachen) {
		if (!vmobile) { keinlatein="<br></font><font color="+schriftfarberot+" size=5 face=\"verdana,tahoma,arial,helvetica,sans serif\">"+v12yl+"</font><font color="+schriftfarbe+" size=5 face=\"verdana,tahoma,arial,helvetica\">"; }
		else { keinlatein=v12yl; }
	}
	if (lateinmachen==2 && mitloesung1) { 
		if (!vmobile) { keinlatein="<br></font><font color="+schriftfarberot+" size=5 face=\"verdana,tahoma,arial,helvetica\">"+latein(v1[mischung[anzeigevok]])+"</font><font color="+schriftfarbe+" size=5 face=\"verdana,tahoma,arial,helvetica\">"; }
		else { keinlatein=latein(v1[mischung[anzeigevok]]); }
	}

	if (romanisierungauswahl==1) { keinlatein=""; }
	if (romanisierungauswahl==2) { v1x=""; keinlatein="<font color="+schriftfarbe+" "+keinlatein.substr(29); }

	var mitloesungmobi2="";
	if (sprachwechsel || lueckenzeilenvar){
		if (mitloesung1>0 || lueckenzeilenvar || wortsalatvar) { mitloesung2=v0[mischung[anzeigevok]]+"<p>"+v2x+"<p>"; mitloesungmobi2="     "+v2x;}
		else { mitloesung2=v0[mischung[anzeigevok]]+"<p>"; mitloesungmobi2=""; }
		ausgabeblock=ausgabeblock+"<font face='verdana,tahoma,arial,helvetica' size=5 color='"+schriftfarbe+"'><center>";
 		if (schreibenlernen) {ausgabeblock=ausgabeblock+""+mitloesung2; ausgabeblock2=ausgabeblock2+mitloesungmobi2;}
		else {ausgabeblock=ausgabeblock+""+test+""+mitloesung2+v1x+keinlatein; ausgabeblock2=ausgabeblock2+""+test+""+mitloesungmobi2+"     "+v1x+"     "+keinlatein;}
	}
	else {
		if (mitloesung1>0 || wortsalatvar) { mitloesung2=v0[mischung[anzeigevok]]+"<p>"+v1x+keinlatein+"<p>"; mitloesungmobi2="     "+v1x+"     "+keinlatein;}
		if (schreibenlernen) { mitloesung2=v0[mischung[anzeigevok]]; mitloesungmobi2="     "+v0[mischung[anzeigevok]]; }
		ausgabeblock=ausgabeblock+ "<font face='verdana,tahoma,arial,helvetica' size=5 color='"+schriftfarbe+"'><center>";
		if (schreibenlernen) { ausgabeblock=ausgabeblock+""+mitloesung2; ausgabeblock2=ausgabeblock2+mitloesungmobi2; }
		else { ausgabeblock=ausgabeblock+""+test+""+mitloesung2+v2x; ausgabeblock2=ausgabeblock2+mitloesungmobi2+"     "+v2x; }
	}

	if ((wortsalatvar || lueckenzeilenvar) && mitloesung1) {
		if (lateinmachen==1) {v12yl="<br>"+latein(v12y);} 
		if (lateinmachen==2) {v12yl="<br>"+schriftzeichen(v1[mischung[anzeigevok]]); v12yl="";} 
		ausgabeblock=ausgabeblock+"<p><span style=\"background-color:#FFCC00\">"+v12y+v12yl+"</span>";
	}

	

	ausgabeblock=ausgabeblock+kommaausgabeblock+kastenunten2+"</td></tr></table><center><font face='verdana,tahoma,arial,helvetica' size=2 color='111111'>";

	if (mitloesung1>0) { ausgabeblock=ausgabeblock+"<img src="+grundverzeichnis+"grafik/pause_v.gif><br>"; }


	// Sieben Wiederholungen zeichnen + Hinweis "Das haben Sie gut gemacht":
	if (siebenmachen==7) {
		siebenmachen=0;
		if (!vmobile) { kurzwiederholung(); }
	}

	// Sieben Wiederholungen in Liste schreiben:
	if (mitloesung1>0) {
		if (!siebenmerken && !vmobile) { sieben_in_liste(); }
	}

	// Tonausgabe:
	if ((mitloesung1>0 || sprachwechsel==1 || schreibenlernen) && !vmobile) {
		var automatischton=0;
		if (document.automatisch) { if (document.automatisch.automatischbox.value.length>0) automatischton=document.automatisch.automatischbox.options[document.automatisch.automatischbox.selectedIndex].value; }
		if (automatischton==1) top.parent[0].parent[1].location.href=""+grundverzeichnis+"audio/"+vton[mischung[anzeigevok]];
		//if (langzeitmobil==1 && sprachwechsel==0 && !vmobile) { top.parent[1].location.href=""+grundverzeichnis+"audio/"+vton[mischung[anzeigevok]];  }
		if (automatischton==2) aussprache(1,vton[mischung[anzeigevok]]);
		if (document.testit) { if (document.testit.testvokabel) { window.setTimeout("fokussierenfkt()",500); } }
	} 

	zeitdauer_berechnen(); // schreibt auch richtig/falsch-werte

	// Sieben Wiederholungen zeichnen:
	if (siebenmachen2>=7 && siebenletztes!=mischung[anzeigevok]) {
		siebenmachen2=0;
		ausgabeblock=ausgabeblock+"<table cellspacing=0 border=0 cellpadding=20><tr><td><table bgcolor=993322 cellspacing=0 border=0 cellpadding=1><tr><td><font face='verdana,tahoma,arial,helvetica' size=2 color=EEEEEE>&nbsp;"+spracheintrag_hinweis[16]+"&nbsp;</td></tr><tr><td><table width=100% bgcolor=FFFFFF cellspacing=0 border=0 cellpadding=3>";
		for (var a=0;a<7;a++){ ausgabeblock=ausgabeblock+sieben2[a]; }
	ausgabeblock=ausgabeblock+"</table></td></tr></table></td></tr></table>";
	}
	if (anleit==1) {
		if (wortsalatvar){
			ausgabeblock=ausgabeblock+"<table cellspacing=0 border=0 cellpadding=20><tr><td><table bgcolor=993322 cellspacing=0 border=0 cellpadding=1><tr><td><font face='verdana,tahoma,arial,helvetica' size=2 color=EEEEEE>&nbsp;<b>"+spracheintrag_hinweis[71]+"</b>&nbsp;</td></tr><tr><td><table width=100% bgcolor=FFFFFF cellspacing=0 border=0 cellpadding=3><font face='verdana,tahoma,arial,helvetica' size=2 color=EEEEEE>";
			ausgabeblock=ausgabeblock+"&nbsp;"+spracheintrag_hinweis[17]+"";
			ausgabeblock=ausgabeblock+"</table></td></tr></table></td></tr></table><p>";
		}
		if (langzeitmobil<1) { 
			ausgabeblock=ausgabeblock+"<table cellspacing=0 border=0 cellpadding=20><tr><td><table bgcolor=993322 cellspacing=0 border=0 cellpadding=1><tr><td><font face='verdana,tahoma,arial,helvetica' size=2 color=EEEEEE>&nbsp;<b>"+spracheintrag_hinweis[18]+"</b>&nbsp;</td></tr><tr><td><table width=100% bgcolor=FFFFFF cellspacing=0 border=0 cellpadding=3><font face='verdana,tahoma,arial,helvetica' size=2 color=EEEEEE>"; 
			ausgabeblock=ausgabeblock+"&nbsp;<span>&lt;"+spracheintrag_hinweis[19]+"";
			ausgabeblock=ausgabeblock+"</table></td></tr></table></td></tr></table>"; 
		}
	}

	if (anleit==2) {
		ausgabeblock=ausgabeblock+"<table cellspacing=0 border=0 cellpadding=20><tr><td><table bgcolor=993322 cellspacing=0 border=0 cellpadding=1><tr><td><font face='verdana,tahoma,arial,helvetica' size=2 color=EEEEEE><b>&nbsp;"+spracheintrag_hinweis[20]+"";
		ausgabeblock=ausgabeblock+"</table></td></tr></table></td></tr></table>";
	}
  
	if (!vmobile) {parent[1].document.write(ausgabeblock);}
	else { ausgabeblock2=html2unicode(ausgabeblock2); document.ausgabe.ausgabefeld.value=ausgabeblock2; }
	if (!vmobile) parent[1].document.close(); travail=0;
	if (fokussieren) { document.testit.testvokabel.focus(); }
	if (document.testit) { if (document.testit.testvokabel) { document.testit.testvokabel.focus(); }}
}

// ###################################

function fokussierenfkt() {
	if (document.testit.testvokabel) { document.testit.testvokabel.focus(); }
}

// ###################################
function kurzwiederholung() {
	ausgabeblock=ausgabeblock+"<table cellspacing=0 border=0 cellpadding=12><tr><td><table cellspacing=0 border=0 cellpadding=12><tr><td><table bgcolor=993322 cellspacing=0 border=0 cellpadding=1><tr><td><font face='verdana,tahoma,arial,helvetica' size=2 color=EEEEEE>&nbsp;"+spracheintrag_hinweis[21]+" &nbsp; <u><span onClick=\"alert('"+spracheintrag_hinweis[22]+"');\">(Info)</span></u></td></tr><tr><td><table width=100% bgcolor=FFFFFF cellspacing=0 border=0 cellpadding=3>";
	for (var a=0;a<7;a++){ ausgabeblock=ausgabeblock+sieben[a]; }
	if (eingabeart !="Texte")  {
		zitatpointer+=1;
		if (zitatpointer>=zitatanzahl) { zitatpointer=1; } 
		ausgabeblock=ausgabeblock+"<tr><td colspan=5><img src="+grundverzeichnis+"grafik/wiederholung.gif></td></tr></table></td></tr></table></td></tr></table></td><td align=top width=200><font face='verdana,tahoma,arial,helvetica' size=2 color='111111'><center>"+zitat [zitatpointer]+"</td></tr></table>"; }
	else { ausgabeblock=ausgabeblock+"</table></td></tr></table></td></tr></table></td></tr></table></td><td align=top width=2></td></tr></table>"; }
}

// #####################################
function zeitdauer_berechnen() {
	var endzeit=new Date(); 
	if ((endzeit-startzeit)/(1000*60)-zeitdauer>4) { startzeit = endzeit - (zeitdauer*1000*60); }
	else { zeitdauer=Math.round((endzeit-startzeit)/(1000*60)); }
	ausgabeblock=ausgabeblock+"<p>";
	if (richtiganzahl>0) {
		ausgabeblock=ausgabeblock+"<font color=#999999>"+spracheintrag_hinweis[0]+richtiganzahl+"/"+anzahlvok2+". "+spracheintrag_hinweis[1]+falschanzahl+".";

		var prozentzusatztext="";

		if (richtiganzahl/anzahlvok2 >0.049) { prozentzusatztext="&raquo; 5% &laquo;"; }
		if (richtiganzahl/anzahlvok2 >0.099) { prozentzusatztext="&raquo; 10% &laquo;"; }
		if (richtiganzahl/anzahlvok2 >0.199) { prozentzusatztext="&raquo; 20% &laquo;"; }
		if (richtiganzahl/anzahlvok2 >0.249) { prozentzusatztext="&raquo; &frac14; &laquo;"; }
		if (richtiganzahl/anzahlvok2 >0.299) { prozentzusatztext="&raquo; 30% &laquo;"; }
		if (richtiganzahl/anzahlvok2 >0.399) { prozentzusatztext="&raquo; 40% &laquo;"; }
		if (richtiganzahl/anzahlvok2 >0.499) { prozentzusatztext="&rarr; &frac12; &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.589) { prozentzusatztext="&rarr; 590&permil; &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.599) { prozentzusatztext="&rarr; 60% &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.699) { prozentzusatztext="&rarr; 70% &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.739) { prozentzusatztext="&spades;&clubs;&hearts;&diams; 74%"; }
		if (richtiganzahl/anzahlvok2 >0.749) { prozentzusatztext="&rarr; &frac34; &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.799) { prozentzusatztext="~~~ 80% ~~~"; }
		if (richtiganzahl/anzahlvok2 >0.899) { prozentzusatztext="&rArr; 90% &lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.949) { prozentzusatztext="&rArr;&rArr; 95% &lArr;&lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.959) { prozentzusatztext="&rArr;&rArr; 96% &lArr;&lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.969) { prozentzusatztext="&rArr;&rArr; 97% &lArr;&lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.979) { prozentzusatztext="&rArr;&rArr; 98% &lArr;&lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.989) { prozentzusatztext="&rArr;&rArr; 99% &lArr;&lArr;"; }

		if (richtiganzahl/anzahlvok2 >0.049) { prozentzusatztext="5%"; }
		if (richtiganzahl/anzahlvok2 >0.099) { prozentzusatztext="10%"; }
		if (richtiganzahl/anzahlvok2 >0.199) { prozentzusatztext="20%"; }
		if (richtiganzahl/anzahlvok2 >0.249) { prozentzusatztext="<font size=+2>&frac14;</font>"; }
		if (richtiganzahl/anzahlvok2 >0.299) { prozentzusatztext="&rarr; 30% &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.399) { prozentzusatztext="40%"; }
		if (richtiganzahl/anzahlvok2 >0.499) { prozentzusatztext="<font size=+2>&frac12;</font>"; }
		if (richtiganzahl/anzahlvok2 >0.589) { prozentzusatztext="&rarr; 590&permil; &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.599) { prozentzusatztext="60% &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.699) { prozentzusatztext="&rarr; 70% &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.739) { prozentzusatztext="&spades;&clubs;&hearts;&diams; 74%"; }
		if (richtiganzahl/anzahlvok2 >0.749) { prozentzusatztext="<font size=+2>&frac34;</font>"; }
		if (richtiganzahl/anzahlvok2 >0.799) { prozentzusatztext="80%"; }
		if (richtiganzahl/anzahlvok2 >0.899) { prozentzusatztext="&rarr;  90% &larr;"; }
		if (richtiganzahl/anzahlvok2 >0.949) { prozentzusatztext="&rArr;&rArr; 95% &lArr;&lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.959) { prozentzusatztext="&rArr;&rArr; 96% &lArr;&lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.969) { prozentzusatztext="&rArr;&rArr; 97% &lArr;&lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.979) { prozentzusatztext="&rArr;&rArr; 98% &lArr;&lArr;"; }
		if (richtiganzahl/anzahlvok2 >0.989) { prozentzusatztext="&rArr;&rArr; 99% &lArr;&lArr;"; }

		ausgabeblock=ausgabeblock+"<br><font size=+1>"+prozentzusatztext+"</font>";

	}
	rundeminutengesamt=0;
	if (zeitdauer>2) ausgabeblock=ausgabeblock+"<br><font color=#999999>"+spracheintrag_hinweis[10]+" "+zeitdauer+" "+spracheintrag_hinweis[23]+".";

	if (runde>1) { 
		ausgabeblock=ausgabeblock+"<font color=#888888>"+spracheintrag_hinweis[2]+rundeplus1+runde+rundeplus2+"."; rundeplus1=""; rundeplus2="";
		if (runderichtig[t]+rundegesamt[t] > 0) {
			ausgabeblock=ausgabeblock+"<hr size=1 width=400>";
			for (var t=1;t<runde;t++) { ausgabeblock=ausgabeblock+spracheintrag_hinweis[2]+t+" ("+spracheintrag_hinweis[60]+"): "+runderichtig[t]+"/"+rundegesamt[t]+" "+spracheintrag_hinweis[59]+" "+rundeminuten[t]+" "+spracheintrag_hinweis[11]+"<br>"; rundeminutengesamt+=rundeminuten[t]; }
			ausgabeblock=ausgabeblock+spracheintrag_hinweis[2]+" "+runde+" ("+spracheintrag_hinweis[61]+"): "+runderichtig[runde]+"/"+rundegesamt[runde]+" "+spracheintrag_hinweis[59]+" "+(zeitdauer-rundeminutengesamt)*1+" "+spracheintrag_hinweis[11]+"<br>";
		}
	}
	if (zeitdauer-zeitdauer2>29) { ausgabeblock=ausgabeblock+"<br><font size=4><b>"+spracheintrag_hinweis[4]+"<br><img src="+grundverzeichnis+"grafik/pause.gif>"; zeitdauer2=zeitdauer; }
}


// ######################################
function lueckenzeile(loesung01,xzeile,xzeilennummer,lueckenzeilenvar) {
	var a=0; var b=0; var x=0;
	var luecke= new Array;
	while (xzeile.indexOf(" ")>-1 && a<40){
		var positionleer=xzeile.indexOf(" ");
		luecke[a]=xzeile.substr(0,positionleer);
		xzeile=xzeile.substr(positionleer+1,xzeile.length-positionleer+1);
		a++;
	}
	luecke[a]=xzeile;
	var xablauf = new Date();
	var xmonat=xablauf.getMonth(); var xtag=xablauf.getDay();
	var xlueckenwortnr=(xzeilennummer+xmonat*3+xtag*11)%(a+1);
	if (loesung01==0) { 
		if (lueckenzeilenvar==1) { luecke[xlueckenwortnr]="__________"; }
		else {luecke[xlueckenwortnr]=worthalbieren(0,luecke[xlueckenwortnr]);}
		xzeile="";
		for (x=0;x<a+1;x++){
			xzeile=xzeile+luecke[x]+" "; 
		}
	}
	else {
		xzeile=luecke[xlueckenwortnr];
		if (lueckenzeilenvar==2) {xzeile=worthalbieren(1,luecke[xlueckenwortnr]);}
	}
	return xzeile;
}

// ######################################
function wortsalat(loesung01,xzeile,xzeilennummer) {

	//alert (loesung01+" "+xzeile+" "+xzeilennummer);
	var a=0; var b=0; var x=0; var t=0; 
	var luecke= new Array; var lueckenr= new Array;
	while (xzeile.indexOf(" ")>-1 && a<40){ // Spaltet Satz auf
		var positionleer=xzeile.indexOf(" ");
		luecke[a]=xzeile.substr(0,positionleer);
		lueckenr[a]=a;
		xzeile=xzeile.substr(positionleer+1,xzeile.length-positionleer+1);
		a++;
	}
	luecke[a]=xzeile; lueckenr[a]=a;

	var xablauf = new Date();
	var xmonat=xablauf.getMonth(); var xtag=xablauf.getDay();
	var xx=0; var a1=a+1;
	for (b=0;b<200;b++){ //Mixt Variablen
		xx = xx+b%50+xmonat*7+xtag*17+xzeilennummer;
		if (b%3==1) { xx=xx+b*5; }
		if (b%3==2) { xx=xx+xzeilennummer*2; }
		if (b%2==1) { xx=xx+b; }
		if (b%5==1) { xx=xx+a; }
		t=luecke[b%a1];
		luecke[b%a1]=luecke[xx%a1];
		luecke[xx%a1]=t;
		t=lueckenr[b%a1];
		lueckenr[b%a1]=lueckenr[xx%a1];
		lueckenr[xx%a1]=t;
	}

	xzeile=""; var xd=0; var zahlenmatrix=new Array(); for (var b=0; b<50; b+=1) { zahlenmatrix[b] = b; }
	for (x=0;x<a+1;x++){ // Wörter mit Zahlen dahinter in Klammern (1 bis 9)
		xd=x;
		for (var b=x-1; b>-1; b-=1) { 
			if (luecke[x].toLowerCase() == luecke[b].toLowerCase()) { xd=b; zahlenmatrix[x]=b; } 
		}
		xzeile=xzeile+"("+((xd+1)*1)+")"+luecke[x]+" ";
	}
	 
	if (loesung01>0) {
		xzeile=""; var xd=0;
		var schondrinarray=new Array(); var schondrincount=0; for (var b=0; b<50; b+=1) { schondrinarray[b] = ""; } 
		for (x=0;x<a+1;x++){ // Nur die Zahlen zum Eintippen; Zahlen haben hier andere Reihenfolge = Lösung!
			for (y=0;y<a+1;y++){
				if (x==lueckenr[y]) { 
					xd=y; var drinnen=xd;
					for (var b=0; b<=schondrincount; b+=1) { 
						if (luecke[xd].toLowerCase() == schondrinarray[b].toLowerCase()) { drinnen=b; }
					}
					schondrincount=schondrincount+1;
					schondrinarray[drinnen]=luecke[xd];

					xzeile=xzeile+""+((zahlenmatrix[drinnen]+1)*1)+" "; 
				}
			}
		}
	}
	return xzeile;
}

// ######################################
function sieben_in_liste() {
	var fett="";
	var schriftgross1=""; var schriftgross2="";
	if (lateinmachen) { schriftgross1="<font size=+1 face=\"arial unicode,lucida sans unicode,verdana,arial,helvetica,sans serif\">"; schriftgross2="</font>"; }
	if (lateinmachen) keinlatein="<br>"+latein(v1[mischung[anzeigevok]])+"";

	var romanisierungauswahl=0;
	if (document.romanisierungform) {
		if (document.romanisierungform.romanisierung.value.length>0) { romanisierungauswahl=document.romanisierungform.romanisierung.options[document.romanisierungform.romanisierung.selectedIndex].value; }
	}

	if (romanisierungauswahl==1) { keinlatein=""; }
	//if (romanisierungauswahl==2) { v1x=""; keinlatein="<font color="+schriftfarbe+" "+keinlatein.substr(29); }

	mitloesung2="<tr>"+vt[mischung[anzeigevok]]+"<td onMousedown=\"this.style.color='#FFFFFF'\" onMouseout=\"this.style.backgroundColor='#111111'\" onMouseover=\"this.style.backgroundColor='#AAAAAA'\"><font face='verdana,tahoma,arial,helvetica' size=2>"+fett+schriftgross1+schriftzeichen(v1[mischung[anzeigevok]])+schriftgross2+keinlatein+"</td><td>&nbsp; &nbsp;</td><td onMousedown=\"this.style.color='#FFFFFF'\" onMouseout=\"this.style.backgroundColor='#111111'\" onMouseover=\"this.style.backgroundColor='#AAAAAA'\"><font face='verdana,tahoma,arial,helvetica' size=2>"+fett+sonderzeichenumwandeln(v2[mischung[anzeigevok]])+"</td></tr>";
	var nichtsieben=0;
	for (var a=0;a<siebenmachen;a++){ if (sieben[a]==mitloesung2) nichtsieben=1; }
	if (nichtsieben==0) { sieben[siebenmachen]=mitloesung2; siebenmachen+=1;}
}

// ########################################################## Selectbox erstellen

function selectmachen()
{

	var romanisierungauswahl=0;
	if (document.romanisierungform) {
		if (document.romanisierungform.romanisierung.value.length>0) { romanisierungauswahl=document.romanisierungform.romanisierung.options[document.romanisierungform.romanisierung.selectedIndex].value; }
	}


	var datumm = new Date(); var secu=datumm.getSeconds(); var minu=datumm.getMinutes(); var zufall= new Array;  var zufall5= new Array;
	if (selectauswahl && langzeit && anzahlausw>anzahlvok) { anzahlausw=anzahlvok; }

	var diesewortartgrob=vwortartgrob[mischung[anzeigevok]]; var diesewortartfein=vwortartfein[mischung[anzeigevok]]; 

	var wortartsuchencountergrob=0; var wortartsuchencounterfein=0;
	for (a=1;a<=anzahlvok;a++) { 
		if (vwortartgrob[a]) { if (vwortartgrob[mischung[a]]==diesewortartgrob) { wortartsuchencountergrob+=1; } }
		if (vwortartfein[a]) { if (vwortartfein[mischung[a]]==diesewortartfein) { wortartsuchencounterfein+=1; } }
	}

	// Zufallszahlen:
	for (a=1;a<=anzahlvok;a++) { zufall[a]=a; }
	for (a=1;a<=anzahlvok;a++) { temp1=zufall[a]; zufall[a]=zufall[((a*secu*minu*47) % anzahlvok)+1]; zufall[((a*secu*minu*47) % anzahlvok)+1]=temp1; } // mischen

	for (a=1;a<=anzahlausw;a++) { zufall5[a]=a; }

	// neu vergeben, falls Wortart>0: (zuerst grob, sonst fein)
	if (wortartsuchencountergrob>anzahlausw && diesewortartgrob>0) {
		var a=0; var b=0;
		while (a<=anzahlvok && b<=anzahlausw) {
			a+=1;
			var temp1=(anzeigevok+a-1) % anzahlvok;

			if (vwortartgrob[mischung[temp1]] == diesewortartgrob) {
				b+=1;
				zufall5[b]=a;

			}
		}
	}
	if (wortartsuchencounterfein>anzahlausw && diesewortartfein>0) {
		var a=0; var b=0; 
		while (a<=anzahlvok && b<=anzahlausw) {
			a+=1;
			var temp1=(anzeigevok+a-1) % anzahlvok;

			if (vwortartfein[mischung[temp1]] == diesewortartfein) {
				b+=1;
				zufall5[b]=a;
			}
		}
	}

	for (a=1;a<=anzahlausw;a++) { temp1=zufall5[a]; zufall5[a]=zufall5[((a*secu*797+anzeigevok*minu*51+zufall[a]) % anzahlausw)+1]; zufall5[((a*secu*797+anzeigevok*minu*51+zufall[a]) % anzahlausw)+1]=temp1; }

	//Einleitung schreiben:
	document.testit.testvokabel.length = 0;
	document.testit.testvokabel.options[0]=new Option(umlautewandeln(spracheintrag_hinweis[5]),"");
	document.testit.testvokabel.options[1]=new Option("","");

	//Einträge schreiben:
	for (a=1;a<=anzahlausw;a++){
		var temp1=(anzeigevok+zufall5[a]-1) % anzahlvok;

		if (sprachwechsel==0) { temp2=v1[mischung[temp1]]; }
		else { temp2=v2[mischung[temp1]]; }

		if (sprache=="griechisch") { 
				if (romanisierungauswahl==0) { temp2=schriftzeichen(temp2)+" / "+latein(temp2);  } 
				if (romanisierungauswahl==1) { temp2=schriftzeichen(temp2); }
				if (romanisierungauswahl==2) { temp2=latein(temp2); }
		}
		temp2=alpha_in_zahl(temp2);

		if (temp2) {
			while (temp2.indexOf("&#")>-1){
				var temp3=temp2.substring (temp2.indexOf("&#")+2,temp2.indexOf(";"));
				temp2=temp2.substring (0,temp2.indexOf("&#")) + String.fromCharCode(temp3)+temp2.substring (temp2.indexOf(";")+1);
			}
		}
		if (lateinmachen==1 && sprachwechsel==0 && sprache!="griechisch") {
				if (romanisierungauswahl==0) { temp2=schriftzeichen(temp2)+" / "+latein(umlautewandeln(temp2)); } 
				if (romanisierungauswahl==1) { temp2=schriftzeichen(temp2); }
				if (romanisierungauswahl==2) { temp2=latein(umlautewandeln(temp2)); }
		}
		if (lateinmachen==2 && sprachwechsel==0) {
			if (sprache=="singhalesisch") { temp2=latein(umlautewandeln(temp2)); }
			else { 
				if (romanisierungauswahl==0) { temp2=schriftzeichen(temp2)+" / "+latein(umlautewandeln(temp2)); } 
				if (romanisierungauswahl==1) { temp2=schriftzeichen(temp2); }
				if (romanisierungauswahl==2) { temp2=latein(umlautewandeln(temp2)); }
			}
		}
		//if (lateinmachen==0) { temp2=umlautewandeln(temp2) + "  ///    "+mischung[temp1] + " grob: "+ vwortartgrob[mischung[temp1]] + " von "+wortartsuchencountergrob+ ", fein: "+ vwortartfein[mischung[temp1]]+ " von "+wortartsuchencounterfein; }
		if (lateinmachen==0) { temp2=umlautewandeln(temp2); }

		var temp_ok=temp2;
		if (zufall5[a]==1) { temp_ok=temp_ok+" cheat120" } 
		document.testit.testvokabel.options[a+1]=new Option(temp2,temp_ok);
	}
}

// ########################################################## Mischen

function mischen(mitohne)
{
  mischenmodus=1;
  var datumm = new Date(); var dat1=datumm.getTime() % 1000; var secu=datumm.getSeconds(); var minu=datumm.getMinutes(); var tagu=datumm.getDay();
  if (eingabeart!="Texte"){
  for (var b=0;b<(20+tagu);b++){
   for (var a=0;a<anzahlvok;a++){
    dat1 = dat1 +a +Math.ceil(Math.random() * 200);
    if (dat1 % 3 == 1) dat1=b+dat1+111+(secu*3); if (dat1 % 3 == 0) dat1=dat1+a+97+(minu*2); if (dat1 % 3 == 2) dat1=dat1+888+(secu*2);
    if (a % 3 == 2) dat1=dat1+155+a+(secu*3); if (a % 3 == 1) dat1=dat1+a+152+secu;  if (a % 3 == 0) dat1=dat1+(minu*5);
    if (b % 3 == 0) dat1=b*3+dat1+a+tagu;  if (b % 3 == 1) dat1=dat1+a+(minu*5); if (b % 3 == 2) dat1=dat1+(a*3)+(tagu*5);
    if (dat1 % 2 == 0) dat1=b*7+dat1+29+(secu*7); if (dat1 % 2 == 1) dat1=dat1+a+minu; if (dat1 % 3 == 1) dat1=dat1+a+(secu*2); 
    if (dat1 % 3 == 0) dat1=dat1+(a*5)+minu;
    dat1=dat1 % (anzahlvok-1); var misch=mischung[a]; mischung[a]=mischung[dat1]; mischung[dat1]=misch;
   }
  }
  }
  if (mitohne<1){
  parent[1].document.write ("<script language=\"JavaScript\" src=\"../funktionen1.js\"></script><body bgcolor=F0F0F0><center><font size=3>&nbsp;<br>&nbsp;<table cellspacing=0 border=0 cellpadding=20><tr><td><table bgcolor=993322 cellspacing=0 border=0 cellpadding=1><tr><td><table width=100% bgcolor=FFFFFF cellspacing=0 border=0 cellpadding=16><tr><td>");
  parent[1].document.write ("<font face='verdana,tahoma,arial,helvetica' size=3><center>");
  parent[1].document.write (spracheintrag_hinweis[24]);
  parent[1].document.write ("</td></tr></table></td></tr></table></td></tr></table>");
  parent[1].document.close();
  }
}





// ########################################################## Anzahl ändern in der Selectbox

function anzahlaendern()
{
	anzahlausw = document.anzaend.anzahlauswahl.options[document.anzaend.anzahlauswahl.selectedIndex].value;
	selectmachen();
}

// ########################################################## Testen von Vokabeln

function test_it(testindex,testueberschreiben,schreibenlernen,richtigfalsch,ganzloeschen,vmobile,vmobilelangzeit)
{
	//testindex=
	//testueberschreiben =1 immer richtig;  =2 immer falsch (für quick test)
	//schreibenlernen=1 diktat
	//richtigfalsch = 1 blitztest
	//ganzloeschen=1 löscht Wort für immer

	sinhalacount=0;
	rundegesamt [runde]+=1;

	var schreibenlernen2=0; var diesevok=v1[mischung[anzeigevok]];
	if (lateinmachen==2) { diesevok=umlautewandeln(latein(v1[mischung[anzeigevok]])); }
	if (schreibenlernen) { schreibenlernen2=1; }
	if (sprachwechsel==1) { diesevok = v2[mischung[anzeigevok]]; }
	var boxdiesevok=diesevok; var testzeileoriginal2=diesevok;

	if (lueckenzeilenvar) { 
		if (lateinmachen==2 && !sprachwechsel) var diesevok = schriftzeichen(diesevok);
		if (lateinmachen<1) diesevok = umlautewandeln(diesevok);
	}

	diesevok = klammern_entfernen (diesevok);

	var diesevokw="qwewqweqweqwq"; var diesevokwl="qwewqweqweqwq";
	if (wortsalatvar) { diesevokw=wortsalat(1,diesevok,anzeigevok); }
	if (lueckenzeilenvar) { diesevokw=lueckenzeile(1,diesevok,anzeigevok,lueckenzeilenvar); }

	var texteingabe2006=0;
	if (testueberschreiben){
		if (testueberschreiben==1) testzeile=diesevok+" cheat120";  
		if (testueberschreiben==2) testzeile="qqqqqqqqqqqq";
	}
	else {
		if (testindex==2) {  testzeile = document.testit.testvokabel.options[document.testit.testvokabel.selectedIndex].value;  } 
		else  { testzeile = document.testit.testvokabel.value; texteingabe2006=1; }
	}
	//alert("x\n1 "+diesevokw+"\n1 "+diesevok+"\n2 "+testzeile+"\n3a "+diesevokwl+"\n3b "+diesevok2);

	if (document.testit.testvokabel) { texteingabe2006=1;}

	if (sperre) { return; }
	if (testzeile == "" && !ganzloeschen) { neuevok(0,1,0,schreibenlernen);  return; }
 
	var testzeileoriginal=umlautewandeln(testzeile);
 
	var diesevoklatein="dcsdfweZG2hgJHGgd3h";
	if (lateinmachen==2) { diesevoklatein=schriftzeichen(v1[mischung[anzeigevok]]).toLowerCase(); diesevokwl=diesevokw;}
	if (lateinmachen==1) { diesevoklatein=latein(diesevok).toLowerCase(); diesevokwl=latein(diesevokw).toLowerCase(); }
	//alert("y1\n1a "+diesevokw+"\n1b "+diesevok+"\n2 "+testzeile+"\n3a "+diesevokwl+"\n3b "+diesevok2);

	diesevoklatein=htmlcode2zeichen(diesevoklatein);

	//alert("y2\n1a "+diesevokw+"\n1b "+diesevok+"\n2 "+testzeile+"\n3a "+diesevokwl+"\n3b "+diesevok2);

	diesevok=umlautewandeln(diesevok);
	//alert("y3\n1a "+diesevokw+"\n1b "+diesevok+"\n2 "+testzeile+"\n3a "+diesevokwl+"\n3b "+diesevok2);

	testzeile=umlautewandeln(testzeile);

	if (sprache=="griechisch") { diesevok=alpha_in_zahl(diesevok); diesevokw=alpha_in_zahl(diesevokw);}

	diesevok=diesevok.toLowerCase(); diesevokw=diesevokw.toLowerCase(); testzeile=testzeile.toLowerCase(); var diesevok2=diesevok; 
	diesevok=umlautewandeln(diesevok); diesevokw=umlautewandeln(diesevokw);
	var diesevokteil1="dcsdfweZG2hgJHGgd3h"; var diesevokteil2="dcsdfweZG2hgJHGgd3h";

	if (diesevok2.indexOf(",")>-1 && diesevok2.indexOf(",")==diesevok2.lastIndexOf(",")){
		diesevokteil1 = diesevok2.substr(diesevok2.indexOf(",")+1);
		diesevokteil2 = diesevok2.substring(0,diesevok2.indexOf(","));
		diesevok2= diesevokteil1 + ", " + diesevokteil2;
	}
	if (diesevok2.indexOf("/")>-1 && diesevok2.indexOf("/")==diesevok2.lastIndexOf("/")){
		diesevokteil1 = diesevok2.substr(diesevok2.indexOf("/")+1);
		diesevokteil2 = diesevok2.substring(0,diesevok2.indexOf("/"));
		diesevok2= diesevokteil1 + ", " + diesevokteil2;
	}

	if (lateinmachen<2) { 
		diesevok = entferne_satzzeichen(diesevok,0); 
		diesevokw = entferne_satzzeichen(diesevokw,0); 
		diesevok2 = entferne_satzzeichen(diesevok2,0); 
		diesevokteil1 = entferne_satzzeichen(diesevokteil1,0); 
		diesevokteil2 = entferne_satzzeichen(diesevokteil2,0); 
	}
	if (lateinmachen && sprachwechsel==0) { 
		diesevoklatein = entferne_satzzeichen(diesevoklatein,1); 
		diesevokwl = entferne_satzzeichen(diesevokwl,1); 
		diesevok2 = entferne_satzzeichen(diesevok2,1); 
		diesevokteil1 = entferne_satzzeichen(diesevokteil1,1); 
		diesevokteil2 = entferne_satzzeichen(diesevokteil2,1); 
	}

	if (lateinmachen<2) { diesevok2 = entferne_satzzeichen(diesevok2,1); }
	var diesevoklatein2="dcsdfweZG2hgJHGgd3h";
	if (lateinmachen && sprachwechsel==0) { diesevoklatein2=latein(diesevok2).toLowerCase(); }
	testzeile = klammern_entfernen (testzeile); testzeile = entferne_satzzeichen(testzeile,1);
	diesevok = entferne_satzzeichen(diesevok,1);

	//alert("680\n1 #"+testzeile+"# Testzeile\n2 #"+diesevok+"#\n3 #"+diesevokw+"#\n4 #"+diesevok2+"#\nA #"+diesevokteil1+"#\nB #"+diesevokteil2);

	// ########## Vorbereitungen sind zu Ende #######

	if (testueberschreiben==2) { vorher1=v1[mischung[anzeigevok]]; vorher2=v2[mischung[anzeigevok]]; if (v0[mischung[anzeigevok]]!="0.mp3") vorher0=v0[mischung[anzeigevok]]; }
	if (sperre==0 & !ganzloeschen){ 


		// RICHTIG:

		if ( testzeile.indexOf("cheat120")>0 || diesevok.indexOf("cheat120")>0 || diesevokw==testzeile || diesevokwl==testzeile || (testzeile.length>diesevok.length+1 && testzeile.indexOf(diesevok)>-1) || (testzeile.length>diesevoklatein.length+1 && testzeile.indexOf(diesevoklatein)>-1) || testzeile==diesevok || testzeile==diesevoklatein || testzeile==diesevok2 || testzeile==diesevokteil1 || testzeile==diesevokteil2 || testzeile==diesevoklatein2 || richtigfalsch)
		{
			if (v0[mischung[anzeigevok]]!="0.mp3") vorher0=v0[mischung[anzeigevok]];
			vorher1=v1[mischung[anzeigevok]]; vorher2=v2[mischung[anzeigevok]];
			var vnummerhier=(vnummer[(mischung[anzeigevok])+0]); vnummerhier=vnummerhier*1; vnummerhier+=1;
			var vlektionhier=v[(vnummer[mischung[anzeigevok]]*6)+1];
			if (langzeit) vorher3="<font color=888888>("+spracheintrag_hinweis[25]+" "+vnummerhier+", "+spracheintrag_hinweis[14]+" "+vlektionhier+")";
			if (!testueberschreiben){ document.testit.testvokabel.focus(); document.testit.testvokabel.value=""; }
			var mitloesungmodustext=""; var wartezeittest=1500;
			if (!vmobile) { mitloesungmodustext="<br><font size=2>"; }
			runderichtig [runde]+=1;
			if (mitloesungmodus) {
				var mitloesungmodustext=mitloesungmodustext+spracheintrag_hinweis[12];
				if (vfalsch[mischung[anzeigevok]]==0) {
					vfalsch[mischung[anzeigevok]]=1; vlangzeitfalsch[mischung[anzeigevok]]=1;
					vlangzeit[mischung[anzeigevok]]=5;
 					falschanzahl=falschanzahl+1; punkte=punkte-5; if (punkte<0) { punkte=0; } runderichtig [runde]-=1;
				}
			}
			else {
				// Ab hier ist es wirklich richtig:

				if (vfalsch[mischung[anzeigevok]]<1) { vrichtig[mischung[anzeigevok]]=1; richtiganzahl=richtiganzahl+1; punkte=punkte+10; mitloesungmodustext=mitloesungmodustext+spracheintrag_hinweis[9]; }
				else { mitloesungmodustext=mitloesungmodustext+" ("+spracheintrag_hinweis[26]+" "+vfalsch[mischung[anzeigevok]]+spracheintrag_hinweis[27]+")"; vfalsch[mischung[anzeigevok]]-=1; }

				if (vlangzeitfalsch[mischung[anzeigevok]]==0) {
					vlangzeit[mischung[anzeigevok]]-=1;
					if (vlangzeit[mischung[anzeigevok]]==8) { vlangzeit[mischung[anzeigevok]]=0; }
					if (vlangzeit[mischung[anzeigevok]]==0 && langzeit) mitloesungmodustext=mitloesungmodustext+"<br>"+spracheintrag_hinweis[28];
					if (vlangzeit[mischung[anzeigevok]]>0 && langzeit && ultralang==0) mitloesungmodustext=mitloesungmodustext+"<br> ("+spracheintrag_hinweis[29]+": "+vlangzeit[mischung[anzeigevok]]+")";
					var ultrakommentar=" - "+spracheintrag_hinweis[9];

					if (ultralang>0) {
						// Später wird 1 abgezogen:
						if (vlangzeit[mischung[anzeigevok]]==5 && langzeit) { vpause[mischung[anzeigevok]] = 1; ultrakommentar=" "+spracheintrag_hinweis[30]; }
						if (vlangzeit[mischung[anzeigevok]]==4 && langzeit) { vpause[mischung[anzeigevok]] = 2; ultrakommentar=" "+spracheintrag_hinweis[31]; }
						if (vlangzeit[mischung[anzeigevok]]==3 && langzeit) { vpause[mischung[anzeigevok]] = 3; ultrakommentar=" "+spracheintrag_hinweis[32]+" "+(vpause[mischung[anzeigevok]]-1)*1+" "+spracheintrag_hinweis[33]+""; }
						if (vlangzeit[mischung[anzeigevok]]==2 && langzeit) { vpause[mischung[anzeigevok]] = 5; ultrakommentar=" "+spracheintrag_hinweis[32]+" "+(vpause[mischung[anzeigevok]]-1)*1+" "+spracheintrag_hinweis[33]; }
						if (vlangzeit[mischung[anzeigevok]]==1 && langzeit) { vpause[mischung[anzeigevok]] = 9; ultrakommentar=" "+spracheintrag_hinweis[32]+" "+(vpause[mischung[anzeigevok]]-1)*1+" "+spracheintrag_hinweis[33]; }
					}
					if (vlangzeit[mischung[anzeigevok]]>0 && langzeit && ultralang>0) mitloesungmodustext=mitloesungmodustext+"<br> ("+spracheintrag_hinweis[29]+": "+vlangzeit[mischung[anzeigevok]]+ultrakommentar+")";

				}
				wartezeittest=2500;
			}
			var automatischton=0;

			var zufall = "" + vbild[vbildpointer] +".jpg";
			if (zufall.length<7) zufall = "0"+zufall+"";   if (zufall.length<7) zufall = "0"+zufall+"";
			vbildpointer+=1; if (vbildpointer>=vbildmax) { vbildpointer=1; }
			var zufall1 = "" + vbild[vbildpointer] +".jpg";
			if (zufall1.length<7) zufall1 = "0"+zufall1+"";   if (zufall1.length<7) zufall1 = "0"+zufall1+"";  

			if (lateinmachen && sprachwechsel==0) { 
				var romantext1=schriftzeichen(testzeileoriginal2); var romantext2=latein(testzeileoriginal2);
				if (lateinmachen==2) { 
					romantext1=schriftzeichen(v1[mischung[anzeigevok]]); romantext2=umlautewandeln(latein(v1[mischung[anzeigevok]]));
				}

				testzeileoriginal2=schriftzeichen(testzeileoriginal2)+"<br>"+latein(testzeileoriginal2);
				if (lateinmachen==2) { 
					testzeileoriginal2=schriftzeichen(v1[mischung[anzeigevok]])+"<br>"+umlautewandeln(latein(v1[mischung[anzeigevok]]));
				}

				var romanisierungauswahl=0;
				if (document.romanisierungform) {
					if (document.romanisierungform.romanisierung.value.length>0) { romanisierungauswahl=document.romanisierungform.romanisierung.options[document.romanisierungform.romanisierung.selectedIndex].value; }
				}
				if (romanisierungauswahl==0) { testzeileoriginal2=romantext1+"<br>"+romantext2; }
				if (romanisierungauswahl==1) { testzeileoriginal2=romantext1; }
				if (romanisierungauswahl==2) { testzeileoriginal2=romantext2; }

			}
 
			var nvbreite=320; if (langzeitmobil>0 && window.innerWidth<400) { nvbreite=240; }
			if (!vmobile) {   alertfenster(umlautewandeln(testzeileoriginal2)+"\n\n<br><img src="+grundverzeichnis+"grafik2/v"+zufall+" width="+nvbreite+"><img src="+grundverzeichnis+"grafik2/v"+zufall1+" width=0 height=0>"+mitloesungmodustext,"008800","FFFFFF");}
			else { mitloesungmodustext=html2unicode(mitloesungmodustext); document.ausgabe.ausgabefeld.value=mitloesungmodustext; }

			if (!vmobile) { if (document.automatisch) { if (document.automatisch.automatischmachen.value.length>0 && !schreibenlernen) automatischton=document.automatisch.automatischbox.options[document.automatisch.automatischbox.selectedIndex].value; }}
			if (automatischton==1 && sprachwechsel==0 && !vmobile) top.parent[0].parent[1].location.href=""+grundverzeichnis+"audio/"+vton[mischung[anzeigevok]];
			//if (langzeitmobil==1 && sprachwechsel==0 && !vmobile) { top.parent[1].location.href=""+grundverzeichnis+"audio/"+vton[mischung[anzeigevok]];  }
			if (automatischton==2 && sprachwechsel==0 && !vmobile) aussprache(1,vton[mischung[anzeigevok]]);
			if (automatischton) wartezeittest+=1000;
			if (texteingabe2006) { document.testit.testvokabel.focus(); }
			window.setTimeout("neuevok(1,0,0,"+schreibenlernen2+",0,"+vmobile+","+vmobilelangzeit+")",wartezeittest);
		}

		// FALSCH:
		else  {
			// n-Bilder:
			var zufall = "" + nbild[nbildpointer] +".jpg";
			if (zufall.length<7) zufall = "0"+zufall+"";   if (zufall.length<7) zufall = "0"+zufall+"";
			nbildpointer+=1; if (nbildpointer>=nbildmax) {nbildpointer=1;}
			var zufall1 = "" + nbild[nbildpointer] +".jpg";
			if (zufall1.length<7) zufall1 = "0"+zufall1+"";   if (zufall1.length<7) zufall1 = "0"+zufall1+"";  
	
			var nvbreite=320; if (langzeitmobil>0 && window.innerWidth<400) { nvbreite=240; }
			if (!vmobile) { alertfenster("<font size=2><img src="+grundverzeichnis+"grafik2/n"+zufall+" width="+nvbreite+"><img src="+grundverzeichnis+"grafik2/n"+zufall1+" width=0 height=0><br>("+spracheintrag_hinweis[34]+")","880000","FFFFFF"); }
			else { document.ausgabe.ausgabefeld.value=spracheintrag_hinweis[34]; }

			if (vfalsch[mischung[anzeigevok]]==0){
				vfalsch[mischung[anzeigevok]]=1; vlangzeitfalsch[mischung[anzeigevok]]=1;
				if (runde>3) { vfalsch[mischung[anzeigevok]]=2; }
				if (runde>7) { vfalsch[mischung[anzeigevok]]=3; }
				vlangzeit[mischung[anzeigevok]]+=1;
				if (vlangzeit[mischung[anzeigevok]]>5) vlangzeit[mischung[anzeigevok]]=5;
				falschanzahl=falschanzahl+1; 
			}
			if (!testueberschreiben) document.testit.testvokabel.focus();

			// Sieben Wiederholungen in Liste schreiben:
			if (!vmobile) {
				if (testueberschreiben!=2) { sieben_wiederholungen_schreiben(); }
				else { sieben_in_liste(); }
			}
			if (texteingabe2006) { document.testit.testvokabel.focus(); }
			if (testueberschreiben) window.setTimeout("neuevok(1,0,0,"+schreibenlernen2+",0,"+vmobile+","+vmobilelangzeit+")",1500);
			else window.setTimeout("neuevok(0,0,0,"+schreibenlernen2+",0,"+vmobile+","+vmobilelangzeit+")",1500);
		}
	}
	else {
		// Eintrag für immer löschen:
		wartezeittest=2500;
   
		if (!vmobile) { alertfenster(spracheintrag_hinweis[35],"FAC832","111111"); }
		else { document.ausgabe.ausgabefeld.value=spracheintrag_hinweis[35]; }

		vrichtig[mischung[anzeigevok]]=1; vfalsch[mischung[anzeigevok]]=0; vlangzeit[mischung[anzeigevok]]=0;
		richtiganzahl+=1;
		if (texteingabe2006) { document.testit.testvokabel.focus(); }
		window.setTimeout("neuevok(1,0,0,"+schreibenlernen2+",0,"+vmobile+","+vmobilelangzeit+")",wartezeittest);
	}
	if (texteingabe2006) { document.testit.testvokabel.focus(); }
}

// ########################################
function klammern_entfernen (klammervar) {
	for ($x07=0;$x07<10;$x07++){
		if (klammervar.indexOf("(")>-1 &&  klammervar.indexOf(")")>-1 &&  klammervar.indexOf("(")<klammervar.indexOf(")")) {
			var tstart= klammervar.indexOf("("); var tende=klammervar.indexOf(")");
			klammervar=klammervar.substr(0,tstart)+""+klammervar.substr(tende+1);
		}
	}
	return klammervar;
}

// ########################################

function entferne_satzzeichen(testzeiletemp,testzeile2) {
 var tempp="";
 do {
   tempp=testzeiletemp;
 
   if (testzeile2) {
      testzeiletemp = testzeiletemp.replace(/\&#/,"");
      
      testzeiletemp = testzeiletemp.replace(/\;/,"");
   }
   testzeiletemp = testzeiletemp.replace(/\./,"");
   testzeiletemp = testzeiletemp.replace(/\//,"");
   testzeiletemp = testzeiletemp.replace(/\-/,"");
   testzeiletemp = testzeiletemp.replace(/\,/,"");
   testzeiletemp = testzeiletemp.replace(/\?/,"");
   testzeiletemp = testzeiletemp.replace(/\!/,"");
   testzeiletemp = testzeiletemp.replace(/\:/,"");
   testzeiletemp = testzeiletemp.replace(/ /,"");
   testzeiletemp = testzeiletemp.replace(/\t/,"");
   testzeiletemp = testzeiletemp.replace(/\n/,"");
   testzeiletemp = testzeiletemp.replace(/\'/,"");


   if (testzeiletemp.indexOf("(")>0) {
     testzeiletemp = testzeiletemp.substring(0,testzeiletemp.indexOf("("))+String.fromCharCode(testzeiletemp.substr(testzeiletemp.indexOf("(")+1,3))+testzeiletemp.substring(testzeiletemp.indexOf("(")+5,testzeiletemp.length);
   }
   testzeiletemp = testzeiletemp.replace(/\(/,"");
   testzeiletemp = testzeiletemp.replace(/\)/,"");

 } while (testzeiletemp != tempp);
 //=Ende der Schleife
 //alert (testzeiletemp);
 return testzeiletemp;
}


// ##########################################################

function sieben_wiederholungen_schreiben() {

    var keinlatein="";
    if (lateinmachen) keinlatein="<br>"+latein(v1[mischung[anzeigevok]])+"";
    mitloesung2="<tr>"+vt[mischung[anzeigevok]]+"<td onMousedown=\"this.style.color='#FFFFFF'\" onMouseout=\"this.style.backgroundColor='#111111'\" onMouseover=\"this.style.backgroundColor='#AAAAAA'\"><font face='verdana,tahoma,arial,helvetica' size=2 color='111111'>"+schriftzeichen(v1[mischung[anzeigevok]])+keinlatein+"</td><td>&nbsp; &nbsp;</td><td onMousedown=\"this.style.color='#FFFFFF'\" onMouseout=\"this.style.backgroundColor='#111111'\" onMouseover=\"this.style.backgroundColor='#AAAAAA'\"><font face='verdana,tahoma,arial,helvetica' size=2 color='111111'>"+v2[mischung[anzeigevok]]+"</td></tr>";
    var nichtsieben=0;
    for (var a=0;a<siebenmachen2;a++){ if (sieben2[a]==mitloesung2) nichtsieben=1; }
    if (nichtsieben==0) { sieben2[siebenmachen2]=mitloesung2; siebenmachen2+=1; siebenletztes=mischung[anzeigevok];}


}

// ########################################################## Alertfenster

function alertfenster(hinweis,farbe1,farbe2,schliessen)
{
	sperre=1;
	parent[1].document.close();
	var bgbildalert="";
	if (farbe1=="880000") { bgbildalert=" background=\""+grundverzeichnis+"grafik/bg_rot01.jpg\""; }
	if (farbe1=="008800") { bgbildalert=" background=\""+grundverzeichnis+"grafik/bg_gruen01.jpg\""; }

	parent[1].document.write ("<body style=\"background: #f4eed4 url("+grundverzeichnis+"grafik/background_quickshow"+backgroundquickshow+".jpg) no-repeat fixed center center\"><table width=\"100%\" height=\"60%\" border=0 cellpadding=0 cellspacing=0>");
	var positionierungmitte=" valign=middle"; if (langzeitmobil>0) { positionierungmitte=" valign=top"; }
	parent[1].document.write ("<tr><td height=1 bgcolor=993322 background="+grundverzeichnis+"grafik/bg_a01.jpg><img src="+grundverzeichnis+"grafik/nichts.gif height=1 width=10></td></tr><td align=center "+positionierungmitte+"><center>");

	if (langzeitmobil==0) { parent[1].document.write ("<font size=3>&nbsp;<table cellspacing=0 border=0 cellpadding=20>"); }
	else { parent[1].document.write ("<table cellspacing=0 border=0 cellpadding=5>"); }
	parent[1].document.write ("<tr><td><table bgcolor=111111 cellspacing=0 border=0 cellpadding=1><tr><td><table width=100% bgcolor="+farbe1+bgbildalert+" cellspacing=0 border=0 cellpadding=16><tr><td>");
	parent[1].document.write ("<font face='verdana,tahoma,arial,helvetica' size=5 color="+farbe2+"><center>");
	parent[1].document.write (hinweis);
	parent[1].document.write ("</td></tr></table></td></tr></table></td></tr></table></td></tr></table>");
	if (!schliessen) parent[1].document.close();

}

// ########################################################## Sprachtausch

function sprachwechseln(schreibenlernen,keineausgabe,vmobile)
{
  var schreibenlernen2=0;
  if (schreibenlernen) schreibenlernen2=1;
  sprachwechsel=1-sprachwechsel;
  if (!keineausgabe){
    var tempstring=spracheintrag_hinweis[37]+" ";
    var sprachegross=sprache;
    if (sprache=="aegyptisch") sprachegross="ägyptisch";
    if (sprache=="franzoesisch") sprachegross="französisch";
    if (sprache=="niederlaendisch") sprachegross="niederländisch";
    if (sprache=="rumaenisch") sprachegross="rumänisch";
    if (sprache=="tuerkisch") sprachegross="türkisch";
    if (sprache=="daenisch") sprachegross="dänisch";
    if (sprache=="hebraeisch") sprachegross="hebräisch";
    if (sprache=="islaendisch") sprachegross="isländisch";
    if (sprache=="suedamerika") sprachegross="Spanisch-Südamerika";
    if (sprache=="deutsch") sprachegross="englisch";
    if (sprache=="weissrussisch") sprachegross="weißrussisch";
    var sprachegross=sprachegross.substring(0,1).toUpperCase()+sprachegross.substring(1);
    //if (sprachwechsel==0){ tempstring=tempstring+spracheintrag_hinweis[36]+"-"+sprachegross; }
    //else { tempstring=tempstring+sprachegross+"-"+spracheintrag_hinweis[36]; }
    
    if (!vmobile) { alertfenster(tempstring,"FAC832","111111"); }
    else { document.ausgabe.ausgabefeld.value=tempstring; }

    window.setTimeout("neuevok(0,0,0,"+schreibenlernen2+",0,"+vmobile+")",3000);
  }
}

// ########################################################## Sonderzeichen ALPHA -> Sonderzeichen ZAHLEN


function alpha_in_zahl(umwandeltemp)
{

 if (umwandeltemp){
 do 
 {
  var umwandeltemptemp = umwandeltemp;

 umwandeltemp = umwandeltemp.replace(/&ndash;/,"");
 umwandeltemp = umwandeltemp.replace(/&rsquo;/,"'");
 umwandeltemp = umwandeltemp.replace(/&Agrave;/,String.fromCharCode(192));
 umwandeltemp = umwandeltemp.replace(/&Aacute;/,String.fromCharCode(193));
 umwandeltemp = umwandeltemp.replace(/&Acirc;/,String.fromCharCode(194));
 umwandeltemp = umwandeltemp.replace(/&Atilde;/,String.fromCharCode(195));
 umwandeltemp = umwandeltemp.replace(/&Auml;/,String.fromCharCode(196));
 umwandeltemp = umwandeltemp.replace(/&Aring;/,String.fromCharCode(197));
 umwandeltemp = umwandeltemp.replace(/&AElig;/,String.fromCharCode(198));
 umwandeltemp = umwandeltemp.replace(/&Ccedil;/,String.fromCharCode(199));
 umwandeltemp = umwandeltemp.replace(/&Egrave;/,String.fromCharCode(200));
 umwandeltemp = umwandeltemp.replace(/&Eacute;/,String.fromCharCode(201));
 umwandeltemp = umwandeltemp.replace(/&Ecirc;/,String.fromCharCode(202));
 umwandeltemp = umwandeltemp.replace(/&Euml;/,String.fromCharCode(203));
 umwandeltemp = umwandeltemp.replace(/&Igrave;/,String.fromCharCode(204));
 umwandeltemp = umwandeltemp.replace(/&Iacute;/,String.fromCharCode(205));
 umwandeltemp = umwandeltemp.replace(/&Icirc;/,String.fromCharCode(206));
 umwandeltemp = umwandeltemp.replace(/&Iuml;/,String.fromCharCode(207));
 umwandeltemp = umwandeltemp.replace(/&ETH;/,String.fromCharCode(208));
 umwandeltemp = umwandeltemp.replace(/&Ntilde;/,String.fromCharCode(209));
 umwandeltemp = umwandeltemp.replace(/&Ograve;/,String.fromCharCode(210));
 umwandeltemp = umwandeltemp.replace(/&Oacute;/,String.fromCharCode(211));
 umwandeltemp = umwandeltemp.replace(/&Ocirc;/,String.fromCharCode(212));
 umwandeltemp = umwandeltemp.replace(/&Otilde;/,String.fromCharCode(213));
 umwandeltemp = umwandeltemp.replace(/&Ouml;/,String.fromCharCode(214));
 umwandeltemp = umwandeltemp.replace(/&times;/,String.fromCharCode(215));
 umwandeltemp = umwandeltemp.replace(/&Oslash;/,String.fromCharCode(216));
 umwandeltemp = umwandeltemp.replace(/&Ugrave;/,String.fromCharCode(217));
 umwandeltemp = umwandeltemp.replace(/&Uacute;/,String.fromCharCode(218));
 umwandeltemp = umwandeltemp.replace(/&Ucirc;/,String.fromCharCode(219));
 umwandeltemp = umwandeltemp.replace(/&Uuml;/,String.fromCharCode(220));
 umwandeltemp = umwandeltemp.replace(/&Yacute;/,String.fromCharCode(221));
 umwandeltemp = umwandeltemp.replace(/&THORN;/,String.fromCharCode(222));
 umwandeltemp = umwandeltemp.replace(/&szlig;/,String.fromCharCode(223));
 umwandeltemp = umwandeltemp.replace(/&agrave;/,String.fromCharCode(224));
 umwandeltemp = umwandeltemp.replace(/&aacute;/,String.fromCharCode(225));
 umwandeltemp = umwandeltemp.replace(/&acirc;/,String.fromCharCode(226));
 umwandeltemp = umwandeltemp.replace(/&atilde;/,String.fromCharCode(227));
 umwandeltemp = umwandeltemp.replace(/&auml;/,String.fromCharCode(228));
 umwandeltemp = umwandeltemp.replace(/&aring;/,String.fromCharCode(229));
 umwandeltemp = umwandeltemp.replace(/&aelig;/,String.fromCharCode(230));
 umwandeltemp = umwandeltemp.replace(/&ccedil;/,String.fromCharCode(231));
 umwandeltemp = umwandeltemp.replace(/&egrave;/,String.fromCharCode(232));
 umwandeltemp = umwandeltemp.replace(/&eacute;/,String.fromCharCode(233));
 umwandeltemp = umwandeltemp.replace(/&ecirc;/,String.fromCharCode(234));
 umwandeltemp = umwandeltemp.replace(/&euml;/,String.fromCharCode(235));
 umwandeltemp = umwandeltemp.replace(/&igrave;/,String.fromCharCode(236));
 umwandeltemp = umwandeltemp.replace(/&iacute;/,String.fromCharCode(237));
 umwandeltemp = umwandeltemp.replace(/&icirc;/,String.fromCharCode(238));
 umwandeltemp = umwandeltemp.replace(/&iuml;/,String.fromCharCode(239));
 umwandeltemp = umwandeltemp.replace(/&eth;/,String.fromCharCode(240));
 umwandeltemp = umwandeltemp.replace(/&ntilde;/,String.fromCharCode(241));
 umwandeltemp = umwandeltemp.replace(/&ograve;/,String.fromCharCode(242));
 umwandeltemp = umwandeltemp.replace(/&oacute;/,String.fromCharCode(243));
 umwandeltemp = umwandeltemp.replace(/&ocirc;/,String.fromCharCode(244));
 umwandeltemp = umwandeltemp.replace(/&otilde;/,String.fromCharCode(245));
 umwandeltemp = umwandeltemp.replace(/&ouml;/,String.fromCharCode(246));
 umwandeltemp = umwandeltemp.replace(/&divide;/,String.fromCharCode(247));
 umwandeltemp = umwandeltemp.replace(/&oslash;/,String.fromCharCode(248));
 umwandeltemp = umwandeltemp.replace(/&ugrave;/,String.fromCharCode(249));
 umwandeltemp = umwandeltemp.replace(/&uacute;/,String.fromCharCode(250));
 umwandeltemp = umwandeltemp.replace(/&ucirc;/,String.fromCharCode(251));
 umwandeltemp = umwandeltemp.replace(/&uuml;/,String.fromCharCode(252));
 umwandeltemp = umwandeltemp.replace(/&yacute;/,String.fromCharCode(253));
 umwandeltemp = umwandeltemp.replace(/&thorn;/,String.fromCharCode(254));
 umwandeltemp = umwandeltemp.replace(/&yuml;/,String.fromCharCode(255));
 umwandeltemp = umwandeltemp.replace(/&Scaron;/,String.fromCharCode(352));
 umwandeltemp = umwandeltemp.replace(/&scaron;/,String.fromCharCode(353));

  umwandeltemp = umwandeltemp.replace(/&Alpha;/,String.fromCharCode(913));
  umwandeltemp = umwandeltemp.replace(/&alpha;/,String.fromCharCode(945));
  umwandeltemp = umwandeltemp.replace(/&Beta;/,String.fromCharCode(914));
  umwandeltemp = umwandeltemp.replace(/&beta;/,String.fromCharCode(946));
  umwandeltemp = umwandeltemp.replace(/&Gamma;/,String.fromCharCode(915));
  umwandeltemp = umwandeltemp.replace(/&gamma;/,String.fromCharCode(947));
  umwandeltemp = umwandeltemp.replace(/&Delta;/,String.fromCharCode(916));
  umwandeltemp = umwandeltemp.replace(/&delta;/,String.fromCharCode(948));
  umwandeltemp = umwandeltemp.replace(/&Epsilon;/,String.fromCharCode(917));
  umwandeltemp = umwandeltemp.replace(/&epsilon;/,String.fromCharCode(949));
  umwandeltemp = umwandeltemp.replace(/&Zeta;/,String.fromCharCode(918));
  umwandeltemp = umwandeltemp.replace(/&zeta;/,String.fromCharCode(950));
  umwandeltemp = umwandeltemp.replace(/&Eta;/,String.fromCharCode(919));
  umwandeltemp = umwandeltemp.replace(/&eta;/,String.fromCharCode(951));
  umwandeltemp = umwandeltemp.replace(/&Theta;/,String.fromCharCode(920));
  umwandeltemp = umwandeltemp.replace(/&theta;/,String.fromCharCode(952));
  umwandeltemp = umwandeltemp.replace(/&Iota;/,String.fromCharCode(921));
  umwandeltemp = umwandeltemp.replace(/&iota;/,String.fromCharCode(953));
  umwandeltemp = umwandeltemp.replace(/&Kappa;/,String.fromCharCode(922));
  umwandeltemp = umwandeltemp.replace(/&kappa;/,String.fromCharCode(954));
  umwandeltemp = umwandeltemp.replace(/&Lambda;/,String.fromCharCode(923));
  umwandeltemp = umwandeltemp.replace(/&lambda;/,String.fromCharCode(955));
  umwandeltemp = umwandeltemp.replace(/&Mu;/,String.fromCharCode(924));
  umwandeltemp = umwandeltemp.replace(/&mu;/,String.fromCharCode(956));
  umwandeltemp = umwandeltemp.replace(/&Nu;/,String.fromCharCode(925));
  umwandeltemp = umwandeltemp.replace(/&nu;/,String.fromCharCode(957));
  umwandeltemp = umwandeltemp.replace(/&Xi;/,String.fromCharCode(926));
  umwandeltemp = umwandeltemp.replace(/&xi;/,String.fromCharCode(958));
  umwandeltemp = umwandeltemp.replace(/&Omicron;/,String.fromCharCode(927));
  umwandeltemp = umwandeltemp.replace(/&omicron;/,String.fromCharCode(959));
  umwandeltemp = umwandeltemp.replace(/&Pi;/,String.fromCharCode(928));
  umwandeltemp = umwandeltemp.replace(/&pi;/,String.fromCharCode(960));
  umwandeltemp = umwandeltemp.replace(/&Rho;/,String.fromCharCode(929));
  umwandeltemp = umwandeltemp.replace(/&rho;/,String.fromCharCode(961));
  umwandeltemp = umwandeltemp.replace(/&Sigma;/,String.fromCharCode(931));
  umwandeltemp = umwandeltemp.replace(/&sigmaf;/,String.fromCharCode(962));
  umwandeltemp = umwandeltemp.replace(/&sigma;/,String.fromCharCode(963));
  umwandeltemp = umwandeltemp.replace(/&Tau;/,String.fromCharCode(932));
  umwandeltemp = umwandeltemp.replace(/&tau;/,String.fromCharCode(964));
  umwandeltemp = umwandeltemp.replace(/&Upsilon;/,String.fromCharCode(933));
  umwandeltemp = umwandeltemp.replace(/&upsilon;/,String.fromCharCode(965));
  umwandeltemp = umwandeltemp.replace(/&Phi;/,String.fromCharCode(934));
  umwandeltemp = umwandeltemp.replace(/&phi;/,String.fromCharCode(966));
  umwandeltemp = umwandeltemp.replace(/&Chi;/,String.fromCharCode(935));
  umwandeltemp = umwandeltemp.replace(/&chi;/,String.fromCharCode(967));
  umwandeltemp = umwandeltemp.replace(/&Psi;/,String.fromCharCode(936));
  umwandeltemp = umwandeltemp.replace(/&psi;/,String.fromCharCode(968));
  umwandeltemp = umwandeltemp.replace(/&Omega;/,String.fromCharCode(937));
  umwandeltemp = umwandeltemp.replace(/&omega;/,String.fromCharCode(969));
  umwandeltemp = umwandeltemp.replace(/&thetasym;/,String.fromCharCode(977));
  umwandeltemp = umwandeltemp.replace(/&upsih;/,String.fromCharCode(978));
  umwandeltemp = umwandeltemp.replace(/&piv;/,String.fromCharCode(982));
   
 } while (umwandeltemp != umwandeltemptemp)
}
 return umwandeltemp;

}

// ########################################################## Sonderzeichen hinschreiben

function sonderzeichen_hinschreiben()
{

zeichen = new Array();


if (sprache=="arabisch") zeichen = new Array(702,1,703,1,257,1,7693,1,7695,1,287,1,289,1,7717,1,7723,1,299,1,7779,1,353,1,7789,1,7791,1,363,1,219);
if (sprache=="englisch") zeichen = new Array();
if (sprache=="franzoesisch") zeichen = new Array(192,224,1,194,226,1,198,230,1,199,231,1,200,232,1,201,233,1,202,234,1,203,235,1,206,1,238,1,207,1,239,1,212,244,1,338,339,1,217,249,1,219,251);
if (sprache=="spanisch" || sprache=="suedamerika" || sprache=="mexikanisch") zeichen = new Array(161,1,191,1,193,225,1,231,1,201,233,1,205,1,237,1,209,241,1,211,243,1,218,250);
if (sprache=="italienisch") zeichen = new Array(192,224,1,200,232,1,201,233,1,204,1,236,1,205,1,237,1,207,1,239,1,210,242,1,211,243,1,217,249,1,218,250);
if (sprache=="portugiesisch") zeichen = new Array(194,226,1,195,227,1,199,231,1,202,234,1,211,243,1,212,244,1,213,245);
if (sprache=="brasilianisch") zeichen = new Array(194,226,1,195,227,1,199,231,1,202,234,1,211,243,1,212,244,1,213,245);
if (sprache=="niederlaendisch") zeichen = new Array(201,1,233,1,203,1,235,1,207,239);
if (sprache=="schwedisch") zeichen = new Array(229,1,197);
if (sprache=="daenisch") zeichen = new Array(229,197,1,230,198,1,233,201,1,248,216);
if (sprache=="polnisch") zeichen = new Array(260,261,1,262,263,1,280,281,1,321,1,322,1,323,324,1,211,243,1,346,347,1,377,378,1,379,380);
if (sprache=="tschechisch") zeichen = new Array(193,225,1,268,269,1,270,271,1,201,233,1,283,282,1,205,237,1,327,328,1,211,243,1,344,345,1,352,353,1,356,357,1,218,250,1,366,367,1,221,253,1,381,382);
if (sprache=="ungarisch") zeichen = new Array(337,336,1,369,368,1,225,193,1,233,201,1,237,1,205,1,243,211,1,250,218);
if (sprache=="hebraeisch") zeichen = new Array(1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1,1498,1499,1500,1501,1502,1503,1504,1505,1506,1507,1,1508,1509,1510,1511,1512,1513,1514);
if (sprache=="albanisch") zeichen = new Array(199,231,1,203,235);
if (sprache=="lettisch") zeichen = new Array(256,257,1,268,269,1,274,275,1,290,291,1,298,299,1,310,311,1,315,316,1,325,326,1,332,333,1,342,343,1,352,353,1,362,363,1,381,382);
if (sprache=="estnisch") zeichen = new Array(196,228,1,268,269,1,213,245,1,214,246,1,352,353,1,220,252,1,381,382);
if (sprache=="litauisch") zeichen = new Array(260,261,1,268,269,1,278,279,1,280,281,1,302,303,1,352,353,1,362,363,1,370,371,1,381,382);
if (sprache=="tuerkisch") zeichen = new Array(226,1,199,231,1,286,287,1,304,1,305,1,238,1,214,246,1,220,252,1,350,351);
if (sprache=="maltesisch") zeichen = new Array(266,267,1,288,289,1,294,295,1,379,380);
if (sprache=="norwegisch") zeichen = new Array(198,1,230,1,197,1,229,1,216,1,248);
if (sprache=="russisch" || sprache=="bulgarisch" || sprache=="ukrainisch" || sprache=="weissrussisch" || sprache=="mazedonisch" || sprache=="mongolisch") zeichen = new Array(1040,1072,1041,1073,1042,1074,1043,1075,1044,1076,1,1045,1077,1046,1078,1047,1079,1048,1080,1049,1081,1050,1082,1,1051,1083,1052,1084,1053,1085,1054,1086,1055,1087,1056,1088,1,1057,1089,1058,1090,1059,1091,1060,1092,1061,1093,1,1062,1094,1063,1095,1064,1096,1065,1097,1066,1098,1,1067,1099,1068,1100,1069,1101,1070,1102,1071,1103,1105);
if (sprache=="kasachisch") zeichen = new Array(1040,1072,1240,1241,1041,1073,1042,1074,1043,1075,1170,1171,1044,1076,1,1045,1077,1046,1078,1047,1079,1048,1080,1049,1081,1050,1082,1178,1179,1,1051,1083,1052,1084,1053,1085,1186,1187,1054,1086,1256,1257,1055,1087,1056,1088,1,1057,1089,1058,1090,1059,1091,1200,1201,1198,1199,1060,1092,1061,1093,1210,1211,1,1062,1094,1063,1095,1064,1096,1065,1097,1066,1098,1,1067,1099,1030,1110,1068,1100,1069,1101,1070,1102,1071,1103,1105);
if (sprache=="latein") zeichen = new Array(257,1,275,1,299,1,333,1,363);
if (sprache=="serbisch") zeichen = new Array(1040,1072,1041,1073,1042,1074,1043,1075,1044,1076,1,1026,1106,1,1045,1077,1046,1078,1047,1079,1048,1080,1,1032,1112,1,1050,1082,1,1051,1083,1033,1113,1052,1084,1053,1085,1034,1114,1054,1086,1055,1087,1056,1088,1,1057,1089,1058,1090,1035,1115,1,1059,1091,1060,1092,1061,1093,1,1062,1094,1063,1095,1039,1119,1,1064,1096,1065,1097,1,262,263,1,268,269,1,272,273,1,352,353,1,381,382);
if (sprache=="griechisch") zeichen = new Array(890,1,894,1,900,1,901,1,903,1,902,904,905,906,908,910,911,912,913,914,915,916,917,918,919,920,921,922,1,923,924,925,926,927,928,929,931,932,933,934,935,936,937,938,939,1,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,1,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974);
if (sprache=="kroatisch") zeichen = new Array(262,263,1,268,269,1,272,273,1,352,353,1,381,382,1,282,283);
if (sprache=="bosnisch")  zeichen = new Array(262,263,1,268,269,1,272,273,1,352,353,1,381,382,1,282,283);
if (sprache=="rumaenisch") zeichen = new Array(194,1,226,1,258,1,259,1,206,1,238,1,350,1,351,1,354,1,355);
if (sprache=="slowakisch") zeichen = new Array(193,225,1,268,269,1,270,271,1,201,233,1,283,282,1,205,1,237,1,313,1,314,1,317,1,318,1,327,328,1,211,243,1,212,244,1,340,341,1,352,353,1,356,357,1,218,250,1,221,253,1,381,382);
if (sprache=="slowenisch") zeichen = new Array(262,263,1,268,269,1,272,273,1,352,353,1,381,382,1,282,283);
if (sprache=="deutsch") zeichen = new Array(228,196,1,246,214,1,252,220,1,233,1,223);
if (sprache=="chinesisch" || sprache=="shanghaichinesisch") zeichen = new Array(257,275,299,333,363,1,256,274,298,332,362,1,225,233,237,243,250,1,193,201,205,211,218,1,462,283,464,468,466,1,224,232,236,242,249,1,192,200,204,210,217);
if (sprache=="islaendisch") zeichen = new Array(208,240,1,254,222,1,198,230,1,225,193,1,233,201,1,237,1,205,1,211,243,1,218,250,1,221,253);
if (sprache=="katalanisch") zeichen = new Array(161,1,191,1,193,225,1,231,1,201,233,1,205,1,237,1,207,1,239,1,209,241,1,211,243,1,218,250);
if (sprache=="vietnamesisch") zeichen = new Array(272,273,1,225,224,227,194,226,259,7840,7841,7842,7843,7844,7845,7846,7847,7848,7849,7850,7851,7852,7853,7854,7855,7856,7857,7858,7859,7860,7861,7862,7863,1,277,233,232,7864,7865,7866,7867,7868,7869,7870,7871,7872,7873,7874,7875,7876,7877,7878,7879,1,301,1,237,1,236,1,297,1,7880,1,7881,1,7882,1,7883,1,335,243,242,245,417,7884,7885,7886,7887,7888,7889,7890,7891,7892,7893,7894,7895,7896,7897,7898,7899,7900,7901,7902,7903,7904,7905,7906,7907,1,250,249,361,432,7908,7909,7910,7911,7912,7913,7914,7915,7916,7917,7918,7919,7920,7921,365,1,7922,7923,7924,7925,7926,7927,7928,7929);


document.write("<font face=\"arial unicode ms,Lucida Sans Unicode,verdana,tahoma,arial,helvetica\" size=2>");
var a=0;
while (zeichen[a]){
if (zeichen[a]>1){document.write("<a href=\"javascript:sonderzeichen("+zeichen[a]+")\">\&#"+zeichen[a]+";</a>");}
else {document.write(" ");}
a++;
}

}


// ########################################################## Sonderzeichen im Test einfügen

function test_ende(mobile_langzeit)
{
	var t=0; 
	ta_abbruch=1;
	while (t<=anzahlvok){ vrichtig[t]=1; t+=1; }
	neuevok(1,0,0,0,0,0,mobile_langzeit);
}

// ########################################################## Einfärben

function einfaerben(ttext,tdurchgang)
{
  var ttext2=""; var t2=0;
  if (!ttext) var ttext="";
  var farbobjekt = new Array;
  for (t=0;t<ttext.length;t++){
    var tbuchst=ttext.substring(t,t+1);
    var tbuchst2=tbuchst;
    var ja =0;
    if (tbuchst=="a" || tbuchst=="A") ja=1;
    if (tbuchst=="e" || tbuchst=="E") ja=2;
    if (tbuchst=="i" || tbuchst=="I") ja=3;
    if (tbuchst=="o" || tbuchst=="O") ja=4;
    if (tbuchst=="u" || tbuchst=="U") ja=5;
    if (tbuchst=="y" || tbuchst=="Y") ja=6;

    if (ja==1) farbobjekt[t2]="#DC143C";
    if (ja==2) farbobjekt[t2]="#FA970A";
    if (ja==3) farbobjekt[t2]="#FFCC00";
    if (ja==4) farbobjekt[t2]="#228B22";
    if (ja==5) farbobjekt[t2]="#483D8B";
    if (ja==6) farbobjekt[t2]="#32CD32";

    if (ja>0) {
      t2+=1;
      tbuchst2="<span id=\"objekt"+t2+"_"+tdurchgang+"\" onMouseover=\"javascript:einschalten"+tdurchgang+"();\" onMouseout=\"javascript:ausschalten"+tdurchgang+"();\">"+tbuchst+"</span>";
    }

    if (ja==0) tbuchst2="<span id=weiss onMouseover=\"javascript:einschalten"+tdurchgang+"();\" onMouseout=\"javascript:ausschalten"+tdurchgang+"();\">"+tbuchst+"</span>";

    if (tbuchst=="&" || tbuchst=="#" || tbuchst=="0"  || tbuchst=="1" || tbuchst=="2" || tbuchst=="3" || tbuchst=="4" || tbuchst=="5" || tbuchst=="6" || tbuchst=="7" || tbuchst=="8" || tbuchst=="9" || tbuchst==";") tbuchst2=tbuchst;

    ttext2=ttext2+""+tbuchst2;
  }
  var tuebergabe="var farbobjekt"+tdurchgang+" = new Array;";
  for (a=0;a<=t2;a++) {tuebergabe=tuebergabe+" farbobjekt"+tdurchgang+"["+a+"]=\""+farbobjekt[a-1]+"\";\n";}
  ttext="<style><!-- .rot { background-color:#FF99FF }  --></style>"+
  "\n<script language=JavaScript>"+tuebergabe+" \n "+
  "function einschalten"+tdurchgang+"() { \n for (var a=1;a<="+t2+";a+=1) {"+
  "document.getElementById(\"objekt\"+a+\"_"+tdurchgang+"\").style.backgroundColor=farbobjekt"+tdurchgang+"[a];}}"+
  "function ausschalten"+tdurchgang+"() { \n for (var a=1;a<="+t2+";a+=1) {"+
  "\n var iexpl=document.all; var zwei=document.getElementById; var farbstyle;"+
  "\n if (zwei) { farbstyle=document.getElementById(\"objekt\"+a+\"_"+tdurchgang+"\"); }"+
  "\n else {if (iexpl) { farbstyle=document.all.objekt"+a+"_"+tdurchgang+"; } else { farbstyle=document.objekt"+a+"_"+tdurchgang+"; }}"+
  "farbstyle.style.backgroundColor=\"\";}}"+
  "\n </script>"+
  ttext2;
  return (ttext);
}



// ########################################################## Sonderzeichen im Test einfügen

function sonderzeichen(zeichen)
{
	document.testit.testvokabel.value = document.testit.testvokabel.value + String.fromCharCode(zeichen) ;
	document.testit.testvokabel.focus();
}

// ########################################################## Umlaute

function umlaute(schreibenlernen)
{
	var schreibenlernen2=0;
	if (schreibenlernen) schreibenlernen2=1;
	var testvok=document.testit.testvokabel.value;
	var testvok2=testvok;
	var testvoktemp="";
	   
	testvok=umlautewandeln(testvok);
	   
	if (testvok != testvok2) {
		document.testit.testvokabel.value=testvok;
	}

	if (document.testit.testvokabel.value.length==alttest.length-1)
	{
		if (document.testit.testvokabel.value.length>0 && alttest.substr(alttest.length-1,1)==";")
		{
			document.testit.testvokabel.value=document.testit.testvokabel.value.substr(0,document.testit.testvokabel.value.length-5);
		}
	}
	if (testvok.indexOf("%")>-1) { testvok = ""; document.testit.testvokabel.value=testvok; }
	if (testvok.indexOf("=")>-1) { testvok = testvok.replace(/=/,""); document.testit.testvokabel.value=testvok; neuevok(0,1,0,schreibenlernen2); }
	if (testvok.indexOf(">")>-1) { testvok = ""; document.testit.testvokabel.value=testvok; neuevok(1,0,0,schreibenlernen2); }
	if (testvok.indexOf("<")>-1) { testvok = ""; document.testit.testvokabel.value=testvok; neuevok(-1,0,0,schreibenlernen2); }

	alttest=document.testit.testvokabel.value;
}



// ########################################################## 

