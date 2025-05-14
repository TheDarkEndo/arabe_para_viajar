
for ($a=1;$a<43;$a++) {

open (COUNT, "lektionx.html");
@Counter = <COUNT>; 
close (COUNT);

$x=0;
foreach $zeile (@Counter) {
  $Counter[$x] =~ s/#LEKTION#/$a/g;
  $x+=1;
}

open (COUNT, ">lektion$a.html");
print COUNT @Counter;
close (COUNT);

}

