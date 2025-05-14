
mkdir files
        
COUNTER=0
while [  $COUNTER -lt 42 ]; do
let COUNTER=COUNTER+1 

cp lektion* files/ 
echo item: $COUNTER

for file in files/*
do
  new=`echo ${file} | sed s/x/$COUNTER/g`
  mv ${file} $new
done

done