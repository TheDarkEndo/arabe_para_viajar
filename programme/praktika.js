var kapnr=0; var maxgruebkap=0; 

var xgrueb=0; var ygrueb=0; var gruebkapitel=0; var wortanzahl=0;
var kap_exgruebistenz=new Array();
var kap_minwoerter=new Array();
var kap_eintrag=new Array();
var kap_origkapnr=new Array();
var kap_internzaehler=new Array();
var kap_sort=new Array();

var kap2_origkapnr=new Array();
var kap2_minwoerter=new Array();

var vorher=0; var jetztnr=0;
while (v[xgrueb+5]) {
	jetztnr = v[xgrueb+1].replace(/\,/g, "."); jetztnr = jetztnr.replace(/ /g, "");
	jetztnr=jetztnr*1;
	if (jetztnr !=vorher) {
		vorher=jetztnr;
		gruebkapitel=jetztnr*1000; 
		var kap_hauptnr=Math.floor(jetztnr); if (!kap_internzaehler[kap_hauptnr]) { kap_internzaehler[kap_hauptnr]=0; }
		kap_internzaehler[kap_hauptnr]+=1;
		kap_sort[gruebkapitel]=kap_internzaehler[kap_hauptnr]*100 + kap_hauptnr;
		kap_origkapnr[kap_sort[gruebkapitel]]=v[xgrueb+1]; 

		if (!kap_minwoerter[kap_sort[gruebkapitel]]) { kap_minwoerter[kap_sort[gruebkapitel]]=99; kap_eintrag[kap_sort[gruebkapitel]]=v[xgrueb+4]+" - "+v[xgrueb+5]; }
		wortanzahl=1;
		for (ygrueb=0; ygrueb<v[xgrueb+4].length; ygrueb+=1) {
			if (v[xgrueb+5].charCodeAt(ygrueb) == 32) { wortanzahl+=1; }
		}
		if (wortanzahl<kap_minwoerter[kap_sort[gruebkapitel]]) { kap_minwoerter[kap_sort[gruebkapitel]] = wortanzahl; }
	}
	xgrueb+=6;
}
kap_sort.sort(nummeriert);


for (xgrueb=0; xgrueb<20000; xgrueb+=1) {
	if (kap_sort[xgrueb]) {
		kap2_origkapnr[maxgruebkap]=kap_origkapnr[kap_sort[xgrueb]]; kap2_minwoerter[maxgruebkap]=kap_minwoerter[kap_sort[xgrueb]];
		maxgruebkap+=1;
	}
}

//################################################

function nummeriert (a1, a2) {
  return a1 - a2;
}

function gr_uebung_kap(kapnr) {
	return kap2_origkapnr[(kapnr-1) % maxgruebkap];
}

function gr_uebung_woerter(kapnr) {
	return kap2_minwoerter[(kapnr-1) % maxgruebkap];
}

