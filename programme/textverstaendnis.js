// Copyright: www.sprachenlernen24.de 

var mann="";
var frau="";
var tv1=new Array();




if (sprachkuerzel.indexOf("3")<1) { // ## Basiskurse

if (texteversion==1) {


mann=v[2*6+3];
frau=v[5*6+3];

var tv1=new Array(

"1","1",
"Was sagt "+mann+", nachdem er seinen Namen genannt hat?",
"0","Er macht "+frau+"  ein Kompliment.",
"1","Er sagt ihr, wie alt er ist.",
"0","Er erz�hlt ihr von seiner Arbeit.",
"0","Er fragt "+frau+" , ob er sie zu einem Eis einladen darf.",
"9","",

"1","2",
"Was fragt "+frau+" "+mann+", nachdem sie sich vorgestellt hat?",
"1","Sie m�chte von ihm wissen, aus welchem Land er kommt.",
"0","Sie fragt ihn, ob er sie ins Theater begleiten m�chte.",
"0","Sie fragt ihn, ob er sich in der Stadt auskennt.",
"0","Sie fragt ihn, in welchem Hotel er wohnt.",
"9","",

"1","3",
""+mann+" m�chte von "+frau+" wissen, ob sie hier Urlaub macht. Was antwortet sie?",
"0","Sie ist als Austauschstudentin dort.",
"1","Sie verbringt dort ihre Ferien.",
"0","Sie lebt und arbeitet dort.",
"0","Sie besucht dort ihre Tante.",
"9","",



"2","1",
"Was macht "+mann+" zu Beginn der Geschichte?",
"0","Er besucht ein Museum.",
"0","Er liegt am Strand und geht im Meer tauchen.",
"1","Er liegt am Strand, geht schwimmen und spielt mit einem Kind Ball.",
"0","Er sitzt an der Strandbar und genie�t einen Cocktail.",
"9","",

"2","2",
"Was fragt ihn "+frau+", nachdem sie zu ihm her�ber gekommen ist?",
"0","Sie fragt ihn, ob er mit ihr baden gehen m�chte.",
"0","Sie fragt, ob sie ihn zu einem Eis einladen d�rfe.",
"0","Sie fragt ihn nach dem Weg zum Hotel.",
"1","Sie fragt ihn nach einer Toilette.",
"9","",

"2","3",
""+mann+" und "+frau+" verabreden sich. Was wollen sie gemeinsam unternehmen?",
"0","Sie m�chten am n�chsten Tag zusammen fr�hst�cken.",
"0","Sie m�chten gemeinsam in die Stadt gehen.",
"1","Sie m�chten gemeinsam zu Abend essen.",
"0","Sie wollen abends gemeinsam in die Disco gehen. ",
"9","",



"3","1",
"Um welche Tageszeit landet die Maschine von "+mann+"?",
"0","am fr�hen Morgen",
"1","am sp�ten Nachmittag",
"0","mittags",
"0","am sp�ten Abend",
"9","",

"3","2",
"Wie f�hlt sich "+mann+", nachdem er die Zollkontrolle passiert hat?",
"0","Er ist gl�cklich, weil er viel Aufregendes im Urlaub erleben wird.",
"0","Er ist traurig, weil "+frau+" ihn nicht begleiten konnte.",
"1","Er ist vom langen Flug sehr m�de.",
"0","Er ist w�tend, weil der Flug so viel Versp�tung hatte.",
"9","",

"3","3",
"Was f�llt ihm an den vielen Touristen auf, die im Terminal sind?",
"0","Sie sind alle braungebrannt.",
"1","Sie sprechen unterschiedliche Sprachen.",
"0","Sie sind alle sehr sommerlich gekleidet.",
"0","Sie schauen alle sehr gl�cklich und entspannt aus.",
"9","",



"4","1",
"Zu Beginn der Geschichte macht sich "+mann+" auf den Weg in die Stadt. Welches Verkehrsmittel m�chte er benutzen?",
"0","den Bus",
"0","die Stra�enbahn",
"0","ein Fahrrad",
"1","ein Taxi",
"9","",

"4","2",
"Er entscheidet sich, doch mit dem Zug zu fahren. Wann f�hrt der n�chste Zug?",
"1","in einer halben Stunde",
"0","in einer Stunde",
"0","in einer viertel Stunde",
"0","in einer dreiviertel Stunde",
"9","",

"4","3",
"Was f�r eine Fahrkarte kauft "+mann+"?",
"0","Er nimmt eine Hin- und R�ckfahrkarte.",
"0","Er kauft zwei einfache Karten f�r sich und f�r "+frau+".",
"1","Er nimmt eine einfache Fahrt.",
"0","Er m�chte ein Erste-Klasse-Ticket.",
"9","",



"5","1",
""+mann+" braucht Bargeld. Welches Problem taucht zu Beginn der Geschichte auf?",
"1","Er hat keine Travellerschecks bei sich.",
"0","Er hat seine Geheimnummer vergessen.",
"0","Er hat nur Travellerschecks dabei.",
"0","Er hat kein Geld mehr auf seinem Bankkonto.",
"9","",

"5","2",
"Wonach fragt "+mann+" die Frau am Schalter der Wechselstube?",
"0","Er fragt, wie lange die Wechselstube noch ge�ffnet hat.",
"1","Er fragt nach dem Wechselkurs.",
"0","Er fragt, wie er am schnellsten zu seinem Hotel zur�ckkommt.",
"0","Er m�chte wissen, ob er auch Euro tauschen kann.",
"9","",

"5","3",
"Wie viel Geld m�chte "+mann+" umwechseln?",
"0","zweihundertf�nfzig Euro",
"1","vierhundertachtzig Euro",
"0","einhundertneunzig Euro",
"0","einhundertachtzig Euro",
"9","",



"6","1",
"Was bemerkt "+mann+" zu Beginn dieser Geschichte?",
"0","... dass er durstig ist",
"0","... dass offenbar "+frau+" die Verabredung mit ihm im Caf� vergessen hat.",
"0","... dass er seine Verabredung mit "+frau+" vergessen hat",
"1","... dass er hungrig, durstig und m�de ist.",
"9","",

"6","2",
"Was bestellt er sich in dem Caf� zuerst?",
"0","eine Tasse Kaffee",
"1","ein K�nnchen Schwarztee",
"0","ein Glas Bier",
"0","eine gro�e Fruchtsaftschorle",
"9","",

"6","3",
"Was f�r ein Sandwich bestellt "+mann+"?",
"1","ein K�sesandwich",
"0","ein Tomaten-Mozzarella-Sandwich",
"0","ein Schinkensandwich",
"0","ein Sandwich mit Olivenaufstrich",
"9","",




"7","1",
"Wie oft wird die Stadtrundfahrt angeboten?",
"0","alle zwei Stunden",
"0","jede halbe Stunde",
"1","jede Stunde",
"0","zweimal am Tag",
"9","",

"7","2",
"Gibt es bei der Rundfahrt eine Erm��igung?",
"0","Nein, leider nicht.",
"0","Ja, es gibt eine Erm��igung f�r Behinderte und Senioren.",
"0","Ja, Kinder und Studenten zahlen nur die H�lfte des Fahrpreises und f�r Gruppen gibt es Rabatt.",
"1","Ja, f�r Kinder und Senioren kostet die Fahrt nur die H�lfte und f�r Gruppen gibt es Rabatt.",
"9","",



"8","1",
"Worum geht es in dieser Geschichte?",
"1",""+mann+" ist in einem Hotel und fragt nach einem Einzelzimmer.",
"0",""+mann+" m�chte ein Doppelzimmer.",
"0",""+mann+" ist mit seinem Hotelzimmer unzufrieden und beschwert sich.",
"0",""+mann+" bittet die Empfangsdame um die Rechnung f�r sein Zimmer.",
"9","",

"8","2",
"Hat das Zimmer ein eigenes Bad?",
"0","Nein, die Waschr�ume befinden sich am Gang.",
"0","Nein, nur Doppelzimmer haben ein eigenes Bad.",
"1","Ja, das Zimmer hat ein eigenes Bad.",
"9","",
"9","",

"8","3",
"Wie viele Fernsehsender kann man im Zimmer empfangen?",
"0","circa vierzig",
"0","circa f�nfzig",
"1","circa sechzig",
"0","Der Fernseher ist leider kaputt.",
"9","",

"8","4",
"Was ist das besondere am Fr�hst�ck in "+mann+"s Hotel?",
"0","In dem Hotel wird kein Fr�hst�ck angeboten.",
"1","Das Fr�hst�ck wird im kleinen Haus gegen�ber serviert.",
"0","Derzeit wird der Fr�hst�ckssaal renoviert.",
"0","Das hervorragende Fr�hst�cksbuffet wird in jedem Reisef�hrer lobend erw�hnt.",
"9","",



"9","1",
"Was schmeckt "+mann+" beim Fr�hst�ck besonders gut?",
"0","... die Marmelade",
"1","... die R�hreier",
"0","... das Brot",
"0","... der K�se",
"9","",

"9","2",
""+mann+" fragt "+frau+", ob man im Hotel auch zu Mittag und zu Abend essen kann. Was antwortet sie ihm?",
"0","Sie antwortet, dass man hier auch mittags und abends sehr gut essen kann.",
"0","Sie meint, dass das Hotel nur Fr�hst�ck und Abendessen anbietet.",
"1","Sie antwortet, dass hier kein Mittag- und Abendessen angeboten wird.",
"0","Sie sagt, dass man hier zwar auch mittags und abends essen kann, das Restaurant aber sehr teuer ist.",
"9","",

"9","3",
"Wo befindet sich ein anderes nettes Restaurant?",
"0","Es liegt direkt am Strand.",
"1","Es ist gegen�ber der Bank.",
"0","Es befindet sich am anderen Ende der Stra�e.",
"0","Es ist direkt am Bahnhof.",
"9","",



"10","1",
"Was macht "+mann+", nachdem er in sein Hotelzimmer zur�ckgekehrt ist?",
"1","Er schaut sich den Wetterbericht im Fernsehen an.",
"0","Er h�rt sich den Wetterbericht im Radio an.",
"0","Er duscht sich.",
"0","Er liest die Wettervorhersage in der Zeitung.",
"9","",

"10","2",
"Wie war das Wetter am heutigen Tag?",
"0","Es war angenehm k�hl.",
"0","Das Wetter war regnerisch.",
"0","Morgens war es nebelig und abends hat es geregnet.",
"1","Es war warm heute.",
"9","",

"10","3",
"Wie soll das Wetter am kommenden Tag werden?",
"0","Es soll den ganzen Tag �ber sehr sonnig und hei� werden.",
"0","Es soll deutlich k�lter werden und zu Gewittern kommen.",
"1","Am Morgen wird es nebelig sein, tags�ber soll es dann sonnig sein.",
"0","Morgens soll es regnen, ab Mittag aber kommt die Sonne raus.",
"9","",



"11","1",
""+mann+" macht einen Spaziergang durch die Stadt und bemerkt, dass er sich verlaufen hat. Wonach sucht er zun�chst?",
"1","nach seinem Stadtplan",
"0","nach einem Taxistand",
"0","nach jemandem, den er nach den Weg fragen kann",
"0","nach einer Bushaltestelle",
"9","",

"11","2",
""+mann+" spricht daraufhin einen jungen Mann an. Was fragt er ihn?",
"0","Er fragt nach dem Weg zum Bahnhof.",
"0","Er m�chte den Weg zur Touristeninformation wissen.",
"1","Er fragt nach dem Weg zu seinem Hotel.",
"0","Er fragt nach dem Weg zum Markt.",
"9","",

"11","3",
"Der junge Mann erkl�rt ihm den Weg. In welche Richtung soll er an der ersten Kreuzung laufen?",
"0","nach links",
"0","geradeaus",
"1","nach rechts",
"9","",
"9","",



"12","1",
""+frau+" und "+mann+" sind gemeinsam beim Essen. Was bestellt sich "+frau+"?",
"0","Da sie nur wenig Hunger hat, bestellt sie sich einen Vorspeisenteller.",
"1","Sie ist sehr hungrig und nimmt ein Men�.",
"0",""+frau+" ist sehr hungrig und nimmt H�hnchen mit Reis.",
"0","Sie hat wenig Hunger und nimmt eine Suppe.",
"9","",

"12","2",
"Was nehmen die beiden, bevor der Kellner die Hauptspeise serviert?",
"0","einen Aperitif",
"0","einen Kaffee",
"1","einen Salat",
"0","ein k�hles Mineralwasser",
"9","",

"12","3",
""+frau+" bespritzt sich versehentlich mit So�e. Wie reagiert "+mann+"?",
"0","Er muss lachen.",
"1","Er holt ihr eine Serviette.",
"0","Er gibt ihr Tipps, wie der Fleck am besten wieder rausgeht.",
"0","Er tupft den Fleck mit einem Tuch ab.",
"9","",



"13","1",
""+mann+" schreibt einen Artikel �ber ein Sportzentrum. Treibt er selbst auch gerne Sport?",
"1","Er liebt Sport und k�nnte ohne sportliche Aktivit�t nicht leben.",
"0","Er sieht sich gerne Sport im Fernsehen an, macht selbst allerdings nur wenig Sport.",
"0","Er verabscheut Sport und �rgert sich, dass er �ber das Sportzentrum einen Artikel schreiben muss.",
"0","Ab und zu geht er radfahren, ansonsten macht er wenig Sport.",
"9","",

"13","2",
"Wo liegt das Sportzentrum?",
"0","in der Stadtmitte",
"1","in einem Au�enbezirk der Stadt",
"0","in der N�he des Bahnhofs",
"0","beim Stadtpark",
"9","",

"13","3",
"Wann ist das Sportzentrum ge�ffnet?",
"0","t�glich, au�er am Wochenende",
"0","von Montag bis Samstag",
"0","nur am Samstag und Sonntag",
"1","t�glich",
"9","",

"13","4",
"Welchen Tipp gibt "+mann+" den interessierten Lesern?",
"1","... dass sie, wenn sie Frage haben, sich an einen Trainer wenden sollen.",
"0","... dass das Sportzentrum eine interessante Homepage hat.",
"0","... dass das Sportzentrum auch g�nstige Anf�ngerkurse anbietet.",
"0","... dass sie sich eine Informationsbrosch�re bestellen k�nnen.",
"9","",



"14","1",
""+mann+" m�chte seine Freunde zum Essen einladen. Aus welchem Anlass feiert er?",
"0",""+mann+" feiert das Ende seines Praktikums bei der Zeitung.",
"0","Er hat eine neue Wohnung bezogen.",
"0","Er hat sich mit "+frau+" verlobt.",
"0","Er ist von seiner Zeitung als Redakteur �bernommen worden.",
"1","Er will seine R�ckkehr aus dem Urlaub feiern.",

"14","2",
"Er ist ein guter Koch und m�chte seinen Freunden heute eine besondere Gaumenfreude bereiten. Um was f�r Spezialit�ten handelt es sich hierbei?",
"1","um typisch griechische",
"0","um typisch asiatische",
"0","um typisch arabische",
"0","um typisch deutsche",
"9","",

"14","3",
"Was f�r eine Suppe m�chte er seinen Freunden kochen?",
"0","eine herzhafte Gem�sesuppe",
"1","eine Fischsuppe",
"0","eine Rindsbouillon",
"0","eine Linsensuppe",
"9","",

"14","4",
"Warum kauft "+mann+" immer so viele Lebensmittel ein?",
"0","... weil er viele Mitbewohner hat.",
"0","... weil er viel Sport treibt und deshalb oft sehr hungrig ist.",
"0","... weil er gerne viele unterschiedliche Speisen f�r sich kocht.",
"1","... weil er gerne f�r seine Freunde kocht.",
"9","",



"15","1",
""+frau+" ist heute Abend bei "+mann+" zu Gast. Wo wohnt sie?",
"0","in der Nachbarstadt",
"1","in der gleichen Stadt wie "+mann+"",
"0","auf dem Land",
"0"," in der Hauptstadt",
"9","",

"15","2",
"Was machen sie vor dem Essen?",
"0","Sie sehen sich Fotos aus dem Urlaub an.",
"1","Sie spielen Schach und unterhalten sich �ber verschiedene L�nder.",
"0","Sie schauen gemeinsam fern.",
"0",""+frau+" hilft "+mann+" beim Kochen und Tischdecken.",
"9","",

"15","3",
"Die beiden unterhalten sich sehr gut. Was beschlie�en sie dabei?",
"0","Sie m�chten eine Party f�r ihre Freunde veranstalten.",
"1","Sie beschlie�en, sich jede Woche mit dem Kochen abzuwechseln.",
"0","Sie verabreden sich, am n�chsten Tag gemeinsam essen zu gehen.",
"0","Sie verabreden sich f�r das kommende Wochenende, ins Kino zu gehen.",
"9","",

"15","4",
""+frau+" bietet an, beim Absp�len zu helfen. Was entgegnet darauf "+mann+"?",
"0","Er freut sich sehr, dass er nicht allein abzuwaschen braucht.",
"0","Er meint, dass er das gerne alleine macht.",
"1","Er meint, dass er das am n�chsten Tag macht.",
"0","Er sagt, dass das nicht n�tig sei. Er hat schlie�lich eine Sp�lmaschine. ",
"9","",



"16","1",
"Was gef�llt "+frau+" ganz besonders an "+mann+"s Wohnung?",
"0","... dass sie so gro� ist",
"1","... dass sie wegen der gro�en Fenster so hell ist.",
"0","... dass sie h�bsch geschnitten ist.",
"0","... dass sie einen Balkon hat.",
"0","... dass sie eine sch�ne K�che hat.",

"16","2",
"Was st�rt "+frau+" an ihrem Wohnheim am meisten?",
"0","... dass es am Stadtrand liegt und nur schlecht zu erreichen ist.",
"1","... dass die K�che so klein und schmutzig ist und der Keller so unfreundllich ist.",
"0","... dass ihr Zimmer so klein und ungem�tlich ist.",
"0","... dass ihre Mitbewohner immer in der K�che rauchen.",
"0","... dass ihr Zimmer viel zu teuer ist und es nur eine Waschk�che im Keller gibt.",



"17","1",
"Warum unternehmen "+mann+" und "+frau+" einen Ausflug?",
"0",""+mann+" m�chte ihr seine Heimatstadt zeigen.",
"0",""+mann+"s Tante betreibt in der Nachbarstadt eine Kunstgalerie und veranstaltet eine Vernissage.",
"1",""+frau+" m�chte ihm ihre Heimatstadt zeigen.",
"0",""+frau+" m�chte "+mann+" ihren Eltern vorstellen.",
"9","",

"17","2",
"Wo hat "+frau+" viel Zeit in ihrer Kindheit verbracht?",
"1","in einer Kunstgalerie",
"0","auf dem Stadtplatz",
"0","in der B�cherei",
"0","auf dem Spielplatz hinter ihrem Haus",
"0","im Museum",

"17","3",
"Warum m�chte "+mann+" einen Arzt aufsuchen?",
"0","Er hat Kopfschmerzen.",
"1","Er hat Zahnschmerzen.",
"0","Er hat eine starke Erk�ltung.",
"0","Er hat sich bei der Stadtf�hrung den Fu� verstaucht.",
"9","",

"17","4",
"Bevor in einem gro�en Geb�ude Rechtsanwaltsb�ros eingerichtet wurden, hatte es eine andere Funktion. Welche?",
"0","Es war das Rathaus.",
"0","Es war das Polizeipr�sidium.",
"1","Es war ein Gef�ngnis.",
"0","Es war der Sitz des Gerichts.",
"0","Es war eine Kirche.",


"18","1",
"An wen schreibt "+mann+" in dieser Geschichte einen Brief?",
"0","an seine Mutter",
"1","an seinen Bruder",
"0","an seine Schwester",
"0","an seinen Vater",
"0","an seinen Gro�vater",

"18","2",
"Wovon berichtet "+mann+" in dem Brief?",
"0","... dass er eine Wohnung f�r "+frau+" gefunden hat.",
"0","... dass er eine interessante Praktikumsstelle bei einer Zeitung hat.",
"1","... dass er mit "+frau+" ihre Heimatstadt besucht hat.",
"0","... dass er f�r "+frau+" gekocht hat.",
"9","",

"18","3",
"Was m�chte "+mann+" machen, wenn er zu Besuch kommt?",
"1","Er will seine Urlaubsbilder zeigen.",
"0","Er m�chte "+frau+" seiner Familie vorstellen.",
"0","Er m�chte ein �berraschungsgeschenk �berreichen.",
"0","Er will ein tolles Abendessen f�r seine alten Freunde zubereiten.",
"9","",



"19","1",
""+mann+" ist sehr aufgeregt, als er Auto f�hrt. Wann hat er seinen F�hrerschein gemacht?",
"0","erst vor einem Jahr",
"0","erst in der letzten Woche",
"1","erst vor einigen Wochen",
"0","erst vor einigen Monaten",
"9","",

"19","2",
"In welche Richtung ist er mit seinem Auto unterwegs?",
"1","in Richtung Flughafen",
"0","in Richtung Innenstadt",
"0","in Richtung Bahnhof",
"0","in Richtung von "+frau+"s Wohnheim",
"0","in Richtung Strand",

"19","3",
"Der Tankwart r�t ihm, in eine andere Richtung weiterzufahren. Wohin soll er seiner Meinung nach <i>nicht</i> fahren?",
"1","nach rechts",
"0","nach links",
"0","geradeaus",
"0","zur�ck",
"9","",

"19","4",
"Warum ist dort ein Stau?",
"0","Dort sind gerade Bauarbeiten und eine Fahrspur ist gesperrt.",
"0","Ein Lastwagen ist liegen geblieben und blockiert die Stra�e.",
"1","Offenbar ist ein Unfall passiert.",
"0","Die Feuerwehr macht eine Gro��bung.",
"9","",



"20","1",
"Am Flughafen angekommen, geht "+mann+" zum Ticketschalter. Was f�r ein Flugticket m�chte er kaufen?",
"1","nur ein Hinflug-Ticket",
"0","Hin- und R�ckflug",
"0","ein Last-Minute-Ticket",
"9","",
"9","",

"20","2",
"Die Flughafenangestellte fragt ihn, wo er im Flugzeug sitzen m�chte. Was antwortet er?",
"1","Er m�chte einen Fensterplatz.",
"0","Er m�chte lieber einen Platz am Gang.",
"0","Er m�chte m�glichst nah am Ausgang sitzen.",
"0","Es ist ihm ganz egal. Er nimmt, was noch frei ist.",
"9","",

"20","3",
"Worauf legt "+mann+" noch Wert bei seiner Flugbuchung?",
"0","Er m�chte einen Flug ohne Zwischenstopps.",
"0","Er m�chte so fr�h wie m�glich fliegen.",
"1","Er m�chte den preiswertesten Flug.",
"0","Er m�chte morgens abfliegen.",
"0","Er m�chte Erster Klasse fliegen.",

"20","4",
"Wann soll sich "+mann+" beim Check-In einfinden?",
"1","eine Stunde vor Abflug",
"0","eine halbe Stunde vor Abflug",
"0","zwei Stunden vor Abflug",
"0","eineinhalb Stunden vor Abflug",
"9","",



"21","1",
"Warum m�chte "+mann+" in die Stadt gehen?",
"0","Er m�chte mit "+frau+" ins Kino gehen.",
"0","Er hat vor, auf dem Markt Gem�se einzukaufen.",
"1","Er will sich neue Kleidung kaufen.",
"0","Er m�chte mit "+frau+" in ein Caf� gehen.",
"0","Er will sich wegen des schlechten Wetters einen Regenschirm kaufen.",

"21","2",
""+frau+" m�chte "+mann+" in die Stadt begleiten und ihn vorher abholen. Wo soll er auf sie warten?",
"1","bei einem Restaurant",
"0","am Busbahnhof",
"0","beim Markt",
"0","vor dem Einkaufszentrum",
"9","",

"21","3",
""+mann+" gef�llt "+frau+"s neues Kleid sehr gut. Wie, findet er, sieht sie damit aus?",
"0","... wie ein Topmodel",
"0","... wie eine Prinzessin.",
"1","... als wollte sie zu einer Hochzeit gehen.",
"0","... sie sieht damit fantastisch aus, sollte aber mit dem Kauf bis zum Schlussverkauf warten.",
"9","",



"22","1",
"Im Kleidungsgesch�ft: Welches Kleidungsst�ck probiert "+mann+" zuerst an?",
"0","eine Hose",
"1","ein Hemd",
"0","eine Krawatte",
"0","einen Pullover",
"0","eine Jacke",

"22","2",
"Welche Farbe hat das Hemd, das "+frau+" f�r ihn ausgesucht hat?",
"0","wei�",
"0","schwarz",
"1","blau",
"0","gelb",
"9","",

"22","3",
"Zu welchem ihrer Kleidungsst�cke passen "+frau+"s neue Schuhe besonders gut?",
"0","zu ihrer Hose",
"0","zu ihrem Pullover",
"0","zu ihrer Strumpfhose",
"0","zu ihrer Bluse",
"1","zu ihrem Rock",

"22","4",
"Warum kann oder m�chte "+frau+" ihre alten Sandalen nicht mehr tragen?",
"0","Die Sohle ist kaputt.",
"1","Es ist zu kalt f�r Sandalen.",
"0","Sie haben nicht die richtige Farbe",
"0","Sie passen nicht mehr.",
"0","Sie findet, dass sie altmodisch aussehen.",



"23","1",
"Was m�chten "+mann+" und "+frau+" nach dem Einkauf machen?",
"0","Sie m�chten zusammen zu Mittag essen.",
"0","Sie wollen in ein Restaurant gehen.",
"1","Sie m�chten zusammen zu Abend essen.",
"0","Sie wollen an einem Stra�enimbiss etwas essen.",
"9","",

"23","2",
"Wie mag "+mann+" sein Steak?",
"0","nur mit Salz und Pfeffer gew�rzt.",
"0","mit vielen Gew�rzen und angebratenen Zwiebeln",
"1","mit vielen Gew�rzen und Senf",
"0","mit Kr�uterbutter",
"9","",

"23","3",
"Wer von ihnen wird welche Speisen zubereiten?",
"1",""+mann+" macht den Salat und "+frau+" bereitet das Fleisch zu.",
"0",""+frau+" bereitet den Salat zu und "+mann+" das Fleisch an.",
"0",""+frau+" kocht die Kartoffeln und macht den Salat, "+mann+" k�mmert sich um das Fleisch. ",
"0",""+mann+" kocht alleine f�r sie beide.",
"9","",

"23","4",
"Wohin m�ssen die beiden noch vor dem Essen?",
"0","zum Supermarkt",
"1","zum Metzger",
"0"," auf den Markt",
"0","zur B�ckerei",
"9","",



"24","1",
"F�r wen hat "+mann+" Geschenke gekauft?",
"0","f�r seine Mutter und seinen Vater",
"0","f�r seine Schwester und ihre Freundinnen",
"1","f�r seinen Bruder und seine Freunde",
"0","f�r seinen Bruder und seine Schwester",
"9","",

"24","2",
"Was hat "+mann+" im Buchladen gekauft?",
"0","einen Reisef�hrer",
"1","englische B�cher",
"0","ein Kochbuch f�r seinen Bruder",
"0","Zeitschriften f�r die Reise",
"9","",

"24","3",
"Worauf m�chte "+mann+" bei seinem Besuch nicht verzichten?",
"1","auf einen Regenschirm und eine warme Jacke",
"0","auf einen warmen Pullover und eine Regenhose",
"0","auf eine warme Winterjacke und Stiefel",
"0","auf seine Handschuhe und seine dicke M�tze",
"9","",

"24","4",
"Welche Idee hat "+frau+", um "+mann+"s Reisevorbereitungen zu erleichtern?",
"0","Er soll einen zweiten Koffer packen.",
"0","Er soll die Sommer- und Badesachen zuhause lassen.",
"0","Er soll die B�cher und CDs per Post schicken.",
"1","Er soll sich eine Liste schreiben.",
"9","",



"25","1",
""+frau+" bittet "+mann+", ihr ein besonderes Schmuckst�ck vom Juweliergesch�ft mitzubringen. Worum handelt es sich hierbei?",
"1","um einen wertvollen Ring",
"0","um eine wertvolle Halskette",
"0","um ein Paar wertvolle Ohrringe",
"0","um eine wertvolle Brosche",
"9","",

"25","2",
"Warum hat "+frau+" das Schmuckst�ck von der Gro�mutter noch nicht bekommen?",
"0","Ihre Gro�mutter hatte es verlegt",
"0","Es sollte ein Geburtstagsgeschenk f�r "+frau+" sein.",
"1","Ihre Gro�mutter f�rchtet, es k�nnte mit der Post verloren gehen.",
"0","Die Gro�mutter m�chte auf diesem Weg "+mann+" kennenlernen.",
"9","",

"25","3",
"Gegen Ende des Telefonats fragt "+mann+" "+frau+" noch nach etwas. Wonach?",
"1","nach der Adresse des Juweliers",
"0","nach der Adresse der Gro�mutter",
"0","nach einer Vollmacht f�r die Abholung",
"0","nach einem Gastgeschenk f�r die Gro�mutter",
"9","",



"26","1",
"Hat "+mann+" das Juweliergesch�ft auf Anhieb gefunden?",
"0","Ja, es ist gegen�ber der Wohnung seines Bruders.",
"0","Das Taxi hat ihn ohne Umwege dorthin gebracht.",
"1","Er musste erst durch die ganze Stadt laufen, bevor er es gefunden hat.",
"0","Er konnte die Adresse auf dem Stadtplan schnell finden.",
"9","",

"26","2",
"Wo ist der Juwelierladen?",
"1","Er befindet sich im Au�enbezirk der Stadt.",
"0","Er ist im Stadtzentrum.",
"0","Er ist in der N�he des Bahnhofs.",
"0","Er ist in einem Einkaufszentrum.",
"9","",

"26","3",
"Wem hat der Ehering, den "+mann+" abholen soll, fr�her geh�rt?",
"0","Es war der Ehering des Vaters von "+frau+"s Gro�mutter.",
"1","Er geh�rte der Mutter von "+frau+"s Gro�mutter.",
"0","Es war der Ehering von "+frau+"s Gro�mutter.",
"0","Er geh�rte der Gro�mutter von "+frau+"s Gro�mutter.",
"9","",



"27","1",
"Mit welchem Verkehrsmittel f�hrt "+mann+" in dieser Geschichte?",
"0","mit der S-Bahn",
"1","mit dem Bus",
"0","mit einem Taxi",
"0","mit der Stra�enbahn",
"9","",

"27","2",
"Was geschieht, nachdem "+mann+" Platz genommen hat?",
"0","Seine Fahrkarte wird kontrolliert.",
"0","Er ruft mit seinem Handy "+frau+" an.",
"1","Er schl�ft ein.",
"0","Er schaut sich vertr�umt die Gegend an.",
"9","",

"27","3",
"Was passiert im Traum?",
"1","Der Ring wird "+mann+" gestohlen.",
"0","Sein Geldbeutel wird ihm gestohlen.",
"0","Sein Handy wird ihm gestohlen.",
"0","Sein Flugticket wird ihm gestohlen.",
"0",""+frau+" ruft ihn an.",

"27","4",
"Was sagt der Busfahrer?",
"0","N�chster Halt: Hauptbahnhof.",
"1","Endstation!",
"0","Getriebeschaden, bitte alle aussteigen.",
"0","Ich werde die Polizei verst�ndigen.",
"0","Ihr Ticket bitte.",



"28","1",
"Was macht "+mann+", nachdem er merkt, dass er sich in einem ihm unbekannten Stadtviertel befindet",
"0","Er ruft seinen Bruder an, um ihn zu fragen, ob er ihn abholen kann.",
"0","Er fragt eine junge Frau nach dem Weg.",
"1","Er beschlie�t, zu seinem Bruder zu trampen.",
"0","Er fragt an einem Taxistand, wo er sich befindet.",
"9","",

"28","2",
"Was passiert, nachdem er zu der jungen Frau ins Auto gestiegen ist?",
"0","Der Wagen hat eine Reifenpanne.",
"0","Sie machen ein Picknick an einem See.",
"1","Sie bietet ihm Essen und Getr�nke an.",
"0","Der Wagen springt nach einem Zwischenhalt nicht mehr an.",
"9","",

"28","3",
"Warum machen die beiden an einer Tankstelle Halt?",
"1","um zu tanken",
"0","um nach dem Weg zu fragen",
"0","um sich Zigaretten zu kaufen",
"0","um �l nachzuf�llen",
"9","",

"28","4",
"Wie lange ben�tigen sie, um das Haus des Bruders zu finden?",
"0","eine Stunde",
"1","eine halbe Stunde",
"0","eine viertel Stunde",
"0","eineinhalb Stunden",
"9","",



"29","1",
"Warum hatte das Sportzentrum mehr Besucher als sonst?",
"0","aufgrund von Anzeigen in der Zeitung",
"1","wegen "+mann+"s Zeitungsartikel",
"0","aufgrund von Radiowerbung",
"0","weil es ein besonderes Angebot f�r Anf�nger angeboten hat",
"9","",

"29","2",
"Wozu hat der Besucheransturm gef�hrt?",
"1","zu mehr M�ll",
"0","zu Parkplatzproblemen",
"0","zu langen Wartezeiten am Eingang",
"0","zu Staus auf der Zufahrtsstra�e",
"9","",

"29","3",
"Aus welchem Grund m�chte "+mann+" auch zum Sportzentrum?",
"0","um das g�nstige Angebot zu nutzen",
"0","um endlich mehr Sport zu treiben",
"1","um ein Praktikum zu machen",
"0","um die Trainerin kennenzulernen",
"9","",



"30","1",
"Zu Beginn stellt "+mann+" neue Abfallbeh�lter auf. Wo befinden sich diese?",
"0","im Eingangsbereich",
"0","in den Umkleiden",
"1","in jedem Raum sind M�llbeh�lter",
"0","auf dem Parkplatz und im Eingangsbereich",
"0","nur in den Gemeinschaftsr�umen",

"30","2",
"Was m�chte "+mann+" durch die neuen Abfalleimer erreichen?",
"0","Die Kunden sollen ihren M�ll bereits im Eingangsbereich wegwerfen.",
"1","Die Kunden sollen ihren M�ll trennen.",
"0","Das Sportzentrum soll durch das Recycling zus�tzliche Einnahmen erhalten.",
"0","Er m�chte, dass die Putzfirma eingespart werden kann.",
"9","",



"31","1",
""+frau+" und "+mann+" haben eine Einladung bekommen. Was ist der Anlass der Feier?",
"0","eine Hochzeit",
"0","eine Taufe",
"1","ein Geburtstag",
"0","eine neue Wohnung",
"9","",

"31","2",
"Warum kann "+frau+" "+mann+" nicht von ihrem Handy aus erreichen?",
"0",""+mann+" hat sein Handy ausgeschaltet.",
"0","Sie hat "+mann+"s Telefonnummer vergessen.",
"1","Die Karte ihres Handys ist leer.",
"0","Sie hat ihr Handy bei "+mann+" liegen gelassen.",
"9","",

"31","3",
""+frau+" fragt einen Taxifahrer nach einer Telefonzelle. Wo befindet sich die n�chste?",
"0","beim Bahnhof",
"0","beim Markt",
"0","beim Rathaus",
"1","beim Postamt",
"0","im Einkaufszentrum",

"31","4",
"Wo in "+mann+"s Wohnung hatte "+frau+" das Geschenk vergessen?",
"0","Es lag in der K�che.",
"0","Es war im Regal im Flur.",
"1","Es lag auf dem Tisch neben den Blumen.",
"0","Es war auf dem Schreibtisch neben der Lampe.",
"0","Sie hatte es auf dem Nachttisch vergessen.",



"32","1",
""+frau+" und "+mann+" sind auf dem Weg zur Party. Pl�tzlich wird die Stille gest�rt. Wovon?",
"1","von lauten Hilferufen",
"0","von den Sirenen vieler Feuerwehrfahrzeuge",
"0","von der Sirene eines Rettungswagens",
"0","von kreischenden Kindern",
"0","von einem Feueralarm",

"32","2",
"Als das Feuer ausbrach, waren sehr viele Leute im Haus. Was war der Anlass hierf�r?",
"0","Sie feierten einen Geburtstag.",
"0","Ein neues Gesch�ft wurde er�ffnet.",
"1","Eine Hochzeit wurde dort gefeiert.",
"0","Sie feierten eine Taufe.",
"9","",

"32","3",
"Gl�cklicherweise haben alle Hausbewohner den Brand �berlebt. Wer hat sie gerettet?",
"0","ein mutiger Nachbar",
"0","ein furchtloser Polizist",
"1","ein tapferer Feuerwehrmann",
"0","der alte Mann",
"9","",



"33","1",
""+mann+" besucht "+frau+" bei ihrer Arbeitsstelle. Als was arbeitet sie?",
"0","Sie ist �rztin.",
"0","Sie ist Krankenschwester.",
"1","Sie arbeitet in einer Apotheke.",
"0","Sie ist Arzthelferin.",
"0","Sie arbeitet bei einer Krankenversicherung.",

"33","2",
"Was r�t ihm "+frau+" gegen Kopfschmerzen?",
"0","zum Arzt zu gehen",
"1","eine Kopfschmerztablette zu nehmen",
"0","fr�h ins Bett zu gehen",
"0","ein Entspannungsbad zu machen",
"9","",

"33","3",
"Was w�rde ihm "+frau+" raten, wenn er Durchfall h�tte und ihm �bel w�re?",
"0","Tabletten und ein Antibiotikum zu nehmen",
"1","einen Arzt aufzusuchen",
"0","weniger Alkohol zu trinken",
"0","Kohletabletten zu nehmen",
"9","",



"34","1",
"Was f�r einen Film haben "+mann+" und "+frau+" zuletzt im Kino gesehen?",
"1","einen indischen M�rchenfilm",
"0","einen indischen Actionfilm",
"0","einen Western mit Indianern",
"0","einen amerikanischen M�rchenfilm",
"9","",

"34","2",
"Die beiden schauen sich das Kinoprogramm im Internet an. Was gef�llt "+frau+" an einem Schauspieler besonders?",
"1","... dass er dunkles Haar hat, elegant gekleidet und sehr h�bsch ist.",
"0","... dass er sch�nes blondes Haar hat und gut gebaut ist.",
"0","... dass er mit seinem grauen Haar sehr weise und gelehrt aussieht.",
"0","... dass er in vielen herausragenden Spielfilmen mitgewirkt hat.",
"9","",

"34","3",
"Warum gehen die beiden dann doch nicht ins Kino?",
"0","... weil das Wetter zu gut ist um ins Kino zu gehen.",
"1","... weil alle Filme bereits ausverkauft sind.",
"0","... weil "+frau+" keiner der Filme zusagt.",
"0","... weil "+mann+" keine Western mag. ",
"9","", 


"35","1",
""+frau+" passt jeden Samstag auf die Kinder der Nachbarn auf. Wie viele Kinder haben sie?",
"0","zwei",
"0","vier",
"0","f�nf",
"1","drei",
"9","",

"35","2",
"Warum geht "+frau+" mit ihnen heute nicht auf den Spielplatz?",
"0","weil der Junge krank ist",
"0","weil etwas Spannendes im Kinderkanal l�uft",
"1","weil es regnet",
"0","weil es drau�en zu hei� ist",
"0","weil die Kinder keine Lust haben",

"35","3",
"Was sind die Lieblingstiere des Jungen?",
"0","Hunde",
"0","B�ren",
"1","Katzen",
"0","M�use",
"9","",

"35","4",
"Was soll "+frau+" immer mit den Kindern machen, wenn sie zum Babysitting kommt?",
"0","Sie singt den Kindern etwas vor, weil sie so sch�n singen kann.",
"0","Sie spielt ihnen etwas auf dem Klavier vor, weil sie so sch�n spielen kann.",
"1","Sie erz�hlt M�rchen, weil sie so sch�n Geschichten erz�hlen kann.",
"0","Sie spielt ihnen immer mit den Fingerpuppen etwas vor.",
"9","",



"36","1",
"Was m�chte sich "+frau+" im Internet bestellen?",
"0","einen neuen, ganz speziellen Skianzug",
"0","besondere, gebrauchte Skier",
"1","neue, ganz spezielle Skier",
"0","ein neues, ganz spezielles Snowboard",
"9","",

"36","2",
"Aus welchem Grund sucht sie danach im Internet?",
"0","Der Preis ist hier wesentlich g�nstiger.",
"1","In keinem Sportgesch�ft der Stadt konnte sie diesen speziellen Gegenstand finden.",
"0","Es ist viel praktischer dort zu suchen.",
"0","Sie kann sich hier besser informieren und die Preise vergleichen.",
"9","",

"36","3",
"Welche Farben w�hlt "+frau+" aus?",
"0","rot-gelb",
"1","rot-schwarz",
"0","blau-schwarz",
"0","wei�-rot",
"9","",

"36","4",
"Wie soll die Bezahlung erfolgen?",
"1","per Rechnung",
"0","per Bankeinzug",
"0","per Online-�berweisung",
"0","�ber ein Online-Bezahlsystem",
"0","in bar",



"37","1",
""+frau+" ist in eine neue Wohnung umgezogen. Wo befindet sich diese?",
"0","Sie liegt in der N�he des Bahnhofs",
"0","Sie ist im Au�enbezirk der Stadt.",
"1","Sie ist in der Stadtmitte.",
"0","Sie ist neben dem gro�en Einkaufszentrum.",
"9","",

"37","2",
""+frau+" erkl�rt "+mann+" am Telefon, wie er zu ihr kommt. Welchen Bus soll er nehmen?",
"0","Bus Nummer 11",
"0","Bus Nummer 8",
"1","Bus Nummer 10",
"0","Bus Nummer 9",
"9","",

"37","3",
"An welcher Haltestelle soll er aus dem Bus aussteigen?",
"1","am botanischen Garten",
"0","am Hauptbahnhof",
"0","am Museum",
"0","am Rathaus",
"0","am Stadtpark",

"37","4",
"Wo soll sich "+mann+" das Busticket kaufen?",
"0","am Fahrkartenschalter",
"1","am Fahrscheinautomat",
"0","direkt beim Fahrer",
"0","in einem Zeitschriftenladen",
"9","",



"38","1",
"Wie ist das Wetter an diesem Tag?",
"1","Es ist regnerisch und st�rmisch.",
"0","Es ist dr�ckend hei�.",
"0","Es schneit und st�rmt.",
"0","Es ist ist sehr nebelig und k�hl.",
"9","",

"38","2",
""+mann+" hat "+frau+" ein Gastgeschenk mitgebracht. Was ist es?",
"0","ein Strau� Blumen",
"1","Schokolade",
"0","ein Taschenbuch",
"0","eine Flasche Wein",
"0","eine Programmzeitschrift",

"38","3",
"Wo befindet sich die Videothek?",
"0","Sie ist im neuen Einkaufszentrum.",
"0","Sie ist beim botanischen Garten.",
"0","Sie ist im gleichen Haus, in dem "+frau+" wohnt.",
"1","Sie ist gleich um die Ecke.",
"9","",



"39","1",
"Warum steht "+mann+" zu Beginn der Geschichte unter einem Baum?",
"0","... weil er auf "+frau+" wartet.",
"1","... weil es heftig regnet.",
"0","... um sich vor der dr�ckenden Hitze zu sch�tzen.",
"0","... weil er sich hier mit einem Freund verabredet hat.",
"9","",

"39","2",
"W�hrend er dort steht, kommt jemand ganz bestimmtes an dem Baum vorbei. Wer?",
"0",""+frau+"",
"0","der B�rgermeister der Stadt",
"1","eine ber�hmte Person",
"0",""+mann+"s Bruder",
"9","",



"40","1",
""+mann+" tr�umt von seiner Familie. Was hat seine Tante jedes Jahr gemacht?",
"0","Sie hat seltsame Gedichte vorgetragen.",
"0","Sie hat schief gesungen.",
"1","Sie hat immer schreckliche Kekse gebacken.",
"0","Sie hat komische Geschichten erz�hlt.",
"9","",

"40","2",
"Und was machte sein Gro�vater bei den Familienfeiern?",
"1","Er spielte Geige.",
"0","Er spielte Klavier.",
"0","Er spielte Fl�te.",
"0","Er spielte Gitarre.",
"9","",

"40","3",
""+mann+"s Cousin hat auch immer Musik gemacht. Welche Instrumente spielte er?",
"0","Gitarre und Klavier",
"1","Fl�te und Klavier",
"0","Fl�te und Geige",
"0","Gitarre und Geige",
"9","",

"40","4",
""+mann+" vermisst seine Familie sehr. Wen wird er in den Ferien besuchen?",
"0","seine Geschwister",
"1","seine Eltern",
"0","seine Gro�eltern",
"0","seinen Onkel und seine Tante",
"0","seine Cousins und Cousinen",



"41","1",
""+frau+" unterh�lt sich w�hrend der Zugfahrt mit einem �lteren Herrn. Was fragt er sie?",
"0","... ob sie eine Urlaubsreise unternimmt.",
"1","... ob sie gesch�ftlich unterwegs ist.",
"0","... ob sie ihre Familie besuchen f�hrt.",
"0","... ob sie mit ihrem Freund reist.",
"9","",

"41","2",
"Wie oft war der �ltere Herr bereits verheiratet?",
"1","nur ein Mal",
"0","zwei Mal",
"0","drei Mal",
"0","�ber hundert Mal",
"9","",

"41","3",
"Wann starb die Frau des �lteren Mannes?",
"0","vor drei Jahren",
"0","vor vier Jahren",
"1","vor zwei Jahren",
"0","vor einem Jahr",
"9","",



"42","1",
"Welche Frage stellt "+mann+" "+frau+" zu Beginn der Geschichte?",
"1","... ob sie ein Doppelbett oder einzelne Betten nehmen sollen.",
"0","... ob sie getrennte Zimmer nehmen sollen.",
"0","... ob "+frau+" ein Zimmer mit Balkon m�chte.",
"0","... ob sich "+frau+" das Badezimmer mit ihm teilen m�chte.",
"9","",

"42","2",
"Wo soll sich das Hotel befinden, das die beiden buchen m�chten?",
"0","im Tal",
"1","auf dem Berg",
"0","im Dorf",
"0","am See",
"9","",

"42","3",
""+frau+" hat bereits an ein bestimmtes Hotel gedacht, in dem sie schon einmal war. Wann war sie dort?",
"1","im Sommer",
"0","im Winter",
"0","im Herbst",
"0","im Fr�hling",
"9",""
);

}
else {


mann=v[2*6+3];
frau=v[5*6+3];

var tv1=new Array(

"1","1",
"Was sagt "+mann+", nachdem er seinen Namen genannt hat?",
"0","Er macht "+frau+"  ein Kompliment.",
"1","Er sagt ihr, wie alt er ist.",
"0","Er erz�hlt ihr von seiner Arbeit.",
"0","Er fragt "+frau+" , ob er sie zu einem Eis einladen darf.",
"9","",

"1","2",
"Was fragt "+frau+" "+mann+", nachdem sie sich vorgestellt hat?",
"1","Sie m�chte von ihm wissen, aus welchem Land er kommt.",
"0","Sie fragt ihn, ob er sie ins Theater begleiten m�chte.",
"0","Sie fragt ihn, ob er sich in der Stadt auskennt.",
"0","Sie fragt ihn, in welchem Hotel er wohnt.",
"9","",

"1","3",
""+mann+" m�chte von "+frau+" wissen, ob sie hier Urlaub macht. Was antwortet sie?",
"0","Sie ist als Austauschstudentin dort.",
"1","Sie verbringt dort ihre Ferien.",
"0","Sie lebt und arbeitet dort.",
"0","Sie besucht dort ihre Tante.",
"9","",



"2","1",
"Worum geht es in dieser Geschichte?",
"1",""+mann+" ist in einem Hotel und fragt nach einem Einzelzimmer.",
"0",""+mann+" m�chte ein Doppelzimmer.",
"0",""+mann+" ist mit seinem Hotelzimmer unzufrieden und beschwert sich.",
"0",""+mann+" bittet die Empfangsdame um die Rechnung f�r sein Zimmer.",
"9","",

"2","2",
"Hat das Zimmer ein eigenes Bad?",
"0","Nein, die Waschr�ume befinden sich am Gang.",
"0","Nein, nur Doppelzimmer haben ein eigenes Bad.",
"1","Ja, das Zimmer hat ein eigenes Bad.",
"9","",
"9","",

"2","3",
"Wie viele Fernsehsender kann man im Zimmer empfangen?",
"0","vierzig",
"0","f�nfzig",
"1","sechzig",
"0","Der Fernseher ist leider kaputt.",
"9","",

"2","4",
"Worum bittet "+mann+" die Rezeptionistin am Ende der Geschichte?",
"0","um einen Stadtplan",
"1","um den Zimmerschl�ssel",
"0","um die Hotelrechnung",
"0","Er bittet sie, ihn um 7.30 Uhr zu wecken.",
"9","",



"3","1",
"Was macht "+mann+" zu Beginn der Geschichte?",
"0","Er besucht ein Museum.",
"0","Er spielt am Strand Federball.",
"1","Er liegt am Strand.",
"0","Er sitzt an der Strandbar.",
"9","",

"3","2",
"Was fragt ihn "+frau+", nachdem sie zu ihm her�ber gekommen ist?",
"0","Sie fragt ihn, ob er mit ihr baden gehen m�chte.",
"0","Sie fragt, ob sie ihn zu einem Eis einladen darf.",
"0","Sie fragt ihn nach dem Weg zum Hotel.",
"1","Sie fragt nach einer Toilette.",
"9","",

"3","3",
""+mann+" und "+frau+" verabreden sich. Was wollen sie gemeinsam unternehmen?",
"1","Sie m�chten am n�chsten Tag zusammen fr�hst�cken.",
"0","Sie m�chten am n�chsten Tag gemeinsam in die Stadt gehen.",
"0","Sie m�chten am n�chsten Tag gemeinsam zu Mittag essen.",
"0","Sie wollen abends gemeinsam in die Disco gehen.",
"9","",



"4","1",
"Was erz�hlt "+mann+" "+frau+" beim Fr�hst�ck?",
"0","... dass er kein Fleisch isst.",
"1","... dass er gerne Fleisch mag.",
"0","... dass er gerne hartgekochte Eier mag.",
"0","... dass er lieber weichgekochte Eier mag.",
"9","",

"4","2",
"Kann man in dem Hotel auch zu Mittag und zu Abend essen?",
"0","Ja, das Hotelrestaurant hat den ganzen Tag �ber ge�ffnet.",
"0","Das Hotel bietet nur Fr�hst�ck und Abendessen an.",
"1","Nein, das Hotel bietet nur Fr�hst�ck an.",
"0","Ja, aber die Preise sind sehr hoch dort.",
"9","",

"4","3",
"Wo befindet sich das andere Restaurant, das "+frau+" vorschl�gt?",
"0","Es liegt direkt am Strand.",
"1","Es ist direkt gegen�ber dem Hotel.",
"0","Es befindet sich am anderen Ende der Stra�e.",
"0","Es ist direkt am Bahnhof.",
"9","",



"5","1",
"Zu Beginn der Geschichte macht sich "+mann+" auf den Weg in die Stadt. Welches Verkehrsmittel m�chte er benutzen?",
"0","den Bus",
"0","die Stra�enbahn",
"0","ein Fahrrad",
"1","ein Taxi",
"9","",

"5","2",
"Er entscheidet sich, doch mit dem Zug zu fahren. Wann f�hrt der n�chste Zug?",
"1","in einer halben Stunde",
"0","in einer Stunde",
"0","in einer viertel Stunde",
"0","in einer dreiviertel Stunde",
"9","",

"5","3",
"Was f�r eine Fahrkarte kauft "+mann+"?",
"0","Er nimmt eine Hin- und R�ckfahrkarte.",
"0","Er kauft zwei einfache Karten f�r sich und f�r "+frau+".",
"1","Er nimmt eine einfache Fahrt.",
"0","Er m�chte ein Erste-Klasse-Ticket.",
"9","",



"6","1",
"Was f�llt "+mann+" auf, als er einen Spaziergang macht?",
"1","Er bemerkt, dass er kein Bargeld mehr hat.",
"0","Er entdeckt einen h�bschen Park.",
"0","Er bemerkt, dass er Hunger hat.",
"0","Er findet seinen Zimmerschl�ssel nicht mehr.",
"9","",

"6","2",
"Wonach sucht "+mann+" nachdem er bemerkt hat, dass er sich verlaufen hat?",
"0","nach einer Telefonzelle",
"0","nach einem Taxistand",
"1","nach seinem Stadtplan",
"0","nach einer Touristeninformation",
"9","",

"6","3",
""+mann+" bittet eine junge Frau um Hilfe. Wonach fragt er sie?",
"0","nach einem Bankautomaten",
"1","nach einer Wechselstube",
"0","nach der Touristeninformation",
"0","nach dem Weg zum Markt",
"9","",

"6","4",
"In welche Richtung soll "+mann+" an der Kreuzung laufen?",
"0","nach links",
"0","geradeaus",
"1","nach rechts",
"9","",
"9","",



"7","1",
""+mann+" braucht dringend Bargeld. Welches Problem taucht zu Beginn der Geschichte auf?",
"1","Er hat weder Travellerschecks noch eine Kreditkarte bei sich.",
"0","Er hat seine Geheimnummer vergessen.",
"0","Er hat nur Travellerschecks dabei.",
"0","Er hat kein Geld mehr auf seinem Bankkonto.",
"9","",

"7","2",
"Wonach fragt "+mann+" die Frau am Schalter der Wechselstube?",
"0","Er fragt, wie lange die Wechselstube noch ge�ffnet hat.",
"1","Er fragt nach dem Wechselkurs.",
"0","Er fragt, wie er am schnellsten zu seinem Hotel zur�ckkommt.",
"0","Er m�chte wissen, ob er auch Euro tauschen kann.",
"9","",

"7","3",
"Wie viel Geld m�chte "+mann+" umwechseln?",
"0","einhundertf�nfzig Euro",
"1","einhundertachtzig Euro",
"0","einhundert Euro",
"0","einhundertzwanzig Euro",
"9","",




"8","1",
"Was bemerkt "+mann+" zu Beginn dieser Geschichte?",
"0","... dass er durstig ist",
"0","... dass er hungrig ist",
"0","... dass er seine Verabredung mit "+frau+" vergessen hat",
"1","... dass er hungrig und durstig ist",
"9","",

"8","2",
"Was bestellt er sich in dem Caf� zuerst?",
"0","eine Tasse Kaffee",
"1","eine Tasse Tee",
"0","ein Glas Bier",
"0","eine gro�e Fruchtsaftschorle",
"9","",

"8","3",
"Was m�chte "+mann+" zu seinem Sandwich?",
"1","einen gro�en Salat",
"0","einen s��en Nachtisch",
"0","ein Glas Bier",
"0","eine gro�e Saftschorle",
"9","",




"9","1",
"Wo entdeckt "+mann+" das Plakat, das auf die Stadtrundfahrt hinweist?",
"0","Es befindet sich an einer Litfa�s�ule.",
"0","Das Plakat h�ngt an einer Bushaltestelle.",
"0","Er sieht es in einem Caf�.",
"1","Es h�ngt vor dem Bahnhof.",
"9","",

"9","2",
"Wie oft wird die Stadtrundfahrt angeboten?",
"0","alle zwei Stunden",
"0","jede halbe Stunde",
"1","jede Stunde",
"0","zweimal am Tag",
"9","",

"9","3",
"Gibt es bei der Rundfahrt eine Erm��igung?",
"0","Nein, leider nicht.",
"0","Ja, es gibt eine Erm��igung f�r Senioren.",
"0","Ja, Studenten zahlen nur die H�lfte des Fahrpreises.",
"1","Ja, f�r Kinder kostet die Fahrt nur die H�lfte.",
"9","",



"10","1",
"Was sieht sich "+mann+" in seinem Hotelzimmer im Fernsehen an?",
"1","Er schaut sich den Wetterbericht an.",
"0","Er sieht sich die Nachrichten an.",
"0","Er guckt eine Serie.",
"0","Er liest den Wetterbericht im Teletext.",
"9","",

"10","2",
"Wie war das Wetter am heutigen Tag?",
"0","Es war angenehm k�hl.",
"0","Das Wetter war regnerisch",
"0","Morgens war es nebelig und abends hat es geregnet.",
"1","Es war warm heute.",
"9","",

"10","3",
"Wie soll das Wetter am kommenden Tag werden?",
"0","Es soll den ganzen Tag �ber sehr sonnig und hei� werden.",
"0","Es soll deutlich k�lter werden und zu Gewittern kommen.",
"1","Am Abend kann es regnen und vereinzelt zu Gewittern kommen.",
"0","Morgens soll es regnen, ab Mittag aber kommt die Sonne raus.",
"9","",



"11","1",
""+frau+" und "+mann+" sitzen in einem Restaurant. Was bestellt sich "+frau+"?",
"1","Da sie sehr hungrig ist, bestellt sie sich ein Men�.",
"0","Sie hat nur wenig Appetit und bestellt einen kleinen Salat.",
"0",""+frau+" ist sehr hungrig und nimmt H�hnchen mit Reis.",
"0","Sie bestellt das Tagesgericht mit einer Suppe.",
"9","",

"11","2",
"Worauf hat "+frau+" vor der Hauptspeise Lust?",
"0","Sie bestellt sich einen Aperitif.",
"0","Vor dem Essen m�chte sie noch einen Kaffee trinken.",
"1","Sie w�hlt eine Vorspeise vom Buffet.",
"0","Sie bestellt sich erst mal eine gro�e Fruchtschorle.",
"9","",

"11","3",
"Was bestellen sich die beiden als Nachspeise?",
"0","einen Espresso",
"1","Eis mit Fr�chten",
"0","ein Zitronensorbet",
"0","Kuchen mit Schlagsahne",
"0","eine Schokoladencreme",



"12","1",
"Was macht "+mann+", nachdem er wieder nach Hause zur�ckgekehrt ist?",
"0","Er beginnt sein Sportstudium an der Universit�t.",
"1",""+mann+" beginnt ein Praktikum bei einer Zeitung.",
"0","Er jobbt in einem Fitnesscenter.",
"0","Er schreibt einen Reisebericht f�r die Tageszeitung.",
"9","",

"12","2",
"Aus welchem Grund telefoniert er?",
"1","Er bittet bei einem Sportstudio um Informationsmaterial.",
"0","Er ruft "+frau+" an, um mit ihr gemeinsam Sport zu machen.",
"0","Er m�chte Mitglied in einem Fitnesscenter werden.",
"0","Er m�chte Informationsmaterial von einem Reiseb�ro.",
"9","",

"12","3",
"Wann bekommt er die ersten Brosch�ren?",
"0","am �bern�chsten Tag",
"0","noch am selben Tag",
"1","am n�chsten Tag",
"0","erst eine Woche sp�ter",
"9","",



"13","1",
""+mann+" liest die Brosch�re des Sportzentrums. Welche Sportarten kann man dort unter anderem treiben?",
"1","Basketball, Fu�ball, Schwimmen",
"0","Fu�ball, Tennis, Schwimmen",
"0","Basketball, Tennis, Schwimmen",
"0","Klettern, Fu�ball, Tennis",
"9","",

"13","2",
"Wo liegt das Sportzentrum?",
"0","in der Stadtmitte",
"1","am Stadtrand",
"0","in der N�he des Bahnhofs",
"0","beim Stadtpark",
"9","",

"13","3",
"Wann ist das Sportzentrum ge�ffnet?",
"0","t�glich, au�er am Wochenende",
"0","von Montag bis Samstag",
"0","nur am Samstag und Sonntag",
"1","t�glich",
"9","",

"13","4",
"Welchen Entschluss fasst "+mann+", nachdem er die Brosch�re zu Ende gelesen hat?",
"1","Er m�chte sich das Sportzentrum selbst anschauen.",
"0","Ihm ist der Weg zum Sportzentrum zu weit und er beschlie�t, ein anderes aufzusuchen.",
"0","Er m�chte erst einmal "+frau+" fragen, ob sie ihn dorthin begleiten m�chte.",
"0","Er findet, dass er sportlich genug ist und ihm das Sportzentrum zu teuer ist.",
"9","",



"14","1",
"Zu Beginn dieser Geschichte redet "+mann+" mit einer Trainerin. Wor�ber sprechen sie?",
"1","�ber die Angebote des Sportzentrums",
"0","�ber ein neues Trainingsger�t",
"0","�ber "+mann+"s Trainingsprogramm",
"0","�ber richtige Ern�hrung",
"9","",

"14","2",
"Wor�ber redet die Trainerin anschlie�end?",
"0","Sie bedauert, dass die Kunden ihren M�ll nicht trennen.",
"0","Sie klagt �ber die M�llverschmutzung in der Innenstadt.",
"1","Sie erkl�rt ihm das Recyclingkonzept des Sportzentrums.",
"0","Sie bittet ihn, seine Abf�lle nicht einfach auf den Boden zu werfen.",
"9","",

"14","3",
"Wo befinden sich die Abfallbeh�lter?",
"0","im Eingangsbereich",
"0","in den Umkleiden",
"1","in jedem Raum sind M�llbeh�lter",
"0","auf dem Parkplatz und im Eingangsbereich",
"0","nur in den Gemeinschaftsr�umen",



"15","1",
""+mann+" m�chte seine Freunde zum Essen einladen. Aus welchem Anlass feiert er?",
"0",""+mann+" feiert das Ende seines Praktikums bei der Zeitung.",
"0","Er hat eine neue Wohnung bezogen.",
"0","Er hat sich mit "+frau+" verlobt.",
"0","Er ist von seiner Zeitung als Redakteur �bernommen worden.",
"1","Er will seine R�ckkehr aus dem Urlaub feiern.",

"15","2",
"Er ist ein guter Koch und m�chte seinen Freunden heute eine besondere Gaumenfreude bereiten. Um was f�r Spezialit�ten handelt es sich hierbei?",
"1","um typisch griechische",
"0","um typisch asiatische",
"0","um typisch arabische",
"0","um typisch deutsche",
"9","",

"15","3",
"Was f�r eine Suppe m�chte er seinen Freunden kochen?",
"0","eine herzhafte Gem�sesuppe",
"1","eine Fischsuppe",
"0","eine Rindsbouillon",
"0","eine Linsensuppe",
"9","",



"16","1",
""+frau+" ist heute Abend bei "+mann+" zu Gast. Wo wohnt sie?",
"0","in der Nachbarstadt",
"1","in der gleichen Stadt wie "+mann+"",
"0","auf dem Land",
"0"," in der Hauptstadt",
"9","",

"16","2",
"Wor�ber sprechen sie nach dem Essen?",
"0","�ber das neue Sportzentrum",
"0","�ber das tolle Essen",
"0","�ber ihre gemeinsamen Urlaubspl�ne f�r die Zukunft",
"1","�ber ihren gemeinsamen Urlaub",
"9","",

"16","3",
"Die beiden unterhalten sich sehr gut. Was beschlie�en sie dabei?",
"0","Sie m�chten zusammenziehen.",
"1","Sie verabreden sich f�r die n�chste Woche.",
"0","Sie verabreden sich, am n�chsten Tag gemeinsam essen zu gehen.",
"0","Sie verabreden sich f�r das kommende Wochenende zu einem Abendessen in "+frau+"s Wohnung.",
"9","",

"16","4",
""+frau+" bietet an, beim Absp�len zu helfen. Was entgegnet darauf "+mann+"?",
"0","Er freut sich sehr, dass er nicht allein abzuwaschen braucht.",
"0","Er meint, dass er das gerne alleine macht.",
"1","Er sagt, dass das nicht n�tig sei. Er hat schlie�lich eine Sp�lmaschine.",
"9","",
"9","",



"17","1",
"Was gef�llt "+frau+" ganz besonders an "+mann+"s Wohnung?",
"0","... dass sie so gro� ist",
"1","... dass sie wegen der gro�en Fenster so hell ist.",
"0","... dass sie h�bsch geschnitten ist.",
"0","... dass sie einen Balkon hat.",
"0","... dass sie eine sch�ne K�che hat.",

"17","2",
"Was st�rt "+frau+" an ihrem Wohnheim am meisten?",
"0","... dass es am Stadtrand liegt und nur schlecht zu erreichen ist.",
"1","... dass die K�che so klein und schmutzig ist und sie zum Waschen in den Keller gehen muss.",
"0","... dass ihr Zimmer so klein und ungem�tlich ist.",
"0","... dass ihre Mitbewohner immer in der K�che rauchen.",
"0","... dass ihr Zimmer viel zu teuer ist und es nur eine Waschk�che im Keller gibt.",

"17","3",
"Wo wird bald eine Wohnung frei, in die "+frau+" ziehen k�nnte?",
"0","im Nachbarhaus von Jos�",
"0","im Haus von "+mann+"s Arbeitskollegen",
"1","in "+mann+"s Haus",
"0","gegen�ber von "+mann+"s Haus",
"9","",



"18","1",
"Warum unternehmen "+mann+" und "+frau+" einen Ausflug?",
"0",""+mann+" m�chte ihr seine Heimatstadt zeigen.",
"0",""+mann+"s Tante betreibt in der Nachbarstadt eine Kunstgalerie und veranstaltet eine Vernissage.",
"1",""+frau+" m�chte ihm ihre Heimatstadt zeigen.",
"0",""+frau+" m�chte "+mann+" ihren Eltern vorstellen.",
"9","",

"18","2",
"Wo hat "+frau+" viel Zeit in ihrer Kindheit verbracht?",
"1","in einer Kunstgalerie",
"0","auf dem Stadtplatz",
"0","in der B�cherei",
"0","auf dem Spielplatz hinter ihrem Haus",
"0","im Museum",

"18","3",
"Bevor es ein Museum wurde, hatte das Geb�ude neben der Bank eine andere Funktion. Welche?",
"0","Es war das Rathaus.",
"0","Es war das Polizeipr�sidium.",
"1","Es war ein Gef�ngnis.",
"0","Es war der Sitz des Gerichts.",
"0","Es war eine Kirche.",



"19","1",
"An wen schreibt "+mann+" in dieser Geschichte einen Brief?",
"0","an seine Mutter",
"1","an seinen Bruder",
"0","an seine Schwester",
"0","an seinen Vater",
"0","an seinen Gro�vater",

"19","2",
"Wovon berichtet "+mann+" in dem Brief?",
"0","... dass er eine Wohnung f�r "+frau+" gefunden hat.",
"0","... dass er eine interessante Praktikumsstelle bei einer Zeitung hat.",
"1","... dass er im Urlaub war und dort ein M�dchen kennengelernt hat.",
"0","... dass er f�r "+frau+" gekocht hat und sie einen Ausflug unternommen haben.",
"9","",

"19","3",
"Was m�chte "+mann+" machen, wenn er zu Besuch kommt?",
"1","Er will seine Urlaubsbilder zeigen.",
"0","Er m�chte "+frau+" seiner Familie vorstellen.",
"0","Er m�chte ein �berraschungsgeschenk �berreichen.",
"0","Er will ein tolles Abendessen f�r seine alten Freunde zubereiten.",
"9","",

"19","4",
"Wohin geht "+mann+", nachdem er den Brief zu Ende geschrieben hat?",
"0","zur Post",
"0","zum Briefmarkenautomat",
"1","zum Briefkasten",
"0","zum Zeitschriftenh�ndler",
"0","zur Tankstelle",




"20","1",
""+mann+" ist sehr aufgeregt, als er Auto f�hrt. Wann hat er seinen F�hrerschein gemacht?",
"0","erst vor einem Jahr",
"0","erst in der letzten Woche",
"1","erst vor einigen Wochen",
"0","erst vor einigen Monaten",
"9","",

"20","2",
"In welche Richtung ist er mit seinem Auto unterwegs?",
"1","in Richtung Flughafen",
"0","in Richtung Innenstadt",
"0","in Richtung Bahnhof",
"0","in Richtung Hafen",
"0","in Richtung Strand",

"20","3",
"Die Dame an der Tankstelle r�t ihm, in eine andere Richtung weiterzufahren. Wohin soll er ihrer Meinung nach fahren?",
"0","nach rechts",
"1","nach links",
"0","geradeaus",
"0","zur�ck",
"9","",

"20","4",
"Warum ist auf der Autobahn ein Stau?",
"0","Dort sind gerade Bauarbeiten und eine Fahrspur ist gesperrt.",
"0","Ein Lastwagen ist liegen geblieben und blockiert die Stra�e.",
"1","Offenbar ist ein Unfall passiert.",
"0","Die Feuerwehr macht eine Gro��bung.",
"9","",





"21","1",
"Am Flughafen angekommen, geht "+mann+" zum Ticketschalter. Was f�r ein Flugticket m�chte er kaufen?",
"0","nur ein Hinflug-Ticket",
"1","Hin- und R�ckflug",
"0","ein Last-Minute-Ticket",
"9","",
"9","",

"21","2",
"Die Flughafenangestellte fragt ihn, wo er im Flugzeug sitzen m�chte. Was antwortet er?",
"1","Er m�chte einen Fensterplatz.",
"0","Er m�chte lieber einen Platz am Gang.",
"0","Er m�chte m�glichst nah am Ausgang sitzen.",
"0","Es ist ihm ganz egal. Er nimmt, was noch frei ist.",
"9","",

"21","3",
"Worauf legt "+mann+" noch Wert bei seiner Flugbuchung?",
"0","Er m�chte einen Flug ohne Zwischenstopps.",
"0","Er m�chte so fr�h wie m�glich fliegen.",
"1","Er m�chte den preiswertesten Flug.",
"0","Er m�chte morgens abfliegen.",
"0","Er m�chte Erster Klasse fliegen.",

"21","4",
"Wann soll sich "+mann+" beim Check-In einfinden?",
"1","eine Stunde vor Abflug",
"0","eine halbe Stunde vor Abflug",
"0","zwei Stunden vor Abflug",
"0","eineinhalb Stunden vor Abflug",
"9","",





"22","1",
"F�r wen m�chte "+mann+" noch Geschenke einkaufen?",
"0","f�r seine Mutter und seinen Vater",
"0","f�r seinen Bruder und seinen Vater",
"1","f�r seinen Bruder und seinen Gro�vater",
"0","f�r seinen Bruder und seine Schwester",
"9","",

"22","2",
""+mann+" ruft "+frau+" an, um sie zu fragen, ob sie Ideen f�r Geschenke hat. Was r�t sie ihm?",
"0","zu einem Buch und einer CD",
"1","auf den Flohmarkt zu gehen.",
"0","etwas zu basteln",
"0","mit ihr ins Einkaufszentrum zu gehen und gemeinsam zu suchen",
"9","",

"22","3",
"Warum m�chte "+mann+" ins Einkaufszentrum?",
"1","um fehlende Hygieneartikel zu kaufen",
"0","um mit "+frau+" nach Geschenken zu suchen",
"0","um sich Zeitschriften zu besorgen",
"0","um ein Buch und eine CD zu kaufen",
"9","",



"23","1",
""+frau+" bittet "+mann+", ihr ein besonderes Schmuckst�ck vom Juweliergesch�ft mitzubringen, in dem ihre Gro�mutter arbeitet. Worum handelt es sich hierbei?",
"1","um einen wertvollen Ring",
"0","um eine wertvolle Halskette",
"0","um ein Paar wertvolle Ohrringe",
"0","um eine wertvolle Brosche",
"9","",

"23","2",
"Warum hat "+frau+" das Schmuckst�ck von der Gro�mutter noch nicht bekommen?",
"0","Ihre Gro�mutter hatte es verlegt",
"0","Es sollte ein Geburtstagsgeschenk f�r "+frau+" sein.",
"1","Ihre Gro�mutter f�rchtet, es k�nnte mit der Post verloren gehen.",
"0","Die Gro�mutter m�chte auf diesem Weg "+mann+" kennenlernen.",
"9","",

"23","3",
"Gegen Ende des Telefonats fragt "+mann+" "+frau+" noch nach etwas. Wonach?",
"1","nach der Adresse des Juweliers",
"0","nach der Adresse der Gro�mutter",
"0","nach einer Vollmacht f�r die Abholung",
"0","nach einem Gastgeschenk f�r die Gro�mutter",
"9","",



"24","1",
"Die Sicherheitskontrollen beim Abflug verz�gern seine Reise. Um wie viele Stunden landet "+mann+" zu sp�t?",
"0","um zwei Stunden",
"1","um drei Stunden",
"0","um eine Stunde",
"0","um eine halbe Stunde",
"9","",

"24","2",
"Wie f�hlt sich "+mann+", nachdem er die Zollkontrolle passiert hat?",
"0","Er ist gl�cklich, weil er bald seine Familie wiedersieht.",
"0","Er ist traurig, weil "+frau+" ihn nicht begleiten konnte.",
"1","Er ist vom langen Flug sehr m�de.",
"0","Er ist w�tend, weil der Flug so viel Versp�tung hatte.",
"9","",

"24","3",
"Was f�llt ihm an den vielen Touristen auf, die im Terminal sind?",
"0","Sie sind alle braungebrannt.",
"1","Sie sprechen unterschiedliche Sprachen.",
"0","Sie sind alle sehr sommerlich gekleidet.",
"0","Sie schauen alle sehr gl�cklich und entspannt aus.",
"9","",

"24","4",
"Am Ausgang wird "+mann+" erwartet. Wer holt ihn ab?",
"1","sein Bruder",
"0","sein Vater",
"0","sein Gro�vater",
"0",""+frau+"s Gro�mutter",
"0","seine Schwester",



"25","1",
"Hat "+mann+" das Juweliergesch�ft auf Anhieb gefunden?",
"0","Ja, es ist gegen�ber der Wohnung seines Bruders.",
"0","Das Taxi hat ihn ohne Umwege dorthin gebracht.",
"1","Er musste erst durch die ganze Stadt laufen, bevor er es gefunden hat.",
"0","Er konnte die Adresse auf dem Stadtplan schnell finden.",
"9","",

"25","2",
"Wo ist der Juwelierladen?",
"1","Er befindet sich im Au�enbezirk der Stadt.",
"0","Er ist im Stadtzentrum.",
"0","Er ist in der N�he des Bahnhofs.",
"0","Er ist in einem Einkaufszentrum.",
"9","",

"25","3",
"Wem hat der Ehering, den "+mann+" abholen soll, fr�her geh�rt?",
"0","Es war der Ehering des Vaters von "+frau+"s Gro�mutter.",
"1","Er geh�rte der Mutter von "+frau+"s Gro�mutter.",
"0","Es war der Ehering von "+frau+"s Gro�mutter.",
"0","Er geh�rte der Gro�mutter von "+frau+"s Gro�mutter.",
"9","",



"26","1",
"Mit welchem Verkehrsmittel f�hrt "+mann+" in dieser Geschichte?",
"0","mit der S-Bahn",
"1","mit dem Bus",
"0","mit einem Taxi",
"0","mit der Stra�enbahn",
"9","",

"26","2",
"Was geschieht, nachdem "+mann+" Platz genommen hat?",
"0","Seine Fahrkarte wird kontrolliert.",
"0","Er ruft mit seinem Handy "+frau+" an.",
"1","Er schl�ft ein.",
"0","Er schaut sich vertr�umt die Gegend an.",
"9","",

"26","3",
"Was passiert im Traum?",
"1","Der Ring wird "+mann+" gestohlen.",
"0","Sein Geldbeutel wird ihm gestohlen.",
"0","Sein Handy wird ihm gestohlen.",
"0","Sein Flugticket wird ihm gestohlen.",
"0",""+frau+" ruft ihn an.",

"26","4",
"Was sagt der Busfahrer?",
"0","N�chster Halt: Hauptbahnhof.",
"1","Endstation, bitte alle aussteigen.",
"0","Getriebeschaden, bitte alle aussteigen.",
"0","Ich werde die Polizei verst�ndigen.",
"0","Ihr Ticket bitte.",



"27","1",
"Was macht "+mann+", nachdem er merkt, dass er sich in einem ihm unbekannten Stadtviertel befindet",
"0","Er ruft seinen Bruder an, um ihn zu fragen, ob er ihn abholen kann.",
"0","Er fragt eine junge Frau nach dem Weg.",
"1","Er beschlie�t, zu seinem Bruder zu trampen.",
"0","Er fragt an einem Taxistand, wo er sich befindet.",
"9","",

"27","2",
"Was passiert auf der Fahrt zur�ck zu seinem Bruder?",
"0","Der Wagen hat eine Reifenpanne.",
"0","Sie machen ein Picknick an einem See.",
"1","Sie geraten in einen Stau.",
"0","Der Wagen springt nach einem Zwischenhalt nicht mehr an.",
"9","",

"27","3",
"Was holt die junge Frau anschlie�end aus ihrem Kofferraum?",
"1","einen gro�en Korb mit Essen",
"0","einen Wagenheber",
"0","Warndreieck und Warnwesten f�r sie beide",
"0","eine gro�e Flasche Wasser",
"9","",

"27","4",
"Wie lange ben�tigen sie, um das Haus des Bruders zu finden?",
"0","eine Stunde",
"1","eine halbe Stunde",
"0","eine viertel Stunde",
"0","eineinhalb Stunden",
"9","",



"28","1",
"Warum m�chte "+frau+" in die Stadt gehen?",
"0","Sie m�chte sich neue Schuhe kaufen.",
"0","Sie hat vor, auf dem Markt Gem�se einzukaufen.",
"1","Sie will sich neue Kleidung kaufen.",
"0",""+frau+" m�chte mit "+mann+" in ein Caf� gehen.",
"0","Sie m�chte eine Freundin treffen.",

"28","2",
""+mann+" m�chte "+frau+" in die Stadt begleiten und sie vorher zuhause abholen. Wann kommt er vorbei?",
"1","in einer halben Stunde",
"0","in einer Stunde",
"0","in einer viertel Stunde",
"0","in einer dreiviertel Stunde",
"9","",

"28","3",
""+mann+" gef�llt "+frau+"s neues Kleid sehr gut. Worauf weist er sie jedoch hin?",
"1","... dass sie es nicht zum Arbeiten tragen kann.",
"0","... dass es sehr teuer ist.",
"0","... dass eine Naht aufgegangen ist.",
"0","... dass sie bis zum Schlussverkauf warten sollte.",
"0","... dass sie es enger n�hen lassen sollte",



"29","1",
"Im Kleidungsgesch�ft: Welches Kleidungsst�ck probiert "+mann+" zuerst an?",
"0","eine Hose",
"1","ein Hemd",
"0","eine Krawatte",
"0","einen Pullover",
"0","eine Jacke",

"29","2",
"Warum kann oder m�chte "+frau+" ihre alten Sandalen nicht mehr tragen?",
"0","Die Sohle ist kaputt.",
"1","Sie haben nicht die richtige Farbe.",
"0","Sie passen nicht mehr.",
"0","Sie findet, dass sie altmodisch aussehen.",
"9","",

"29","3",
"Welche Farbe haben die preisreduzierten Strumpfhosen?",
"0","blau",
"0","schwarz",
"0","grau",
"0","wei�",
"1","rot",



"30","1",
"Was m�chten "+mann+" und "+frau+" nach dem Einkauf machen?",
"0","Sie m�chten zusammen zu Mittag essen.",
"0","Sie wollen in ein Restaurant gehen.",
"1","Sie m�chten zusammen zu Abend essen.",
"0","Sie wollen an einem Stra�enimbiss etwas essen.",
"9","",

"30","2",
"Wie mag "+mann+" sein Steak?",
"0","nur mit Salz und Pfeffer gew�rzt.",
"0","mit vielen Gew�rzen und angebratenen Zwiebeln",
"1","mit vielen Gew�rzen und Senf",
"0","mit Kr�uterbutter",
"9","",

"30","3",
"Welche Beilage gibt es zum Steak?",
"1","Reis",
"0","Pellkartoffeln",
"0","Pommes Frites und Maiskolben",
"0","Bratkartoffeln",
"0","Nudeln",

"30","4",
"Was nehmen die beiden, wenn es kein Steak mehr gibt?",
"0","Schnitzel",
"1","Gefl�gel",
"0","Bratwurst",
"0","Fisch",
"9","",



"31","1",
""+frau+" und "+mann+" haben eine Einladung bekommen. Was ist der Anlass der Feier?",
"0","eine Hochzeit",
"0","eine Taufe",
"1","ein Geburtstag",
"0","eine neue Wohnung",
"9","",

"31","2",
"Warum kann "+frau+" "+mann+" nicht von ihrem Handy aus erreichen?",
"0",""+mann+" hat sein Handy ausgeschaltet.",
"0","Sie hat kein Guthaben mehr auf ihrem Handy.",
"1","Ihr Handy funktioniert nicht.",
"0","Sie hat ihr Handy bei "+mann+" liegen gelassen.",
"9","",

"31","3",
""+frau+" fragt einen Taxifahrer nach einer Telefonzelle. Wo befindet sich die n�chste?",
"0","beim Bahnhof",
"0","beim Markt",
"0","beim Rathaus",
"1","beim Postamt",
"0","im Einkaufszentrum",

"31","4",
"Wo in "+mann+"s Wohnung hatte "+frau+" das Geschenk vergessen?",
"0","Es lag in der K�che.",
"0","Es war im Regal im Flur.",
"1","Es lag auf dem Tisch neben den Blumen.",
"0","Es war auf dem Schreibtisch neben der Lampe.",
"0","Sie hatte es auf dem Nachttisch vergessen.",



"32","1",
""+frau+" und "+mann+" sind auf dem Weg zur Party. Pl�tzlich wird die Stille gest�rt. Wovon?",
"1","von lauten Hilferufen",
"0","von den Sirenen vieler Feuerwehrfahrzeuge",
"0","von der Sirene eines Rettungswagens",
"0","von kreischenden Kindern",
"0","von einem Feueralarm",

"32","2",
"Als das Feuer ausbrach, waren sehr viele Leute im Haus. Was war der Anlass hierf�r?",
"0","Sie feierten einen Geburtstag.",
"0","Ein neues Gesch�ft wurde er�ffnet.",
"1","Eine Hochzeit wurde dort gefeiert.",
"0","Sie feierten eine Taufe.",
"9","",

"32","3",
"Gl�cklicherweise haben alle Hausbewohner den Brand �berlebt. Wer hat sie gerettet?",
"0","ein mutiger Nachbar",
"0","ein tapferer Polizist",
"1","ein Feuerwehrmann",
"0","der alte Mann",
"9","",



"33","1",
""+mann+" besucht "+frau+" bei ihrer Arbeitsstelle. Als was arbeitet sie?",
"0","Sie ist �rztin.",
"0","Sie ist Krankenschwester.",
"1","Sie arbeitet in einer Apotheke.",
"0","Sie ist Arzthelferin.",
"0","Sie arbeitet bei einer Krankenversicherung.",

"33","2",
"Was r�t ihm "+frau+" gegen Kopfschmerzen?",
"0","zum Arzt zu gehen",
"1","eine Kopfschmerztablette zu nehmen",
"0","fr�h ins Bett zu gehen",
"0","ein Entspannungsbad zu machen",
"9","",

"33","3",
"Was w�rde ihm "+frau+" raten, wenn er Durchfall h�tte und ihm �bel w�re?",
"0","Tabletten und ein Antibiotikum zu nehmen",
"1","einen Arzt aufzusuchen",
"0","weniger Alkohol zu trinken",
"0","Kohletabletten zu nehmen",
"9","",



"34","1",
"Was f�r einen Film haben "+mann+" und "+frau+" zuletzt im Kino gesehen?",
"1","einen indischen M�rchenfilm",
"0","einen indischen Actionfilm",
"0","einen Western mit Indianern",
"0","einen amerikanischen M�rchenfilm",
"9","",

"34","2",
"Die beiden schauen sich das Kinoprogramm im Internet an. Was gef�llt "+frau+" an einem Schauspieler besonders?",
"1","... dass er graues Haar hat und elegant gekleidet ist.",
"0","... dass er sch�nes blondes Haar hat und gut gebaut ist.",
"0","... dass er mit seinem grauen Haar sehr weise und gelehrt aussieht.",
"0","... dass er in vielen herausragenden Spielfilmen mitgewirkt hat.",
"9","",

"34","3",
"Nachdem alle Filme im Kino bereits ausverkauft sind, hat "+frau+" eine andere Idee. Was schl�gt sie vor?",
"0","Sie fragt "+mann+", ob er mit ihr essen gehen will.",
"1","Sie schl�gt vor, ins Theater zu gehen.",
"0","Sie w�rde gerne einen netten Fernsehabend machen.",
"0","Sie w�rde gerne ins Ballett gehen.",
"0","Sie schl�gt vor, sich mit ihren Freunden zu treffen.", 



"35","1",
""+frau+" passt jeden Samstag auf die Kinder der Nachbarn auf. Wie viele Kinder haben sie?",
"0","zwei",
"0","vier",
"0","f�nf",
"1","drei",
"9","",

"35","2",
"Warum geht "+frau+" mit ihnen heute nicht auf den Spielplatz?",
"0","weil der Junge krank ist",
"0","weil etwas Spannendes im Kinderkanal l�uft",
"1","weil es regnet",
"0","weil es drau�en zu hei� ist",
"0","weil die Kinder keine Lust haben",

"35","3",
"Die Kinder haben sich ein Spiel ausgedacht. Welches?",
"0","Sie spielen mit ihren Stofftieren Bauernhof.",
"0","Sie spielen, dass ihre Puppen zum Kindergarten gehen.",
"1","Sie spielen, dass ihre Stofftiere zur Schule gehen.",
"0","Sie spielen, dass ihre Stoffpuppen krank sind und ins Krankenhaus m�ssen.",
"9","",



"36","1",
"Was m�chte sich "+frau+" im Internet bestellen?",
"0","einen neuen, ganz speziellen Skianzug",
"0","besondere gebrauchte Skier",
"1","neue, ganz spezielle Skier",
"0","ein neues, ganz spezielles Snowboard",
"9","",

"36","2",
"Aus welchem Grund sucht sie danach im Internet?",
"0","Der Preis ist hier wesentlich g�nstiger.",
"1","In keinem Sportgesch�ft der Stadt konnte sie diesen speziellen Gegenstand finden.",
"0","Es ist viel praktischer dort zu suchen.",
"0","Sie kann sich hier besser informieren und die Preise vergleichen.",
"9","",

"36","3",
"Welche Farbe w�hlt "+frau+" aus?",
"0","rot",
"1","gelb",
"0","blau",
"0","wei�",
"9","",

"36","4",
"Wie soll die Bezahlung erfolgen?",
"1","per Rechnung",
"0","per Bankeinzug",
"0","per Online-�berweisung",
"0","�ber ein Online-Bezahlsystem",
"0","in bar",



"37","1",
""+frau+" ist in eine neue Wohnung umgezogen. Wo befindet sich diese?",
"0","Sie liegt in der N�he des Bahnhofs",
"0","Sie ist im Au�enbezirk der Stadt.",
"1","Sie ist mitten in der Stadt.",
"0","Sie ist neben dem gro�en Einkaufszentrum.",
"9","",

"37","2",
""+frau+" erkl�rt "+mann+" am Telefon, wie er zu ihr kommt. Welchen Bus soll er nehmen?",
"0","Bus Nummer 11",
"0","Bus Nummer 8",
"1","Bus Nummer 10",
"0","Bus Nummer 9",
"9","",

"37","3",
"An welcher Haltestelle soll er aus dem Bus aussteigen?",
"1","am botanischen Garten",
"0","am Hauptbahnhof",
"0","am Museum",
"0","am Rathaus",
"0","am Stadtpark",

"37","4",
"Welche Hausnummer hat das Haus, in dem "+frau+" wohnt?",
"0","sieben",
"1","acht",
"0","vier",
"0","neun",
"9","",



"38","1",
"Wie ist das Wetter an diesem Tag?",
"1","Es ist regnerisch und st�rmisch.",
"0","Es ist dr�ckend hei�.",
"0","Es schneit und st�rmt.",
"0","Es ist ist sehr nebelig und k�hl.",
"9","",

"38","2",
""+mann+"  hat "+frau+" ein Gastgeschenk mitgebracht. Was ist es?",
"0","ein Strau� Blumen",
"1","eine Schokolade",
"0","ein Taschenbuch",
"0","eine Flasche Wein",
"0","eine Programmzeitschrift",

"38","3",
"Die beiden lesen die Programmzeitschrift. Welche Sendungen laufen gerade?",
"1","Es laufen Serien und Sportnachrichten.",
"0","Es kommen Actionfilme und Kom�dien.",
"0","Es laufen alte Klassiker.",
"0","Derzeit werden Fu�ball und einige Spielfilme gesendet.",
"9","",

"38","4",
"Wo befindet sich die Videothek?",
"0","Sie ist im neuen Einkaufszentrum.",
"0","Sie ist beim botanischen Garten.",
"0","Sie ist im gleichen Haus, in dem "+frau+" wohnt.",
"1","Sie ist gleich um die Ecke.",
"9","",



"39","1",
"Warum m�chte "+frau+" ihre Fremdsprachenkenntnisse auffrischen?",
"1","... weil sie bei einem fremdsprachigen Film nicht alles verstanden hat.",
"0","weil sie mit "+mann+" ins Ausland reisen m�chte.",
"0","... weil sie von "+mann+" einen Sprachkurs geschenkt bekommen hat.",
"0","... weil sie viele Untertitel des Films nicht verstanden hatte.",
"9","",

"39","2",
"Am n�chsten Tag schaut "+frau+" in ihren Sprachkurs. Wo beginnt sie zu lernen?",
"0","Sie beginnt mit Grammatik�bungen.",
"1","Sie beginnt mit dem Lernen von Vokabeln.",
"0","Sie macht Aussprache�bungen.",
"0","Sie �berpr�ft ihr Wissen zum Satzbau.",
"9","",

"39","3",
"Nachdem sie l�ngere Zeit gelernt hat, hat sie sich eine Belohnung verdient. Was macht sie?",
"1","Sie unternimmt einen Spaziergang.",
"0","Sie kauft sich eine Kugel Eis bei der Eisdiele.",
"0","Sie geht ins Kino.",
"0","Sie macht einen Einkaufsbummel.",
"9","",



"40","1",
""+mann+" tr�umt von seiner Familie. Was hat seine Tante jedes Jahr gemacht?",
"0","Sie hat seltsame Gedichte vorgetragen.",
"0","Sie hat schief gesungen.",
"1","Sie hat immer schreckliche Kekse gebacken.",
"0","Sie hat komische Geschichten erz�hlt.",
"9","",

"40","2",
"Und was machte sein Gro�vater bei den Familienfeiern?",
"1","Er spielte Geige.",
"0","Er spielte Klavier.",
"0","Er spielte Fl�te.",
"0","Er spielte Gitarre.",
"9","",

"40","3",
""+mann+"s Cousin hat auch immer Musik gemacht. Welche Instrumente spielte er?",
"0","Gitarre und Klavier",
"1","Fl�te und Klavier",
"0","Fl�te und Geige",
"0","Gitarre und Geige",
"9","",

"40","4",
""+mann+" vermisst seine Familie sehr. Wen wird er in den Ferien besuchen?",
"0","seine Geschwister",
"1","seine Eltern",
"0","seine Gro�eltern",
"0","seinen Onkel und seine Tante",
"0","seine Cousins und Cousinen",



"41","1",
""+mann+" l�dt "+frau+" ein, mit ihm seine Eltern zu besuchen. Wie lange m�chten sie einen Leihwagen mieten?",
"0","f�r eine Woche",
"1","f�r zwei Wochen",
"0","f�r zwei Tage",
"0","f�r zehn Tage",
"9","",

"41","2",
"Was f�r ein Leihauto m�chten sie mieten?",
"0","einen Sportwagen",
"0","einen Kleinwagen",
"0","das g�nstigste Mietauto",
"1","einen ger�umigen Wagen",
"9","",

"41","3",
"Die Dame von der Autovermietung bittet "+mann+" noch etwas mitzubringen, wenn sie das Auto mieten. Worum handelt es sich hierbei?",
"1","Er soll seinen F�hrerschein und seine Kreditkarte mitbringen.",
"0","Er soll seinen F�hrerschein und seinen Reisepass vorzeigen.",
"0","Er soll den F�hrerschein und Bargeld f�r die Anzahlung mitnehmen.",
"0","Er braucht nur seinen F�hrerschein mitbringen.",
"9","",



"42","1",
""+frau+" unterh�lt sich mit "+mann+"s Vater. Was macht "+mann+" w�hrenddessen?",
"0","Er erz�hlt seinen Geschwistern, was er in letzter Zeit erlebt hat.",
"0","Er hilft seiner Mutter beim Kochen.",
"0","Er schaut Fernsehen.",
"1","Er hilft seiner Mutter beim Abwasch.",
"9","",

"42","2",
"Welchen Beruf hat "+mann+"s Vater?",
"1","Er ist Maler.",
"0","Er ist Elektriker.",
"0","Er ist B�cker.",
"0","Er ist Schreiner.",
"0","Er ist Lehrer.",

"42","3",
"Wann wurde das Haus von "+mann+"s Eltern renoviert?",
"0","im letzten Jahr",
"0","vor drei Jahren",
"1","vor zwei Jahren",
"0","vor zwei Monaten",
"0","vor f�nf Jahren",

"42","4",
"Was machen sie, nachdem es das Dessert gegeben hat?",
"0","Sie unternehmen einen Spaziergang.",
"0",""+mann+"s Eltern f�hren "+frau+" durch das Haus.",
"1","Sie sitzen zusammen und unterhalten sich.",
"0","Sie schauen gemeinsam fern.",
"9",""
);

}


}


