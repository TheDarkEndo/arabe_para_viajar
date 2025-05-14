
for ($a=1;$a<43;$a++) {

open (COUNT, "mobile_unitex.html");
@Counter = <COUNT>; 
close (COUNT);

$x=0;
foreach $zeile (@Counter) {
  $Counter[$x] =~ s/#LEKTION#/$a/g;
  $x+=1;
}

open (COUNT, ">mobile_unite$a.html");
print COUNT @Counter;
close (COUNT);

}

