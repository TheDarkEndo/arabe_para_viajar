



###############

mkdir "../express";
mkdir "../express/html1";
mkdir "../express/html2";

mkdir "../text";
mkdir "../text/html1";
mkdir "../text/html2";

mkdir "../vocabular";
mkdir "../vocabular/html1";
mkdir "../vocabular/html2";

mkdir "../praktika";
mkdir "../praktika/html1";
mkdir "../praktika/html2";


########################
opendir(DIR, "../root/html2/") || die "$!";
my @Dateien = readdir(DIR);
closedir(DIR);

foreach(@Dateien) {
	$dateiname=$_;
	print "$dateiname\n";
	print "YYYYYY\n";

	open (COUNT, "html2/$dateiname");
	@Counter = <COUNT>; 
	foreach $zeile (@Counter) {}
	print "$zeile\n";
	close (COUNT);

	open (COUNT, ">../express/html2/$dateiname");
	print COUNT @Counter;
	close (COUNT);

	open (COUNT, ">../text/html2/$dateiname");
	print COUNT @Counter;
	close (COUNT);

	open (COUNT, ">../vocabular/html2/$dateiname");
	print COUNT @Counter;
	close (COUNT);

	open (COUNT, ">../praktika/html2/$dateiname");
	print COUNT @Counter;
	close (COUNT);
}

########################
opendir(DIR, "../root/") || die "$!";
my @Dateien = readdir(DIR);
closedir(DIR);

foreach(@Dateien) {
	$dateiname=$_;
	print "$dateiname\n";
	if (index($dateiname,"x")>1) { 
		print "XXXXX\n";


		for ($a=1;$a<43;$a++) {

			open (COUNT, "$dateiname");
			@Counter = <COUNT>; 
			close (COUNT);

			$x=0;
			foreach $zeile (@Counter) {
				$Counter[$x] =~ s/#LEKTION#/$a/g;
				$x+=1;
			}

			$dateiname1=$dateiname;
			$dateiname1 =~ s/x/$a/g;


			open (COUNT, ">../express/html1/$dateiname1");
			print COUNT @Counter;
			close (COUNT);

			open (COUNT, ">../text/html1/$dateiname1");
			print COUNT @Counter;
			close (COUNT);

			open (COUNT, ">../vocabular/html1/$dateiname1");
			print COUNT @Counter;
			close (COUNT);

			open (COUNT, ">../praktika/html1/$dateiname1");
			print COUNT @Counter;
			close (COUNT);

		}
	}
}

exit;






