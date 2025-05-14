// Copyright: www.sprachenlernen24.de, Udo Gollub, München 

// Design


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


var alles = (document.getElementById)  ? true : false;
var ns4 = (document.layers) ? true : false;
var ie5 = (document.all &&  alles) ? true : false;
var ie4 = (document.all && !alles) ? true : false;

function box_suche ( id ) {
  if (ns4) return findlayer (id,document);
  else if(ie4) return document.all[id];
  else return document.getElementById( id );
}
function box_einblenden (id) {
  var kasten = box_suche (id);
  if (ns4) { kasten.visibility  = "show"; } else  { kasten.style.visibility = "visible"; }
}
function box_ausblenden (id) {
  var kasten = box_suche (id);
  if (ns4) { kasten.visibility = "hide"; } else  { kasten.style.visibility = "hidden"; }
}

function bilder_ausblenden () {
  alert(bildanzahlcounter)
  for (var t=0; t<bildanzahlcounter;t+=1) {
    window.document.images[t+1].src = ""+grundverzeichnis+"grafik/nichts.jpg";
  }
}