if (sprachkuerzel.indexOf("3")>1) { // ## Aufbaukurse

mann=v[5*6+3];
frau=v[7*6+3];

var tv1=new Array(

"1","1",
"In dieser Geschichte suchen "+frau+" und "+mann+" nach einer Wohnung. Wo sollte die Wohnung idealerweise liegen?",
"0","Die Wohnung sollte in einem Vorort liegen.",
"0","Die Wohnung sollte auf dem Land sein.",
"1","Die Wohnung sollte im Stadtzentrum sein.",
"0","Die Wohnung sollte ganz in der N�he des Bahnhofs sein.",
"9","",


"1","2",
"Wie viele Wohnungen schauen sich die beiden an, bis sie eine Entscheidung treffen?",
"1","zwei",
"0","eine",
"0","vier",
"0","zehn",
"9","",


"1","3",
"Aus welchem Grund entscheiden sie sich gegen die erste Wohnung?",
"0","Weil sie zu klein ist.",
"0","Weil keine Terrasse zur Wohnung geh�rt.",
"1","Weil sie an einer stark befahrenen Stra�e liegt.",
"9","",
"9","",


"1","4",
"Was denken "+frau+" und "+mann+" �ber die zweite Wohnung?",
"0","Die Lage der Wohnung ist nicht ideal, denn sie liegt direkt neben einer Fabrik.",
"1","Die Lage der Wohnung ist ideal, denn ein Supermarkt und eine Bibliothek sind ganz in der N�he.",
"0","Die Lage der Wohnung ist nicht ideal, denn der n�chste Supermarkt ist weit entfernt.",
"9","",
"9","",


"2","1",
"Worum geht es in dieser Geschichte?",
"0",""+mann+" und "+frau+" wollen Geld von ihrem Konto abheben.",
"0",""+mann+" m�chte sein Sparbuch aufl�sen.",
"1",""+mann+" und "+frau+" m�chten ein neues Konto er�ffnen.",
"9","",
"9","",

"2","2",
"Warum m�chten die beiden ein neues Konto er�ffnen?",
"0","Weil ihnen ihr altes Konto gek�ndigt wurde.",
"1","Weil sie von diesem Konto aus die Miete f�r die gemeinsame Wohnung �berweisen m�chten.",
"0","Weil die Bank gerade ein Konto zu g�nstigen Konditionen anbietet.",
"9","",
"9","",

"2","3",
"Was muss "+mann+" alles in das Antragsformular der Bank eintragen?",
"0","Nur seinen Nachnamen und seinen Vornamen",
"1","Nachname, Vorname, Adresse und die H�he seines Gehaltes",
"0","Seinen Namen, seine Telefonnummer und die Anschrift seiner Firma",
"9","",
"9","",


"3","1",
""+frau+" und "+mann+" werden bald in ihre neue Wohnung einziehen. Welches Zimmer muss vor dem Einzug noch renoviert werden?",
"1","das Bad",
"0","das Schlafzimmer",
"0","das Wohnzimmer",
"0","das Kinderzimmer",
"0","die K�che",

"3","2",
""+frau+" m�chte einen Spiegel an der Wand anbringen. In welcher Farbe w�nscht sie sich den Rahmen des neuen Spiegels?",
"0","in rot",
"0","in rosa",
"0","in gr�n",
"1","in blau",
"9","",


"3","3",
"Was ist in der neuen K�che noch zu tun?",
"0","Die Sp�lmaschine muss noch angeschlossen werden.",
"1","Kacheln sollen an den W�nden angebracht werden.",
"0","Der neue Tisch muss aufgebaut werden.",
"9","",
"9","",



"4","1",
"Worum geht es in dieser Geschichte?",
"0",""+frau+" und "+mann+" bauen eine Schrankwand ein.",
"0",""+frau+" und "+mann+" kaufen einen neuen Schrank.",
"1",""+frau+" und "+mann+" bauen ein neues Regal auf.",
"9","",
"9","",


"4","2",
"Wer ist geschickt im Umgang mit Werkzeug?",
"1",""+frau+"",
"0",""+mann+"",
"0","Der Bruder von "+mann+"",
"9","",
"9","",


"4","3",
"Was genau macht "+mann+" in dieser Geschichte?",
"0","Er legt sich aufs Sofa und macht ein Schl�fchen.",
"0","Er kocht Kaffee.",
"0","Er b�gelt seine Hemden.",
"1","Er sammelt die herumliegenden N�gel ein.",
"9","",



"5","1",
"Was ist in dem Paket, das "+mann+" bekommt?",
"1","ein Fernseher",
"0","eine Sp�lmaschine",
"0","ein DVD-Player",
"0","ein Mixer",
"9","",


"5","2",
"Was ist das Problem mit der Lieferung?",
"0","Der Fernseher ist defekt angekommen.",
"1","Die Fernbedienung des Fernsehers fehlt.",
"0","Es wurde ein DVD-Player anstatt des Fernsehers geliefert.",
"0","Die Sp�lmaschine wurde nicht geliefert.",
"9","",


"5","3",
""+mann+" beschlie�t, sich an den Lieferanten zu wenden und sich zu beschweren. Auf welchem Weg tut er das?",
"0","Er ruft den Lieferanten an.",
"0","Er schreibt einen Brief.",
"1","Er schreibt eine E-Mail.",
"0","Er f�llt das Beschwerdeformular aus, das er im Paket gefunden hat.",
"9","",


"6","1",
""+frau+" und "+mann+" kochen f�r ihre Freunde. Gestern war "+mann+" daf�r einkaufen. Was hat er gekauft.",
"1","Er hat frisches Obst gekauft.",
"0","Er hat Fleisch und Gem�se gekauft.",
"0","Er hat neue Weingl�ser gekauft.",
"0","Er hat Kartoffeln gekauft.",
"9","",


"6","2",
"Was soll es als Nachspeise geben?",
"0","Eis mit frischen Fr�chten.",
"0","Eine Schokoladentorte.",
"1","Einen Obstsalat aus frischen Fr�chten.",
"9","",
"9","",


"6","3",
""+frau+" erkl�rt "+mann+", was er tun muss. Was sagt sie zu ihm?",
"0","Er soll schon mal die neuen Weingl�ser suchen.",
"1","Er soll das Obst waschen, sch�len und kleinschneiden.",
"0","Er soll die Teller sp�len.",
"0","Er soll den Tisch decken.",
"9","",


"7","1",
"Heute gehen "+frau+" und "+mann+" ins Stadium. Was erwartet man von diesem Fu�ballspiel?",
"0","Die eine Mannschaft ist klar �berlegen, es wird wahrscheinlich ein recht langweiliges Spiel werden.",
"1","Die Begegnung ist eine Herausforderung f�r beide Mannschaften.",
"0","Die beiden wollen mit ihren Freunden das Spiel gegen ihre Gegner gewinnen.",
"9","",
"9","",


"7","2",
"Doch "+frau+"s und "+mann+"s Vorfreude auf das Spiel ist nicht ganz ungetr�bt. Weshalb?",
"0","Sie m�ssen sich lange vor dem Haupteingang anstellen.",
"0","Der Beginn des Spiels verz�gert sich.",
"1","Es regnet leider.",
"0","Sie haben keine guten Pl�tze mehr bekommen.",
"9","",


"7","3",
"Wo sind die Sitzpl�tze der beiden?",
"0","Die beiden sitzen in der letzten Reihe ganz oben.",
"1","Die beiden sitzen genau hinter dem Tor.",
"0","Die beiden sitzen - wie immer - in der S�dkurve.",
"0","Die beiden stehen mit ihren Freunden auf dem Spielfeld.",
"9","",




"8","1",
""+frau+" und "+mann+" verreisen �bers Wochenende. Wo werden Sie �bernachten?",
"0","Sie haben ein Zimmer in einem teuren Hotel reserviert.",
"0","Sie nehmen ihr Zelt mit und schlafen auf dem Campingplatz.",
"0","Sie besuchen Freunde und �bernachten bei ihnen.",
"1","Sie haben sich eine H�tte gemietet.",
"9","",


"8","2",
"Wie werden sie dorthin kommen?",
"0","Sie fahren mit dem Zug.",
"1","Sie fahren mit dem Auto.",
"0","Sie werden dorthin fliegen.",
"0","Sie fahren mit den Fahrr�dern dorthin.",
"9","",


"8","3",
"Was m�chten Sie dort unternehmen?",
"1","Sie wollen ihre Fahrr�der mitnehmen und mit den Fahrr�dern Ausfl�ge machen.",
"0","Sie wollen sich dort einfach nur erholen und ganz viel schlafen und lesen.",
"0","Sie wollen ihre Ausr�stung mitnehmen und dort zum Klettern gehen.",
"0","Sie wollen dort mit dem Auto einen Ausflug zum See machen.",
"9","",




"9","1",
""+frau+" und "+mann+" packen ihre Sachen f�r das Wochenende ein. Was nehmen sie mit?",
"1","Sie nehmen M�tze und Regenmantel mit.",
"0","Sie nehmen ihre Badesachen mit.",
"0","Sie nehmen ihr Boot mit.",
"0","Sie nehmen Wanderschuhe und Rucks�cke mit.",
"9","",


"9","2",
"W�hrend sie die Koffer packen, unterhalten sich die beiden. Wor�ber unterhalten sie sich?",
"0",""+mann+" meint, sie h�tten vielleicht doch besser mit dem Zug fahren sollen.",
"0",""+mann+" sagt, dass er sich schon sehr auf das Wochenende freue.",
"1",""+mann+" bedauert, dass sie um diese Jahreszeit nicht mehr baden k�nnen.",
"9","",
"9","",


"9","3",
"Auf der Fahrt schl�gt "+frau+" vor eine Pause zu machen. Wie reagiert "+mann+" auf diese Idee?",
"0","Er freut sich, die Fahrt unterbrechen zu k�nnen, denn er m�chte sich auch ein bisschen die Beine vertreten.",
"0","Er freut sich, die Fahrt unterbrechen zu k�nnen, denn er hat Hunger und w�rde gerne etwas essen gehen.",
"0","Es ist dagegen, die Fahrt zu unterbrechen, denn er hat gerade keine Lust, eine Pause zu machen.",
"1","Es ist dagegen, die Fahrt zu unterbrechen, denn sie haben es eilig und m�ssen noch den Schl�ssel zur H�tte abholen.",
"9","",



"10","1",
"Haben "+frau+" und "+mann+" es noch rechtzeitig geschafft den Schl�ssel zur H�tte abzuholen?",
"1","Ja, sie sind noch rechtzeitig gekommen.",
"0","Nein, sie sind nicht mehr rechtzeitig gekommen.",
"9","",
"9","",
"9","",


"10","2",
"Wie haben sie den ersten Abend verbracht?",
"0","Sie haben noch einen langen Spaziergang gemacht.",
"1","Sie haben ihre Koffer ausgepackt und zu Abend gegessen.",
"0","Sie haben gem�tlich vor dem Kamin gesessen und haben gelesen.",
"9","",
"9","",


"10","3",
"Was unternehmen sie am n�chsten Tag?",
"0","Sie schlafen lange und fr�hst�cken erst sp�t.",
"0","Sie packen ihre Koffer aus und kochen Essen.",
"1","Sie brechen zu einer Radtour auf.",
"9","",
"9","",


"10","4",
"Auf der Radtour erschrickt "+mann+" pl�tzlich. Wovor erschreckt er sich?",
"0","Vor einem Lastwagen, der vor ihm pl�tzlich bremst.",
"1","Vor einem Hund, der n�her kommt und laut bellt.",
"0","Vor "+frau+", die ihn �berholt und pl�tzlich ganz dicht vor ihm f�hrt.",
"0","Vor den Tieren auf dem Bauernhof.",
"0","Vor einer Katze, die �ber die Stra�e l�uft.",




"11","1",
""+mann+" ist von einem Insekt am Auge gestochen worden. Warum ist die Situation f�r ihn gef�hrlich?",
"1","Weil er allergisch ist.",
"0","Weil er pl�tzlich nichts mehr sehen kann.",
"0","Weil er sofort das Bewusstsein verliert.",
"9","",
"9","",


"11","2",
"Was kann "+frau+" tun, um ihm zu helfen?",
"1","Sie l�uft und holt Hilfe.",
"0","Sie nimmt ihr Handy und ruft den Notarzt.",
"0","Sie kann ihm leider nicht helfen.",
"9","",
"9","",


"11","3",
"Wie endet die Geschichte?",
"0","Der Krankenwagen kommt und "+mann+" muss ins Krankenhaus.",
"0","Weit und breit ist niemand, der "+mann+" helfen k�nnte und so muss "+frau+" erste Hilfe leisten.",
"1","Der Arzt kommt rechtzeitig und leistet erste Hilfe.",
"0",""+frau+" holt eine B�uerin zu Hilfe, die "+mann+" erste Hilfe leistet.",
"9","",




"12","1",
"Wie verbringen "+frau+" und "+mann+" den Abend?",
"0","Sie gehen in die Disco zum Tanzen.",
"0","Sie sitzen am K�chentisch und unterhalten sich.",
"1","Sie sitzen vor der H�tte und unterhalten sich.",
"0","Sie machen einen Abendspaziergang.",
"9","",


"12","2",
"Wor�ber unterhalten sie sich?",
"0","�ber die Erlebnisse des Tages.",
"1","�bers Wetter.",
"0","Dar�ber, was sie morgen unternehmen wollen.",
"9","",
"9","",


"12","3",
"Die beiden beschlie�en, ins Bett zu gehen - aber "+mann+" kann nicht einschlafen. Warum?",
"0","Weil "+frau+" so laut schnarcht.",
"1","Weil seine Bettdecke zu kurz und die Matratze zu hart ist.",
"0","Weil "+frau+" immer vor dem Einschlafen rumjammert.",
"0","Weil er auf einer Luftmatratze schlafen muss.",
"0","Weil seine Bettdecke zu d�nn ist und er friert.",


"13","1",
"Worum geht es in dieser Geschichte?",
"1",""+mann+" und "+frau+" schreiben Postkarten.",
"0",""+mann+" und "+frau+" gehen einkaufen.",
"0",""+mann+" und "+frau+" fahren wieder nach Hause.",
"9","",
"9","",


"13","2",
"An wen schreiben sie eine Postkarte?",
"0","An den Chef von "+mann+".",
"0","An die beste Freundin von "+frau+".",
"1","An die Eltern von "+mann+".",
"0","An die Eltern von "+frau+".",
"9","",


"13","3",
"Was schreiben sie auf die Postkarte?",
"0","Sie schreiben, dass sie spazieren waren.",
"0","Sie schreiben, dass sie Ski gefahren sind.",
"1","Sie schreiben, dass sie mit dem Rad unterwegs waren.",
"0","Sie schreiben, dass das Wetter schlecht und das Essen ungenie�bar war.",
"0","Sie schreiben, dass "+mann+" von einem Insekt gestochen worden ist.",




"14","1",
"Wann fahren "+frau+" und "+mann+" wieder nach Hause zur�ck?",
"1","Am Sonntag.",
"0","Am Montag.",
"0","Am Samstag.",
"0","Am Dienstag.",
"9","",


"14","2",
"W�hrend der Fahrt unterhalten sich die beiden. Wor�ber reden sie?",
"0","Sie besprechen Probleme in ihrer Beziehung.",
"1",""+mann+" erz�hlt von einem sch�nen Urlaub.",
"0",""+frau+" plant schon wieder den n�chsten gemeinsamen Urlaub.",
"9","",
"9","",


"14","3",
"Was hat "+mann+" in diesem Urlaub gemacht?",
"0","Er ist mit dem Wohnwagen in den Norden gefahren.",
"1","Er ist mit dem Schlafwagen in den S�den gefahren.",
"9","",
"9","",
"9","",


"14","4",
"Was erz�hlt "+mann+" �ber seinen Urlaub?",
"0","Er hat sich jeden Tag an den Strand gelegt und sich entspannt.",
"0","Er hatte schlimmes Heimweh und hat seinen Urlaub nur im Hotel verbracht.",
"1","Er hat sich nicht nur an den Strand gelegt, sondern er hat viel unternommen, weil er sich f�r Land und Leute interessiert.",
"9","",
"9","",






"15","1",
"Was denkt "+frau+" �ber "+mann+"s Geschichte?",
"0","Sie findet seine Erz�hlung nicht besonders interessant und die Aussicht darauf, auch noch die Fotos anzuschauen, findet sie langweilig.",
"0","Sie findet seine Erz�hlung zwar langweilig, aber seine Fotos w�rde sie gerne sehen.",
"1","Sie findet seine Erz�hlung faszinierend und m�chte auch gerne seine Bilder der Reise sehen.",
"9","",
"9","",


"15","2",
"Welches Bild gef�llt "+frau+" besonders gut?",
"1","Ein Bild, das vier Kinder zeigt.",
"0","Ein Bild, das vier sch�ne M�nner zeigt.",
"0","Ein Bild, das drei Wolkenkratzer zeigt.",
"0","Ein Bild, das viele Menschen zeigt.",
"9","",

"15","3",
"Wie haben die Kinder darauf reagiert, dass "+mann+" sie fotografiert hat?",
"0","Sie haben Angst bekommen und sind weggelaufen.",
"1","Sie haben sich gefreut, dass "+mann+" ein Bild von ihnen gemacht hat.",
"0","Sie haben sich nicht gefreut und "+mann+" beschimpft.",
"9","",
"9","",





"16","1",
"Was macht "+frau+" in dieser Geschichte?",
"0","Sie ruft bei der Oper an, um Karten zu reservieren.",
"1","Sie ruft beim Theater an, um Karten zu reservieren.",
"0","Sie ruft "+mann+" an, um ihn zu fragen, ob er mit ins Theater kommen will.",
"9","",
"9","",


"16","2",
"Wie ist "+frau+" auf das Theaterst�ck aufmerksam geworden?",
"0","Eine Freundin hat ihr davon erz�hlt.",
"1","Sie hat dar�ber gelesen.",
"0","Sie hat eine Reportage dar�ber im Fernsehen gesehen.",
"9","",
"9","",


"16","3",
"Gelingt es ihr, Karten zu reservieren?",
"1","Ja, sie kann Karten reservieren.",
"0","Nein, sie kann keine Karten mehr reservieren.",
"9","",
"9","",
"9","",


"16","4",
"Wo sind noch zwei Pl�tze nebeneinander frei?",
"0","In der ersten Reihe.",
"0","In der dritten Reihe.",
"0","In der Mitte.",
"1","In der letzten Reihe.",
"0","Es sind keine Pl�tze mehr frei.",





"17","1",
"Was ist das Problem mit "+mann+"s Handy?",
"1","Sein Handy ist defekt.",
"0","Er hat sein Handy verloren.",
"0","Sein Handy wurde gestohlen.",
"0","Sein Handy gef�llt ihm nicht mehr.",
"9","",

"17","2",
""+frau+" ber�t "+mann+" auch bei der Wahl eines neuen Netzanbieters. Worauf r�t sie ihm zu achten?",
"0",""+mann+" sollte darauf achten, dass der Anbieter besonders g�nstige Tarife hat.",
"1",""+mann+" sollte darauf achten, das Netz zu w�hlen, in dem die meisten seiner Freunde und Verwandten auch telefonieren.",
"0",""+mann+" sollte darauf achten, dass er zu einem neuen Vertrag auch gleich ein neues Handy bekommt.",
"9","",
"9","",


"17","3",
"Wie gelingt es "+mann+", die Kosten f�r sein Handy niedrig zu halten?",
"0","Er telefoniert so wenig wie m�glich damit.",
"0","Er wartet immer, bis er angerufen wird.",
"1","Er telefoniert haupts�chlich am Abend damit, denn dann ist es g�nstiger.",
"9","",
"9","",




"18","1",
"Was ist der Ausl�ser f�r den Streit zwischen "+mann+" und "+frau+"?",
"0",""+mann+" hat "+frau+" betrogen.",
"0",""+mann+" m�chte nicht mit "+frau+" fernsehen.",
"1",""+mann+" ist sp�t nach Hause gekommen.",
"0",""+frau+" ist sp�t nach Hause gekommen.",
"9","",


"18","2",
"Warum �rgert sich "+frau+" �ber "+mann+"?",
"1","Sie verbringen wenig Zeit miteinander.",
"0",""+frau+" will mehr Freiheit haben.",
"0",""+frau+" will lieber fernsehen anstatt sich immer mit "+mann+" unterhalten zu m�ssen.",
"9","",
"9","",


"18","3",
"Wie reagiert "+mann+" auf "+frau+"s Vorw�rfe?",
"0","Er sagt, 'Ich verlasse dich und ziehe zur�ck zu meiner Mutter!'",
"0","Er sagt, 'Ich werde morgen ebenfalls sp�ter nach Hause kommen!'",
"1","Er sagt, 'Ich werde versuchen, morgen fr�her nach Hause zu kommen.'",
"9","",
"9","",




"19","1",
"Wer hat in dieser Geschichte Liebeskummer?",
"0",""+mann+"",
"1",""+frau+"s Schwester",
"0","Der Mann von "+frau+"s Schwester",
"0",""+frau+"",
"9","",


"19","2",
"Was schl�gt "+mann+" als L�sung vor?",
"0",""+frau+"s Schwester sollte sich von diesem Mann scheiden lassen.",
"0",""+frau+"s Schwester sollte sich diesen Mann endlich vers�hnen.",
"1",""+frau+"s Schwester sollte diesen Mann endlich verlassen.",
"9","",
"9","",


"19","3",
"Was ist "+frau+"s Meinung zum Problem ihrer Schwester?",
"1","Sie sollte sich nicht mehr so ausnutzen lassen.",
"0","Sie sollte zu einem Therapeuten gehen.",
"0","Sie sollte sich an ihm r�chen.",
"9","",
"9","",





"20","1",
"Diese Geschichte beginnt damit, dass "+mann+" verletzt nach Hause kommt. Was ist passiert?",
"0","Er hatte einen Unfall mit dem Fahrrad.",
"0","Er hatte einen Autounfall.",
"1","Er wurde von einem Mann angegriffen.",
"0","Er ist in der Bar von seinem Hocker gefallen und hat sich die Nase blutig geschlagen.",
"9","",


"20","2",
"Was ist in der Bar vorgefallen?",
"1","Ein Mann hat eine Frau bel�stigt und "+mann+" und seine Freunde wollten die Frau besch�tzen.",
"0","Ein Mann hat "+mann+" bel�stigt und seine Freunde wollten ihn besch�tzen.",
"0","Eine Frau hat "+mann+" bel�stigt.",
"0",""+mann+" hat eine Frau bel�stigt.",
"9","",


"20","3",
"Wie haben "+mann+"s Freunde auf den Angriff reagiert?",
"0","Sie sind weggelaufen.",
"1","Sie haben den Mann verfolgt, als er fliehen wollte.",
"0","Sie haben auf den Mann eingeschlagen.",
"0","Sie haben der bel�stigten Frau einen Drink ausgegeben.",
"0","Sie haben die Frau vor "+mann+" besch�tzt.",


"20","4",
"Wie ist die Geschichte ausgegangen?",
"0","Die Polizei kam rechtzeitig und konnte den T�ter festnehmen.",
"0","Es ist "+mann+"s Freunden gelungen, den T�ter zu fassen und festzuhalten bis die Polizei da war.",
"1",""+mann+"s Freunde konnten den T�ter nicht mehr fassen, sie konnten der Polizei lediglich die Richtung zeigen, in die er geflohen ist.",
"0",""+mann+"s Freunde haben "+mann+" der Polizei �bergeben.",
"9","",





"21","1",
"Aus den Radionachrichten erfahren "+mann+" und "+frau+" eine gute Nachricht. Was ist passiert?",
"0",""+frau+" und "+mann+" haben im Lotto gewonnen.",
"0","Ein R�uber wurde verurteilt.",
"0","Landesweit sollen die Steuern gesenkt werden.",
"1","Der Schl�ger aus der Bar konnte endlich verurteilt werden.",
"9","",


"21","2",
"Wie verlief der Prozess?",
"1","Viele Zeugen belasteten den Angeklagten schwer und der Richter hat ihn - obwohl der Anwalt des Angeklagten auf unschuldig pl�diert hat - verurteilt.",
"0","Der Anwalt des Angeklagten pl�dierte auf unschuldig und der Richter schloss sich in seinem Urteil dieser Aussage an.",
"0","Viele Zeugen entlasteten den Angeklagten und der Richter hat ihn schlie�lich freigesprochen.",
"9","",
"9","",


"21","3",
"Wie lautet der Richterspruch?",
"0","Der Richter verh�ngte eine Geldstrafe �ber den Mann.",
"0","Der Mann muss f�r f�nf Jahre ins Gef�ngnis.",
"1","Der Mann muss f�r drei Jahre in Haft und sich au�erdem einer Therapie unterziehen.",
"0","Der Mann wurde freigesprochen.",
"9","",





"22","1",
"Heute kommt "+frau+" sp�t von der Arbeit nach Hause. Warum?",
"0","Sie musste �berstunden machen, weil sie morgen ein Projekt abgeben muss.",
"0","Eine Besprechung mit den Kollegen hat l�nger gedauert.",
"1","In ihre Firma wurde in der Nacht zuvor eingebrochen.",
"0","Sie ist mit einem alten Freund zum Essen gegangen.",
"9","",


"22","2",
"Was konnten die Diebe erbeuten?",
"0","Nichts Wertvolles.",
"1","Alle Computer und Laptops sowie die Kasse.",
"0","Alle Computer und Laptops.",
"0","Die Kasse.",
"9","",


"22","3",
"Wer hat die Diebe gesehen?",
"1","Der Wachmann hat die Verbrecher auf frischer Tat ertappt.",
"0","Niemand. Sie konnten unerkannt fl�chten.",
"0",""+frau+" hat die Diebe auf frischer Tat ertappt.",
"9","",
"9","",


"22","4",
"Wie hat "+frau+"s Chef reagiert?",
"0","Er hat noch nichts unternommen.",
"0","Er versucht selbst, die Diebe zu finden.",
"1","Er hat Anzeige bei der Polizei erstattet.",
"0","Er hat "+frau+" bef�rdert.",
"9","",





"23","1",
"Warum m�gen "+frau+" und "+mann+" den Zoo ihrer Stadt?",
"1","Die Gartenanlagen sind liebevoll bepflanzt und die Tiere wirken gut versorgt.",
"0","Der Eintritt dort ist so g�nstig.",
"0","Das Eis dort ist so g�nstig.",
"0","Giraffen sind die Lieblingstiere der beiden und im Zoo gibt es ein sch�nes Giraffengehege.",
"9","",


"23","2",
"Vor welchem Gehege wartet "+frau+", w�hrend "+mann+" ein Eis f�r sie kauft?",
"1","Sie wartet bei den Giraffen.",
"0","Sie wartet bei den Affen.",
"0","Sie wartet bei den Nilpferden.",
"0","Sie wartet bei den Elefanten.",
"9","",


"23","3",
""+mann+" hat keine Ahnung, wie Giraffen schlafen und was sie dabei mit ihrem langen Hals machen. Was wei� er stattdessen �ber diese Tiere?",
"1",""+mann+" wei�, dass Giraffen bis zu f�nf Meter gro� werden k�nnen.",
"0",""+mann+" wei�, dass Giraffen bis zu 900 Kilogramm schwer werden k�nnen.",
"0",""+mann+" wei�, dass Giraffen bis zu 55 km/h schnell laufen k�nnen.",
"9","",
"9","",




"24","1",
""+mann+" f�hlt sich nicht wohl. Was fehlt ihm?",
"0","Er hat sich den Arm gebrochen.",
"1","Er hat sich erk�ltet.",
"0","Er hat starke Kopfschmerzen.",
"9","",
"9","",


"24","2",
"Wie reagiert "+frau+"?",
"0","Sie gibt ihm eine Schmerztablette.",
"0","Sie r�t ihm, sich hinzulegen und zu schlafen.",
"1","Sie misst seine Temperatur und begleitet ihn zum Arzt.",
"0","Sie ruft bei seinem Hausarzt an.",
"9","",


"24","3",
"Im Wartezimmer des Arztes gibt es etwas Interessantes zu sehen. Was ist es?",
"1","Das Bild eines Menschen, in den man hineinsehen kann.",
"0","Ein sch�nes Bild von einem Palmenstrand.",
"0","Ein Werbeplakat f�r ein Ger�t zum Blutdruckmessen.",
"0","Ein Bild von einem Skelett.",
"9","",




"25","1",
"Der Tag beginnt schlecht f�r "+mann+". Was ist los?",
"0","Er hat verschlafen.",
"0","Er hat den Zug verpasst, der ihn zur Arbeit bringen soll.",
"1","Er hat nicht gut geschlafen und er hat schlechte Laune.",
"9","",
"9","",


"25","2",
"Der Weg zur Arbeit ist voller Hindernisse. Was passiert?",
"0",""+mann+" hat einen Unfall und sein Auto muss in die Werkstatt.",
"1","Eine Stra�e ist blockiert und er muss einer Umleitung folgen. Au�erdem kann er einen Unfall gerade noch verhindern.",
"0",""+mann+" kommt in eine Radarkontrolle und die Polizei h�lt ihn an.",
"9","",
"9","",


"25","3",
"Erst am Abend kommt "+mann+" zur�ck zu seinem Parkplatz. Was ist nun schon wieder passiert?",
"1","Sein Auto wurde abgeschleppt.",
"0","Sein Auto wurde gestohlen. ",
"0","Ein Fenster seines Autos wurde eingeschlagen.",
"0","Ein anderer Fahrer hat seinen Wagen beim Ausparken besch�digt.",
"9","",




"26","1",
"Warum darf "+frau+" das Auto von "+mann+" benutzen?",
"0","Weil "+frau+"s Motorrad kaputt ist.",
"1","Weil "+mann+" mit seinem Motorrad zu einer Industriemesse unterwegs ist.",
"0","Weil "+mann+" die ganze Woche �ber auf einer Messe ist und sein Auto nicht braucht.",
"9","",
"9","",


"26","2",
"Das Auto springt nicht an. Wie geht "+frau+" an dieses Problem heran?",
"0","Sie steigt w�tend aus, l�sst das Auto stehen und nimmt den Bus.",
"1","Sie steigt aus, schaut unter die Motorhaube und testet alle Funktionen.",
"0","Sie steigt aus und f�llt �l nach.",
"9","",
"9","",


"26","3",
"Wen ruft "+frau+" an?",
"1","Sie ruft "+mann+" an.",
"0","Sie ruft den Pannendienst an.",
"0","Sie ruft einen Automechaniker an.",
"0","Sie ruft ihren Vater an.",
"9","",


"26","4",
""+mann+" stellt "+frau+" viele Fragen. Wonach fragt er zuerst?",
"0","Er fragt, ob der �lbeh�lter ein Loch hat.",
"0","Er fragt, ob der Tank leer ist.",
"1","Er fragt, ob die Batterie leer ist.",
"0","Er fragt, ob das Licht funktioniert.",
"9","",





"27","1",
"Was sind "+mann+"s Pl�ne in Bezug auf sein Auto?",
"0","Er m�chte es tieferlegen lassen und sich neue Spoiler zulegen.",
"0","Er m�chte sich einen guten Zweitwagen kaufen.",
"1","Er m�chte es verkaufen und sich einen Neuwagen anschaffen.",
"0","Er m�chte es "+frau+" schenken und f�r sich einen Neuwagen anschaffen.",
"9","",


"27","2",
"Wie geht er beim Verkauf des Autos vor?",
"0","Er geht zu einem Autoh�ndler und bietet ihm den Wagen an.",
"0","Er verkauft den Wagen an einen Freund, der gerade auf der Suche nach einem Auto ist.",
"1","Er gibt eine Zeitungsanzeige auf und versucht, den Wagen �ber dieses Inserat zu verkaufen.",
"9","",
"9","",


"27","3",
"Wie alt ist "+mann+"s Auto?",
"1","sieben Jahre",
"0","sechs Jahre",
"0","zehn Jahre",
"0","f�nf Jahre",
"9","",





"28","1",
"Wer meldet sich auf "+mann+"s Anzeige hin?",
"0","Ein �lterer Herr interessiert sich f�r das Auto.",
"0","Ein professioneller Autoh�ndler m�chte den Wagen kaufen.",
"1","Eine junge Frau h�tte das Auto gerne.",
"9","",
"9","",


"28","2",
"Sie verhandeln �ber den Preis. Was ist das Argument?",
"1","Die junge Frau sagt, sie sei Studentin und h�tte nicht so viel Geld.",
"0","Die junge Frau sagt, sie sei arbeitslos h�tte nicht so viel Geld.",
"0",""+mann+" sagt, er arbeite in einer Fabrik und w�rde sehr schlecht verdienen.",
"0",""+mann+" sagt, die Preise auf dem Gebrauchtwagenmarkt seien gestiegen.",
"9","",


"28","3",
"Was denkt "+mann+" �ber den Verkauf seines Autos?",
"1","Er ist zufrieden, denn er hat ein gutes Gesch�ft gemacht.",
"0","Er ist nicht zufrieden, denn bei einem Autoh�ndler h�tte er mehr bekommen.",
"0","Er ist zufrieden, denn nun kommt sein Wagen in gute H�nde.",
"0","Er ist nicht zufrieden, denn er hat kein gutes Gesch�ft gemacht.",
"9","",





"29","1",
"Wonach suchen "+frau+" und "+mann+" in dieser Geschichte?",
"0","Nach einem neuen Auto.",
"1","Nach einem Geschenk.",
"0","Nach einem Buch f�r "+mann+".",
"9","",
"9","",


"29","2",
"Worum geht es in dem Buch, �ber das die beiden sprechen?",
"0","In diesem Buch geht es um einen K�nig, der gegen Hexen k�mpft.",
"1","In diesem Buch geht es um einen K�nig, der gegen Vampire k�mpft.",
"0","In diesem Buch geht es um Hexen, die gegen Vampire k�mpfen.",
"9","",
"9","",

"29","3",
"Was denkt "+frau+" �ber diesen Vorschlag?",
"1","Sie schl�gt vor, etwas anderes zu kaufen.",
"0","Sie schl�gt vor, dieses Buch zu kaufen.",
"0","Sie w�rde das Buch selbst gerne lesen.",
"0","Sie w�rde das Buch gerne "+mann+"s Nichte vorlesen.",
"9","",





"30","1",
"Was machen "+frau+" und "+mann+" an diesem Morgen?",
"0","Sie schlafen noch.",
"0","Sie sind schon auf dem Weg zur Arbeit.",
"1","Sie sitzen beim Fr�hst�ck und lesen die Zeitung.",
"9","",
"9","",


"30","2",
"Was liest "+mann+" vor?",
"0","Eine interessante Zeitungsanzeige.",
"0","Ein lustiges R�tsel.",
"1","Einen Zeitungsartikel.",
"9","",
"9","",


"30","3",
"Was ist passiert?",
"1","Eine Sturmflut hat eine riesige Flutwelle aufget�rmt, die an der K�ste Zerst�rungen angerichtet hat.",
"0","Dauerhafte Regenf�lle haben einen Erdrutsch verursacht, der ein ganzes Dorf unter sich begraben hat.",
"0","Unachtsame Camper haben einen Waldbrand verursacht, der ganze Landstriche zu Asche werden lie�.",
"0","Ein Wirbelsturm ist �ber das Land hinweggefegt und hat alles mit sich gerissen.",
"9","",


"30","4",
"Was denken Wissenschaftler �ber dieses Ungl�ck?",
"0","Sie sagen, dass es katastrophale Folgen f�r die Wirtschaft h�tte.",
"1","Sie sprechen von einer �kologischen Katastrophe.",
"0","Sie sagen, man h�tte diese Katastrophe verhindern k�nnen.",
"9","",
"9","",






"31","1",
"Mit wem wollen sich "+frau+" und "+mann+" treffen?",
"0","Sie haben sich mit "+frau+"s Eltern in einem Restaurant verabredet.",
"0","Sie wollen sich mit einer gemeinsamen Freundin treffen.",
"1","Sie haben sich mit Freunden in einer Bar verabredet.",
"9","",
"9","",


"31","2",
"Ehe sie losgehen k�nnen, muss "+mann+" noch etwas erledigen. Was ist es?",
"0","Er muss die Sp�lmaschine ausr�umen.",
"0","Er muss seine Hemden waschen.",
"1","Er muss sein Hemd b�geln.",
"0","Er muss noch eine E-Mail schreiben.",
"9","",


"31","3",
"Was kennzeichnet "+mann+"s Charakter?",
"0","Er ist ein stiller, in sich zur�ckgezogener Mensch.",
"0","Er ist ein grober und unh�flicher Mensch.",
"0","Er ist ein netter aber sch�chterner Mensch.",
"1","Er ist ein fr�hlicher und humorvoller Mensch.",
"9","",





"32","1",
"Wie haben sich "+frau+" und "+mann+" kennengelernt?",
"1",""+frau+" war mit Freundinnen in einer Bar und "+mann+" hat sie angesprochen.",
"0",""+mann+" war mit Freunden in einer Bar und "+frau+" hat ihn angesprochen.",
"0",""+frau+" und "+mann+" haben sich im B�ro kennengelernt.",
"0",""+frau+" und "+mann+" haben sich vor einer Bar kennengelernt.",
"9","",


"32","2",
"Was ist "+frau+" als erstes an "+mann+" aufgefallen?",
"0","Sein schickes Hemd.",
"0","Dass er sehr gro� ist.",
"1","Sein L�cheln.",
"9","",
"9","",


"32","3",
"Passen "+frau+" und "+mann+" gut zueinander?",
"0","Ja, sie arbeiten in der gleichen Branche.",
"0","Nein, sie haben vollkommen unterschiedliche Interessen.",
"1","Ja, sie haben gleiche Interessen.",
"9","",
"9","",






"33","1",
"Worum geht es in diesem Text?",
"0",""+frau+" und "+mann+" wollen ihre Freunde zu einer Party einladen.",
"0",""+frau+" und "+mann+" haben eine Einladung zu einer Hochzeit bekommen.",
"1",""+frau+" und "+mann+" wollen ihre Familien zu ihrer Hochzeit einladen.",
"9","",
"9","",


"33","2",
"Wann soll die Hochzeit stattfinden?",
"0","Am 12. Mai.",
"1","Am 12. M�rz.",
"0","Am 12. April.",
"9","",
"9","",


"33","3",
"Wie soll der Tag der Hochzeit ablaufen?",
"0","Zuerst treffen sich alle zu einem Sektempfang und dann findet die Hochzeitszeremonie statt.",
"1","Zuerst findet die Hochzeitszeremonie statt, dann gibt es einen Sektempfang und abends wird im Restaurant weitergefeiert.",
"0","Zuerst findet die Hochzeitszeremonie statt und dann wird es ein gro�es Buffet im Garten geben.",
"9","",
"9","",




"34","1",
"Was machen "+frau+" und "+mann+" in Stadt?",
"1","Sie machen Erledigungen f�r ihre Hochzeit.",
"0","Sie stellen sich lange an der Umkleidekabine an.",
"0","Sie machen Erledigungen f�r die Hochzeit ihrer Freunde.",
"9","",
"9","",


"34","2",
"Was m�ssen "+mann+" und "+frau+" noch besorgen?",
"1","Parfum, eine Kette, eine Haarspange und einen G�rtel.",
"0","Schuhe, ein Jackett, eine Brosche und einen G�rtel.",
"0","Parfum und einen Hut.",
"0","Einen Hut, Parfum, ein Kleid und eine neue Brille.",
"9","",


"34","3",
"Was m�ssen die beiden nach den Besorgungen noch erledigen?",
"0","Sie m�ssen zum Augenarzt und zum Optiker.",
"1","Sie m�ssen zum Optiker und zum Fris�r.",
"0","Sie m�ssen zum Optiker und zum Schneider.",
"9","",
"9","",




"35","1",
"Wen hat "+mann+" eingeladen?",
"0","Seine Gro�mutter.",
"0","Nur seinen Neffen.",
"0","Seine Gro�mutter, seine Mutter und seine Schwester.",
"1","Seinen Bruder, seinen Onkel und seine Tante.",
"9","",


"35","2",
"Wer wird den Gro�vater von "+frau+" abholen?",
"0","Ihr Bruder.",
"0","Ihre Schwester und ihr Mann.",
"1","Ihre Eltern.",
"9","",
"9","",


"35","3",
"Wer in der Familie hat Zwillinge?",
"0","Der Bruder von "+mann+".",
"0","Der Onkel von "+frau+".",
"1","Die Tante von "+mann+".",
"9","",
"9","",





"36","1",
"Wer wird auf der Hochzeit f�r Musik sorgen?",
"0","Die Lieblingsband von "+mann+".",
"0","Eine Bekannte von "+mann+", die alleine am Klavier spielen wird",
"1","Bekannte von "+mann+", die er aus dem Orchester kennt.",
"0","Ein ber�hmter Bassist.",
"9","",


"36","2",
"Was wird "+frau+"s Cousin zum Fest beitragen?",
"0","Er wird ein Lied singen.",
"1","Er wird etwas auf dem Klavier spielen.",
"0","Er wird den Bassisten ersetzen.",
"9","",
"9","",


"36","3",
"Worum muss sich "+mann+" noch k�mmern?",
"0","Um Mikrofone.",
"1","Um die B�hne.",
"0","Um Lautsprecher.",
"9","",
"9","",





"37","1",
"Auch "+mann+"s Oma ist nat�rlich eingeladen. Was macht sie?",
"0","Sie tanzt mit "+mann+"s Onkel.",
"0","Sie fotografiert "+frau+"s Opa.",
"1","Sie schaut dem Brautpaar beim Tanzen zu.",
"9","",
"9","",


"37","2",
"Es gibt auch eine �berraschung. Was ist es?",
"0","Die Kinder haben ein Lied einstudiert und singen es vor.",
"0","Die Kinder werfen beim Fangenspielen die Hochzeitstorte um.",
"1","Es gibt eine herrliche Hochzeitstorte mit viel Sahne.",
"9","",
"9","",


"37","3",
"Was sagt "+frau+" �ber ihr Fest?",
"1","Das war der sch�nste Tag ihres Lebens.",
"0","Das war der schlimmste Tag ihres Lebens.",
"0","Das Fest war sch�n, aber sie freut sich auch schon auf die Flitterwochen.",
"9","",
"9","",





"38","1",
"Was kennzeichnet den Widder? ",
"0","Er ist charmant und kann gut mit Geld umgehen.",
"1","Er ist k�hn, mutig und entschlossen.",
"0","Er ist eher �ngstlich und zaghaft.",
"9","",
"9","",


"38","2",
"Was kennzeichnet den L�wen?",
"0","Er ist �ngstlich und zaghaft.",
"1","Er ist ausdauernd und ehrgeizig.",
"0","Er ist diplomatisch und friedlich.",
"0","Er ist modern und fortschrittlich.",
"9","",


"38","3",
"Was kennzeichnet den Sch�tzen?",
"1","Er sucht den Sinn des Lebens und braucht Freiraum.",
"0","Er ist h�uslich und geradlinig.",
"0","Er ist tolerant und modern.",
"9","",
"9","",





"39","1",
"Wor�ber unterh�lt sich "+frau+" mit dem neuen Kollegen?",
"0","�ber Demokratie.",
"0","�ber die Demonstration in der letzten Woche.",
"1","�ber die Wahlen im n�chsten Jahr.",
"9","",
"9","",


"39","2",
"Welche Rolle �bernehmen die Medien im Wahlkampf?",
"0","Sie schlagen sich auf die Seite der konservativen Politiker und unterst�tzen sie.",
"1","Sie berichten �ber die Auseinandersetzungen zwischen liberalen und konservativen Politikern.",
"0","Nur sehr wenige Medien berichten �ber die Wahlen.",
"9","",
"9","",


"39","3",
"Wie l�uft die Wahl ab?",
"1","Man zeigt seinen Personalausweis und f�llt einen Stimmzettel aus.",
"0","Man f�llt einen Stimmzettel aus.",
"0","Auf dem Stimmzettel kann man verschiedene Parteien ankreuzen.",
"9","",
"9","",




"40","1",
"Warum ist die Stimmung in "+mann+"s Firma schlecht?",
"0","Weil der Vorstand Gelder veruntreut hat.",
"0","Weil die Firma von einem Konkurrenten aufgekauft wird.",
"1","Weil K�rzungen der Geh�lter und Entlassungen drohen.",
"9","",
"9","",


"40","2",
"Wie steht "+mann+" zu diesen Problemen?",
"1","Er ist zwar nicht direkt betroffen, m�chte aber trotzdem die Firma verlassen.",
"0","Er hat heute seine K�ndigung bekommen und muss die Firma zum n�chsten Monat verlassen.",
"0",""+mann+" ist nicht direkt betroffen, plant aber in zwei Jahren in eine andere Abteilung zu wechseln.",
"9","",
"9","",


"40","3",
"Was schl�gt "+frau+" vor?",
"0",""+frau+" schl�gt vor, sich mit einer Gesch�ftsidee selbst�ndig zu machen.",
"1",""+frau+" schl�gt vor, sich gemeinsam neue Arbeit zu suchen und umzuziehen.",
"0",""+frau+" schl�gt vor zu k�ndigen und sich in ihrer Stadt neue Arbeit zu suchen.",
"9","",
"9","",


"40","4",
"Was h�lt "+mann+" von der Idee umzuziehen?",
"0","Er m�chte nicht umziehen.",
"1","Er m�chte gerne umziehen und eine neue Stadt kennenlernen.",
"0",""+mann+" m�chte unbedingt bei seiner Firma bleiben und muss deshalb in der Stadt bleiben.",
"9","",
"9","",




"41","1",
"Was bringt "+frau+" mit?",
"0","Die Tageszeitung mit den Stellenanzeigen.",
"1","Ein Magazin f�r das Berufsleben.",
"0","Ein Magazin f�r Journalisten.",
"9","",
"9","",


"41","2",
"Was ist "+frau+"s geheimer Berufswunsch?",
"0","Sie wollte Zahn�rztin werden.",
"0","Sie wollte Postbotin werden.",
"0","Sie wollte Beamtin werden.",
"1","Sie wollte Journalistin werden.",
"9","",


"41","3",
"Was kennzeichnet den Beruf des Journalisten?",
"1","Im Journalismus arbeiten mehr Frauen als M�nner. Die Frauen verdienen wesentlich weniger als ihre m�nnlichen Kollegen.",
"0","Im Journalismus arbeiten mehr M�nner als Frauen.",
"0","Im Journalismus arbeiten mehr Frauen als M�nner. Die Frauen verdienen wesentlich mehr als ihre m�nnlichen Kollegen.",
"0","Im Journalismus werden F�hrungspositionen in der Regel mit Frauen besetzt.",
"9","",




"42","1",
"Wie sieht es mit "+mann+"s Arbeitssuche aus?",
"0","Er kann sich nicht vorstellen, im Ausland zu arbeiten.",
"0","Die Konkurrenz versucht ihn abzuwerben.",
"0","Er soll in seiner Firma bef�rdert werden.",
"1","Er bekommt eine neue Stelle im Ausland angeboten.",
"9","",


"42","2",
"Wonach sucht "+mann+"?",
"1","Nach seinem Visum.",
"0","Nach seiner Versicherungskarte.",
"0","Nach seinem Reisepass.",
"0","Nach seinem Schl�ssel.",
"9","",


"42","3",
"Was schenkt "+frau+" "+mann+"?",
"0","Eine neue Krawatte.",
"0","Einen neuen Koffer.",
"1","Einen Sprachkurs f�rs Berufsleben.",
"0","Einen Reisef�hrer �ber die neue Stadt.",
"9",""
);

}
