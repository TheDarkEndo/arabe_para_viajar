
// ########################################################## Überschrift





function startseite (startseitevar)
{

 if (sprachkuerzel.indexOf("4a")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_a[startseitevar]; }
 if (sprachkuerzel.indexOf("4b")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_b[startseitevar]; }
 if (sprachkuerzel.indexOf("4c")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_c[startseitevar]; }
 if (sprachkuerzel.indexOf("4d")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_d[startseitevar]; }
 if (sprachkuerzel.indexOf("4e")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_e[startseitevar]; }
 if (sprachkuerzel.indexOf("4f")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_f[startseitevar]; }
 if (sprachkuerzel.indexOf("4g")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_g[startseitevar]; }
 if (sprachkuerzel.indexOf("4h")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_h[startseitevar]; }
 if (sprachkuerzel.indexOf("4i")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_i[startseitevar]; }
 if (sprachkuerzel.indexOf("4j")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_j[startseitevar]; }
 if (sprachkuerzel.indexOf("4k")>0) { lektionennamen[(startseitevar*2)-1] = spezial_ueberschrift_k[startseitevar]; }
 if (sprachkuerzel.indexOf("5a")>0) { lektionennamen[(startseitevar*2)-1] = business_ueberschrift_a[startseitevar]; }
 if (sprachkuerzel.indexOf("5b")>0) { lektionennamen[(startseitevar*2)-1] = business_ueberschrift_b[startseitevar]; }
 if (sprachkuerzel.indexOf("5c")>0) { lektionennamen[(startseitevar*2)-1] = business_ueberschrift_c[startseitevar]; }
 if (sprachkuerzel.indexOf("6")>0)  { lektionennamen[(startseitevar*2)-1] = grammatiktrainer_kapitelueberschrift[startseitevar]; }


document.write ("<HTML><HEAD><meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-15\">");
document.write ("<link rel=\"stylesheet\" type=\"text/css\" href=\"../content/langues.css\"><TITLE></TITLE></HEAD>");
document.write ("<BODY><center><div id=\"container2\"><div id=\"normaltext\">");


document.write ("<table height=90% width=100% valign=top><tr><td valign=middle><table height=70% width=100% valign=middle><tr><td valign=middle><center><TABLE width=80% border=0 cellspacing=0 cellpadding=0>");
document.write ("<tr valign=top><td bgcolor=\"#FFFFFF\"><font size=2><font face=\"verdana,arial,helvetica\" color=\"#000000\">");
document.write ("<table width=100% bgcolor=\"#993344\" cellspacing=0 border=0 cellpadding=1><tr><td>");
document.write ("<table width=100% bgcolor=\"#FFFFFF\" cellspacing=0 border=0 cellpadding=7><tr>");
document.write ("<td bgcolor=\"#FFFFFF\" width=100%><font size=2 face=\"verdana,arial,helvetica\">");
document.write ("<table width=100% border=0><tr><td bgcolor=F0F0F0>");

document.write ("<center><font face='verdana,arial,helvetica' size=5 color=000000>\&nbsp;<br>\&nbsp;<br>"+spracheintrag_hinweis[14]+" "+startseitevar+"<br>"+lektionennamen[(startseitevar*2)-1]+"");
document.write ("<br>\&nbsp;<br>\&nbsp;<br>\&nbsp;<br>Elije a la izquierda el método de aprendizaje<br>\&nbsp;<br>\&nbsp;<br>");
document.write ("</td></tr></table>");

document.write ("</TD></TR></TABLE></TD></TR></TABLE></table></td></tr></table>&nbsp;");

document.write ("<font face=\"verdana,arial,helvetica\" size=2><br>");
var minus1=startseitevar-1;
var plus1=startseitevar+1;
//if (minus1>0) document.write ("\&nbsp;<a href=javascript:Go(\"lektion"+minus1+".html\",1)><img src=../grafik/pfeil_l2.gif border=0></a>\&nbsp;");
//document.write ("\&nbsp;<a href=../lektionsauswahl.html>[Hauptauswahl / Extras]</a>\&nbsp;");
//if (plus1<43)  document.write ("\&nbsp;<a href=javascript:Go(\"lektion"+plus1+".html\",1)><img src=../grafik/pfeil_r2.gif border=0></a>\&nbsp;");
//document.write ("<br>\&nbsp;<a href=../anleitungen/anleitung.html>[Anleitung]</a>\&nbsp;");
//document.write ("\&nbsp;<a href=../anleitungen/fragen3.html>[Häufige Fragen]</a>\&nbsp;");
document.write("</TD></TR></TABLE>");
}



