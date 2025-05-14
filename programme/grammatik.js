// Copyright: www.sprachenlernen24.de, Udo Gollub, München


// Basiseinstellungen Start
var grundverzeichnis2="../";
var navname = navigator.userAgent;
if (navname.indexOf("Firefox")>1) { 

 var pfad = self.location.pathname;
 var r1= pfad.lastIndexOf("/"); if (r1<2) { r1= pfad.lastIndexOf("\\"); }
 var pfad2=pfad.substr(0,r1);

 r1= pfad2.lastIndexOf("/"); if (r1<2) { r1= pfad2.lastIndexOf("\\"); }
 pfad2=pfad2.substr(0,r1);

 grundverzeichnis2=pfad2+"/";
}
// Basiseinstellungen Ende



function grammatikfunktion(vmobile)
{
	//var x=0; var y=0; while (grammatik[x]) { if (grammatik[x]) {  } x=x+3;}
	var targettext=" target=_top";
	if (!vmobile) { targettext=" target=rahmen1"; }
	var c=0; var kapitelcounter=0; var uebungscounter=1; oberkapitel2=1;
	while(grammatik[c])
	{
		var oberkapitel=Math.floor(grammatik[c]);

		if (oberkapitel>kapitelcounter){

			document.write("<tr><td bgcolor=FFFFFF><img src="+grundverzeichnis2+"grafik/nichts.gif height=4 width=100%></td></tr>\n");
			document.write("<tr><td bgcolor=FAC832 background="+grundverzeichnis2+"grafik/line_jaune.gif><table border=0 cellpadding=0 cellspacing=0><tr><td><font size=2>\&nbsp;\&nbsp;</td><td><font size=2 face='verdana,arial,helvetica' color=333333>"+oberkapitel2+". "+grammatikkapitel[oberkapitel]+"</a></td></tr></table></td></tr>\n");
			document.write("<tr><td><img src="+grundverzeichnis2+"grafik/line_gris3.gif height=1 width=100%></td></tr>\n");

			kapitelcounter=oberkapitel; oberkapitel2+=1;
		}

		var unterkapitel=(grammatik[c].substr(2))*1;
		document.write("<tr><td bgcolor=#FFFFFF onMouseout=\"this.style.backgroundColor='#FFFFFF'\" onMouseover=\"this.style.backgroundColor='#F6E9A0'\"><table border=0 cellpadding=0 cellspacing=0><tr><td><font size=2>\&nbsp;\&nbsp;</td><td><font size=2 face='verdana,arial,helvetica' color=333333><a href=\"../grammatik/"+grammatik[c+1]+"\""+targettext+">"+grammatik[c+2]+"</a></td></tr></table></td></tr>\n");

		c=c+3;
	}
}
