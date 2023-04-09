var x =1;
var y = 0;
while(x<52){
    document.getElementById('first').innerHTML+=(x)+", ";
    x+=2;
}
do{
    y +=2;
    document.getElementById('second').innerHTML+=(y)+", ";
}while(y<50);
4
for(var z=1; z<=4096;z=z*2){
    document.getElementById('third').innerHTML+=(z)+", ";
}
