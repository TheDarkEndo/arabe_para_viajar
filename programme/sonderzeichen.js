// Copyright: www.sprachenlernen24.de



// ########################################################## Sonderzeichen in lateinische Schrift umwandeln


function latein(wwt)
{

 if (wwt) { var ww=wwt; } else { var ww=""; }

//if (sprache=="russisch" || sprache=="serbisch" || sprache=="bulgarisch" || sprache=="ukrainisch" || sprache=="weissrussisch" || sprache=="mazedonisch" || sprache=="griechisch" || sprache=="hindi") {
if (lateinmachen==1 && wwt) {
  var wwtemp=ww; var wwtemp2="";

  for (a=0;a<ww.length;a++){
   if (ww.charCodeAt(a)>1000) { wwtemp2=wwtemp2+"&#"+ww.charCodeAt(a)+";";} else {wwtemp2=wwtemp2+ww.substr(a,1);}
  }
  if (wwtemp2.length>-1) ww=wwtemp2;

  var durchgangzahl=1;
  if (sprache=="hindi") durchgangzahl=10;
  if (sprache=="thai") durchgangzahl=5;
  
  for (var durchgang=1;durchgang<durchgangzahl+1;durchgang++){
  do {
  
  wwtemp=ww;

  ww = ww.replace(/\&ndash;/,"");
  ww = ww.replace(/\&hellip;/,"");
  ww = ww.replace(/\&nbsp;/," ");

  ww = ww.replace(/\&iquest;/,String.fromCharCode(191));
  ww = ww.replace(/\&iexcl;/,String.fromCharCode(161));
  
  if (sprache=="russisch" || sprache=="bulgarisch" || sprache=="ukrainisch" || sprache=="weissrussisch" || sprache=="mazedonisch" || sprache=="mongolisch" || sprache=="kasachisch") {
  
  ww = ww.replace(/\&#1025;/,"Jo");
  ww = ww.replace(/\&#1028;/,"Je");
  ww = ww.replace(/\&#1030;/,"I");
  ww = ww.replace(/\&#1031;/,"Ji");
  ww = ww.replace(/\&#1040;/,"A");
  ww = ww.replace(/\&#1041;/,"B");
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1042;/,"W"); } else { ww = ww.replace(/\&#1042;/,"V"); }

  if (sprache=="ukrainisch" || sprache=="weissrussisch") {ww = ww.replace(/\&#1043;/,"H");}
  else { ww = ww.replace(/\&#1043;/,"G"); }
  ww = ww.replace(/\&#1044;/,"D");
  ww = ww.replace(/\&#1045;/,"E");
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1043;/,"Sch"); } else { ww = ww.replace(/\&#1043;/,"sch"); }
  ww = ww.replace(/\&#1047;/,"Z");
  ww = ww.replace(/\&#1048;/,"I");
  ww = ww.replace(/\&#1049;/,"I");
  ww = ww.replace(/\&#1050;/,"K");
  ww = ww.replace(/\&#1051;/,"L");
  ww = ww.replace(/\&#1052;/,"M");
  ww = ww.replace(/\&#1053;/,"N");
  ww = ww.replace(/\&#1054;/,"O");
  ww = ww.replace(/\&#1055;/,"P");
  
  ww = ww.replace(/\&#1056;/,"R");
  ww = ww.replace(/\&#1057;/,"S");
  ww = ww.replace(/\&#1058;/,"T");
  ww = ww.replace(/\&#1059;/,"U");
  ww = ww.replace(/\&#1060;/,"F");
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1061;/,"Ch"); } else { ww = ww.replace(/\&#1061;/,"Kh"); }
  ww = ww.replace(/\&#1062;/,"Z");

  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1063;/,"Tsch"); } else { ww = ww.replace(/\&#1063;/,"Tsh"); }


  if (sprache=="ukrainisch" || sprache=="weissrussisch") {if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1064;/,"Sch"); } else { ww = ww.replace(/\&#1064;/,"Sh"); }}
  else {
    if (sprache=="bulgarisch") {  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1064;/,"Scht"); } else { ww = ww.replace(/\&#1064;/,"Sht"); }}
    else {  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1064;/,"Schtsch"); } else { ww = ww.replace(/\&#1064;/,"Shtsh"); }}
  }
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1065;/,"Schtsch"); } else { ww = ww.replace(/\&#1065;/,"Shtsh"); }
  ww = ww.replace(/\&#1066;/,"-");
  ww = ww.replace(/\&#1067;/,"Y");
  ww = ww.replace(/\&#1068;/,"-");

  if (sprache=="mongolisch") {  ww = ww.replace(/\&#1069;/,"E");  }
  else {                        ww = ww.replace(/\&#1069;/,"Ts");  }

  ww = ww.replace(/\&#1069;/,"Ts");
  ww = ww.replace(/\&#1070;/,"Ju");
  ww = ww.replace(/\&#1071;/,"Ja");
  
  ww = ww.replace(/\&#1072;/,"a");
  ww = ww.replace(/\&#1073;/,"b");
  
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1074;/,"w"); } else { ww = ww.replace(/\&#1074;/,"v"); }


  if (sprache=="ukrainisch" || sprache=="weissrussisch") {ww = ww.replace(/\&#1075;/,"h");}
  else { ww = ww.replace(/\&#1075;/,"g"); }
  ww = ww.replace(/\&#1076;/,"d");
  ww = ww.replace(/\&#1077;/,"e");
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1078;/,"sch"); } else { ww = ww.replace(/\&#1078;/,"sh"); }

  ww = ww.replace(/\&#1079;/,"s");
  ww = ww.replace(/\&#1080;/,"i");
  ww = ww.replace(/\&#1081;/,"i");
  ww = ww.replace(/\&#1082;/,"k");
  ww = ww.replace(/\&#1083;/,"l");
  ww = ww.replace(/\&#1084;/,"m");
  ww = ww.replace(/\&#1085;/,"n");
  ww = ww.replace(/\&#1086;/,"o");
  ww = ww.replace(/\&#1087;/,"p");
  ww = ww.replace(/\&#1088;/,"r");
  ww = ww.replace(/\&#1089;/,"s");
  ww = ww.replace(/\&#1090;/,"t");
  ww = ww.replace(/\&#1091;/,"u");
  ww = ww.replace(/\&#1092;/,"f");
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1093;/,"ch"); } else { ww = ww.replace(/\&#1093;/,"kh"); }

  ww = ww.replace(/\&#1094;/,"z");

  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1095;/,"tsch"); } else { ww = ww.replace(/\&#1095;/,"tsh"); }
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1096;/,"sh"); } else { ww = ww.replace(/\&#1096;/,"sh"); }

  if (sprache=="ukrainisch" || sprache=="weissrussisch") {    if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1097;/,"sch"); } else { ww = ww.replace(/\&#1097;/,"sh"); }   }
  else {
    if (sprache=="bulgarisch") {if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1097;/,"scht"); } else { ww = ww.replace(/\&#1097;/,"sht"); }}
    else {if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1097;/,"schtsch"); } else { ww = ww.replace(/\&#1097;/,"shtsh"); }}
  }
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1097;/,"schtsch"); } else { ww = ww.replace(/\&#1097;/,"shtsh"); }

  if (sprache=="bulgarisch") {  ww = ww.replace(/\&#1098;/,"a");  }
  else {                        ww = ww.replace(/\&#1098;/,"-");  }

  ww = ww.replace(/\&#1099;/,"y");  
  ww = ww.replace(/\&#1100;/,"y");
  ww = ww.replace(/\&#1101;/,"e");
  ww = ww.replace(/\&#1102;/,"ju");
  ww = ww.replace(/\&#1103;/,"ja");
  
  ww = ww.replace(/\&#1104;/,String.fromCharCode(232));
  ww = ww.replace(/\&#1105;/,"jo");
  ww = ww.replace(/\&euml;/,"jo");
  ww = ww.replace(/\&Euml;/,"Jo");


  ww = ww.replace(/\&#1106;/,"d'");
  ww = ww.replace(/\&#1108;/,"je");
  ww = ww.replace(/\&#1110;/,"i");
  ww = ww.replace(/\&#1111;/,"yi");
  ww = ww.replace(/\&#1112;/,"y");
  ww = ww.replace(/\&#1113;/,"ly");
  ww = ww.replace(/\&#1114;/,"ny");
  if (unterrichtssprache=="deutsch") { ww = ww.replace(/\&#1115;/,"tsch"); } else { ww = ww.replace(/\&#1115;/,"tsh"); }
  
  ww = ww.replace(/\&#1118;/,"u");
  ww = ww.replace(/\&#1119;/,"dy");

  ww = ww.replace(/\&#1168;/,"G");
  ww = ww.replace(/\&#1169;/,"g");

  ww = ww.replace(/\&#1170;/,"Gh");
  ww = ww.replace(/\&#1171;/,"gh");

  ww = ww.replace(/\&#1178;/,"Q");
  ww = ww.replace(/\&#1179;/,"q");

  ww = ww.replace(/\&#1186;/,"Ng");
  ww = ww.replace(/\&#1187;/,"ng");

  ww = ww.replace(/\&#1198;/,"U");
  ww = ww.replace(/\&#1199;/,"u");

  ww = ww.replace(/\&#1200;/,"U");
  ww = ww.replace(/\&#1201;/,"u");

  ww = ww.replace(/\&#1210;/,"H");
  ww = ww.replace(/\&#1211;/,"h");

  ww = ww.replace(/\&#1240;/,"Ä");
  ww = ww.replace(/\&#1241;/,"ä");

  if (sprache=="kasachisch") {
   ww = ww.replace(/\&#1256;/,"Ö");
   ww = ww.replace(/\&#1257;/,"ö");
  }
  else {
   ww = ww.replace(/\&#1256;/,"U");
   ww = ww.replace(/\&#1257;/,"u");
  }

  
 }


  if (sprache=="serbisch") {
  
  ww = ww.replace(/\&#1026;/,String.fromCharCode(272));
  ww = ww.replace(/\&#1032;/,"J");
  ww = ww.replace(/\&#1033;/,"Lj");
  ww = ww.replace(/\&#1034;/,"Nj");
  ww = ww.replace(/\&#1035;/,String.fromCharCode(262));
  ww = ww.replace(/\&#1039;/,"D"+String.fromCharCode(382));

  ww = ww.replace(/\&#1040;/,"A");
  ww = ww.replace(/\&#1041;/,"B");
  ww = ww.replace(/\&#1042;/,"V");
  ww = ww.replace(/\&#1043;/,"G");
  ww = ww.replace(/\&#1044;/,"D");
  ww = ww.replace(/\&#1045;/,"E");
  ww = ww.replace(/\&#1046;/,String.fromCharCode(381));
  ww = ww.replace(/\&#1047;/,"Z");
  ww = ww.replace(/\&#1048;/,"I");
  ww = ww.replace(/\&#1049;/,"J");
  ww = ww.replace(/\&#1050;/,"K");
  ww = ww.replace(/\&#1051;/,"L");
  ww = ww.replace(/\&#1052;/,"M");
  ww = ww.replace(/\&#1053;/,"N");
  ww = ww.replace(/\&#1054;/,"O");
  ww = ww.replace(/\&#1055;/,"P");
  
  ww = ww.replace(/\&#1056;/,"R");
  ww = ww.replace(/\&#1057;/,"S");
  ww = ww.replace(/\&#1058;/,"T");
  ww = ww.replace(/\&#1059;/,"U");
  ww = ww.replace(/\&#1060;/,"F");
  ww = ww.replace(/\&#1061;/,"H");
  ww = ww.replace(/\&#1062;/,"C");
  ww = ww.replace(/\&#1063;/,String.fromCharCode(381));
  ww = ww.replace(/\&#1064;/,String.fromCharCode(352));
  ww = ww.replace(/\&#1065;/,"Schtsch");
  ww = ww.replace(/\&#1066;/,"-");
  ww = ww.replace(/\&#1067;/,"I");
  ww = ww.replace(/\&#1068;/,"");
  ww = ww.replace(/\&#1069;/,"S");
  ww = ww.replace(/\&#1070;/,"Yu");
  ww = ww.replace(/\&#1071;/,"Ya");
  
  ww = ww.replace(/\&#1072;/,"a");
  ww = ww.replace(/\&#1073;/,"b");
  ww = ww.replace(/\&#1074;/,"v");
  ww = ww.replace(/\&#1075;/,"g");
  ww = ww.replace(/\&#1076;/,"d");
  ww = ww.replace(/\&#1077;/,"e");
  ww = ww.replace(/\&#1078;/,String.fromCharCode(382));
  ww = ww.replace(/\&#1079;/,"z");
  ww = ww.replace(/\&#1080;/,"i");
  ww = ww.replace(/\&#1081;/,"j");
  ww = ww.replace(/\&#1082;/,"k");
  ww = ww.replace(/\&#1083;/,"l");
  ww = ww.replace(/\&#1084;/,"m");
  ww = ww.replace(/\&#1085;/,"n");
  ww = ww.replace(/\&#1086;/,"o");
  ww = ww.replace(/\&#1087;/,"p");
  
  
  ww = ww.replace(/\&#1088;/,"r");
  ww = ww.replace(/\&#1089;/,"s");
  ww = ww.replace(/\&#1090;/,"t");
  ww = ww.replace(/\&#1091;/,"u");
  ww = ww.replace(/\&#1092;/,"f");
  ww = ww.replace(/\&#1093;/,"h");
  ww = ww.replace(/\&#1094;/,"c");
  ww = ww.replace(/\&#1095;/,String.fromCharCode(269));
  ww = ww.replace(/\&#1096;/,String.fromCharCode(353));
  ww = ww.replace(/\&#1097;/,"schtsch");
  ww = ww.replace(/\&#1098;/,"-");
  ww = ww.replace(/\&#1099;/,"i");  
  ww = ww.replace(/\&#1100;/,"");
  ww = ww.replace(/\&#1101;/,"e");
  ww = ww.replace(/\&#1102;/,"yu");
  ww = ww.replace(/\&#1103;/,"ya");
  
  ww = ww.replace(/\&#1104;/,String.fromCharCode(232));
  ww = ww.replace(/\&#1105;/,"e");
  ww = ww.replace(/\&#1106;/,String.fromCharCode(273));
  ww = ww.replace(/\&#1112;/,"j");
  ww = ww.replace(/\&#1113;/,"lj");
  ww = ww.replace(/\&#1114;/,"nj");
  ww = ww.replace(/\&#1115;/,String.fromCharCode(263));
  ww = ww.replace(/\&#1119;/,"d"+String.fromCharCode(382));
  
 }

if (sprache=="hebraeisch") {
  ww = ww.replace(/\&#1425;/,"(1425)");
  ww = ww.replace(/\&#1426;/,"(1426)");
  ww = ww.replace(/\&#1427;/,"(1427)");
  ww = ww.replace(/\&#1428;/,"(1428)");
  ww = ww.replace(/\&#1429;/,"(1429)");
  ww = ww.replace(/\&#1430;/,"(1430)");
  ww = ww.replace(/\&#1431;/,"(1431)");
  ww = ww.replace(/\&#1432;/,"(1432)");
  ww = ww.replace(/\&#1433;/,"(1433)");
  ww = ww.replace(/\&#1434;/,"(1434)");
  ww = ww.replace(/\&#1435;/,"(1435)");
  ww = ww.replace(/\&#1436;/,"(1436)");
  ww = ww.replace(/\&#1437;/,"(1437)");
  ww = ww.replace(/\&#1438;/,"(1438)");
  ww = ww.replace(/\&#1439;/,"(1439)");
  ww = ww.replace(/\&#1440;/,"(1440)");
  ww = ww.replace(/\&#1441;/,"(1441)");
  ww = ww.replace(/\&#1442;/,"(1442)");
  ww = ww.replace(/\&#1443;/,"(1443)");
  ww = ww.replace(/\&#1444;/,"(1444)");
  ww = ww.replace(/\&#1445;/,"(1445)");
  ww = ww.replace(/\&#1446;/,"(1446)");
  ww = ww.replace(/\&#1447;/,"(1447)");
  ww = ww.replace(/\&#1448;/,"(1448)");
  ww = ww.replace(/\&#1449;/,"(1449)");
  ww = ww.replace(/\&#1450;/,"(1450)");
  ww = ww.replace(/\&#1451;/,"(1451)");
  ww = ww.replace(/\&#1452;/,"(1452)");
  ww = ww.replace(/\&#1453;/,"(1453)");
  ww = ww.replace(/\&#1454;/,"(1454)");
  ww = ww.replace(/\&#1455;/,"(1455)");
  ww = ww.replace(/\&#1456;/,"(1456)");
  ww = ww.replace(/\&#1457;/,"(1457)");
  ww = ww.replace(/\&#1458;/,"(1458)");
  ww = ww.replace(/\&#1459;/,"(1459)");
  ww = ww.replace(/\&#1460;/,"(1460)");
  ww = ww.replace(/\&#1461;/,"(1461)");
  ww = ww.replace(/\&#1462;/,"(1462)");
  ww = ww.replace(/\&#1463;/,"(1463)");
  ww = ww.replace(/\&#1464;/,"(1464)");
  ww = ww.replace(/\&#1465;/,"(1465)");
  ww = ww.replace(/\&#1466;/,"(1466)");
  ww = ww.replace(/\&#1467;/,"(1467)");
  ww = ww.replace(/\&#1468;/,"(1468)");
  ww = ww.replace(/\&#1469;/,"(1469)");
  ww = ww.replace(/\&#1470;/,"(1470)");
  ww = ww.replace(/\&#1471;/,"(1471)");
  ww = ww.replace(/\&#1472;/,"(1472)");
  ww = ww.replace(/\&#1473;/,"(1473)");
  ww = ww.replace(/\&#1474;/,"(1474)");
  ww = ww.replace(/\&#1475;/,"(1475)");
  ww = ww.replace(/\&#1476;/,"(1476)");
  ww = ww.replace(/\&#1477;/,"(1477)");
  ww = ww.replace(/\&#1478;/,"(1478)");
  ww = ww.replace(/\&#1479;/,"(1479)");
  ww = ww.replace(/\&#1480;/,"(1480)");
  ww = ww.replace(/\&#1481;/,"(1481)");
  ww = ww.replace(/\&#1482;/,"(1482)");
  ww = ww.replace(/\&#1483;/,"(1483)");
  ww = ww.replace(/\&#1484;/,"(1484)");
  ww = ww.replace(/\&#1485;/,"(1485)");
  ww = ww.replace(/\&#1486;/,"(1486)");
  ww = ww.replace(/\&#1487;/,"(1487)");
  ww = ww.replace(/\&#1488;/,"a");
  ww = ww.replace(/\&#1489;/,"v");
  ww = ww.replace(/\&#1490;/,"g");
  ww = ww.replace(/\&#1491;/,"d");
  ww = ww.replace(/\&#1492;/,"H");
  ww = ww.replace(/\&#1493;/,"u");
  ww = ww.replace(/\&#1494;/,"z");
  ww = ww.replace(/\&#1495;/,"kh");
  ww = ww.replace(/\&#1496;/,"t");
  ww = ww.replace(/\&#1497;/,"y");
  ww = ww.replace(/\&#1498;/,"k");
  ww = ww.replace(/\&#1499;/,"k");
  ww = ww.replace(/\&#1500;/,"l");
  ww = ww.replace(/\&#1501;/,"m");
  ww = ww.replace(/\&#1502;/,"m");
  ww = ww.replace(/\&#1503;/,"n");
  ww = ww.replace(/\&#1504;/,"n");
  ww = ww.replace(/\&#1505;/,"s");
  ww = ww.replace(/\&#1506;/,"a");
  ww = ww.replace(/\&#1507;/,"p");
  ww = ww.replace(/\&#1508;/,"p");
  ww = ww.replace(/\&#1509;/,"ts");
  ww = ww.replace(/\&#1510;/,"ts");

  ww = ww.replace(/\&#1511;/,"q");
  ww = ww.replace(/\&#1512;/,"r");
  ww = ww.replace(/\&#1513;/,"sh");
  ww = ww.replace(/\&#1514;/,"t");

  ww = ww.replace(/\&#1515;/,"(1515)");
  ww = ww.replace(/\&#1516;/,"(1516)");
  ww = ww.replace(/\&#1517;/,"(1517)");
  ww = ww.replace(/\&#1518;/,"(1518)");
  ww = ww.replace(/\&#1519;/,"(1519)");
  ww = ww.replace(/\&#1520;/,"(1520)");
  ww = ww.replace(/\&#1521;/,"(1521)");
  ww = ww.replace(/\&#1522;/,"(1522)");
  ww = ww.replace(/\&#1523;/,"(1523)");
  ww = ww.replace(/\&#1524;/,"(1524)");
}

if (sprache=="arabisch" || sprache=="persisch" || sprache=="ägyptisch" || sprache=="aegyptisch" || sprache=="tunesisch" || sprache=="marokkanisch" || sprache=="urdu" || sprache=="wolof" || sprache=="libanesisch" || sprache=="syrisch") {

  ww = ww.replace(/\&#1548;/,","); 

  ww = ww.replace(/\&#1567;/,"?");  
  ww = ww.replace(/\&#1569;/,"h");
  ww = ww.replace(/\&#1570;/,"o");
  ww = ww.replace(/\&#1571;/,"e");
  ww = ww.replace(/\&#1572;/,"W");
  ww = ww.replace(/\&#1573;/,"e");
  ww = ww.replace(/\&#1574;/,"e");
  ww = ww.replace(/\&#1575;/,"a");
  ww = ww.replace(/\&#1576;/,"b");
  ww = ww.replace(/\&#1577;/,"a");
  ww = ww.replace(/\&#1578;/,"t");
  ww = ww.replace(/\&#1579;/,"them");
  ww = ww.replace(/\&#1580;/,"j");
  ww = ww.replace(/\&#1581;/,"h");
  ww = ww.replace(/\&#1582;/,"kh");
  ww = ww.replace(/\&#1583;/,"d");
  ww = ww.replace(/\&#1584;/,"th");
  ww = ww.replace(/\&#1585;/,"r");
  ww = ww.replace(/\&#1586;/,"z");
  ww = ww.replace(/\&#1587;/,"s");
  ww = ww.replace(/\&#1588;/,"sh");
  ww = ww.replace(/\&#1589;/,"s");
  ww = ww.replace(/\&#1590;/,"d");
  ww = ww.replace(/\&#1591;/,"t");
  ww = ww.replace(/\&#1592;/,"z");
  ww = ww.replace(/\&#1593;/,"ai");
  ww = ww.replace(/\&#1594;/,"gh");
  ww = ww.replace(/\&#1600;/,"-");
  ww = ww.replace(/\&#1601;/,"f");
  ww = ww.replace(/\&#1602;/,"q");
  ww = ww.replace(/\&#1603;/,"k");
  ww = ww.replace(/\&#1604;/,"l");
  ww = ww.replace(/\&#1605;/,"m");
  ww = ww.replace(/\&#1606;/,"n");
  ww = ww.replace(/\&#1607;/,"h");
  ww = ww.replace(/\&#1608;/,"w");
  ww = ww.replace(/\&#1609;/,"a");
  ww = ww.replace(/\&#1610;/,"y");
  ww = ww.replace(/\&#1611;/,"(1611)");
  ww = ww.replace(/\&#1612;/,"(1612)");
  ww = ww.replace(/\&#1613;/,"(1613)");
  ww = ww.replace(/\&#1614;/,"(1614)");
  ww = ww.replace(/\&#1615;/,"");
  ww = ww.replace(/\&#1616;/,"(1616)");
  ww = ww.replace(/\&#1617;/,"");
  ww = ww.replace(/\&#1618;/,"(1618)");
  ww = ww.replace(/\&#1619;/,"(1619)");
  ww = ww.replace(/\&#1620;/,"(1620)");
  ww = ww.replace(/\&#1621;/,"(1621)");
  ww = ww.replace(/\&#1622;/,"(1622)");
  ww = ww.replace(/\&#1623;/,"(1623)");
  ww = ww.replace(/\&#1624;/,"(1624)");
  ww = ww.replace(/\&#1625;/,"(1625)");
  ww = ww.replace(/\&#1626;/,"(1626)");
  ww = ww.replace(/\&#1627;/,"(1627)");
  ww = ww.replace(/\&#1628;/,"(1628)");
  ww = ww.replace(/\&#1629;/,"(1629)");
  ww = ww.replace(/\&#1630;/,"(1630)");
  ww = ww.replace(/\&#1631;/,"(1631)");
  ww = ww.replace(/\&#1632;/,"0");
  ww = ww.replace(/\&#1633;/,"1");
  ww = ww.replace(/\&#1634;/,"2");
  ww = ww.replace(/\&#1635;/,"3");
  ww = ww.replace(/\&#1636;/,"4");
  ww = ww.replace(/\&#1637;/,"5");
  ww = ww.replace(/\&#1638;/,"6");
  ww = ww.replace(/\&#1639;/,"7");
  ww = ww.replace(/\&#1640;/,"8");
  ww = ww.replace(/\&#1641;/,"9");
  ww = ww.replace(/\&#1642;/,"per cent");
  ww = ww.replace(/\&#1643;/,",");
  ww = ww.replace(/\&#1644;/,".");
  ww = ww.replace(/\&#1645;/,"*");
  ww = ww.replace(/\&#1646;/,"b");
  ww = ww.replace(/\&#1647;/,"q");
  ww = ww.replace(/\&#1648;/,"a");
  ww = ww.replace(/\&#1649;/,"aw");
  ww = ww.replace(/\&#1650;/,"(1650)");
  ww = ww.replace(/\&#1651;/,"(1651)");
  ww = ww.replace(/\&#1652;/,"high-hamza");
  ww = ww.replace(/\&#1653;/,"hamza-alef");
  ww = ww.replace(/\&#1654;/,"u");
  ww = ww.replace(/\&#1655;/,"hamza-yeh");
  ww = ww.replace(/\&#1656;/,"(1656)");
  ww = ww.replace(/\&#1657;/,"tt(urdu)");
  ww = ww.replace(/\&#1658;/,"(1658)");
  ww = ww.replace(/\&#1659;/,"(1659)");
  ww = ww.replace(/\&#1660;/,"(1660)");
  ww = ww.replace(/\&#1661;/,"(1661)");
  ww = ww.replace(/\&#1662;/,"p");
  ww = ww.replace(/\&#1663;/,"(1663)");
  ww = ww.replace(/\&#1664;/,"(1664)");
  ww = ww.replace(/\&#1665;/,"(1665)");
  ww = ww.replace(/\&#1666;/,"(1666)");
  ww = ww.replace(/\&#1667;/,"(1667)");
  ww = ww.replace(/\&#1668;/,"(1668)");
  ww = ww.replace(/\&#1669;/,"(1669)");
  ww = ww.replace(/\&#1670;/,"tsh");
  ww = ww.replace(/\&#1671;/,"(1671)");
  ww = ww.replace(/\&#1672;/,"dd");
  ww = ww.replace(/\&#1673;/,"(1673)");
  ww = ww.replace(/\&#1674;/,"(1674)");
  ww = ww.replace(/\&#1675;/,"(1675)");
  ww = ww.replace(/\&#1676;/,"(1676)");
  ww = ww.replace(/\&#1677;/,"(1677)");
  ww = ww.replace(/\&#1678;/,"(1678)");
  ww = ww.replace(/\&#1679;/,"(1679)");
  ww = ww.replace(/\&#1680;/,"(1680)");
  ww = ww.replace(/\&#1681;/,"rr");
  ww = ww.replace(/\&#1682;/,"reh-v");
  ww = ww.replace(/\&#1683;/,"(1683)");
  ww = ww.replace(/\&#1684;/,"(1684)");
  ww = ww.replace(/\&#1685;/,"(1685)");
  ww = ww.replace(/\&#1686;/,"(1686)");
  ww = ww.replace(/\&#1687;/,"(1687)");
  ww = ww.replace(/\&#1688;/,"j");
  ww = ww.replace(/\&#1689;/,"(1689)");
  ww = ww.replace(/\&#1690;/,"(1690)");
  ww = ww.replace(/\&#1691;/,"seen-with-three-dots");
  ww = ww.replace(/\&#1692;/,"SEEN");
  ww = ww.replace(/\&#1693;/,"(1693)");
  ww = ww.replace(/\&#1694;/,"(1694)");
  ww = ww.replace(/\&#1695;/,"(1695)");
  ww = ww.replace(/\&#1696;/,"(1696)");
  ww = ww.replace(/\&#1697;/,"(1697)");
  ww = ww.replace(/\&#1698;/,"f");
  ww = ww.replace(/\&#1699;/,"(1699)");
  ww = ww.replace(/\&#1700;/,"v");
  ww = ww.replace(/\&#1701;/,"f");
  ww = ww.replace(/\&#1702;/,"(1702)");
  ww = ww.replace(/\&#1703;/,"q");
  ww = ww.replace(/\&#1704;/,"q");
  ww = ww.replace(/\&#1705;/,"k");
  ww = ww.replace(/\&#1706;/,"(1706)");
  ww = ww.replace(/\&#1707;/,"(1707)");
  ww = ww.replace(/\&#1708;/,"(1708)");
  ww = ww.replace(/\&#1709;/,"(1709)");
  ww = ww.replace(/\&#1710;/,"(1710)");
  ww = ww.replace(/\&#1711;/,"g");
  ww = ww.replace(/\&#1712;/,"(1712)");
  ww = ww.replace(/\&#1713;/,"(1713)");
  ww = ww.replace(/\&#1714;/,"(1714)");
  ww = ww.replace(/\&#1715;/,"(1715)");
  ww = ww.replace(/\&#1716;/,"(1716)");
  ww = ww.replace(/\&#1717;/,"(1717)");
  ww = ww.replace(/\&#1718;/,"(1718)");
  ww = ww.replace(/\&#1719;/,"(1719)");
  ww = ww.replace(/\&#1720;/,"(1720)");
  ww = ww.replace(/\&#1721;/,"(1721)");
  ww = ww.replace(/\&#1722;/,"(1722)");
  ww = ww.replace(/\&#1723;/,"(1723)");
  ww = ww.replace(/\&#1724;/,"(1724)");
  ww = ww.replace(/\&#1725;/,"(1725)");
  ww = ww.replace(/\&#1726;/,"(1726)");
  ww = ww.replace(/\&#1727;/,"(1727)");
  ww = ww.replace(/\&#1728;/,"(1728)");
  ww = ww.replace(/\&#1729;/,"(1729)");
  ww = ww.replace(/\&#1730;/,"(1730)");
  ww = ww.replace(/\&#1731;/,"(1731)");
  ww = ww.replace(/\&#1732;/,"(1732)");
  ww = ww.replace(/\&#1733;/,"(1733)");
  ww = ww.replace(/\&#1734;/,"(1734)");
  ww = ww.replace(/\&#1735;/,"(1735)");
  ww = ww.replace(/\&#1736;/,"(1736)");
  ww = ww.replace(/\&#1737;/,"(1737)");
  ww = ww.replace(/\&#1738;/,"(1738)");
  ww = ww.replace(/\&#1739;/,"(1739)");
  ww = ww.replace(/\&#1740;/,"y");
  ww = ww.replace(/\&#1741;/,"(1741)");
  ww = ww.replace(/\&#1742;/,"(1742)");
  ww = ww.replace(/\&#1743;/,"(1743)");
  ww = ww.replace(/\&#1744;/,"(1744)");
  ww = ww.replace(/\&#1745;/,"(1745)");
  ww = ww.replace(/\&#1746;/,"(1746)");
  ww = ww.replace(/\&#1747;/,"(1747)");
  ww = ww.replace(/\&#1748;/,".");
  ww = ww.replace(/\&#1749;/,"(1749)");
  ww = ww.replace(/\&#1750;/,"(1750)");
  ww = ww.replace(/\&#1751;/,"(1751)");
  ww = ww.replace(/\&#1752;/,"(1752)");
  ww = ww.replace(/\&#1753;/,"(1753)");
  ww = ww.replace(/\&#1754;/,"(1754)");
  ww = ww.replace(/\&#1755;/,"(1755)");
  ww = ww.replace(/\&#1756;/,"(1756)");
  ww = ww.replace(/\&#1757;/,"(1757)");
  ww = ww.replace(/\&#1758;/,"(1758)");
  ww = ww.replace(/\&#1759;/,"(1759)");
  ww = ww.replace(/\&#1760;/,"(1760)");
  ww = ww.replace(/\&#1761;/,"(1761)");
  ww = ww.replace(/\&#1762;/,"(1762)");
  ww = ww.replace(/\&#1763;/,"(1763)");
  ww = ww.replace(/\&#1764;/,"(1764)");
  ww = ww.replace(/\&#1765;/,"(1765)");
  ww = ww.replace(/\&#1766;/,"(1766)");
  ww = ww.replace(/\&#1767;/,"(1767)");
  ww = ww.replace(/\&#1768;/,"(1768)");
  ww = ww.replace(/\&#1769;/,"(1769)");
  ww = ww.replace(/\&#1770;/,"(1770)");
  ww = ww.replace(/\&#1771;/,"(1771)");
  ww = ww.replace(/\&#1772;/,"(1772)");
  ww = ww.replace(/\&#1773;/,"(1773)");
  ww = ww.replace(/\&#1774;/,"(1774)");
  ww = ww.replace(/\&#1775;/,"(1775)");
  ww = ww.replace(/\&#1776;/,"(1776)");
  ww = ww.replace(/\&#1777;/,"(1777)");
  ww = ww.replace(/\&#1778;/,"(1778)");
  ww = ww.replace(/\&#1779;/,"(1779)");
  ww = ww.replace(/\&#1780;/,"(1780)");
  ww = ww.replace(/\&#1781;/,"(1781)");
  ww = ww.replace(/\&#1782;/,"(1782)");
  ww = ww.replace(/\&#1783;/,"(1783)");
  ww = ww.replace(/\&#1784;/,"(1784)");
  ww = ww.replace(/\&#1785;/,"(1785)");
  ww = ww.replace(/\&#1786;/,"(1786)");
  ww = ww.replace(/\&#1787;/,"(1787)");
  ww = ww.replace(/\&#1788;/,"(1788)");
  ww = ww.replace(/\&#1789;/,"(1789)");
  ww = ww.replace(/\&#1790;/,"(1790)");
  ww = ww.replace(/\&#1791;/,"(1791)");
  ww = ww.replace(/\&#1792;/,"(1792)");
  ww = ww.replace(/\&#1793;/,"(1793)");
  ww = ww.replace(/\&#1794;/,"(1794)");
  ww = ww.replace(/\&#1795;/,"(1795)");
  ww = ww.replace(/\&#1796;/,"(1796)");
  ww = ww.replace(/\&#1797;/,"(1797)");
  ww = ww.replace(/\&#1798;/,"(1798)");
  ww = ww.replace(/\&#1799;/,"(1799)");
  ww = ww.replace(/\&#1800;/,"(1800)");
  ww = ww.replace(/\&#1801;/,"(1801)");
  ww = ww.replace(/\&#1802;/,"(1802)");
  ww = ww.replace(/\&#1803;/,"(1803)");

}

 
 if (sprache=="griechisch") {
  
ww = ww.replace(String.fromCharCode(940),String.fromCharCode(225));
ww = ww.replace(String.fromCharCode(941),String.fromCharCode(233));
ww = ww.replace(String.fromCharCode(943),String.fromCharCode(237));
ww = ww.replace(String.fromCharCode(972),String.fromCharCode(243));
ww = ww.replace(String.fromCharCode(973),String.fromCharCode(237));
ww = ww.replace(String.fromCharCode(974),String.fromCharCode(243));

ww = ww.replace(String.fromCharCode(945)+""+String.fromCharCode(953),String.fromCharCode(228));
ww = ww.replace(String.fromCharCode(949)+""+String.fromCharCode(953),"i");
ww = ww.replace(String.fromCharCode(959)+""+String.fromCharCode(953),"i");
ww = ww.replace(String.fromCharCode(965)+""+String.fromCharCode(953),"i");
ww = ww.replace(String.fromCharCode(945)+""+String.fromCharCode(965),"aw");
ww = ww.replace(String.fromCharCode(949)+""+String.fromCharCode(965),String.fromCharCode(228)+"w");
ww = ww.replace(String.fromCharCode(959)+""+String.fromCharCode(965),"u");
ww = ww.replace(String.fromCharCode(947)+""+String.fromCharCode(947),"ng");
ww = ww.replace(String.fromCharCode(947)+""+String.fromCharCode(954),"ng");
ww = ww.replace(String.fromCharCode(947)+""+String.fromCharCode(958),"ngx");
ww = ww.replace(String.fromCharCode(947)+""+String.fromCharCode(967),"ngch");
ww = ww.replace(String.fromCharCode(956)+""+String.fromCharCode(960),"mb");
ww = ww.replace(String.fromCharCode(957)+""+String.fromCharCode(964),"nd");
ww = ww.replace(String.fromCharCode(964)+""+String.fromCharCode(950),"ds");


ww = ww.replace(String.fromCharCode(913),"A");
ww = ww.replace(String.fromCharCode(945),"a");
ww = ww.replace(String.fromCharCode(914),"W");
ww = ww.replace(String.fromCharCode(946),"w");
ww = ww.replace(String.fromCharCode(915),"J");
ww = ww.replace(String.fromCharCode(947),"j");
ww = ww.replace(String.fromCharCode(916),"Th");
ww = ww.replace(String.fromCharCode(948),"th");
ww = ww.replace(String.fromCharCode(917),String.fromCharCode(196));
ww = ww.replace(String.fromCharCode(949),String.fromCharCode(228));
ww = ww.replace(String.fromCharCode(918),"S");
ww = ww.replace(String.fromCharCode(950),"s");
ww = ww.replace(String.fromCharCode(919),"I");
ww = ww.replace(String.fromCharCode(951),"i");
ww = ww.replace(String.fromCharCode(920),"Th");
ww = ww.replace(String.fromCharCode(952),"th");
ww = ww.replace(String.fromCharCode(921),"I");
ww = ww.replace(String.fromCharCode(953),"i");
ww = ww.replace(String.fromCharCode(922),"K");
ww = ww.replace(String.fromCharCode(954),"k");
ww = ww.replace(String.fromCharCode(923),"L");
ww = ww.replace(String.fromCharCode(955),"l");
ww = ww.replace(String.fromCharCode(924),"M");
ww = ww.replace(String.fromCharCode(956),"m");
ww = ww.replace(String.fromCharCode(925),"N");
ww = ww.replace(String.fromCharCode(957),"n");
ww = ww.replace(String.fromCharCode(926),"X");
ww = ww.replace(String.fromCharCode(958),"x");
ww = ww.replace(String.fromCharCode(927),"O");
ww = ww.replace(String.fromCharCode(959),"o");
ww = ww.replace(String.fromCharCode(928),"P");
ww = ww.replace(String.fromCharCode(960),"p");
ww = ww.replace(String.fromCharCode(929),"R");
ww = ww.replace(String.fromCharCode(961),"r");
ww = ww.replace(String.fromCharCode(931),"S");
ww = ww.replace(String.fromCharCode(963),"s");
ww = ww.replace(String.fromCharCode(932),"T");
ww = ww.replace(String.fromCharCode(964),"t");
ww = ww.replace(String.fromCharCode(933),"I");
ww = ww.replace(String.fromCharCode(965),"i");
ww = ww.replace(String.fromCharCode(934),"F");
ww = ww.replace(String.fromCharCode(966),"f");
ww = ww.replace(String.fromCharCode(935),"ch");
ww = ww.replace(String.fromCharCode(967),"ch");
ww = ww.replace(String.fromCharCode(936),"Ps");
ww = ww.replace(String.fromCharCode(968),"ps");
ww = ww.replace(String.fromCharCode(937),"O");
ww = ww.replace(String.fromCharCode(969),"o");

ww = ww.replace(String.fromCharCode(940),String.fromCharCode(225));
ww = ww.replace(String.fromCharCode(941),String.fromCharCode(233));
ww = ww.replace(String.fromCharCode(942),String.fromCharCode(237));
ww = ww.replace(String.fromCharCode(943),String.fromCharCode(237));
ww = ww.replace(String.fromCharCode(970),"i");
ww = ww.replace(String.fromCharCode(971),String.fromCharCode(237));
ww = ww.replace(String.fromCharCode(972),String.fromCharCode(243));
ww = ww.replace(String.fromCharCode(973),String.fromCharCode(237));
ww = ww.replace(String.fromCharCode(974),String.fromCharCode(243));
ww = ww.replace(String.fromCharCode(962),"s");

ww = ww.replace(String.fromCharCode(900),"'");
ww = ww.replace(String.fromCharCode(902),String.fromCharCode(193));
ww = ww.replace(String.fromCharCode(904),String.fromCharCode(201));
ww = ww.replace(String.fromCharCode(905),String.fromCharCode(205));
ww = ww.replace(String.fromCharCode(906),String.fromCharCode(205));
ww = ww.replace(String.fromCharCode(904),String.fromCharCode(211));
ww = ww.replace(String.fromCharCode(908),String.fromCharCode(211));
ww = ww.replace(String.fromCharCode(910),String.fromCharCode(205));
ww = ww.replace(String.fromCharCode(911),String.fromCharCode(211));

ww = ww.replace(String.fromCharCode(894),"?"); 


ww = ww.replace(/\&alpha;\&iota;/,String.fromCharCode(228));
ww = ww.replace(/\&epsilon;\&iota;/,"i");
ww = ww.replace(/\&omicron;\&iota;/,"i");
ww = ww.replace(/\&upsilon;\&iota;/,"i");
ww = ww.replace(/\&alpha;\&upsilon;/,"aw");
ww = ww.replace(/\&epsilon;\&upsilon;/,String.fromCharCode(228)+"w");
ww = ww.replace(/\&omicron;\&upsilon;/,"u");
ww = ww.replace(/\&gamma;\&gamma;/,"ng");
ww = ww.replace(/\&gamma;\&kappa;/,"ng");
ww = ww.replace(/\&gamma;\&xi;/,"ngx");
ww = ww.replace(/\&gamma;\&chi;/,"ngch");
ww = ww.replace(/\&mu;\&pi;/,"mb");
ww = ww.replace(/\&nu;\&tau;/,"nd");
ww = ww.replace(/\&tau;\&zeta;/,"ds");

ww = ww.replace(/\&Alpha;/,"A");
ww = ww.replace(/\&alpha;/,"a");
ww = ww.replace(/\&Beta;/,"W");
ww = ww.replace(/\&beta;/,"w");
ww = ww.replace(/\&Gamma;/,"J");
ww = ww.replace(/\&gamma;/,"j");
ww = ww.replace(/\&Delta;/,"Th");
ww = ww.replace(/\&delta;/,"th");
ww = ww.replace(/\&Epsilon;/,String.fromCharCode(196));
ww = ww.replace(/\&epsilon;/,String.fromCharCode(228));
ww = ww.replace(/\&Zeta;/,"S");
ww = ww.replace(/\&zeta;/,"s");
ww = ww.replace(/\&Eta;/,"I");
ww = ww.replace(/\&eta;/,"i");
ww = ww.replace(/\&Theta;/,"Th");
ww = ww.replace(/\&theta;/,"th");
ww = ww.replace(/\&thetasym;/,"th");
ww = ww.replace(/\&Iota;/,"I");
ww = ww.replace(/\&iota;/,"i");
ww = ww.replace(/\&Kappa;/,"K");
ww = ww.replace(/\&kappa;/,"k");
ww = ww.replace(/\&Lambda;/,"L");
ww = ww.replace(/\&lambda;/,"l");
ww = ww.replace(/\&Mu;/,"M");
ww = ww.replace(/\&mu;/,"m");
ww = ww.replace(/\&Nu;/,"N");
ww = ww.replace(/\&nu;/,"n");
ww = ww.replace(/\&Xi;/,"X");
ww = ww.replace(/\&xi;/,"x");
ww = ww.replace(/\&Omicron;/,"O");
ww = ww.replace(/\&omicron;/,"o");
ww = ww.replace(/\&Pi;/,"P");
ww = ww.replace(/\&pi;/,"p");
ww = ww.replace(/\&Rho;/,"R");
ww = ww.replace(/\&rho;/,"r");
ww = ww.replace(/\&Sigma;/,"S");
ww = ww.replace(/\&sigma;/,"s");
ww = ww.replace(/\&Tau;/,"T");
ww = ww.replace(/\&tau;/,"t");
ww = ww.replace(/\&Upsilon;/,"I");
ww = ww.replace(/\&upsilon;/,"i");
ww = ww.replace(/\&Phi;/,"F");
ww = ww.replace(/\&phi;/,"f");
ww = ww.replace(/\&Chi;/,"Ch");
ww = ww.replace(/\&chi;/,"ch");
ww = ww.replace(/\&Psi;/,"Ps");
ww = ww.replace(/\&psi;/,"ps");
ww = ww.replace(/\&Omega;/,"O");
ww = ww.replace(/\&omega;/,"o");
ww = ww.replace(/\&rsquo;/,"'");

ww = ww.replace(/\&#940;/,String.fromCharCode(225));
ww = ww.replace(/\&#941;/,String.fromCharCode(233));
ww = ww.replace(/\&#943;/,String.fromCharCode(237));
ww = ww.replace(/\&#972;/,String.fromCharCode(243));
ww = ww.replace(/\&#973;/,String.fromCharCode(237));
ww = ww.replace(/\&#974;/,String.fromCharCode(243));
ww = ww.replace(/\&sigmaf;/,"s");

ww = ww.replace(/\&#945;\&#953;/,String.fromCharCode(228));
ww = ww.replace(/\&#949;\&#953;/,"i");
ww = ww.replace(/\&#959;\&#953;/,"i");
ww = ww.replace(/\&#965;\&#953;/,"i");
ww = ww.replace(/\&#945;\&#965;/,"aw");
ww = ww.replace(/\&#949;\&#965;/,String.fromCharCode(228)+"w");
ww = ww.replace(/\&#959;\&#965;/,"u");
ww = ww.replace(/\&#947;\&#947;/,"ng");
ww = ww.replace(/\&#947;\&#954;/,"ng");
ww = ww.replace(/\&#947;\&#958;/,"ngx");
ww = ww.replace(/\&#947;\&#967;/,"ngch");
ww = ww.replace(/\&#956;\&#960;/,"mb");
ww = ww.replace(/\&#957;\&#964;/,"nd");
ww = ww.replace(/\&#964;\&#950;/,"ds");

ww = ww.replace(/\&#913;/,"A");
ww = ww.replace(/\&#945;/,"a");
ww = ww.replace(/\&#914;/,"W");
ww = ww.replace(/\&#946;/,"w");
ww = ww.replace(/\&#915;/,"J");
ww = ww.replace(/\&#947;/,"j");
ww = ww.replace(/\&#916;/,"Th");
ww = ww.replace(/\&#948;/,"th");
ww = ww.replace(/\&#917;/,String.fromCharCode(196));
ww = ww.replace(/\&#949;/,String.fromCharCode(228));
ww = ww.replace(/\&#918;/,"S");
ww = ww.replace(/\&#950;/,"s");
ww = ww.replace(/\&#919;/,"I");
ww = ww.replace(/\&#951;/,"i");
ww = ww.replace(/\&#920;/,"Th");
ww = ww.replace(/\&#952;/,"th");
ww = ww.replace(/\&#921;/,"I");
ww = ww.replace(/\&#953;/,"i");
ww = ww.replace(/\&#922;/,"K");
ww = ww.replace(/\&#954;/,"k");
ww = ww.replace(/\&#923;/,"L");
ww = ww.replace(/\&#955;/,"l");
ww = ww.replace(/\&#924;/,"M");
ww = ww.replace(/\&#956;/,"m");
ww = ww.replace(/\&#925;/,"N");
ww = ww.replace(/\&#957;/,"n");
ww = ww.replace(/\&#926;/,"X");
ww = ww.replace(/\&#958;/,"x");
ww = ww.replace(/\&#927;/,"O");
ww = ww.replace(/\&#959;/,"o");
ww = ww.replace(/\&#928;/,"P");
ww = ww.replace(/\&#960;/,"p");
ww = ww.replace(/\&#929;/,"R");
ww = ww.replace(/\&#961;/,"r");
ww = ww.replace(/\&#931;/,"S");
ww = ww.replace(/\&#963;/,"s");
ww = ww.replace(/\&#932;/,"T");
ww = ww.replace(/\&#964;/,"t");
ww = ww.replace(/\&#933;/,"I");
ww = ww.replace(/\&#965;/,"i");
ww = ww.replace(/\&#934;/,"F");
ww = ww.replace(/\&#966;/,"f");
ww = ww.replace(/\&#935;/,"ch");
ww = ww.replace(/\&#967;/,"ch");
ww = ww.replace(/\&#936;/,"Ps");
ww = ww.replace(/\&#968;/,"ps");
ww = ww.replace(/\&#937;/,"O");
ww = ww.replace(/\&#969;/,"o");

ww = ww.replace(/\&#940;/,String.fromCharCode(225));
ww = ww.replace(/\&#941;/,String.fromCharCode(233));
ww = ww.replace(/\&#942;/,String.fromCharCode(237));
ww = ww.replace(/\&#943;/,String.fromCharCode(237));
ww = ww.replace(/\&#970;/,"i");
ww = ww.replace(/\&#971;/,String.fromCharCode(237));
ww = ww.replace(/\&#972;/,String.fromCharCode(243));
ww = ww.replace(/\&#973;/,String.fromCharCode(237));
ww = ww.replace(/\&#974;/,String.fromCharCode(243));
ww = ww.replace(/\&#962;/,"s");

ww = ww.replace(/\&#900;/,"'");
ww = ww.replace(/\&#902;/,String.fromCharCode(193));
ww = ww.replace(/\&#904;/,String.fromCharCode(201));
ww = ww.replace(/\&#905;/,String.fromCharCode(205));
ww = ww.replace(/\&#906;/,String.fromCharCode(205));
ww = ww.replace(/\&#904;/,String.fromCharCode(211));
ww = ww.replace(/\&#908;/,String.fromCharCode(211));
ww = ww.replace(/\&#910;/,String.fromCharCode(205));
ww = ww.replace(/\&#911;/,String.fromCharCode(211));

ww = ww.replace(/\&#894;/,"?");
}


if (sprache=="armenisch") {

ww = ww.replace(/\&#1329;/,"(AYB)");
ww = ww.replace(/\&#1330;/,"(BEN)");
ww = ww.replace(/\&#1331;/,"(GIM)");
ww = ww.replace(/\&#1332;/,"(DA)");
ww = ww.replace(/\&#1333;/,"(ECH)");
ww = ww.replace(/\&#1334;/,"(ZA)");
ww = ww.replace(/\&#1335;/,"(EH)");
ww = ww.replace(/\&#1336;/,"(ET)");
ww = ww.replace(/\&#1337;/,"(TO)");
ww = ww.replace(/\&#1338;/,"(ZHE)");
ww = ww.replace(/\&#1339;/,"(INI)");
ww = ww.replace(/\&#1340;/,"(LIWN)");
ww = ww.replace(/\&#1341;/,"(XEH)");
ww = ww.replace(/\&#1342;/,"(CA)");
ww = ww.replace(/\&#1343;/,"(KEN)");
ww = ww.replace(/\&#1344;/,"(HO)");
ww = ww.replace(/\&#1345;/,"(JA)");
ww = ww.replace(/\&#1346;/,"(GHAD)");
ww = ww.replace(/\&#1347;/,"(CHEH)");
ww = ww.replace(/\&#1348;/,"(MEN)");
ww = ww.replace(/\&#1349;/,"(YI)");
ww = ww.replace(/\&#1350;/,"(NOW)");
ww = ww.replace(/\&#1351;/,"(SHA)");
ww = ww.replace(/\&#1352;/,"(VO)");
ww = ww.replace(/\&#1353;/,"(CHA)");
ww = ww.replace(/\&#1354;/,"(PEH)");
ww = ww.replace(/\&#1355;/,"(JHEH)");
ww = ww.replace(/\&#1356;/,"(RA)");
ww = ww.replace(/\&#1357;/,"(SEH)");
ww = ww.replace(/\&#1358;/,"(VEW)");
ww = ww.replace(/\&#1359;/,"(TIWN)");
ww = ww.replace(/\&#1360;/,"(REH)");
ww = ww.replace(/\&#1361;/,"(CO)");
ww = ww.replace(/\&#1362;/,"(YIWN)");
ww = ww.replace(/\&#1363;/,"(PIWR)");
ww = ww.replace(/\&#1364;/,"(KEH)");
ww = ww.replace(/\&#1365;/,"(OH)");
ww = ww.replace(/\&#1366;/,"(FEH)");
ww = ww.replace(/\&#1367;/,"()");
ww = ww.replace(/\&#1368;/,"()");
ww = ww.replace(/\&#1369;/,"()");
ww = ww.replace(/\&#1370;/,"()");
ww = ww.replace(/\&#1371;/,"()");
ww = ww.replace(/\&#1372;/,"()");
ww = ww.replace(/\&#1373;/,"()");
ww = ww.replace(/\&#1374;/,"()");
ww = ww.replace(/\&#1375;/,"()");
ww = ww.replace(/\&#1376;/,"()");
ww = ww.replace(/\&#1377;/,"(ayb)");
ww = ww.replace(/\&#1378;/,"(ben)");
ww = ww.replace(/\&#1379;/,"(gim)");
ww = ww.replace(/\&#1380;/,"(da)");
ww = ww.replace(/\&#1381;/,"(ech)");
ww = ww.replace(/\&#1382;/,"(za)");
ww = ww.replace(/\&#1383;/,"(eh)");
ww = ww.replace(/\&#1384;/,"(et)");
ww = ww.replace(/\&#1385;/,"(to)");
ww = ww.replace(/\&#1386;/,"(zhe)");
ww = ww.replace(/\&#1387;/,"(ini)");
ww = ww.replace(/\&#1388;/,"(liwn)");
ww = ww.replace(/\&#1389;/,"(xeh)");
ww = ww.replace(/\&#1390;/,"(ca)");
ww = ww.replace(/\&#1391;/,"(ken)");
ww = ww.replace(/\&#1392;/,"(ho)");
ww = ww.replace(/\&#1393;/,"(ja)");
ww = ww.replace(/\&#1394;/,"(ghad)");
ww = ww.replace(/\&#1395;/,"(cheh)");
ww = ww.replace(/\&#1396;/,"(men)");
ww = ww.replace(/\&#1397;/,"(yi)");
ww = ww.replace(/\&#1398;/,"(now)");
ww = ww.replace(/\&#1399;/,"(sha)");
ww = ww.replace(/\&#1400;/,"(vo)");
ww = ww.replace(/\&#1401;/,"(cha)");
ww = ww.replace(/\&#1402;/,"(peh)");
ww = ww.replace(/\&#1403;/,"(jheh)");
ww = ww.replace(/\&#1404;/,"(ra)");
ww = ww.replace(/\&#1405;/,"(seh)");
ww = ww.replace(/\&#1406;/,"(vew)");
ww = ww.replace(/\&#1407;/,"(tiwn)");
ww = ww.replace(/\&#1408;/,"(reh)");
ww = ww.replace(/\&#1409;/,"(co)");
ww = ww.replace(/\&#1410;/,"(yiwn)");
ww = ww.replace(/\&#1411;/,"(piwr)");
ww = ww.replace(/\&#1412;/,"(keh)");
ww = ww.replace(/\&#1413;/,"(oh)");
ww = ww.replace(/\&#1414;/,"(feh)");
ww = ww.replace(/\&#1415;/,"(ech_yiwn)");
ww = ww.replace(/\&#1417;/,"(.)");
ww = ww.replace(/\&#1418;/,"(_)");

}

if (sprache=="thai") {

	if (durchgang==1) {
	
		ww = ww.replace(/\&#3648;\&#3586;\&#3637;\&#3656;\&#3618;/,"khia:");
		ww = ww.replace(/\&#3648;\&#3594;\&#3639;\&#3656;\&#3629;/,"chia"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3604;\&#3637;\&#3656;\&#3618;/,"dia"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3609;\&#3637;\&#3656;\&#3618;/,"nia"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3609;\&#3639;\&#3657;\&#3629;/,"nia"+String.fromCharCode(769));
		ww = ww.replace(/\&#3648;\&#3610;\&#3639;\&#3657;\&#3629;/,"bia"+String.fromCharCode(769));
		ww = ww.replace(/\&#3648;\&#3614;\&#3639;\&#3656;\&#3629;/,"phia"+String.fromCharCode(96));
		ww = ww.replace(/\&#3648;\&#3617;\&#3639;\&#3656;\&#3629;/,"mia"+String.fromCharCode(96));
		ww = ww.replace(/\&#3648;\&#3618;\&#3637;\&#3656;\&#3618;/,"yia"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3621;\&#3637;\&#3657;\&#3618;/,"lia"+String.fromCharCode(769));
		ww = ww.replace(/\&#3648;\&#3626;\&#3639;\&#3657;\&#3629;/,"sü"+String.fromCharCode(769)+"a");

	}
	
	
	 if (durchgang==2) {

		ww = ww.replace(/\&#3605;\&#3633;\&#3659;\&#3623;/,"tu&#780;a");

		ww = ww.replace(/\&#3621;\&#3637;\&#3656;\&#3618;/,"lia"+String.fromCharCode(768));

		ww = ww.replace(/\&#3648;\&#3585;\&#3634;\&#3632;/,"k"+String.fromCharCode(596));
		ww = ww.replace(/\&#3648;\&#3585;\&#3637;\&#3618;/,"kia");
		ww = ww.replace(/\&#3648;\&#3585;\&#3656;\&#3634;/,"kao:");
		ww = ww.replace(/\&#3648;\&#3585;\&#3656;\&#3634;/,"khao"+String.fromCharCode(769));
		ww = ww.replace(/\&#3648;\&#3585;\&#3657;\&#3634;/,"kao"+String.fromCharCode(769));	
		ww = ww.replace(/\&#3648;\&#3586;\&#3637;\&#3618;/,"khia");
		ww = ww.replace(/\&#3648;\&#3586;\&#3657;\&#3634;/,"khao"+String.fromCharCode(769));
		ww = ww.replace(/\&#3648;\&#3588;\&#3634;\&#3632;/,"k"+String.fromCharCode(596));
		ww = ww.replace(/\&#3648;\&#3591;\&#3637;\&#3618;/,String.fromCharCode(331)+"ia");
		ww = ww.replace(/\&#3648;\&#3592;\&#3657;\&#3634;/,"cao"+String.fromCharCode(769));	
		ww = ww.replace(/\&#3648;\&#3594;\&#3656;\&#3634;/,"chao"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3594;\&#3657;\&#3634;/,"chao"+String.fromCharCode(769));
		ww = ww.replace(/\&#3648;\&#3595;\&#3637;\&#3618;/,"sia");
		ww = ww.replace(/\&#3648;\&#3604;\&#3637;\&#3618;/,"dia");
		ww = ww.replace(/\&#3648;\&#3604;\&#3639;\&#3629;/,"düa");
		ww = ww.replace(/\&#3648;\&#3605;\&#3637;\&#3618;/,"tia");
		ww = ww.replace(/\&#3648;\&#3607;\&#3637;\&#3618;/,"thia");
		ww = ww.replace(/\&#3648;\&#3607;\&#3637;\&#3656;/,"thia"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3607;\&#3656;\&#3634;/,"thao"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3607;\&#3657;\&#3634;/,"thao"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3610;\&#3637;\&#3618;/,"bia");
		ww = ww.replace(/\&#3648;\&#3611;\&#3637;\&#3618;/,"pia");	
		ww = ww.replace(/\&#3648;\&#3611;\&#3659;\&#3634;/,"páu");
		ww = ww.replace(/\&#3648;\&#3614;\&#3637;\&#3618;/,"phia");
		ww = ww.replace(/\&#3648;\&#3617;\&#3639;\&#3629;/,"mia");
		ww = ww.replace(/\&#3648;\&#3617;\&#3639;\&#3656;/,"mia"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3619;\&#3637;\&#3618;/,"ria");
		ww = ww.replace(/\&#3648;\&#3621;\&#3656;\&#3634;/,"lao"+String.fromCharCode(768));
		ww = ww.replace(/\&#3648;\&#3626;\&#3637;\&#3618;/,"sia");
		ww = ww.replace(/\&#3648;\&#3629;\&#3637;\&#3618;/,"?ia");	

		ww = ww.replace(/\&#3650;\&#3605;\&#3658;\&#3632;/,"to"+String.fromCharCode(770));
	
	}
	
	
	 if (durchgang==3) {

		ww = ww.replace(/\&#3605;\&#3633;\&#3623;/,"tua");	
		ww = ww.replace(/\&#3605;\&#3656;\&#3635;/,"tám");
	
		ww = ww.replace(/\&#3609;\&#3657;\&#3635;/,"nám");

		ww = ww.replace(/\&#3585;\&#3634;\&#3619;/,"kan");
		ww = ww.replace(/\&#3588;\&#3634;\&#3619;/,"khan");
		ww = ww.replace(/\&#3627;\&#3634;\&#3619;/,"han");

		ww = ww.replace(/\&#3648;\&#3585;\&#3634;/,"kao");
		ww = ww.replace(/\&#3648;\&#3585;\&#3636;/,"khe");
		ww = ww.replace(/\&#3648;\&#3586;\&#3634;/,"khao");
		ww = ww.replace(/\&#3648;\&#3586;\&#3655;/,"khe"+String.fromCharCode(771));
		ww = ww.replace(/\&#3648;\&#3588;\&#3634;/,"khao");
		ww = ww.replace(/\&#3648;\&#3591;\&#3636;/,""+String.fromCharCode(331)+String.fromCharCode(601));
		ww = ww.replace(/\&#3648;\&#3592;\&#3629;/,"c"+String.fromCharCode(601));
		ww = ww.replace(/\&#3648;\&#3594;\&#3629;/,"ch"+String.fromCharCode(601));
		ww = ww.replace(/\&#3648;\&#3604;\&#3634;/,"dao");
		ww = ww.replace(/\&#3648;\&#3604;\&#3636;/,"d"+String.fromCharCode(601));
		ww = ww.replace(/\&#3648;\&#3605;\&#3632;/,"te");
		ww = ww.replace(/\&#3648;\&#3605;\&#3634;/,"tao");
		ww = ww.replace(/\&#3648;\&#3607;\&#3629;/,"th"+String.fromCharCode(601));
		ww = ww.replace(/\&#3648;\&#3608;\&#3629;/,"th"+String.fromCharCode(601)+":");
		ww = ww.replace(/\&#3648;\&#3610;\&#3629;/,"b"+String.fromCharCode(601));
		ww = ww.replace(/\&#3648;\&#3610;\&#3634;/,"bao");
		ww = ww.replace(/\&#3648;\&#3611;\&#3659;/,"pau");
		ww = ww.replace(/\&#3648;\&#3618;\&#3629;/,"y"+String.fromCharCode(601)+":");
		ww = ww.replace(/\&#3648;\&#3619;\&#3634;/,"rao");
		ww = ww.replace(/\&#3648;\&#3619;\&#3637;/,"ria");
		ww = ww.replace(/\&#3648;\&#3621;\&#3636;/,"l"+String.fromCharCode(601));
		ww = ww.replace(/\&#3648;\&#3626;\&#3634;/,"sao");
		ww = ww.replace(/\&#3648;\&#3629;\&#3634;/,"?ao");

		ww = ww.replace(/\&#3649;\&#3585;\&#3632;/,"k"+String.fromCharCode(603));
		ww = ww.replace(/\&#3649;\&#3609;\&#3632;/,"n"+String.fromCharCode(603));
		ww = ww.replace(/\&#3649;\&#3621;\&#3632;/,"l"+String.fromCharCode(603));

		ww = ww.replace(/\&#3650;\&#3605;\&#3632;/,"to");
	
		ww = ww.replace(/\&#3651;\&#3627;\&#3617;/,"maih");
		ww = ww.replace(/\&#3651;\&#3585;\&#3621;/,"klai");
		ww = ww.replace(/\&#3651;\&#3588;\&#3619;/,"krai");

		ww = ww.replace(/\&#3652;\&#3585;\&#3621;/,"klai");
		ww = ww.replace(/\&#3652;\&#3585;\&#3656;/,"kai"+String.fromCharCode(96));
		ww = ww.replace(/\&#3652;\&#3607;\&#3618;/,"thai");
		ww = ww.replace(/\&#3652;\&#3627;\&#3609;/,"naih");
	}
	
	
	 if (durchgang==4) {
	
		ww = ww.replace(/\&#3585;\&#3635;/,"kam");	
		ww = ww.replace(/\&#3592;\&#3635;/,"cam");	
		ww = ww.replace(/\&#3604;\&#3635;/,"dam");		
		ww = ww.replace(/\&#3607;\&#3635;/,"tham");
		ww = ww.replace(/\&#3609;\&#3635;/,"am");
	
		ww = ww.replace(/\&#3634;\&#3632;/,""+String.fromCharCode(596));

		ww = ww.replace(/\&#3648;\&#3585;/,"ke");
		ww = ww.replace(/\&#3648;\&#3588;/,"ke");
		ww = ww.replace(/\&#3648;\&#3592;/,"ce");
		ww = ww.replace(/\&#3648;\&#3594;/,"che");
		ww = ww.replace(/\&#3648;\&#3595;/,"se");
		ww = ww.replace(/\&#3648;\&#3604;/,"de");
		ww = ww.replace(/\&#3648;\&#3605;/,"te");	
		ww = ww.replace(/\&#3648;\&#3608;/,"the");
		ww = ww.replace(/\&#3648;\&#3607;/,"the");
		ww = ww.replace(/\&#3648;\&#3609;/,"ne");
		ww = ww.replace(/\&#3648;\&#3610;/,"be");
		ww = ww.replace(/\&#3648;\&#3611;/,"pe");
		ww = ww.replace(/\&#3648;\&#3612;/,"phe");
		ww = ww.replace(/\&#3648;\&#3614;/,"phe");
		ww = ww.replace(/\&#3648;\&#3615;/,"fe");
		ww = ww.replace(/\&#3648;\&#3617;/,"me");
		ww = ww.replace(/\&#3648;\&#3618;/,"ye");
		ww = ww.replace(/\&#3648;\&#3619;/,"re");
		ww = ww.replace(/\&#3648;\&#3621;/,"le");
		ww = ww.replace(/\&#3648;\&#3623;/,"we");
		ww = ww.replace(/\&#3648;\&#3624;/,"se");
		ww = ww.replace(/\&#3648;\&#3626;/,"se");	
		ww = ww.replace(/\&#3648;\&#3627;/,"he");
		ww = ww.replace(/\&#3648;\&#3629;/,"?e");

		ww = ww.replace(/\&#3649;\&#3585;/,"k"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3586;/,"kh"+String.fromCharCode(230));	
		ww = ww.replace(/\&#3649;\&#3588;/,"kh"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3592;/,"c"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3595;/,"s"+String.fromCharCode(230));	
		ww = ww.replace(/\&#3649;\&#3604;/,"d"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3605;/,"t"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3607;/,"t"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3609;/,"n"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3610;/,"b"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3611;/,"p"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3612;/,"ph"+String.fromCharCode(230));	
		ww = ww.replace(/\&#3649;\&#3614;/,"ph"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3615;/,"f"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3617;/,"m"+String.fromCharCode(230));	
		ww = ww.replace(/\&#3649;\&#3618;/,"y"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3619;/,"r"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3621;/,"l"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3623;/,"w"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3626;/,"s"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3627;/,"h"+String.fromCharCode(230));	
		ww = ww.replace(/\&#3649;\&#3629;/,"?"+String.fromCharCode(230));
		ww = ww.replace(/\&#3649;\&#3630;/,"h"+String.fromCharCode(230));

		ww = ww.replace(/\&#3650;\&#3585;/,"ko");
		ww = ww.replace(/\&#3650;\&#3588;/,"kho");
		ww = ww.replace(/\&#3650;\&#3594;/,"cho");
		ww = ww.replace(/\&#3650;\&#3604;/,"do");
		ww = ww.replace(/\&#3650;\&#3605;/,"to");	
		ww = ww.replace(/\&#3650;\&#3607;/,"tho");
		ww = ww.replace(/\&#3650;\&#3609;/,"no");
		ww = ww.replace(/\&#3650;\&#3610;/,"bo");
		ww = ww.replace(/\&#3650;\&#3611;/,"po");
		ww = ww.replace(/\&#3650;\&#3612;/,"pho");
		ww = ww.replace(/\&#3650;\&#3614;/,"po");
		ww = ww.replace(/\&#3650;\&#3616;/,"pho");
		ww = ww.replace(/\&#3650;\&#3617;/,"mo");
		ww = ww.replace(/\&#3650;\&#3618;/,"yo");
		ww = ww.replace(/\&#3650;\&#3619;/,"ro");
		ww = ww.replace(/\&#3650;\&#3626;/,"so");
		ww = ww.replace(/\&#3650;\&#3629;/,"?o");

		ww = ww.replace(/\&#3651;\&#3592;/,"cai");
		ww = ww.replace(/\&#3651;\&#3594;/,"chai");
		ww = ww.replace(/\&#3651;\&#3604;/,"dai");	
		ww = ww.replace(/\&#3651;\&#3605;/,"tai");	
		ww = ww.replace(/\&#3651;\&#3609;/,"nai");		
		ww = ww.replace(/\&#3651;\&#3610;/,"bai");			
		ww = ww.replace(/\&#3651;\&#3626;/,"sai");
		ww = ww.replace(/\&#3651;\&#3627;/,"hai");

		ww = ww.replace(/\&#3652;\&#3586;/,"khai");
		ww = ww.replace(/\&#3652;\&#3604;/,"dai");
		ww = ww.replace(/\&#3652;\&#3611;/,"pai");
		ww = ww.replace(/\&#3652;\&#3614;/,"phai");
		ww = ww.replace(/\&#3652;\&#3615;/,"fai");
		ww = ww.replace(/\&#3652;\&#3617;/,"mai");
		ww = ww.replace(/\&#3652;\&#3619;/,"rai");
		ww = ww.replace(/\&#3652;\&#3623;/,"wai");
		ww = ww.replace(/\&#3652;\&#3626;/,"sai");
		ww = ww.replace(/\&#3652;\&#3627;/,"hai");
		ww = ww.replace(/\&#3652;\&#3629;/,"?ai");

	 }
	 
	
	  if (durchgang==5) {
	  
		ww = ww.replace(/\&#3585;/,"k");
		ww = ww.replace(/\&#3586;/,"kh");
		ww = ww.replace(/\&#3587;/,"kh");
		ww = ww.replace(/\&#3588;/,"kh");
		ww = ww.replace(/\&#3589;/,"kh");
		ww = ww.replace(/\&#3590;/,"kh");
		ww = ww.replace(/\&#3591;/,""+String.fromCharCode(331));
		ww = ww.replace(/\&#3592;/,"c");
		ww = ww.replace(/\&#3593;/,"ch");
		ww = ww.replace(/\&#3594;/,"ch");
		ww = ww.replace(/\&#3595;/,"s");
		ww = ww.replace(/\&#3596;/,"ch");
		ww = ww.replace(/\&#3597;/,"y");
		ww = ww.replace(/\&#3598;/,"d");
		ww = ww.replace(/\&#3599;/,"t");
		ww = ww.replace(/\&#3600;/,"th");
		ww = ww.replace(/\&#3601;/,"th");
		ww = ww.replace(/\&#3602;/,"th");
		ww = ww.replace(/\&#3603;/,"n");
		ww = ww.replace(/\&#3604;/,"d");
		ww = ww.replace(/\&#3605;/,"t");
		ww = ww.replace(/\&#3606;/,"th");
		ww = ww.replace(/\&#3607;/,"th");
		ww = ww.replace(/\&#3608;/,"th");
		ww = ww.replace(/\&#3609;/,"n");
		ww = ww.replace(/\&#3610;/,"b");
		ww = ww.replace(/\&#3611;/,"p");
		ww = ww.replace(/\&#3612;/,"ph");
		ww = ww.replace(/\&#3613;/,"f");
		ww = ww.replace(/\&#3614;/,"ph");
		ww = ww.replace(/\&#3615;/,"f");
		ww = ww.replace(/\&#3616;/,"ph");
		ww = ww.replace(/\&#3617;/,"m");
		ww = ww.replace(/\&#3618;/,"y");
		ww = ww.replace(/\&#3619;/,"r");
		ww = ww.replace(/\&#3620;/,"r");
		ww = ww.replace(/\&#3621;/,"l");
		ww = ww.replace(/\&#3622;/,"l");
		ww = ww.replace(/\&#3623;/,"w");
		ww = ww.replace(/\&#3624;/,"s");
		ww = ww.replace(/\&#3625;/,"s");
		ww = ww.replace(/\&#3626;/,"s");
		ww = ww.replace(/\&#3627;/,"h");
		ww = ww.replace(/\&#3628;/,"l");
		ww = ww.replace(/\&#3629;/,"?");
		ww = ww.replace(/\&#3630;/,"h");
		ww = ww.replace(/\&#3631;/,".");
		ww = ww.replace(/\&#3632;/,"a");
		ww = ww.replace(/\&#3633;/,"a");
		ww = ww.replace(/\&#3634;/,"a:");
		ww = ww.replace(/\&#3635;/,"a");
		ww = ww.replace(/\&#3636;/,"i");
		ww = ww.replace(/\&#3637;/,"i:");
		ww = ww.replace(/\&#3638;/,""+String.fromCharCode(616)+"");
		ww = ww.replace(/\&#3639;/,""+String.fromCharCode(616)+":");
		ww = ww.replace(/\&#3640;/,"u");
		ww = ww.replace(/\&#3641;/,"u:");
		ww = ww.replace(/\&#3642;/,"[PHINTHU3642]");
		ww = ww.replace(/\&#3647;/,"&#3647;");
		ww = ww.replace(/\&#3648;/,"e");
		ww = ww.replace(/\&#3649;/,""+String.fromCharCode(230));
		ww = ww.replace(/\&#3650;/,"o");
		ww = ww.replace(/\&#3651;/,"ai");
		ww = ww.replace(/\&#3652;/,"ai");
		ww = ww.replace(/\&#3653;/,"[LAKKHANGYAO3653]");
		ww = ww.replace(/\&#3654;/,":||");
		ww = ww.replace(/\&#3655;/,""+String.fromCharCode(771));
		ww = ww.replace(/\&#3656;/,""+String.fromCharCode(768));
		ww = ww.replace(/\&#3657;/,""+String.fromCharCode(769));
		ww = ww.replace(/\&#3658;/,""+String.fromCharCode(770));
		ww = ww.replace(/\&#3659;/,"&#780;");
		ww = ww.replace(/\&#3660;/,"&#35;");
		ww = ww.replace(/\&#3661;/,"[NIKHAHIT3661]");
		ww = ww.replace(/\&#3662;/,"[YAMAKKAN3662]");
		ww = ww.replace(/\&#3663;/,".");
		ww = ww.replace(/\&#3664;/,"0");
		ww = ww.replace(/\&#3665;/,"1");
		ww = ww.replace(/\&#3666;/,"2");
		ww = ww.replace(/\&#3667;/,"3");
		ww = ww.replace(/\&#3668;/,"4");
		ww = ww.replace(/\&#3669;/,"5");
		ww = ww.replace(/\&#3670;/,"6");
		ww = ww.replace(/\&#3671;/,"7");
		ww = ww.replace(/\&#3672;/,"8");
		ww = ww.replace(/\&#3673;/,"9");
		ww = ww.replace(/\&#3674;/,".");
		ww = ww.replace(/\&#3675;/,".");
		ww = ww.replace(/\&#6105;/,"[phnaek muan6105]");
		ww = ww.replace(/\&#35;/,"#");
	 }
 
}

if (sprache=="thai_alt") {

	if (durchgang==1) {
	
		ww = ww.replace(/\&#3648;\&#3586;\&#3637;\&#3656;\&#3618;/,"khia:");
		ww = ww.replace(/\&#3648;\&#3594;\&#3639;\&#3656;\&#3629;/,"chia&#768;");
		ww = ww.replace(/\&#3648;\&#3604;\&#3637;\&#3656;\&#3618;/,"dia&#768;");
		ww = ww.replace(/\&#3648;\&#3609;\&#3637;\&#3656;\&#3618;/,"nia&#768;");
		ww = ww.replace(/\&#3648;\&#3609;\&#3639;\&#3657;\&#3629;/,"nia&#769;");
		ww = ww.replace(/\&#3648;\&#3610;\&#3639;\&#3657;\&#3629;/,"bia&#769;");
		ww = ww.replace(/\&#3648;\&#3614;\&#3639;\&#3656;\&#3629;/,"phia&#96;");
		ww = ww.replace(/\&#3648;\&#3617;\&#3639;\&#3656;\&#3629;/,"mia&#96;");
		ww = ww.replace(/\&#3648;\&#3618;\&#3637;\&#3656;\&#3618;/,"yia&#768;");
		ww = ww.replace(/\&#3648;\&#3621;\&#3637;\&#3657;\&#3618;/,"lia&#769;");
		ww = ww.replace(/\&#3648;\&#3626;\&#3639;\&#3657;\&#3629;/,"sü&#769;a");

	}
	
	
	 if (durchgang==2) {

		ww = ww.replace(/\&#3605;\&#3633;\&#3659;\&#3623;/,"tu&#780;a");

		ww = ww.replace(/\&#3621;\&#3637;\&#3656;\&#3618;/,"lia&#768;");

		ww = ww.replace(/\&#3648;\&#3585;\&#3634;\&#3632;/,"k&#596;");
		ww = ww.replace(/\&#3648;\&#3585;\&#3637;\&#3618;/,"kia");
		ww = ww.replace(/\&#3648;\&#3585;\&#3656;\&#3634;/,"kao:");
		ww = ww.replace(/\&#3648;\&#3585;\&#3656;\&#3634;/,"khao&#769;");
		ww = ww.replace(/\&#3648;\&#3585;\&#3657;\&#3634;/,"kao&#769;");	
		ww = ww.replace(/\&#3648;\&#3586;\&#3637;\&#3618;/,"khia");
		ww = ww.replace(/\&#3648;\&#3586;\&#3657;\&#3634;/,"khao&#769;");
		ww = ww.replace(/\&#3648;\&#3588;\&#3634;\&#3632;/,"k&#596;");
		ww = ww.replace(/\&#3648;\&#3591;\&#3637;\&#3618;/,"&#331;ia");
		ww = ww.replace(/\&#3648;\&#3592;\&#3657;\&#3634;/,"cao&#769;");	
		ww = ww.replace(/\&#3648;\&#3594;\&#3656;\&#3634;/,"chao&#768;");
		ww = ww.replace(/\&#3648;\&#3594;\&#3657;\&#3634;/,"chao&#769;");
		ww = ww.replace(/\&#3648;\&#3595;\&#3637;\&#3618;/,"sia");
		ww = ww.replace(/\&#3648;\&#3604;\&#3637;\&#3618;/,"dia");
		ww = ww.replace(/\&#3648;\&#3604;\&#3639;\&#3629;/,"düa");
		ww = ww.replace(/\&#3648;\&#3605;\&#3637;\&#3618;/,"tia");
		ww = ww.replace(/\&#3648;\&#3607;\&#3637;\&#3618;/,"thia");
		ww = ww.replace(/\&#3648;\&#3607;\&#3637;\&#3656;/,"thia&#768;");
		ww = ww.replace(/\&#3648;\&#3607;\&#3656;\&#3634;/,"thao&#768;");
		ww = ww.replace(/\&#3648;\&#3607;\&#3657;\&#3634;/,"thao&#768;");
		ww = ww.replace(/\&#3648;\&#3610;\&#3637;\&#3618;/,"bia");
		ww = ww.replace(/\&#3648;\&#3611;\&#3637;\&#3618;/,"pia");	
		ww = ww.replace(/\&#3648;\&#3611;\&#3659;\&#3634;/,"páu");
		ww = ww.replace(/\&#3648;\&#3614;\&#3637;\&#3618;/,"phia");
		ww = ww.replace(/\&#3648;\&#3617;\&#3639;\&#3629;/,"mia");
		ww = ww.replace(/\&#3648;\&#3617;\&#3639;\&#3656;/,"mia&#768;");
		ww = ww.replace(/\&#3648;\&#3619;\&#3637;\&#3618;/,"ria");
		ww = ww.replace(/\&#3648;\&#3621;\&#3656;\&#3634;/,"lao&#768;");
		ww = ww.replace(/\&#3648;\&#3626;\&#3637;\&#3618;/,"sia");
		ww = ww.replace(/\&#3648;\&#3629;\&#3637;\&#3618;/,"?ia");	

		ww = ww.replace(/\&#3650;\&#3605;\&#3658;\&#3632;/,"to&#770;");
	
	}
	
	
	 if (durchgang==3) {

		ww = ww.replace(/\&#3605;\&#3633;\&#3623;/,"tua");	
		ww = ww.replace(/\&#3605;\&#3656;\&#3635;/,"tám");
	
		ww = ww.replace(/\&#3609;\&#3657;\&#3635;/,"nám");

		ww = ww.replace(/\&#3585;\&#3634;\&#3619;/,"kan");
		ww = ww.replace(/\&#3588;\&#3634;\&#3619;/,"khan");
		ww = ww.replace(/\&#3627;\&#3634;\&#3619;/,"han");

		ww = ww.replace(/\&#3648;\&#3585;\&#3634;/,"kao");
		ww = ww.replace(/\&#3648;\&#3585;\&#3636;/,"khe");
		ww = ww.replace(/\&#3648;\&#3586;\&#3634;/,"khao");
		ww = ww.replace(/\&#3648;\&#3586;\&#3655;/,"khe&#771;");
		ww = ww.replace(/\&#3648;\&#3588;\&#3634;/,"khao");
		ww = ww.replace(/\&#3648;\&#3591;\&#3636;/,"&#331;&#601;");
		ww = ww.replace(/\&#3648;\&#3592;\&#3629;/,"c&#601;");
		ww = ww.replace(/\&#3648;\&#3594;\&#3629;/,"ch&#601;");
		ww = ww.replace(/\&#3648;\&#3604;\&#3634;/,"dao");
		ww = ww.replace(/\&#3648;\&#3604;\&#3636;/,"d&#601;");
		ww = ww.replace(/\&#3648;\&#3605;\&#3632;/,"te");
		ww = ww.replace(/\&#3648;\&#3605;\&#3634;/,"tao");
		ww = ww.replace(/\&#3648;\&#3607;\&#3629;/,"th&#601;");
		ww = ww.replace(/\&#3648;\&#3608;\&#3629;/,"th&#601;:");
		ww = ww.replace(/\&#3648;\&#3610;\&#3629;/,"b&#601;");
		ww = ww.replace(/\&#3648;\&#3610;\&#3634;/,"bao");
		ww = ww.replace(/\&#3648;\&#3611;\&#3659;/,"pau");
		ww = ww.replace(/\&#3648;\&#3618;\&#3629;/,"y&#601;:");
		ww = ww.replace(/\&#3648;\&#3619;\&#3634;/,"rao");
		ww = ww.replace(/\&#3648;\&#3619;\&#3637;/,"ria");
		ww = ww.replace(/\&#3648;\&#3621;\&#3636;/,"l&#601;");
		ww = ww.replace(/\&#3648;\&#3626;\&#3634;/,"sao");
		ww = ww.replace(/\&#3648;\&#3629;\&#3634;/,"?ao");

		ww = ww.replace(/\&#3649;\&#3585;\&#3632;/,"k&#603;");
		ww = ww.replace(/\&#3649;\&#3609;\&#3632;/,"n&#603;");
		ww = ww.replace(/\&#3649;\&#3621;\&#3632;/,"l&#603;");

		ww = ww.replace(/\&#3650;\&#3605;\&#3632;/,"to");
	
		ww = ww.replace(/\&#3651;\&#3627;\&#3617;/,"maih");
		ww = ww.replace(/\&#3651;\&#3585;\&#3621;/,"klai");
		ww = ww.replace(/\&#3651;\&#3588;\&#3619;/,"krai");

		ww = ww.replace(/\&#3652;\&#3585;\&#3621;/,"klai");
		ww = ww.replace(/\&#3652;\&#3585;\&#3656;/,"kai&#96;");
		ww = ww.replace(/\&#3652;\&#3607;\&#3618;/,"thai");
		ww = ww.replace(/\&#3652;\&#3627;\&#3609;/,"naih");
	}
	
	
	 if (durchgang==4) {
	
		ww = ww.replace(/\&#3585;\&#3635;/,"kam");	
		ww = ww.replace(/\&#3592;\&#3635;/,"cam");	
		ww = ww.replace(/\&#3604;\&#3635;/,"dam");		
		ww = ww.replace(/\&#3607;\&#3635;/,"tham");
		ww = ww.replace(/\&#3609;\&#3635;/,"am");
	
		ww = ww.replace(/\&#3634;\&#3632;/,"&#596;");

		ww = ww.replace(/\&#3648;\&#3585;/,"ke");
		ww = ww.replace(/\&#3648;\&#3588;/,"ke");
		ww = ww.replace(/\&#3648;\&#3592;/,"ce");
		ww = ww.replace(/\&#3648;\&#3594;/,"che");
		ww = ww.replace(/\&#3648;\&#3595;/,"se");
		ww = ww.replace(/\&#3648;\&#3604;/,"de");
		ww = ww.replace(/\&#3648;\&#3605;/,"te");	
		ww = ww.replace(/\&#3648;\&#3608;/,"the");
		ww = ww.replace(/\&#3648;\&#3607;/,"the");
		ww = ww.replace(/\&#3648;\&#3609;/,"ne");
		ww = ww.replace(/\&#3648;\&#3610;/,"be");
		ww = ww.replace(/\&#3648;\&#3611;/,"pe");
		ww = ww.replace(/\&#3648;\&#3612;/,"phe");
		ww = ww.replace(/\&#3648;\&#3614;/,"phe");
		ww = ww.replace(/\&#3648;\&#3615;/,"fe");
		ww = ww.replace(/\&#3648;\&#3617;/,"me");
		ww = ww.replace(/\&#3648;\&#3618;/,"ye");
		ww = ww.replace(/\&#3648;\&#3619;/,"re");
		ww = ww.replace(/\&#3648;\&#3621;/,"le");
		ww = ww.replace(/\&#3648;\&#3623;/,"we");
		ww = ww.replace(/\&#3648;\&#3624;/,"se");
		ww = ww.replace(/\&#3648;\&#3626;/,"se");	
		ww = ww.replace(/\&#3648;\&#3627;/,"he");
		ww = ww.replace(/\&#3648;\&#3629;/,"?e");

		ww = ww.replace(/\&#3649;\&#3585;/,"k&#230;");
		ww = ww.replace(/\&#3649;\&#3586;/,"kh&#230;");	
		ww = ww.replace(/\&#3649;\&#3588;/,"kh&#230;");
		ww = ww.replace(/\&#3649;\&#3592;/,"c&#230;");
		ww = ww.replace(/\&#3649;\&#3595;/,"s&#230;");	
		ww = ww.replace(/\&#3649;\&#3604;/,"d&#230;");
		ww = ww.replace(/\&#3649;\&#3605;/,"t&#230;");
		ww = ww.replace(/\&#3649;\&#3607;/,"t&#230;");
		ww = ww.replace(/\&#3649;\&#3609;/,"n&#230;");
		ww = ww.replace(/\&#3649;\&#3610;/,"b&#230;");
		ww = ww.replace(/\&#3649;\&#3611;/,"p&#230;");
		ww = ww.replace(/\&#3649;\&#3612;/,"ph&#230;");	
		ww = ww.replace(/\&#3649;\&#3614;/,"ph&#230;");
		ww = ww.replace(/\&#3649;\&#3615;/,"f&#230;");
		ww = ww.replace(/\&#3649;\&#3617;/,"m&#230;");	
		ww = ww.replace(/\&#3649;\&#3618;/,"y&#230;");
		ww = ww.replace(/\&#3649;\&#3619;/,"r&#230;");
		ww = ww.replace(/\&#3649;\&#3621;/,"l&#230;");
		ww = ww.replace(/\&#3649;\&#3623;/,"w&#230;");
		ww = ww.replace(/\&#3649;\&#3626;/,"s&#230;");
		ww = ww.replace(/\&#3649;\&#3627;/,"h&#230;");	
		ww = ww.replace(/\&#3649;\&#3629;/,"?&#230;");
		ww = ww.replace(/\&#3649;\&#3630;/,"h&#230;");

		ww = ww.replace(/\&#3650;\&#3585;/,"ko");
		ww = ww.replace(/\&#3650;\&#3588;/,"kho");
		ww = ww.replace(/\&#3650;\&#3594;/,"cho");
		ww = ww.replace(/\&#3650;\&#3604;/,"do");
		ww = ww.replace(/\&#3650;\&#3605;/,"to");	
		ww = ww.replace(/\&#3650;\&#3607;/,"tho");
		ww = ww.replace(/\&#3650;\&#3609;/,"no");
		ww = ww.replace(/\&#3650;\&#3610;/,"bo");
		ww = ww.replace(/\&#3650;\&#3611;/,"po");
		ww = ww.replace(/\&#3650;\&#3612;/,"pho");
		ww = ww.replace(/\&#3650;\&#3614;/,"po");
		ww = ww.replace(/\&#3650;\&#3616;/,"pho");
		ww = ww.replace(/\&#3650;\&#3617;/,"mo");
		ww = ww.replace(/\&#3650;\&#3618;/,"yo");
		ww = ww.replace(/\&#3650;\&#3619;/,"ro");
		ww = ww.replace(/\&#3650;\&#3626;/,"so");
		ww = ww.replace(/\&#3650;\&#3629;/,"?o");

		ww = ww.replace(/\&#3651;\&#3592;/,"cai");
		ww = ww.replace(/\&#3651;\&#3594;/,"chai");
		ww = ww.replace(/\&#3651;\&#3604;/,"dai");	
		ww = ww.replace(/\&#3651;\&#3605;/,"tai");	
		ww = ww.replace(/\&#3651;\&#3609;/,"nai");		
		ww = ww.replace(/\&#3651;\&#3610;/,"bai");			
		ww = ww.replace(/\&#3651;\&#3626;/,"sai");
		ww = ww.replace(/\&#3651;\&#3627;/,"hai");

		ww = ww.replace(/\&#3652;\&#3586;/,"khai");
		ww = ww.replace(/\&#3652;\&#3604;/,"dai");
		ww = ww.replace(/\&#3652;\&#3611;/,"pai");
		ww = ww.replace(/\&#3652;\&#3614;/,"phai");
		ww = ww.replace(/\&#3652;\&#3615;/,"fai");
		ww = ww.replace(/\&#3652;\&#3617;/,"mai");
		ww = ww.replace(/\&#3652;\&#3619;/,"rai");
		ww = ww.replace(/\&#3652;\&#3623;/,"wai");
		ww = ww.replace(/\&#3652;\&#3626;/,"sai");
		ww = ww.replace(/\&#3652;\&#3627;/,"hai");
		ww = ww.replace(/\&#3652;\&#3629;/,"?ai");

	 }
	 
	
	  if (durchgang==5) {
	  
		ww = ww.replace(/\&#3585;/,"k");
		ww = ww.replace(/\&#3586;/,"kh");
		ww = ww.replace(/\&#3587;/,"kh");
		ww = ww.replace(/\&#3588;/,"kh");
		ww = ww.replace(/\&#3589;/,"kh");
		ww = ww.replace(/\&#3590;/,"kh");
		ww = ww.replace(/\&#3591;/,"&#331;");
		ww = ww.replace(/\&#3592;/,"c");
		ww = ww.replace(/\&#3593;/,"ch");
		ww = ww.replace(/\&#3594;/,"ch");
		ww = ww.replace(/\&#3595;/,"s");
		ww = ww.replace(/\&#3596;/,"ch");
		ww = ww.replace(/\&#3597;/,"y");
		ww = ww.replace(/\&#3598;/,"d");
		ww = ww.replace(/\&#3599;/,"t");
		ww = ww.replace(/\&#3600;/,"th");
		ww = ww.replace(/\&#3601;/,"th");
		ww = ww.replace(/\&#3602;/,"th");
		ww = ww.replace(/\&#3603;/,"n");
		ww = ww.replace(/\&#3604;/,"d");
		ww = ww.replace(/\&#3605;/,"t");
		ww = ww.replace(/\&#3606;/,"th");
		ww = ww.replace(/\&#3607;/,"th");
		ww = ww.replace(/\&#3608;/,"th");
		ww = ww.replace(/\&#3609;/,"n");
		ww = ww.replace(/\&#3610;/,"b");
		ww = ww.replace(/\&#3611;/,"p");
		ww = ww.replace(/\&#3612;/,"ph");
		ww = ww.replace(/\&#3613;/,"f");
		ww = ww.replace(/\&#3614;/,"ph");
		ww = ww.replace(/\&#3615;/,"f");
		ww = ww.replace(/\&#3616;/,"ph");
		ww = ww.replace(/\&#3617;/,"m");
		ww = ww.replace(/\&#3618;/,"y");
		ww = ww.replace(/\&#3619;/,"r");
		ww = ww.replace(/\&#3620;/,"r");
		ww = ww.replace(/\&#3621;/,"l");
		ww = ww.replace(/\&#3622;/,"l");
		ww = ww.replace(/\&#3623;/,"w");
		ww = ww.replace(/\&#3624;/,"s");
		ww = ww.replace(/\&#3625;/,"s");
		ww = ww.replace(/\&#3626;/,"s");
		ww = ww.replace(/\&#3627;/,"h");
		ww = ww.replace(/\&#3628;/,"l");
		ww = ww.replace(/\&#3629;/,"?");
		ww = ww.replace(/\&#3630;/,"h");
		ww = ww.replace(/\&#3631;/,".");
		ww = ww.replace(/\&#3632;/,"a");
		ww = ww.replace(/\&#3633;/,"a");
		ww = ww.replace(/\&#3634;/,"a:");
		ww = ww.replace(/\&#3635;/,"a");
		ww = ww.replace(/\&#3636;/,"i");
		ww = ww.replace(/\&#3637;/,"i:");
		ww = ww.replace(/\&#3638;/,"&#616;");
		ww = ww.replace(/\&#3639;/,"&#616;:");
		ww = ww.replace(/\&#3640;/,"u");
		ww = ww.replace(/\&#3641;/,"u:");
		ww = ww.replace(/\&#3642;/,"[PHINTHU3642]");
		ww = ww.replace(/\&#3647;/,"&#3647;");
		ww = ww.replace(/\&#3648;/,"e");
		ww = ww.replace(/\&#3649;/,"&#230;");
		ww = ww.replace(/\&#3650;/,"o");
		ww = ww.replace(/\&#3651;/,"ai");
		ww = ww.replace(/\&#3652;/,"ai");
		ww = ww.replace(/\&#3653;/,"[LAKKHANGYAO3653]");
		ww = ww.replace(/\&#3654;/,":||");
		ww = ww.replace(/\&#3655;/,"&#771;");
		ww = ww.replace(/\&#3656;/,"&#768;");
		ww = ww.replace(/\&#3657;/,"&#769;");
		ww = ww.replace(/\&#3658;/,"&#770;");
		ww = ww.replace(/\&#3659;/,"&#780;");
		ww = ww.replace(/\&#3660;/,"&#35;");
		ww = ww.replace(/\&#3661;/,"[NIKHAHIT3661]");
		ww = ww.replace(/\&#3662;/,"[YAMAKKAN3662]");
		ww = ww.replace(/\&#3663;/,".");
		ww = ww.replace(/\&#3664;/,"0");
		ww = ww.replace(/\&#3665;/,"1");
		ww = ww.replace(/\&#3666;/,"2");
		ww = ww.replace(/\&#3667;/,"3");
		ww = ww.replace(/\&#3668;/,"4");
		ww = ww.replace(/\&#3669;/,"5");
		ww = ww.replace(/\&#3670;/,"6");
		ww = ww.replace(/\&#3671;/,"7");
		ww = ww.replace(/\&#3672;/,"8");
		ww = ww.replace(/\&#3673;/,"9");
		ww = ww.replace(/\&#3674;/,".");
		ww = ww.replace(/\&#3675;/,".");
		ww = ww.replace(/\&#6105;/,"[phnaek muan6105]");
	 }
 
}


 if (sprache=="hindi") {
 
 if (durchgang==1) {
ww = ww.replace(/&#2303;/,"~");
ww = ww.replace(/&#2304;/,"");
ww = ww.replace(/&#2305;/,"Candrabindu");
ww = ww.replace(/&#2306;/,"BINDU");
ww = ww.replace(/&#2307;/,"_h(A)");
ww = ww.replace(/&#2308;/,"?A");
ww = ww.replace(/&#2309;/,"AA");
ww = ww.replace(/&#2310;/,"AA");
ww = ww.replace(/&#2311;/,"i");
ww = ww.replace(/&#2312;/,"ii");
ww = ww.replace(/&#2313;/,"u");
ww = ww.replace(/&#2314;/,"uu");
ww = ww.replace(/&#2315;/,"rr");
ww = ww.replace(/&#2316;/,"?2");
ww = ww.replace(/&#2317;/,"~e");
ww = ww.replace(/&#2318;/,"??3");
ww = ww.replace(/&#2319;/,"e");
ww = ww.replace(/&#2320;/,"ee");
ww = ww.replace(/&#2321;/,"~AA");
ww = ww.replace(/&#2322;/,"?4");
ww = ww.replace(/&#2323;/,"o");
ww = ww.replace(/&#2324;/,"oo");
ww = ww.replace(/&#2325;/,"k(A)");
ww = ww.replace(/&#2326;/,"kh(A)");
ww = ww.replace(/&#2327;/,"g(A)");
ww = ww.replace(/&#2328;/,"gh(A)");
ww = ww.replace(/&#2329;/,"d");
ww = ww.replace(/&#2330;/,"c(A)");
ww = ww.replace(/&#2331;/,"ch(A)");
ww = ww.replace(/&#2332;/,"j(A)");
ww = ww.replace(/&#2333;/,"jh(A)");
ww = ww.replace(/&#2334;/,"tr");
ww = ww.replace(/&#2335;/,"t(A)");
ww = ww.replace(/&#2336;/,"th(A)");
ww = ww.replace(/&#2337;/,"d(A)");
ww = ww.replace(/&#2338;/,"dh(A)");
ww = ww.replace(/&#2339;/,"(A)");
ww = ww.replace(/&#2340;/,"t(A)");
ww = ww.replace(/&#2341;/,"th(A)");
ww = ww.replace(/&#2342;/,"d(A)");
ww = ww.replace(/&#2343;/,"dh(A)");
ww = ww.replace(/&#2344;/,"n(A)");
ww = ww.replace(/&#2345;/,"?");
ww = ww.replace(/&#2346;/,"p(A)");
ww = ww.replace(/&#2347;/,"f(A)");
ww = ww.replace(/&#2348;/,"b(A)");
ww = ww.replace(/&#2349;/,"bh(A)");
ww = ww.replace(/&#2350;/,"m(A)");
ww = ww.replace(/&#2351;/,"y(A)");
ww = ww.replace(/&#2352;/,"r(A)");
ww = ww.replace(/&#2353;/,"r");
ww = ww.replace(/&#2354;/,"l(A)");
ww = ww.replace(/&#2355;/,"");
ww = ww.replace(/&#2356;/,"");
ww = ww.replace(/&#2357;/,"v(A)");
ww = ww.replace(/&#2358;/,"sh(A)");
ww = ww.replace(/&#2359;/,"sh(A)");
ww = ww.replace(/&#2360;/,"s(A)");
ww = ww.replace(/&#2361;/,"h(A)");
ww = ww.replace(/&#2362;/,"-");
ww = ww.replace(/&#2363;/,"-");
ww = ww.replace(/&#2364;/,"");
//ww = ww.replace(/&#2364;/,"NUKTA");
ww = ww.replace(/&#2365;/,"?");
ww = ww.replace(/&#2366;/,"-A");
ww = ww.replace(/&#2367;/,"-i");
ww = ww.replace(/&#2368;/,"-ii");
ww = ww.replace(/&#2369;/,"-u");
ww = ww.replace(/&#2370;/,"-uu");
ww = ww.replace(/&#2371;/,"-r(A)");
ww = ww.replace(/&#2372;/,"-rr(A)");
ww = ww.replace(/&#2373;/,"-~");
ww = ww.replace(/&#2374;/,"-??7");
ww = ww.replace(/&#2375;/,"-e");
ww = ww.replace(/&#2376;/,"-ee");
ww = ww.replace(/&#2377;/,"-~A");
ww = ww.replace(/&#2378;/,"-?");
ww = ww.replace(/&#2379;/,"-o");
ww = ww.replace(/&#2380;/,"-oo");
ww = ww.replace(/&#2381;/,"STUMM");
ww = ww.replace(/&#2382;/,"-");
ww = ww.replace(/&#2383;/,"-");
ww = ww.replace(/&#2384;/,"om");
ww = ww.replace(/&#2385;/,"?8");
ww = ww.replace(/&#2386;/,"?9");
//ww = ww.replace(/&#2387;/,"?10");
ww = ww.replace(/&#2387;/,"re");
//ww = ww.replace(/&#2388;/,"?11");
ww = ww.replace(/&#2388;/,"r");
ww = ww.replace(/&#2389;/,"");
ww = ww.replace(/&#2390;/,"");
ww = ww.replace(/&#2391;/,"");
ww = ww.replace(/&#2392;/,"q(A)");
ww = ww.replace(/&#2393;/,"kkh(A)");
ww = ww.replace(/&#2394;/,"gg(A)");
ww = ww.replace(/&#2395;/,"z(A)");
ww = ww.replace(/&#2396;/,"rr(A)");
ww = ww.replace(/&#2397;/,"rrh(A)");
//ww = ww.replace(/&#2398;/,"?12");
ww = ww.replace(/&#2398;/,"f");
ww = ww.replace(/&#2399;/,"?13");
ww = ww.replace(/&#2400;/,"?14");
ww = ww.replace(/&#2401;/,"?15");
ww = ww.replace(/&#2402;/,"?16");
ww = ww.replace(/&#2403;/,"?17");
ww = ww.replace(/&#2404;/,".");
ww = ww.replace(/&#2405;/,":");
ww = ww.replace(/&#2406;/,"0");
ww = ww.replace(/&#2407;/,"1");
ww = ww.replace(/&#2408;/,"2");
ww = ww.replace(/&#2409;/,"3");
ww = ww.replace(/&#2410;/,"4");
ww = ww.replace(/&#2411;/,"5");
ww = ww.replace(/&#2412;/,"6");
ww = ww.replace(/&#2413;/,"7");
ww = ww.replace(/&#2414;/,"8");
ww = ww.replace(/&#2415;/,"9");
ww = ww.replace(/&#2416;/,"undefined");
ww = ww.replace(/&#2417;/,"undefined");
ww = ww.replace(/&#2418;/,"undefined");
}

if (durchgang==2 || durchgang==4) {
ww = ww.replace(/\(A\)\-a/,"A");
ww = ww.replace(/\(A\)\-e/,"e");
ww = ww.replace(/\(A\)\-i/,"i");
ww = ww.replace(/\(A\)\-o/,"o");
ww = ww.replace(/\(A\)\-u/,"u");
ww = ww.replace(/ \|/,"\.");

/*ww = ww.replace(/\(A\)\-à/,String.fromCharCode(224));
ww = ww.replace(/\(A\)\-è/,String.fromCharCode(232));
ww = ww.replace(/\(A\)\-ì/,String.fromCharCode(236));
ww = ww.replace(/\(A\)\-ò/,String.fromCharCode(242));
ww = ww.replace(/\(A\)\-ù/,String.fromCharCode(249));*/

ww = ersetzen(ww,"(A)-"+String.fromCharCode(224),String.fromCharCode(224));
ww = ersetzen(ww,"(A)-"+String.fromCharCode(232),String.fromCharCode(232));
ww = ersetzen(ww,"(A)-"+String.fromCharCode(236),String.fromCharCode(236));
ww = ersetzen(ww,"(A)-"+String.fromCharCode(242),String.fromCharCode(242));
ww = ersetzen(ww,"(A)-"+String.fromCharCode(249),String.fromCharCode(249));


ww = ww.replace(/aSTUMM/,"");
ww = ww.replace(/ASTUMM/,"");
ww = ww.replace(/a\-a/,"AA");
ww = ww.replace(/a\-A/,"AA");
ww = ww.replace(/A\-A/,"AA");
ww = ww.replace(/A\-\~a/,"AA");
ww = ww.replace(/A\-\~A/,"AA");
ww = ww.replace(/a\-\~A/,"AA");
ww = ww.replace(/a\-\~a/,"AA");
ww = ww.replace(/a\-e/,"ee");

ww = ww.replace(/äSTUMM/,"");
ww = ww.replace(/ä\-a/,"AA");
ww = ww.replace(/ä\-A/,"AA");
ww = ww.replace(/ä\-A/,"AA");
ww = ww.replace(/ä\-\~a/,"AA");
ww = ww.replace(/ä\-\~A/,"AA");
ww = ww.replace(/ä\-\~A/,"AA");
ww = ww.replace(/ä\-\~a/,"AA");
ww = ww.replace(/ä\-e/,"ee");


//ww = ww.replace(/a /," ");
//ww = ww.replace(/a\./," ");
ww = ww.replace(/y\-/,"y");
//ww = ww.replace(/h\-/,"h");
ww = ww.replace(/LEERZEICHEN/," ");

ww = ww.replace(/Candrabindu/,"");
ww = ww.replace(/aBINDU/,"An");
ww = ww.replace(/äBINDU/,"An");
ww = ww.replace(/ABINDU/,"An");
ww = ww.replace(/eeBINDU/,"een");
ww = ww.replace(/eBINDU/,"en");
ww = ww.replace(/iiBINDU/,"in");
ww = ww.replace(/iBINDU/,"in");
ww = ww.replace(/oBINDU/,"on");
ww = ww.replace(/uBINDU/,"un");
}

if (durchgang==3) {
   ww = ww.replace(/\(A\)/,String.fromCharCode(228));
   
}
if (durchgang==5) {
   ww = ww.replace(/a\-/,"A ");
   ww = ww.replace(/aaA/,"AA");
   ww = ww.replace(/\|/,"\.");
   
}

if (durchgang==6) {
   ww = ww.replace(/ab/,String.fromCharCode(228)+"b");
   ww = ww.replace(/ac/,String.fromCharCode(228)+"c");
   ww = ww.replace(/ad/,String.fromCharCode(228)+"d");
   ww = ww.replace(/af/,String.fromCharCode(228)+"f");
   ww = ww.replace(/ag/,String.fromCharCode(228)+"g");
   ww = ww.replace(/ah/,String.fromCharCode(228)+"h");
   ww = ww.replace(/aj/,String.fromCharCode(228)+"j");
   ww = ww.replace(/ak/,String.fromCharCode(228)+"k");
   ww = ww.replace(/al/,String.fromCharCode(228)+"l");
   ww = ww.replace(/am/,String.fromCharCode(228)+"m");
   ww = ww.replace(/an/,String.fromCharCode(228)+"n");
   ww = ww.replace(/ap/,String.fromCharCode(228)+"p");
   ww = ww.replace(/aq/,String.fromCharCode(228)+"q");
   ww = ww.replace(/ar/,String.fromCharCode(228)+"r");
   ww = ww.replace(/as/,String.fromCharCode(228)+"s");
   ww = ww.replace(/at/,String.fromCharCode(228)+"t");
   ww = ww.replace(/av/,String.fromCharCode(228)+"v");
   ww = ww.replace(/aw/,String.fromCharCode(228)+"w");
   ww = ww.replace(/ay/,String.fromCharCode(228)+"y");
   ww = ww.replace(/az/,String.fromCharCode(228)+"z");
   
}
if (durchgang==7) {
   ww = ersetzen(ww,"e"+String.fromCharCode(228),"e");
   ww = ersetzen(ww,"i"+String.fromCharCode(228),"i");
   ww = ersetzen(ww,"o"+String.fromCharCode(228),"o");
   ww = ersetzen(ww,"u"+String.fromCharCode(228),"u");
   ww = ersetzen(ww,"a","");
   
   ww = ersetzen(ww,"k"+String.fromCharCode(228)+"k","k k");
   ww = ersetzen(ww,"b"+String.fromCharCode(228)+"b","b b");
   //ww = ww.replace(/säs/,"ss");
   
/*   ww = ww.replace(/akä/,"ak");
   ww = ww.replace(/ekä/,"ek");
   ww = ww.replace(/ikä/,"ik");
   ww = ww.replace(/okä/,"ok");
   ww = ww.replace(/ukä/,"uk");
   ww = ww.replace(/äkä/,"ak");
   ww = ww.replace(/äkA/,"ka");
   
   ww = ww.replace(/arä/,"ar");
   ww = ww.replace(/erä/,"er");
   ww = ww.replace(/irä/,"ir");
   ww = ww.replace(/orä/,"or");
   ww = ww.replace(/urä/,"ur");
   ww = ww.replace(/ärä/,"ar");
   ww = ww.replace(/ärA/,"ra");*/
   
   
   ww = ww.replace(/h\-/,"h");
}
if (durchgang==8) {
  if (ww.substr(ww.length-1,1)==String.fromCharCode(228))  ww=ww.substr(0,ww.length-1);
  for (var a=0; a<ww.length;a++){
    if (ww.substr(a,1)==String.fromCharCode(228)){
      //alert(a+ " "+ww);
      if (ww.substr(a+1,1)==" " || ww.substr(a+1,1)=="?" || ww.substr(a+1,1)=="!" || ww.substr(a+1,1)=="." || ww.substr(a+1,1)=="," || ww.substr(a+1,1)==";") {
        ww=ww.substr(0,a)+"x"+ww.substr(a+1);
     
      }
    }
  }

}
if (durchgang==9) {
   ww = ersetzen(ww,String.fromCharCode(228),"a");
   ww = ww.replace(/x/,"");
   
   /*ww = ww.replace(/äba/,"ba");
   ww = ww.replace(/äca/,"ca");
   ww = ww.replace(/äda/,"da");
   ww = ww.replace(/äfa/,"fa");
   ww = ww.replace(/äga/,"ga");
   ww = ww.replace(/äha/,"ha");
   ww = ww.replace(/äja/,"ja");
   ww = ww.replace(/äka/,"ka");
   ww = ww.replace(/äla/,"la");
   ww = ww.replace(/äma/,"ma");
   ww = ww.replace(/äna/,"na");
   ww = ww.replace(/äpa/,"pa");
   ww = ww.replace(/äqa/,"qa");
   ww = ww.replace(/ära/,"ra");
   ww = ww.replace(/äsa/,"sa");
   ww = ww.replace(/äta/,"ta");
   ww = ww.replace(/äva/,"va");
   ww = ww.replace(/äwa/,"wa");
   ww = ww.replace(/äya/,"ya");
   ww = ww.replace(/äza/,"za");
   
   ww = ww.replace(/äbe/,"be");
   ww = ww.replace(/äce/,"ce");
   ww = ww.replace(/äde/,"de");
   ww = ww.replace(/äfe/,"fe");
   ww = ww.replace(/äge/,"ge");
   ww = ww.replace(/ähe/,"he");
   ww = ww.replace(/äje/,"je");
   ww = ww.replace(/äke/,"ke");
   ww = ww.replace(/äle/,"le");
   ww = ww.replace(/äme/,"me");
   ww = ww.replace(/äne/,"ne");
   ww = ww.replace(/äpe/,"pe");
   ww = ww.replace(/äqe/,"qe");
   ww = ww.replace(/äre/,"re");
   ww = ww.replace(/äse/,"se");
   ww = ww.replace(/äte/,"te");
   ww = ww.replace(/äve/,"ve");
   ww = ww.replace(/äwe/,"we");
   ww = ww.replace(/äye/,"ye");
   ww = ww.replace(/äze/,"ze");*/

   
   ww = ww.replace(/A/,"a");
   ww = ww.replace(/aaa/,"aa");

   ww = ww.replace(/STUMM/,"");
   ww = ww.replace(/-/,"");

}

/*ww = ww.replace(/ja /,"j ");
ww = ww.replace(/ka /,"k ");
ww = ww.replace(/la /,"l ");
ww = ww.replace(/pa /,"p ");
ww = ww.replace(/ra /,"r ");
ww = ww.replace(/sa /,"s ");
ww = ww.replace(/ta /,"t ");*/



}
  
  } while (wwtemp != ww)
}

do {
    wwtemp=ww;
    if (sprache=="griechisch") ww = ww.replace(/;/,"?");
} while (wwtemp != ww)



}

if (lateinmachen==2) {
  ww=ww.substr(ww.indexOf("---")+3);
  ww= sonderzeichenumwandeln(ww);
}

if (sprache2.indexOf("Deutsch")>-1) { ww=""; }

return ww;
}











//#############################################################################################

function htmlcode2zeichen (xsatz) {
  var whilecount=0;
  while (xsatz.indexOf("&#")>-1 && xsatz.indexOf(";")>-1 && whilecount<1000) {
    whilecount+=1;
    var stelle1=xsatz.indexOf("&#");
    var stelle2=xsatz.indexOf(";");
    var ersetz =xsatz.substring(stelle1+2,stelle2);
    var such   =xsatz.substring(stelle1,stelle2+1);
    if (ersetz>0 && stelle2>stelle1) {
      ersetz= String.fromCharCode(ersetz);
      //alert ("s/e: "+such+" "+ersetz+" ");
      xsatz = xsatz.substring(0,stelle1) + ersetz + xsatz.substring (stelle2+1,xsatz.length)+"";
      //alert ("2: "+xsatz+ " XXX "+such+" "+ersetz+" ");
    }
  }
  return xsatz;
}




function umlautewandeln(umwandeltemp)
{
 var docount=0;
 do {
   docount+=1;
   var umwandeltemptemp=umwandeltemp;

   if (umwandeltemp.indexOf("&")>-1) {

   umwandeltemp = umwandeltemp.replace(/\&#191;/,String.fromCharCode(191));
   umwandeltemp = umwandeltemp.replace(/\&Agrave;/,String.fromCharCode(192));
   umwandeltemp = umwandeltemp.replace(/\&Aacute;/,String.fromCharCode(193));
   umwandeltemp = umwandeltemp.replace(/\&Acirc;/,String.fromCharCode(194));
   umwandeltemp = umwandeltemp.replace(/\&Atilde;/,String.fromCharCode(195));
   umwandeltemp = umwandeltemp.replace(/\&Auml;/,String.fromCharCode(196));
   umwandeltemp = umwandeltemp.replace(/\&Aring;/,String.fromCharCode(197));
   umwandeltemp = umwandeltemp.replace(/\&AElig;/,String.fromCharCode(198));
   umwandeltemp = umwandeltemp.replace(/\&Ccedil;/,String.fromCharCode(199));
   umwandeltemp = umwandeltemp.replace(/\&Egrave;/,String.fromCharCode(200));
   umwandeltemp = umwandeltemp.replace(/\&Eacute;/,String.fromCharCode(201));
   umwandeltemp = umwandeltemp.replace(/\&Ecirc;/,String.fromCharCode(202));
   umwandeltemp = umwandeltemp.replace(/\&Euml;/,String.fromCharCode(203));
   umwandeltemp = umwandeltemp.replace(/\&Igrave;/,String.fromCharCode(204));
   umwandeltemp = umwandeltemp.replace(/\&Iacute;/,String.fromCharCode(205));
   umwandeltemp = umwandeltemp.replace(/\&Icirc;/,String.fromCharCode(206));
   umwandeltemp = umwandeltemp.replace(/\&Iuml;/,String.fromCharCode(207));
   umwandeltemp = umwandeltemp.replace(/\&ETH;/,String.fromCharCode(208));
   umwandeltemp = umwandeltemp.replace(/\&Ntilde;/,String.fromCharCode(209));
   umwandeltemp = umwandeltemp.replace(/\&Ograve;/,String.fromCharCode(210));
   umwandeltemp = umwandeltemp.replace(/\&Oacute;/,String.fromCharCode(211));
   umwandeltemp = umwandeltemp.replace(/\&Ocirc;/,String.fromCharCode(212));
   umwandeltemp = umwandeltemp.replace(/\&Otilde;/,String.fromCharCode(213));
   umwandeltemp = umwandeltemp.replace(/\&Ouml;/,String.fromCharCode(214));
   umwandeltemp = umwandeltemp.replace(/\&times;/,String.fromCharCode(215));
   umwandeltemp = umwandeltemp.replace(/\&Oslash;/,String.fromCharCode(216));
   umwandeltemp = umwandeltemp.replace(/\&Ugrave;/,String.fromCharCode(217));
   umwandeltemp = umwandeltemp.replace(/\&Uacute;/,String.fromCharCode(218));
   umwandeltemp = umwandeltemp.replace(/\&Ucirc;/,String.fromCharCode(219));
   umwandeltemp = umwandeltemp.replace(/\&Uuml;/,String.fromCharCode(220));
   umwandeltemp = umwandeltemp.replace(/\&Yacute;/,String.fromCharCode(221));
   umwandeltemp = umwandeltemp.replace(/\&THORN;/,String.fromCharCode(222));
   umwandeltemp = umwandeltemp.replace(/\&szlig;/,String.fromCharCode(223));
   umwandeltemp = umwandeltemp.replace(/\&agrave;/,String.fromCharCode(224));
   umwandeltemp = umwandeltemp.replace(/\&aacute;/,String.fromCharCode(225));
   umwandeltemp = umwandeltemp.replace(/\&acirc;/,String.fromCharCode(226));
   umwandeltemp = umwandeltemp.replace(/\&atilde;/,String.fromCharCode(227));
   umwandeltemp = umwandeltemp.replace(/\&auml;/,String.fromCharCode(228));
   umwandeltemp = umwandeltemp.replace(/\&aring;/,String.fromCharCode(229));
   umwandeltemp = umwandeltemp.replace(/\&aelig;/,String.fromCharCode(230));
   umwandeltemp = umwandeltemp.replace(/\&ccedil;/,String.fromCharCode(231));
   umwandeltemp = umwandeltemp.replace(/\&egrave;/,String.fromCharCode(232));
   umwandeltemp = umwandeltemp.replace(/\&eacute;/,String.fromCharCode(233));
   umwandeltemp = umwandeltemp.replace(/\&ecirc;/,String.fromCharCode(234));
   umwandeltemp = umwandeltemp.replace(/\&euml;/,String.fromCharCode(235));
   umwandeltemp = umwandeltemp.replace(/\&igrave;/,String.fromCharCode(236));
   umwandeltemp = umwandeltemp.replace(/\&iacute;/,String.fromCharCode(237));
   umwandeltemp = umwandeltemp.replace(/\&icirc;/,String.fromCharCode(238));
   umwandeltemp = umwandeltemp.replace(/\&iuml;/,String.fromCharCode(239));
   umwandeltemp = umwandeltemp.replace(/\&eth;/,String.fromCharCode(240));
   umwandeltemp = umwandeltemp.replace(/\&ntilde;/,String.fromCharCode(241));
   umwandeltemp = umwandeltemp.replace(/\&ograve;/,String.fromCharCode(242));
   umwandeltemp = umwandeltemp.replace(/\&oacute;/,String.fromCharCode(243));
   umwandeltemp = umwandeltemp.replace(/\&ocirc;/,String.fromCharCode(244));
   umwandeltemp = umwandeltemp.replace(/\&otilde;/,String.fromCharCode(245));
   umwandeltemp = umwandeltemp.replace(/\&ouml;/,String.fromCharCode(246));
   umwandeltemp = umwandeltemp.replace(/\&divide;/,String.fromCharCode(247));
   umwandeltemp = umwandeltemp.replace(/\&oslash;/,String.fromCharCode(248));
   umwandeltemp = umwandeltemp.replace(/\&ugrave;/,String.fromCharCode(249));
   umwandeltemp = umwandeltemp.replace(/\&uacute;/,String.fromCharCode(250));
   umwandeltemp = umwandeltemp.replace(/\&ucirc;/,String.fromCharCode(251));
   umwandeltemp = umwandeltemp.replace(/\&uuml;/,String.fromCharCode(252));
   umwandeltemp = umwandeltemp.replace(/\&yacute;/,String.fromCharCode(253));
   umwandeltemp = umwandeltemp.replace(/\&thorn;/,String.fromCharCode(254));
   umwandeltemp = umwandeltemp.replace(/\&yuml;/,String.fromCharCode(255));
   umwandeltemp = umwandeltemp.replace(/\&iquest;/,String.fromCharCode(191));
   umwandeltemp = umwandeltemp.replace(/\&iexcl;/,String.fromCharCode(161));
   umwandeltemp = umwandeltemp.replace(/\&scaron;/,String.fromCharCode(353));
   umwandeltemp = umwandeltemp.replace(/\&Scaron;/,String.fromCharCode(352));
   umwandeltemp = umwandeltemp.replace(/\&hellip;/,"...");
   umwandeltemp = umwandeltemp.replace(/\&nbsp;/," ");
   umwandeltemp = umwandeltemp.replace(/\&rsquo;/,"'");

   umwandeltemp = umwandeltemp.replace(/\&auml;/,"ä");
   umwandeltemp = umwandeltemp.replace(/\&Auml;/,"Ä");
   umwandeltemp = umwandeltemp.replace(/\&ouml;/,"ö");
   umwandeltemp = umwandeltemp.replace(/\&Ouml;/,"Ö");
   umwandeltemp = umwandeltemp.replace(/\&uuml;/,"ü");
   umwandeltemp = umwandeltemp.replace(/\&Uuml;/,"Ü");
   
   
   
 if (sprache=="griechisch") {
 

   umwandeltemp = umwandeltemp.replace(/\&Alpha;/,String.fromCharCode(913));
   umwandeltemp = umwandeltemp.replace(/\&alpha;/,String.fromCharCode(945));
   umwandeltemp = umwandeltemp.replace(/\&Beta;/,String.fromCharCode(914));
   umwandeltemp = umwandeltemp.replace(/\&beta;/,String.fromCharCode(946));
   umwandeltemp = umwandeltemp.replace(/\&Gamma;/,String.fromCharCode(915));
   umwandeltemp = umwandeltemp.replace(/\&gamma;/,String.fromCharCode(947));
   umwandeltemp = umwandeltemp.replace(/\&Delta;/,String.fromCharCode(916));
   umwandeltemp = umwandeltemp.replace(/\&delta;/,String.fromCharCode(948));
   umwandeltemp = umwandeltemp.replace(/\&Epsilon;/,String.fromCharCode(917));
   umwandeltemp = umwandeltemp.replace(/\&epsilon;/,String.fromCharCode(949));
   umwandeltemp = umwandeltemp.replace(/\&Zeta;/,String.fromCharCode(918));
   umwandeltemp = umwandeltemp.replace(/\&zeta;/,String.fromCharCode(950));
   umwandeltemp = umwandeltemp.replace(/\&Eta;/,String.fromCharCode(919));
   umwandeltemp = umwandeltemp.replace(/\&eta;/,String.fromCharCode(951));
   umwandeltemp = umwandeltemp.replace(/\&Theta;/,String.fromCharCode(920));
   umwandeltemp = umwandeltemp.replace(/\&theta;/,String.fromCharCode(952));
   umwandeltemp = umwandeltemp.replace(/\&thetasym;/,"");
   umwandeltemp = umwandeltemp.replace(/\&Iota;/,String.fromCharCode(921));
   umwandeltemp = umwandeltemp.replace(/\&iota;/,String.fromCharCode(953));
   umwandeltemp = umwandeltemp.replace(/\&Kappa;/,String.fromCharCode(922));
   umwandeltemp = umwandeltemp.replace(/\&kappa;/,String.fromCharCode(954));
   umwandeltemp = umwandeltemp.replace(/\&Lambda;/,String.fromCharCode(923));
   umwandeltemp = umwandeltemp.replace(/\&lambda;/,String.fromCharCode(955));
   umwandeltemp = umwandeltemp.replace(/\&Mu;/,String.fromCharCode(924));
   umwandeltemp = umwandeltemp.replace(/\&mu;/,String.fromCharCode(956));
   umwandeltemp = umwandeltemp.replace(/\&Nu;/,String.fromCharCode(925));
   umwandeltemp = umwandeltemp.replace(/\&nu;/,String.fromCharCode(957));
   umwandeltemp = umwandeltemp.replace(/\&Xi;/,String.fromCharCode(926));
   umwandeltemp = umwandeltemp.replace(/\&xi;/,String.fromCharCode(958));
   umwandeltemp = umwandeltemp.replace(/\&Omicron;/,String.fromCharCode(927));
   umwandeltemp = umwandeltemp.replace(/\&omicron;/,String.fromCharCode(959));
   umwandeltemp = umwandeltemp.replace(/\&Pi;/,String.fromCharCode(928));
   umwandeltemp = umwandeltemp.replace(/\&pi;/,String.fromCharCode(960));
   umwandeltemp = umwandeltemp.replace(/\&Rho;/,String.fromCharCode(929));
   umwandeltemp = umwandeltemp.replace(/\&rho;/,String.fromCharCode(961));
   umwandeltemp = umwandeltemp.replace(/\&Sigma;/,String.fromCharCode(931));
   umwandeltemp = umwandeltemp.replace(/\&sigma;/,String.fromCharCode(963));
   umwandeltemp = umwandeltemp.replace(/\&Tau;/,String.fromCharCode(932));
   umwandeltemp = umwandeltemp.replace(/\&tau;/,String.fromCharCode(964));
   umwandeltemp = umwandeltemp.replace(/\&Upsilon;/,String.fromCharCode(933));
   umwandeltemp = umwandeltemp.replace(/\&upsilon;/,String.fromCharCode(965));
   umwandeltemp = umwandeltemp.replace(/\&Phi;/,String.fromCharCode(934));
   umwandeltemp = umwandeltemp.replace(/\&phi;/,String.fromCharCode(966));
   umwandeltemp = umwandeltemp.replace(/\&Chi;/,String.fromCharCode(935));
   umwandeltemp = umwandeltemp.replace(/\&chi;/,String.fromCharCode(967));
   umwandeltemp = umwandeltemp.replace(/\&Psi;/,String.fromCharCode(936));
   umwandeltemp = umwandeltemp.replace(/\&psi;/,String.fromCharCode(968));
   umwandeltemp = umwandeltemp.replace(/\&Omega;/,String.fromCharCode(937));
   umwandeltemp = umwandeltemp.replace(/\&omega;/,String.fromCharCode(969));
   umwandeltemp = umwandeltemp.replace(/\&rsquo;/,"");

   umwandeltemp = umwandeltemp.replace(/\&#940;/,String.fromCharCode(940));
   umwandeltemp = umwandeltemp.replace(/\&#941;/,String.fromCharCode(941));
   umwandeltemp = umwandeltemp.replace(/\&#943;/,String.fromCharCode(943));
   umwandeltemp = umwandeltemp.replace(/\&#972;/,String.fromCharCode(972));
   umwandeltemp = umwandeltemp.replace(/\&#973;/,String.fromCharCode(973));
   umwandeltemp = umwandeltemp.replace(/\&#974;/,String.fromCharCode(974));
   umwandeltemp = umwandeltemp.replace(/\&sigmaf;/,"s");


   umwandeltemp = umwandeltemp.replace(/\&#913;/,String.fromCharCode(913));
   umwandeltemp = umwandeltemp.replace(/\&#945;/,String.fromCharCode(945));
   umwandeltemp = umwandeltemp.replace(/\&#914;/,String.fromCharCode(914));
   umwandeltemp = umwandeltemp.replace(/\&#946;/,String.fromCharCode(946));
   umwandeltemp = umwandeltemp.replace(/\&#915;/,String.fromCharCode(915));
   umwandeltemp = umwandeltemp.replace(/\&#947;/,String.fromCharCode(947));
   umwandeltemp = umwandeltemp.replace(/\&#916;/,String.fromCharCode(916));
   umwandeltemp = umwandeltemp.replace(/\&#948;/,String.fromCharCode(948));
   umwandeltemp = umwandeltemp.replace(/\&#917;/,String.fromCharCode(917));
   umwandeltemp = umwandeltemp.replace(/\&#949;/,String.fromCharCode(949));
   umwandeltemp = umwandeltemp.replace(/\&#918;/,String.fromCharCode(918));
   umwandeltemp = umwandeltemp.replace(/\&#950;/,String.fromCharCode(950));
   umwandeltemp = umwandeltemp.replace(/\&#919;/,String.fromCharCode(919));
   umwandeltemp = umwandeltemp.replace(/\&#951;/,String.fromCharCode(951));
   umwandeltemp = umwandeltemp.replace(/\&#920;/,String.fromCharCode(920));
   umwandeltemp = umwandeltemp.replace(/\&#952;/,String.fromCharCode(952));
   umwandeltemp = umwandeltemp.replace(/\&#921;/,String.fromCharCode(921));
   umwandeltemp = umwandeltemp.replace(/\&#953;/,String.fromCharCode(953));
   umwandeltemp = umwandeltemp.replace(/\&#922;/,String.fromCharCode(922));
   umwandeltemp = umwandeltemp.replace(/\&#954;/,String.fromCharCode(954));
   umwandeltemp = umwandeltemp.replace(/\&#923;/,String.fromCharCode(923));
   umwandeltemp = umwandeltemp.replace(/\&#955;/,String.fromCharCode(955));
   umwandeltemp = umwandeltemp.replace(/\&#924;/,String.fromCharCode(924));
   umwandeltemp = umwandeltemp.replace(/\&#956;/,String.fromCharCode(956));
   umwandeltemp = umwandeltemp.replace(/\&#925;/,String.fromCharCode(925));
   umwandeltemp = umwandeltemp.replace(/\&#957;/,String.fromCharCode(957));
   umwandeltemp = umwandeltemp.replace(/\&#926;/,String.fromCharCode(926));
   umwandeltemp = umwandeltemp.replace(/\&#958;/,String.fromCharCode(958));
   umwandeltemp = umwandeltemp.replace(/\&#927;/,String.fromCharCode(927));
   umwandeltemp = umwandeltemp.replace(/\&#959;/,String.fromCharCode(959));
   umwandeltemp = umwandeltemp.replace(/\&#928;/,String.fromCharCode(928));
   umwandeltemp = umwandeltemp.replace(/\&#960;/,String.fromCharCode(960));
   umwandeltemp = umwandeltemp.replace(/\&#929;/,String.fromCharCode(929));
   umwandeltemp = umwandeltemp.replace(/\&#961;/,String.fromCharCode(961));
   umwandeltemp = umwandeltemp.replace(/\&#931;/,String.fromCharCode(931));
   umwandeltemp = umwandeltemp.replace(/\&#963;/,String.fromCharCode(963));
   umwandeltemp = umwandeltemp.replace(/\&#932;/,String.fromCharCode(932));
   umwandeltemp = umwandeltemp.replace(/\&#964;/,String.fromCharCode(964));
   umwandeltemp = umwandeltemp.replace(/\&#933;/,String.fromCharCode(933));
   umwandeltemp = umwandeltemp.replace(/\&#965;/,String.fromCharCode(965));
   umwandeltemp = umwandeltemp.replace(/\&#934;/,String.fromCharCode(934));
   umwandeltemp = umwandeltemp.replace(/\&#966;/,String.fromCharCode(966));
   umwandeltemp = umwandeltemp.replace(/\&#935;/,String.fromCharCode(935));
   umwandeltemp = umwandeltemp.replace(/\&#967;/,String.fromCharCode(967));
   umwandeltemp = umwandeltemp.replace(/\&#936;/,String.fromCharCode(936));
   umwandeltemp = umwandeltemp.replace(/\&#968;/,String.fromCharCode(968));
   umwandeltemp = umwandeltemp.replace(/\&#937;/,String.fromCharCode(937));
   umwandeltemp = umwandeltemp.replace(/\&#969;/,String.fromCharCode(969));
}
     
   
   

   if (umwandeltemp.indexOf("&#")>-1) {

     //umwandeltemp = umwandeltemp.replace(/\(/,"mm");
     //umwandeltemp = umwandeltemp.replace(/\)/,"mm");
     //umwandeltemp=suchenersetzen (umwandeltemp,"(","");
     //umwandeltemp=suchenersetzen (umwandeltemp,")","");

     var umwandel_p1 = umwandeltemp.indexOf("&#");
     var umwandel_p2 = umwandeltemp.indexOf(";");
     var umwandel_sx = umwandeltemp.substr(umwandel_p1+2,umwandel_p2-umwandel_p1-2);
     var umwandel_s1 = umwandeltemp.substr(0,umwandel_p1);
     var umwandel_s2 = umwandeltemp.substr(umwandel_p2+1);
     //alert (umwandel_s1+" ##### "+umwandel_sx+" ##### "+umwandel_s2);
     if (umwandel_sx>0) { umwandeltemp=umwandel_s1+String.fromCharCode(umwandel_sx)+umwandel_s2; }
   }



}



   if (umwandeltemp.indexOf("/")>-1) {
   umwandeltemp = umwandeltemp.replace(/\/c/,String.fromCharCode(263));
   umwandeltemp = umwandeltemp.replace(/\/C/,String.fromCharCode(262));
   umwandeltemp = umwandeltemp.replace(/\/s/,String.fromCharCode(347));   
   umwandeltemp = umwandeltemp.replace(/\/S/,String.fromCharCode(346));
   umwandeltemp = umwandeltemp.replace(/\/n/,String.fromCharCode(324));
   umwandeltemp = umwandeltemp.replace(/\/N/,String.fromCharCode(323));
   umwandeltemp = umwandeltemp.replace(/\/z/,String.fromCharCode(378));
   umwandeltemp = umwandeltemp.replace(/\/Z/,String.fromCharCode(377));
   umwandeltemp = umwandeltemp.replace(/\/l/,String.fromCharCode(322));
   umwandeltemp = umwandeltemp.replace(/\/L/,String.fromCharCode(321));
   umwandeltemp = umwandeltemp.replace(/\/d/,String.fromCharCode(271));
   umwandeltemp = umwandeltemp.replace(/\/t/,String.fromCharCode(357));
   umwandeltemp = umwandeltemp.replace(/\/A/,String.fromCharCode(258));   
   umwandeltemp = umwandeltemp.replace(/\/a/,String.fromCharCode(259));
}
   if (umwandeltemp.indexOf("#")>-1) {
   umwandeltemp = umwandeltemp.replace(/#s/,String.fromCharCode(351));
   umwandeltemp = umwandeltemp.replace(/#S/,String.fromCharCode(350));
   umwandeltemp = umwandeltemp.replace(/#t/,String.fromCharCode(355));
   umwandeltemp = umwandeltemp.replace(/#T/,String.fromCharCode(354));
   umwandeltemp = umwandeltemp.replace(/#a/,String.fromCharCode(261));
   umwandeltemp = umwandeltemp.replace(/#A/,String.fromCharCode(260));
   umwandeltemp = umwandeltemp.replace(/#e/,String.fromCharCode(281));
   umwandeltemp = umwandeltemp.replace(/#E/,String.fromCharCode(280));
   umwandeltemp = umwandeltemp.replace(/#d/,String.fromCharCode(273));
   umwandeltemp = umwandeltemp.replace(/#D/,String.fromCharCode(272));

   umwandeltemp = umwandeltemp.replace(/#ü/,String.fromCharCode(369));
   umwandeltemp = umwandeltemp.replace(/#Ü/,String.fromCharCode(368));
   umwandeltemp = umwandeltemp.replace(/#ö/,String.fromCharCode(337));
   umwandeltemp = umwandeltemp.replace(/#Ö/,String.fromCharCode(336));
   umwandeltemp = umwandeltemp.replace(/#i/,String.fromCharCode(303));
   umwandeltemp = umwandeltemp.replace(/#I/,String.fromCharCode(302));
   umwandeltemp = umwandeltemp.replace(/#l/,String.fromCharCode(318));
   umwandeltemp = umwandeltemp.replace(/#L/,String.fromCharCode(317));
   umwandeltemp = umwandeltemp.replace(/#u/,String.fromCharCode(371));
   umwandeltemp = umwandeltemp.replace(/#U/,String.fromCharCode(370));
}
   umwandeltemp = umwandeltemp.replace(/\*!/,String.fromCharCode(161));
   umwandeltemp = umwandeltemp.replace(/\*\?/,String.fromCharCode(191));
   umwandeltemp = umwandeltemp.replace(/\*n/,String.fromCharCode(241));
   umwandeltemp = umwandeltemp.replace(/\*N/,String.fromCharCode(209));
   umwandeltemp = umwandeltemp.replace(/\*z/,String.fromCharCode(380));
   umwandeltemp = umwandeltemp.replace(/\*Z/,String.fromCharCode(379));
   umwandeltemp = umwandeltemp.replace(/\*u/,String.fromCharCode(367));
   umwandeltemp = umwandeltemp.replace(/\*U/,String.fromCharCode(366));
   umwandeltemp = umwandeltemp.replace(/\*g/,String.fromCharCode(287));
   umwandeltemp = umwandeltemp.replace(/\*G/,String.fromCharCode(286));
   umwandeltemp = umwandeltemp.replace(/\*i/,String.fromCharCode(305));
   umwandeltemp = umwandeltemp.replace(/\*I/,String.fromCharCode(304));
   umwandeltemp = umwandeltemp.replace(/\*D/,String.fromCharCode(208));
   umwandeltemp = umwandeltemp.replace(/\*d/,String.fromCharCode(240));
   umwandeltemp = umwandeltemp.replace(/\*E/,String.fromCharCode(278));
   umwandeltemp = umwandeltemp.replace(/\*e/,String.fromCharCode(279));
   umwandeltemp = umwandeltemp.replace(/\*t/,String.fromCharCode(222));
   umwandeltemp = umwandeltemp.replace(/\*T/,String.fromCharCode(254));


   if (umwandeltemp.indexOf("_")>-1) {
   umwandeltemp = umwandeltemp.replace(/_g/,String.fromCharCode(287));
   umwandeltemp = umwandeltemp.replace(/_G/,String.fromCharCode(286));
   umwandeltemp = umwandeltemp.replace(/_e/,String.fromCharCode(283));
   umwandeltemp = umwandeltemp.replace(/_E/,String.fromCharCode(282));
   umwandeltemp = umwandeltemp.replace(/_c/,String.fromCharCode(269));
   umwandeltemp = umwandeltemp.replace(/_C/,String.fromCharCode(268));
   umwandeltemp = umwandeltemp.replace(/_D/,String.fromCharCode(270));
   umwandeltemp = umwandeltemp.replace(/_l/,String.fromCharCode(314));
   umwandeltemp = umwandeltemp.replace(/_L/,String.fromCharCode(313));
   umwandeltemp = umwandeltemp.replace(/_n/,String.fromCharCode(328));
   umwandeltemp = umwandeltemp.replace(/_N/,String.fromCharCode(327));
   umwandeltemp = umwandeltemp.replace(/_r/,String.fromCharCode(345));
   umwandeltemp = umwandeltemp.replace(/_R/,String.fromCharCode(344));
   umwandeltemp = umwandeltemp.replace(/_s/,String.fromCharCode(353));
   umwandeltemp = umwandeltemp.replace(/_S/,String.fromCharCode(352));
   umwandeltemp = umwandeltemp.replace(/_T/,String.fromCharCode(356));
   umwandeltemp = umwandeltemp.replace(/_z/,String.fromCharCode(382));
   umwandeltemp = umwandeltemp.replace(/_Z/,String.fromCharCode(381));
}
if (umwandeltemp.indexOf("~")>-1) {
   umwandeltemp = umwandeltemp.replace(/~a/,String.fromCharCode(227));
   umwandeltemp = umwandeltemp.replace(/~A/,String.fromCharCode(195));
   umwandeltemp = umwandeltemp.replace(/~o/,String.fromCharCode(245));
   umwandeltemp = umwandeltemp.replace(/~O/,String.fromCharCode(213));
   umwandeltemp = umwandeltemp.replace(/~n/,String.fromCharCode(241));
   umwandeltemp = umwandeltemp.replace(/~N/,String.fromCharCode(209));
   umwandeltemp = umwandeltemp.replace(/~u/,String.fromCharCode(363));
   umwandeltemp = umwandeltemp.replace(/~U/,String.fromCharCode(362));
}

   umwandeltemp = umwandeltemp.replace(/`a/,String.fromCharCode(224));
   umwandeltemp = umwandeltemp.replace(/`A/,String.fromCharCode(192));
   umwandeltemp = umwandeltemp.replace(/`e/,String.fromCharCode(232));
   umwandeltemp = umwandeltemp.replace(/`E/,String.fromCharCode(200));
   umwandeltemp = umwandeltemp.replace(/`i/,String.fromCharCode(236));
   umwandeltemp = umwandeltemp.replace(/`I/,String.fromCharCode(204));
   umwandeltemp = umwandeltemp.replace(/`o/,String.fromCharCode(242));
   umwandeltemp = umwandeltemp.replace(/`O/,String.fromCharCode(210));
   umwandeltemp = umwandeltemp.replace(/`u/,String.fromCharCode(249));
   umwandeltemp = umwandeltemp.replace(/`U/,String.fromCharCode(217));

if (umwandeltemp.indexOf(String.fromCharCode(180))>-1) {
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"A",String.fromCharCode(193));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"a",String.fromCharCode(225));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"E",String.fromCharCode(201));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"e",String.fromCharCode(233));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"I",String.fromCharCode(205));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"i",String.fromCharCode(237));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"O",String.fromCharCode(211));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"o",String.fromCharCode(243));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"U",String.fromCharCode(218));
   umwandeltemp = umwandeltemp.replace(String.fromCharCode(180)+"u",String.fromCharCode(250));
}
if (umwandeltemp.indexOf("^")>-1) {
   umwandeltemp = umwandeltemp.replace(/\^A/,String.fromCharCode(194));
   umwandeltemp = umwandeltemp.replace(/\^a/,String.fromCharCode(226));
   umwandeltemp = umwandeltemp.replace(/\^E/,String.fromCharCode(202));
   umwandeltemp = umwandeltemp.replace(/\^e/,String.fromCharCode(234));
   umwandeltemp = umwandeltemp.replace(/\^I/,String.fromCharCode(206));
   umwandeltemp = umwandeltemp.replace(/\^i/,String.fromCharCode(238));
   umwandeltemp = umwandeltemp.replace(/\^O/,String.fromCharCode(212));
   umwandeltemp = umwandeltemp.replace(/\^o/,String.fromCharCode(244));
   umwandeltemp = umwandeltemp.replace(/\^U/,String.fromCharCode(219));
   umwandeltemp = umwandeltemp.replace(/\^u/,String.fromCharCode(251));
}
if (umwandeltemp.indexOf(":")>-1) {
   umwandeltemp = umwandeltemp.replace(/:a/,"ä");
   umwandeltemp = umwandeltemp.replace(/:A/,"Ä");
   umwandeltemp = umwandeltemp.replace(/:e/,String.fromCharCode(235));
   umwandeltemp = umwandeltemp.replace(/:E/,String.fromCharCode(203));
   umwandeltemp = umwandeltemp.replace(/:i/,String.fromCharCode(239));
   umwandeltemp = umwandeltemp.replace(/:I/,String.fromCharCode(207));
   umwandeltemp = umwandeltemp.replace(/:o/,"ö");
   umwandeltemp = umwandeltemp.replace(/:O/,"Ö");
   umwandeltemp = umwandeltemp.replace(/:u/,"ü");
   umwandeltemp = umwandeltemp.replace(/:U/,"Ü");
}
if (umwandeltemp.indexOf("+")>-1) {
   umwandeltemp = umwandeltemp.replace(/\+A/,String.fromCharCode(256));
   umwandeltemp = umwandeltemp.replace(/\+a/,String.fromCharCode(257));
   umwandeltemp = umwandeltemp.replace(/\+E/,String.fromCharCode(274));
   umwandeltemp = umwandeltemp.replace(/\+e/,String.fromCharCode(275));
   umwandeltemp = umwandeltemp.replace(/\+I/,String.fromCharCode(298));
   umwandeltemp = umwandeltemp.replace(/\+i/,String.fromCharCode(299));
   umwandeltemp = umwandeltemp.replace(/\+O/,String.fromCharCode(332));
   umwandeltemp = umwandeltemp.replace(/\+o/,String.fromCharCode(333));
   umwandeltemp = umwandeltemp.replace(/\+U/,String.fromCharCode(362));
   umwandeltemp = umwandeltemp.replace(/\+u/,String.fromCharCode(363));

   umwandeltemp = umwandeltemp.replace(/\+C/,String.fromCharCode(199));
   umwandeltemp = umwandeltemp.replace(/\+c/,String.fromCharCode(231));
   umwandeltemp = umwandeltemp.replace(/\+G/,String.fromCharCode(290));
   umwandeltemp = umwandeltemp.replace(/\+g/,String.fromCharCode(291));
   umwandeltemp = umwandeltemp.replace(/\+K/,String.fromCharCode(310));
   umwandeltemp = umwandeltemp.replace(/\+k/,String.fromCharCode(311));
   umwandeltemp = umwandeltemp.replace(/\+L/,String.fromCharCode(315));
   umwandeltemp = umwandeltemp.replace(/\+l/,String.fromCharCode(316));
   umwandeltemp = umwandeltemp.replace(/\+N/,String.fromCharCode(325));
   umwandeltemp = umwandeltemp.replace(/\+n/,String.fromCharCode(326));
   umwandeltemp = umwandeltemp.replace(/\+R/,String.fromCharCode(342));
   umwandeltemp = umwandeltemp.replace(/\+r/,String.fromCharCode(343));
}
   umwandeltemp = umwandeltemp.replace(/\&ndash;/,"-");
   //umwandeltemp = umwandeltemp.replace(/-/,"");




   
    // Chinesisch, Vietnamesisch:

if (sprache=="chinesisch" || sprache=="kantonesisch" ||sprache=="shanghaichinesisch") {
    umwandeltemp = umwandeltemp.replace(/a1/,String.fromCharCode(257));
    umwandeltemp = umwandeltemp.replace(/e1/,String.fromCharCode(275));
    umwandeltemp = umwandeltemp.replace(/i1/,String.fromCharCode(299));

    umwandeltemp = umwandeltemp.replace(/o1/,String.fromCharCode(333));
    umwandeltemp = umwandeltemp.replace(/u1/,String.fromCharCode(363));
    umwandeltemp = umwandeltemp.replace(/ü1/,String.fromCharCode(470));
    umwandeltemp = umwandeltemp.replace(/A1/,String.fromCharCode(256));
    umwandeltemp = umwandeltemp.replace(/E1/,String.fromCharCode(274));
    umwandeltemp = umwandeltemp.replace(/I1/,String.fromCharCode(298));
    umwandeltemp = umwandeltemp.replace(/O1/,String.fromCharCode(332));
    umwandeltemp = umwandeltemp.replace(/U1/,String.fromCharCode(362));
    umwandeltemp = umwandeltemp.replace(/a2/,String.fromCharCode(225));
    umwandeltemp = umwandeltemp.replace(/e2/,String.fromCharCode(233));
    umwandeltemp = umwandeltemp.replace(/i2/,String.fromCharCode(237));
    umwandeltemp = umwandeltemp.replace(/o2/,String.fromCharCode(243));
    umwandeltemp = umwandeltemp.replace(/u2/,String.fromCharCode(250));
    umwandeltemp = umwandeltemp.replace(/ü2/,String.fromCharCode(472));
    umwandeltemp = umwandeltemp.replace(/A2/,String.fromCharCode(193));
    umwandeltemp = umwandeltemp.replace(/E2/,String.fromCharCode(201));
    umwandeltemp = umwandeltemp.replace(/I2/,String.fromCharCode(205));
    umwandeltemp = umwandeltemp.replace(/O2/,String.fromCharCode(211));
    umwandeltemp = umwandeltemp.replace(/U2/,String.fromCharCode(218));
    umwandeltemp = umwandeltemp.replace(/a3/,String.fromCharCode(462));
    umwandeltemp = umwandeltemp.replace(/e3/,String.fromCharCode(283));
    umwandeltemp = umwandeltemp.replace(/i3/,String.fromCharCode(464));
    umwandeltemp = umwandeltemp.replace(/o3/,String.fromCharCode(466));
    umwandeltemp = umwandeltemp.replace(/u3/,String.fromCharCode(468));
    umwandeltemp = umwandeltemp.replace(/ü3/,String.fromCharCode(474));
    umwandeltemp = umwandeltemp.replace(/a4/,String.fromCharCode(224));
    umwandeltemp = umwandeltemp.replace(/e4/,String.fromCharCode(232));
    umwandeltemp = umwandeltemp.replace(/i4/,String.fromCharCode(236));
    umwandeltemp = umwandeltemp.replace(/o4/,String.fromCharCode(242));
    umwandeltemp = umwandeltemp.replace(/u4/,String.fromCharCode(249));
    umwandeltemp = umwandeltemp.replace(/ü4/,String.fromCharCode(476));
    umwandeltemp = umwandeltemp.replace(/A4/,String.fromCharCode(192));
    umwandeltemp = umwandeltemp.replace(/E4/,String.fromCharCode(200));
    umwandeltemp = umwandeltemp.replace(/I4/,String.fromCharCode(204));
    umwandeltemp = umwandeltemp.replace(/O4/,String.fromCharCode(210));
    umwandeltemp = umwandeltemp.replace(/U4/,String.fromCharCode(217));
}
if (sprache=="vietnamesisch") {

    umwandeltemp = umwandeltemp.replace(/A1/,String.fromCharCode(192));
    umwandeltemp = umwandeltemp.replace(/a1/,String.fromCharCode(224));
    umwandeltemp = umwandeltemp.replace(/A2/,String.fromCharCode(258));
    umwandeltemp = umwandeltemp.replace(/a2/,String.fromCharCode(259));
    umwandeltemp = umwandeltemp.replace(/A4/,String.fromCharCode(195));
    umwandeltemp = umwandeltemp.replace(/a4/,String.fromCharCode(227));
    umwandeltemp = umwandeltemp.replace(/A6/,String.fromCharCode(193));
    umwandeltemp = umwandeltemp.replace(/a6/,String.fromCharCode(225));
    umwandeltemp = umwandeltemp.replace(/A8/,String.fromCharCode(194));
    umwandeltemp = umwandeltemp.replace(/a8/,String.fromCharCode(226));

    umwandeltemp = umwandeltemp.replace(/E1/,String.fromCharCode(200));
    umwandeltemp = umwandeltemp.replace(/e1/,String.fromCharCode(232));
    umwandeltemp = umwandeltemp.replace(/E2/,String.fromCharCode(276));
    umwandeltemp = umwandeltemp.replace(/e2/,String.fromCharCode(277));
    umwandeltemp = umwandeltemp.replace(/E6/,String.fromCharCode(201));
    umwandeltemp = umwandeltemp.replace(/e6/,String.fromCharCode(233));
    umwandeltemp = umwandeltemp.replace(/E8/,String.fromCharCode(202));
    umwandeltemp = umwandeltemp.replace(/e8/,String.fromCharCode(234));

    umwandeltemp = umwandeltemp.replace(/I1/,String.fromCharCode(204));
    umwandeltemp = umwandeltemp.replace(/i1/,String.fromCharCode(236));
    umwandeltemp = umwandeltemp.replace(/I2/,String.fromCharCode(300));
    umwandeltemp = umwandeltemp.replace(/i2/,String.fromCharCode(301));
    umwandeltemp = umwandeltemp.replace(/I3/,String.fromCharCode(7880));
    umwandeltemp = umwandeltemp.replace(/i3/,String.fromCharCode(7881));
    umwandeltemp = umwandeltemp.replace(/I4/,String.fromCharCode(296));
    umwandeltemp = umwandeltemp.replace(/i4/,String.fromCharCode(297));
    umwandeltemp = umwandeltemp.replace(/I5/,String.fromCharCode(7882));
    umwandeltemp = umwandeltemp.replace(/i5/,String.fromCharCode(7883));
    umwandeltemp = umwandeltemp.replace(/I6/,String.fromCharCode(205));
    umwandeltemp = umwandeltemp.replace(/i6/,String.fromCharCode(237));
    umwandeltemp = umwandeltemp.replace(/I8/,String.fromCharCode(206));
    umwandeltemp = umwandeltemp.replace(/i8/,String.fromCharCode(238));

    umwandeltemp = umwandeltemp.replace(/O1/,String.fromCharCode(210));
    umwandeltemp = umwandeltemp.replace(/o1/,String.fromCharCode(242));
    umwandeltemp = umwandeltemp.replace(/O2/,String.fromCharCode(334));
    umwandeltemp = umwandeltemp.replace(/o2/,String.fromCharCode(335));
    umwandeltemp = umwandeltemp.replace(/O4/,String.fromCharCode(213));
    umwandeltemp = umwandeltemp.replace(/o4/,String.fromCharCode(245));
    umwandeltemp = umwandeltemp.replace(/O6/,String.fromCharCode(211));
    umwandeltemp = umwandeltemp.replace(/o6/,String.fromCharCode(243));
    umwandeltemp = umwandeltemp.replace(/O7/,String.fromCharCode(416));
    umwandeltemp = umwandeltemp.replace(/o7/,String.fromCharCode(417));
    umwandeltemp = umwandeltemp.replace(/O8/,String.fromCharCode(212));
    umwandeltemp = umwandeltemp.replace(/o8/,String.fromCharCode(244));

    umwandeltemp = umwandeltemp.replace(/U1/,String.fromCharCode(217));
    umwandeltemp = umwandeltemp.replace(/u1/,String.fromCharCode(249));
    umwandeltemp = umwandeltemp.replace(/U2/,String.fromCharCode(364));
    umwandeltemp = umwandeltemp.replace(/u2/,String.fromCharCode(365));
    umwandeltemp = umwandeltemp.replace(/U4/,String.fromCharCode(360));
    umwandeltemp = umwandeltemp.replace(/u4/,String.fromCharCode(361));
    umwandeltemp = umwandeltemp.replace(/U6/,String.fromCharCode(218));
    umwandeltemp = umwandeltemp.replace(/u6/,String.fromCharCode(250));
    umwandeltemp = umwandeltemp.replace(/U7/,String.fromCharCode(431));
    umwandeltemp = umwandeltemp.replace(/u7/,String.fromCharCode(432));
    umwandeltemp = umwandeltemp.replace(/U8/,String.fromCharCode(219));
    umwandeltemp = umwandeltemp.replace(/u8/,String.fromCharCode(251));

    umwandeltemp = umwandeltemp.replace(/Y6/,String.fromCharCode(221));
    umwandeltemp = umwandeltemp.replace(/y6/,String.fromCharCode(263));
    umwandeltemp = umwandeltemp.replace(/Y8/,String.fromCharCode(374));
    umwandeltemp = umwandeltemp.replace(/y8/,String.fromCharCode(375));

    umwandeltemp = umwandeltemp.replace(/A5/,String.fromCharCode(7840));
    umwandeltemp = umwandeltemp.replace(/a5/,String.fromCharCode(7841));
    umwandeltemp = umwandeltemp.replace(/A3/,String.fromCharCode(7842));
    umwandeltemp = umwandeltemp.replace(/a3/,String.fromCharCode(7843));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(194)+"6",String.fromCharCode(7844));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(193)+"8",String.fromCharCode(7844));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(226)+"6",String.fromCharCode(7845));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(225)+"8",String.fromCharCode(7845));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(194)+"1",String.fromCharCode(7846));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(192)+"8",String.fromCharCode(7846));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(226)+"1",String.fromCharCode(7847));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(224)+"8",String.fromCharCode(7847));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(194)+"3",String.fromCharCode(7848));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7842)+"8",String.fromCharCode(7848));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(226)+"3",String.fromCharCode(7849));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7843)+"8",String.fromCharCode(7849));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(194)+"4",String.fromCharCode(7850));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(195)+"8",String.fromCharCode(7850));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(226)+"4",String.fromCharCode(7851));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(227)+"8",String.fromCharCode(7851));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(194)+"5",String.fromCharCode(7852));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7840)+"8",String.fromCharCode(7852));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(226)+"5",String.fromCharCode(7853));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7841)+"8",String.fromCharCode(7853));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(193)+"2",String.fromCharCode(7854));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(258)+"6",String.fromCharCode(7854));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(225)+"2",String.fromCharCode(7855));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(259)+"6",String.fromCharCode(7855));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(258)+"1",String.fromCharCode(7856));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(192)+"2",String.fromCharCode(7856));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(259)+"1",String.fromCharCode(7857));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(224)+"2",String.fromCharCode(7857));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7842)+"2",String.fromCharCode(7858));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(258)+"3",String.fromCharCode(7858));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7843)+"2",String.fromCharCode(7859));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(259)+"3",String.fromCharCode(7859));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(195)+"2",String.fromCharCode(7860));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(258)+"4",String.fromCharCode(7860));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(227)+"2",String.fromCharCode(7861));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(259)+"4",String.fromCharCode(7861));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7840)+"2",String.fromCharCode(7862));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(258)+"5",String.fromCharCode(7862));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7841)+"2",String.fromCharCode(7863));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(259)+"5",String.fromCharCode(7863));

    umwandeltemp = umwandeltemp.replace(/E5/,String.fromCharCode(7864));
    umwandeltemp = umwandeltemp.replace(/e5/,String.fromCharCode(7865));
    umwandeltemp = umwandeltemp.replace(/E3/,String.fromCharCode(7866));
    umwandeltemp = umwandeltemp.replace(/e3/,String.fromCharCode(7867));
    umwandeltemp = umwandeltemp.replace(/E4/,String.fromCharCode(7868));
    umwandeltemp = umwandeltemp.replace(/e4/,String.fromCharCode(7869));

    umwandeltemp = umwandeltemp.replace(String.fromCharCode(202)+"6",String.fromCharCode(7870));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(201)+"8",String.fromCharCode(7870));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(234)+"6",String.fromCharCode(7871));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(233)+"8",String.fromCharCode(7871));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(202)+"1",String.fromCharCode(7872));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(200)+"8",String.fromCharCode(7872));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(226)+"1",String.fromCharCode(7873));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(232)+"8",String.fromCharCode(7873));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(202)+"3",String.fromCharCode(7874));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7866)+"8",String.fromCharCode(7874));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(234)+"3",String.fromCharCode(7875));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7867)+"8",String.fromCharCode(7875));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(202)+"4",String.fromCharCode(7876));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7868)+"8",String.fromCharCode(7876));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(234)+"4",String.fromCharCode(7877));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7869)+"8",String.fromCharCode(7877));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(202)+"5",String.fromCharCode(7878));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7864)+"8",String.fromCharCode(7878));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(234)+"5",String.fromCharCode(7879));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7865)+"8",String.fromCharCode(7879));

    umwandeltemp = umwandeltemp.replace(/I3/,String.fromCharCode(7880));
    umwandeltemp = umwandeltemp.replace(/i3/,String.fromCharCode(7881));
    umwandeltemp = umwandeltemp.replace(/I5/,String.fromCharCode(7882));
    umwandeltemp = umwandeltemp.replace(/i5/,String.fromCharCode(7883));
    umwandeltemp = umwandeltemp.replace(/O5/,String.fromCharCode(7884));
    umwandeltemp = umwandeltemp.replace(/o5/,String.fromCharCode(7885));
    umwandeltemp = umwandeltemp.replace(/O3/,String.fromCharCode(7886));
    umwandeltemp = umwandeltemp.replace(/o3/,String.fromCharCode(7887));

    umwandeltemp = umwandeltemp.replace(String.fromCharCode(212)+"6",String.fromCharCode(7888));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(211)+"8",String.fromCharCode(7888));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(244)+"6",String.fromCharCode(7889));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(243)+"8",String.fromCharCode(7889));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(212)+"1",String.fromCharCode(7890));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(210)+"8",String.fromCharCode(7890));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(244)+"1",String.fromCharCode(7891));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(242)+"8",String.fromCharCode(7891));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(212)+"3",String.fromCharCode(7892));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7886)+"8",String.fromCharCode(7892));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(244)+"3",String.fromCharCode(7893));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7887)+"8",String.fromCharCode(7893));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(212)+"4",String.fromCharCode(7894));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(213)+"8",String.fromCharCode(7894));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(244)+"4",String.fromCharCode(7895));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(245)+"8",String.fromCharCode(7895));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(212)+"5",String.fromCharCode(7896));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7884)+"8",String.fromCharCode(7896));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(244)+"5",String.fromCharCode(7897));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7885)+"8",String.fromCharCode(7897));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(416)+"6",String.fromCharCode(7898));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(211)+"7",String.fromCharCode(7898));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(417)+"6",String.fromCharCode(7899));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(243)+"7",String.fromCharCode(7899));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(416)+"1",String.fromCharCode(7900));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(210)+"7",String.fromCharCode(7900));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(417)+"1",String.fromCharCode(7901));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(242)+"7",String.fromCharCode(7901));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(416)+"3",String.fromCharCode(7902));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7886)+"7",String.fromCharCode(7902));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(417)+"3",String.fromCharCode(7903));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7887)+"7",String.fromCharCode(7903));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(416)+"4",String.fromCharCode(7904));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(213)+"7",String.fromCharCode(7904));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(417)+"4",String.fromCharCode(7905));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(245)+"7",String.fromCharCode(7905));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(416)+"5",String.fromCharCode(7906));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7884)+"7",String.fromCharCode(7906));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(417)+"5",String.fromCharCode(7907));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7885)+"7",String.fromCharCode(7907));

    umwandeltemp = umwandeltemp.replace(/U5/,String.fromCharCode(7908));
    umwandeltemp = umwandeltemp.replace(/u5/,String.fromCharCode(7909));
    umwandeltemp = umwandeltemp.replace(/U3/,String.fromCharCode(7910));
    umwandeltemp = umwandeltemp.replace(/u3/,String.fromCharCode(7911));

    umwandeltemp = umwandeltemp.replace(String.fromCharCode(431)+"6",String.fromCharCode(7912));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(218)+"7",String.fromCharCode(7912));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(432)+"6",String.fromCharCode(7913));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(250)+"7",String.fromCharCode(7913));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(431)+"1",String.fromCharCode(7914));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(217)+"7",String.fromCharCode(7914));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(432)+"1",String.fromCharCode(7915));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(249)+"7",String.fromCharCode(7915));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(431)+"3",String.fromCharCode(7916));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7910)+"7",String.fromCharCode(7916));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(432)+"3",String.fromCharCode(7917));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7911)+"7",String.fromCharCode(7917));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(431)+"4",String.fromCharCode(7918));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(360)+"7",String.fromCharCode(7918));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(432)+"4",String.fromCharCode(7919));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(361)+"7",String.fromCharCode(7919));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(431)+"5",String.fromCharCode(7920));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7908)+"7",String.fromCharCode(7920));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(432)+"5",String.fromCharCode(7921));
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(7909)+"7",String.fromCharCode(7921));

    umwandeltemp = umwandeltemp.replace(/Y1/,String.fromCharCode(7922));
    umwandeltemp = umwandeltemp.replace(/y1/,String.fromCharCode(7923));
    umwandeltemp = umwandeltemp.replace(/Y5/,String.fromCharCode(7924));
    umwandeltemp = umwandeltemp.replace(/y5/,String.fromCharCode(7925));
    umwandeltemp = umwandeltemp.replace(/Y3/,String.fromCharCode(7926));
    umwandeltemp = umwandeltemp.replace(/y3/,String.fromCharCode(7927));
    umwandeltemp = umwandeltemp.replace(/Y4/,String.fromCharCode(7928));
    umwandeltemp = umwandeltemp.replace(/y4/,String.fromCharCode(7929));

}
if (sprache=="chinesisch" || sprache=="shanghaichinesisch" ||sprache=="kantonesisch") {
    umwandeltemp = umwandeltemp.replace(/a5/,String.fromCharCode(227));
    umwandeltemp = umwandeltemp.replace(/e5/,String.fromCharCode(7869));
    umwandeltemp = umwandeltemp.replace(/i5/,String.fromCharCode(297));
    umwandeltemp = umwandeltemp.replace(/o5/,String.fromCharCode(245));
    umwandeltemp = umwandeltemp.replace(/u5/,String.fromCharCode(361));
    umwandeltemp = umwandeltemp.replace(/y5/,String.fromCharCode(7929));
    umwandeltemp = umwandeltemp.replace(/A5/,String.fromCharCode(195));
    umwandeltemp = umwandeltemp.replace(/E5/,String.fromCharCode(7868));
    umwandeltemp = umwandeltemp.replace(/O5/,String.fromCharCode(213));
    umwandeltemp = umwandeltemp.replace(/U5/,String.fromCharCode(360));
    umwandeltemp = umwandeltemp.replace(/Y5/,String.fromCharCode(7928));

    umwandeltemp = umwandeltemp.replace(/a6/,String.fromCharCode(7843));
    umwandeltemp = umwandeltemp.replace(/e6/,String.fromCharCode(7867));
    umwandeltemp = umwandeltemp.replace(/i6/,String.fromCharCode(7881));
    umwandeltemp = umwandeltemp.replace(/o6/,String.fromCharCode(7887));
    umwandeltemp = umwandeltemp.replace(/u6/,String.fromCharCode(7911));
    umwandeltemp = umwandeltemp.replace(/y6/,String.fromCharCode(7927));
    umwandeltemp = umwandeltemp.replace(/A6/,String.fromCharCode(7842));
    umwandeltemp = umwandeltemp.replace(/E6/,String.fromCharCode(7866));
    umwandeltemp = umwandeltemp.replace(/I6/,String.fromCharCode(7880));
    umwandeltemp = umwandeltemp.replace(/O6/,String.fromCharCode(7886));
    umwandeltemp = umwandeltemp.replace(/U6/,String.fromCharCode(7910));
    umwandeltemp = umwandeltemp.replace(/Y6/,String.fromCharCode(7926));

    umwandeltemp = umwandeltemp.replace(/a7/,String.fromCharCode(7841));
    umwandeltemp = umwandeltemp.replace(/e7/,String.fromCharCode(7865));
    umwandeltemp = umwandeltemp.replace(/i7/,String.fromCharCode(7883));
    umwandeltemp = umwandeltemp.replace(/o7/,String.fromCharCode(7885));
    umwandeltemp = umwandeltemp.replace(/u7/,String.fromCharCode(7909));
    umwandeltemp = umwandeltemp.replace(/y7/,String.fromCharCode(7925));
    umwandeltemp = umwandeltemp.replace(/A7/,String.fromCharCode(7840));
    umwandeltemp = umwandeltemp.replace(/E7/,String.fromCharCode(7864));
    umwandeltemp = umwandeltemp.replace(/I7/,String.fromCharCode(7882));
    umwandeltemp = umwandeltemp.replace(/O7/,String.fromCharCode(7884));
    umwandeltemp = umwandeltemp.replace(/U7/,String.fromCharCode(7908));
    umwandeltemp = umwandeltemp.replace(/Y7/,String.fromCharCode(7924));

    umwandeltemp = umwandeltemp.replace(/a8/,String.fromCharCode(259));
    umwandeltemp = umwandeltemp.replace(/e8/,String.fromCharCode(277));
    umwandeltemp = umwandeltemp.replace(/i8/,String.fromCharCode(301));
    umwandeltemp = umwandeltemp.replace(/o8/,String.fromCharCode(335));
    umwandeltemp = umwandeltemp.replace(/u8/,String.fromCharCode(365));
    umwandeltemp = umwandeltemp.replace(/A8/,String.fromCharCode(258));
    umwandeltemp = umwandeltemp.replace(/E8/,String.fromCharCode(276));
    umwandeltemp = umwandeltemp.replace(/I8/,String.fromCharCode(300));
    umwandeltemp = umwandeltemp.replace(/O8/,String.fromCharCode(334));
    umwandeltemp = umwandeltemp.replace(/U8/,String.fromCharCode(364));

    umwandeltemp = umwandeltemp.replace(/a00/,String.fromCharCode(7845));
    umwandeltemp = umwandeltemp.replace(/e00/,String.fromCharCode(7871));
    umwandeltemp = umwandeltemp.replace(/o00/,String.fromCharCode(7889));

    umwandeltemp = umwandeltemp.replace(/a01/,String.fromCharCode(7847));
    umwandeltemp = umwandeltemp.replace(/e01/,String.fromCharCode(7873));
    umwandeltemp = umwandeltemp.replace(/o01/,String.fromCharCode(7891));

    umwandeltemp = umwandeltemp.replace(/a02/,String.fromCharCode(7849));
    umwandeltemp = umwandeltemp.replace(/e02/,String.fromCharCode(7875));
    umwandeltemp = umwandeltemp.replace(/o02/,String.fromCharCode(7893));

    umwandeltemp = umwandeltemp.replace(/a03/,String.fromCharCode(7851));
    umwandeltemp = umwandeltemp.replace(/e03/,String.fromCharCode(7877));
    umwandeltemp = umwandeltemp.replace(/o03/,String.fromCharCode(7895));

    umwandeltemp = umwandeltemp.replace(/a04/,String.fromCharCode(7853));
    umwandeltemp = umwandeltemp.replace(/e04/,String.fromCharCode(7879));
    umwandeltemp = umwandeltemp.replace(/o04/,String.fromCharCode(7897));

    umwandeltemp = umwandeltemp.replace(/a05/,String.fromCharCode(7855));
    umwandeltemp = umwandeltemp.replace(/a06/,String.fromCharCode(7857));
    umwandeltemp = umwandeltemp.replace(/a07/,String.fromCharCode(7859));
    umwandeltemp = umwandeltemp.replace(/a08/,String.fromCharCode(7861));
    umwandeltemp = umwandeltemp.replace(/a09/,String.fromCharCode(7863));
}

    umwandeltemp = umwandeltemp.replace(String.fromCharCode(1054),"O");
    umwandeltemp = umwandeltemp.replace(String.fromCharCode(1086),"o");
   
   } while (umwandeltemp != umwandeltemptemp && docount<2000)
  return umwandeltemp;
 }










//#####################################################################################


function sonderzeichenumwandeln (wwt2) {

if (!wwt2) var wwt2="";
//Sonderzeichen:

 do { 
 tempp=wwt2;

if (wwt2.indexOf("/")>-1){
 wwt2 = wwt2.replace(/\/c/,String.fromCharCode(263));
 wwt2 = wwt2.replace(/\/C/,String.fromCharCode(262));
 wwt2 = wwt2.replace(/\/s/,String.fromCharCode(347)); 
 wwt2 = wwt2.replace(/\/S/,String.fromCharCode(346));
 wwt2 = wwt2.replace(/\/n/,String.fromCharCode(324));
 wwt2 = wwt2.replace(/\/N/,String.fromCharCode(323));
 wwt2 = wwt2.replace(/\/z/,String.fromCharCode(378));
 wwt2 = wwt2.replace(/\/Z/,String.fromCharCode(377));
 wwt2 = wwt2.replace(/\/l/,String.fromCharCode(322));
 wwt2 = wwt2.replace(/\/L/,String.fromCharCode(321));
 wwt2 = wwt2.replace(/\/d/,String.fromCharCode(271));
 wwt2 = wwt2.replace(/\/t/,String.fromCharCode(357));
 wwt2 = wwt2.replace(/\/a/,String.fromCharCode(259));
 wwt2 = wwt2.replace(/\/A/,String.fromCharCode(258));
}

if (wwt2.indexOf("#")>-1){
 wwt2 = wwt2.replace(/#s/,String.fromCharCode(351));
 wwt2 = wwt2.replace(/#S/,String.fromCharCode(350));
 wwt2 = wwt2.replace(/#t/,String.fromCharCode(355));
 wwt2 = wwt2.replace(/#T/,String.fromCharCode(354));
 wwt2 = wwt2.replace(/#a/,String.fromCharCode(261));
 wwt2 = wwt2.replace(/#A/,String.fromCharCode(260));
 wwt2 = wwt2.replace(/#e/,String.fromCharCode(281));
 wwt2 = wwt2.replace(/#E/,String.fromCharCode(280));

 wwt2 = ersetzen(wwt2,"#"+String.fromCharCode(252),String.fromCharCode(369));
 wwt2 = ersetzen(wwt2,"#"+String.fromCharCode(220),String.fromCharCode(368));
 wwt2 = ersetzen(wwt2,"#"+String.fromCharCode(246),String.fromCharCode(337));
 wwt2 = ersetzen(wwt2,"#"+String.fromCharCode(214),String.fromCharCode(336));
 wwt2 = wwt2.replace(/#i/,String.fromCharCode(237));
 wwt2 = wwt2.replace(/#I/,String.fromCharCode(314));
 wwt2 = wwt2.replace(/#d/,String.fromCharCode(273));
 wwt2 = wwt2.replace(/#D/,String.fromCharCode(272));
 wwt2 = wwt2.replace(/#l/,String.fromCharCode(318));
 wwt2 = wwt2.replace(/#L/,String.fromCharCode(317));
}

if (wwt2.indexOf("*")>-1){
 wwt2 = wwt2.replace(/\*z/,String.fromCharCode(380));
 wwt2 = wwt2.replace(/\*Z/,String.fromCharCode(379));
 wwt2 = wwt2.replace(/\*u/,String.fromCharCode(367));
 wwt2 = wwt2.replace(/\*U/,String.fromCharCode(366));
 wwt2 = wwt2.replace(/\*g/,String.fromCharCode(287));
 wwt2 = wwt2.replace(/\*G/,String.fromCharCode(286));
 wwt2 = wwt2.replace(/\*i/,String.fromCharCode(305));
 wwt2 = wwt2.replace(/\*I/,String.fromCharCode(304));
}

if (wwt2.indexOf("_")>-1){
 wwt2 = wwt2.replace(/_g/,String.fromCharCode(287));
 wwt2 = wwt2.replace(/_G/,String.fromCharCode(286));
 wwt2 = wwt2.replace(/_e/,String.fromCharCode(283));
 wwt2 = wwt2.replace(/_E/,String.fromCharCode(282));
 wwt2 = wwt2.replace(/_c/,String.fromCharCode(269));
 wwt2 = wwt2.replace(/_C/,String.fromCharCode(268));
 wwt2 = wwt2.replace(/_D/,String.fromCharCode(270));
 wwt2 = wwt2.replace(/_l/,String.fromCharCode(314));
 wwt2 = wwt2.replace(/_L/,String.fromCharCode(313));
 wwt2 = wwt2.replace(/_n/,String.fromCharCode(328));
 wwt2 = wwt2.replace(/_N/,String.fromCharCode(327));
 wwt2 = wwt2.replace(/_r/,String.fromCharCode(345));
 wwt2 = wwt2.replace(/_R/,String.fromCharCode(344));
 wwt2 = wwt2.replace(/_s/,String.fromCharCode(353));
 wwt2 = wwt2.replace(/_S/,String.fromCharCode(352));
 wwt2 = wwt2.replace(/_T/,String.fromCharCode(356));
 wwt2 = wwt2.replace(/_z/,String.fromCharCode(382));
 wwt2 = wwt2.replace(/_Z/,String.fromCharCode(381));
}

if (wwt2.indexOf("1")>-1){
 wwt2 = wwt2.replace(/a1/,String.fromCharCode(257));
 wwt2 = wwt2.replace(/e1/,String.fromCharCode(275));
 wwt2 = wwt2.replace(/i1/,String.fromCharCode(299));
 wwt2 = wwt2.replace(/o1/,String.fromCharCode(333));
 wwt2 = wwt2.replace(/u1/,String.fromCharCode(363));
 wwt2 = ersetzen(wwt2,String.fromCharCode(252)+"1",String.fromCharCode(470));
 wwt2 = wwt2.replace(/A1/,String.fromCharCode(256));
 wwt2 = wwt2.replace(/E1/,String.fromCharCode(274));
 wwt2 = wwt2.replace(/I1/,String.fromCharCode(298));
 wwt2 = wwt2.replace(/O1/,String.fromCharCode(332));
 wwt2 = wwt2.replace(/U1/,String.fromCharCode(362));
}

if (wwt2.indexOf("2")>-1){
 wwt2 = wwt2.replace(/a2/,String.fromCharCode(225));
 wwt2 = wwt2.replace(/e2/,String.fromCharCode(233));
 wwt2 = wwt2.replace(/i2/,String.fromCharCode(237));
 wwt2 = wwt2.replace(/o2/,String.fromCharCode(243));
 wwt2 = wwt2.replace(/u2/,String.fromCharCode(250));
 wwt2 = ersetzen(wwt2,String.fromCharCode(252)+"2",String.fromCharCode(472));
 wwt2 = wwt2.replace(/A2/,String.fromCharCode(193));
 wwt2 = wwt2.replace(/E2/,String.fromCharCode(201));
 wwt2 = wwt2.replace(/I2/,String.fromCharCode(205));
 wwt2 = wwt2.replace(/O2/,String.fromCharCode(211));
 wwt2 = wwt2.replace(/U2/,String.fromCharCode(218));
}

if (wwt2.indexOf("3")>-1){
 wwt2 = wwt2.replace(/a3/,String.fromCharCode(462));
 wwt2 = wwt2.replace(/e3/,String.fromCharCode(283));
 wwt2 = wwt2.replace(/i3/,String.fromCharCode(464));
 wwt2 = wwt2.replace(/o3/,String.fromCharCode(466));
 wwt2 = wwt2.replace(/u3/,String.fromCharCode(468));
 wwt2 = ersetzen(wwt2,String.fromCharCode(252)+"3",String.fromCharCode(474));
}

if (wwt2.indexOf("4")>-1){
 wwt2 = wwt2.replace(/a4/,String.fromCharCode(224));
 wwt2 = wwt2.replace(/e4/,String.fromCharCode(232));
 wwt2 = wwt2.replace(/i4/,String.fromCharCode(236));
 wwt2 = wwt2.replace(/o4/,String.fromCharCode(242));
 wwt2 = wwt2.replace(/u4/,String.fromCharCode(249));
 wwt2 = ersetzen(wwt2,String.fromCharCode(252)+"4",String.fromCharCode(476));
 wwt2 = wwt2.replace(/A4/,String.fromCharCode(192));
 wwt2 = wwt2.replace(/E4/,String.fromCharCode(200));
 wwt2 = wwt2.replace(/I4/,String.fromCharCode(204));
 wwt2 = wwt2.replace(/O4/,String.fromCharCode(210));
 wwt2 = wwt2.replace(/U4/,String.fromCharCode(217));
}

if (wwt2.indexOf("5")>-1){
 wwt2 = wwt2.replace(/a5/,String.fromCharCode(227));
 wwt2 = wwt2.replace(/e5/,String.fromCharCode(7869));
 wwt2 = wwt2.replace(/i5/,String.fromCharCode(297));
 wwt2 = wwt2.replace(/o5/,String.fromCharCode(245));
 wwt2 = wwt2.replace(/u5/,String.fromCharCode(361));
 wwt2 = wwt2.replace(/y5/,String.fromCharCode(7929));
 wwt2 = wwt2.replace(/A5/,String.fromCharCode(195));
 wwt2 = wwt2.replace(/O5/,String.fromCharCode(213));
 wwt2 = wwt2.replace(/U5/,String.fromCharCode(360));
 wwt2 = wwt2.replace(/Y5/,String.fromCharCode(7928));
}

if (wwt2.indexOf("6")>-1){
}
if (wwt2.indexOf("7")>-1){
}
if (wwt2.indexOf("8")>-1){
}
 }
 while (wwt2 != tempp)

return wwt2;

} 


//#####################################################################################

function html2unicode(htmlzeile) {

 var htmlx=""; var zz=0;
 while (htmlx!=htmlzeile) {
   htmlx=htmlzeile; zz=zz+1;
   if (htmlzeile.indexOf("&")>-1){
     var zstart=htmlzeile.indexOf("&");
     var zende=htmlzeile.indexOf(";");
     var zmitte=htmlzeile.substr(zstart+2,zende-zstart-2);   
     if (zmitte>0) { zmitte=String.fromCharCode(zmitte); }
     htmlzeile=htmlzeile.substr(0,zstart)+""+zmitte+""+htmlzeile.substr(zende+1,htmlzeile.length);
     //alert(zmitte+"\n");
   }
 }

return htmlzeile;
}






//#####################################################################################

function suchenersetzen (mot,mot1,mot2) {

  var umwandel_p1 = mot.indexOf(mot1);
  var umwandel_p2 = mot.indexOf(mot2);
  if (umwandel_p1>-1 && umwandel_p2>-1) {
    var umwandel_s1 = mot.substr(0,umwandel_p1);
    var umwandel_s2 = mot.substr(umwandel_p2+1);
    mot=umwandel_s1+mot2+umwandel_s2;
  }
  return mot;
}





 
