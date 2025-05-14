// Copyright: www.sprachenlernen24.de

// ########################################################## Audio-Wiedergabe

function aussprache(ausspr_modus,werte,extraverzeichnis)
{

  var extraverzeichn="../";
  if (extraverzeichnis) extraverzeichn="";

  var temp9="<font size=1 face='verdana,tahoma,arial,helvetica'>";

  top.parent[0].parent[1].document.write("<body>");

  top.parent[0].parent[1].document.write("<embed src="+extraverzeichn+"audio/"+werte+" autostart=true hidden=true loop=1><object data="+extraverzeichn+"audio/"+werte+" width=2 height=2></object>");
  top.parent[0].parent[1].document.close();

}
 
