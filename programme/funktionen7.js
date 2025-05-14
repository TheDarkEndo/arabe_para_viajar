// Copyright: www.sprachenlernen24.de, Udo Gollub, München 

// funktionen7.js bezieht sich auf alle Vokabeln darstellen (Wörterbuch)


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


var lektion4=0;
var ton4=0;
var sprachausgabe4=0;

// ########################################################## Sprache aussuchen

function sprachnummerliste(temp4)
{
	sprache4=temp4;
	die_grosse_liste();
}

// ########################################################## Lektion mit angeben

function lektionliste()
{
	lektion4=1-lektion4;
	die_grosse_liste();
}

// ########################################################## Sprachausgabe mit angeben

function sprachliste()
{
	sprachausgabe4=1-sprachausgabe4;
	die_grosse_liste();
}



// ########################################################## Liste erstellen

function die_grosse_liste(aaa,vmobile)
{

if (!vmobile) { var vmobile=0; }
var temp2="";
if (document.testit) temp2=document.testit.testvokabel.value;
if (aaa) temp2=aaa;
//alert ("a: "+temp2);
//alert("x"+temp2+"x"+lektion4+"\n"+v[5]);

temp2=temp2.toLowerCase();  

var v9= new Array;
var v92= new Array;
var x93="";
var c=0; var anzahlvok=0;
var temp3="";
var temploin=0; var temploin2=0;
if (temp2.length>0) { temploin=1; }
if (temp2.length==0 || !vmobile) { temploin2=1; }
while(v[c])
{
  var vtemp56=v[c+5].toLowerCase();
  //parent[1].document.write (vtemp56+"***"+temp2+"##"+vtemp56.indexOf(temp2)+"<br>");
  if ((temploin && vtemp56.indexOf(temp2)>-1) || temploin2){
  var vau4=v[c+4];
  if (v[c+1]>0) {
   var keinlatein="";
   if (lateinmachen) keinlatein="</td><td>\&nbsp; <font color=red size=2 face=\"arial unicode ms,verdana,tahoma,arial,helvetica\">"+latein(vau4)+"";

   if (lateinmachen==2) { vau4=schriftzeichen(vau4); }
   else { vau4=umlautewandeln(vau4); }
   if (sprache4==2) { 
    if (lateinmachen==2) {
      v9[anzahlvok]=keinlatein.toLowerCase()+"TRENNUNG1"+vau4+keinlatein+"</td><td><font face='arial unicode ms,verdana,tahoma,arial,helvetica' size=2>"+v[c+5]; 
    } else {
      v9[anzahlvok]=vau4.toLowerCase()+"TRENNUNG1"+vau4+keinlatein+"</td><td><font face='arial unicode ms,verdana,tahoma,arial,helvetica' size=2>"+v[c+5]; 
    }
   }
   else { 
    temp3=v[c+5];
    if (temp3.indexOf("der ")>-1) temp3 = temp3.replace(/der /,"");
    if (temp3.indexOf("die ")>-1) temp3 = temp3.replace(/die /,"");
    if (temp3.indexOf("das ")>-1) temp3 = temp3.replace(/das /,"");
    x93="";
    if (lateinmachen==2) {
      x93=v[c+5].toLowerCase()+"TRENNUNG1"+temp3; 
    } else {
      x93=temp3.toLowerCase()+"TRENNUNG1"+v[c+5]; 
    }
    v9[anzahlvok]=x93+"</td><td>\&nbsp; <font face='arial unicode ms,verdana,tahoma,arial,helvetica' size=2>"+vau4+keinlatein; 
    
   }
   v92[anzahlvok]=x93+vau4+keinlatein;
   v92[anzahlvok]=v92[anzahlvok].toLowerCase();
   v9[anzahlvok]=v9[anzahlvok]+" </td><td>&nbsp;</td><td><font face='arial unicode ms,verdana,tahoma,arial,helvetica' size=2>"+spracheintrag_hinweis[14]+" "+v[c+1];
   //if (sprachausgabe4 && v[c].length>1) {
   if (v[c].length>1 || v[c]>1) {
    var s1="<td> \&nbsp; </td><td><a href="+grundverzeichnis+"audio/"+v[c]+".mp3 target=ton><img src=\""+grundverzeichnis+"grafik/lautsprecher1.gif\" border=0></a><br><img src=\""+grundverzeichnis+"grafik/null.gif\" width=24 height=1></td>";
    v9[anzahlvok]=v9[anzahlvok]+s1;
   }
   }
   anzahlvok+=1;

  }
  c=c+6;
}
//alert("hallo "+ anzahlvok + " vmobile: " + vmobile+ " "+temploin2+ " "+vtemp56+ " ## "+temp2);
if (temp2.length<1) { v9.sort(); }

var c=0;
var vorher="";
//parent[1].document.close();
//parent[1].document.write ("<script language=\"JavaScript\" src=\"../funktionen1.js\"></script><body bgcolor=F0F0F0>");

if (vmobile) { document.write ("<table cellpadding=0 cellspacing=0>"); }
else { parent[1].document.write ("<table cellpadding=0 cellspacing=0>"); }

var temp5="";
var temp6="";
var temp7="";
var tempwasda=0;

while(v9[c])
{
  if (v9[c].indexOf("TRENNUNG1")>-1) { v9[c]=v9[c].substring(v9[c].indexOf("TRENNUNG1")+9); }	

  temp5=v9[c];
  temp7=v92[c];

  if ((temp2.length>0 && temp7.toLowerCase().indexOf(temp2)>-1) || temp2.length==0){
    if (vorher != temp5) { 
      if (temp2.length>0 && temp5.indexOf(temp2)>-1) {
        var tstart= temp5.toLowerCase().indexOf(temp2); var tende=temp2.length;
        temp5=temp5.substr(0,tstart)+"<b>"+temp5.substr(tstart,tende)+"</b>"+temp5.substr(tstart+tende);
      }

      if (vmobile) { document.write ("<tr><td>&nbsp;</td><td><font face='arial unicode ms,verdana,tahoma,arial,helvetica' size=2>"+temp5+"</td></tr><tr><td colspan=8><hr width=100% size=1 noshade color=888888></td></tr>\n"); }
      else { parent[1].document.write ("<tr><td>&nbsp;</td><td><font face='arial unicode ms,verdana,tahoma,arial,helvetica' size=2>"+temp5+"</td></tr><tr><td colspan=8><hr width=100% size=1 noshade color=888888></td></tr>\n"); }
      tempwasda=1;
    }
  }
  vorher=v9[c];
  c=c+1;
}
if (tempwasda==0) {
  if (vmobile) { document.write ("<tr><td>&nbsp;</td><td><font face='arial unicode ms,verdana,tahoma,arial,helvetica' size=2>"+spracheintrag_hinweis[70]+"</td></tr>\n"); }
  else  { parent[1].document.write ("<tr><td>&nbsp;</td><td><font face='arial unicode ms,verdana,tahoma,arial,helvetica' size=2>"+spracheintrag_hinweis[70]+"</td></tr>\n"); }

}

if (vmobile) { 
  document.write ("</table>\n");
  document.close(); 
}
else {
  parent[1].document.write ("</table>\n");
  parent[1].document.close(); 
}

}



// ########################################################## 

