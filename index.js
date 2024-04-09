var joueur=0;
var casejoueur=" ";
var fin=0;
var victoire0=0;
var victoire1=0;
var victoire2=0;
function changejoueur() {
joueur++;
if(joueur==2) joueur=0;
}
function affichechoix(casejoue) {
if(joueur==0) casejoueur="X";
else casejoueur="O";
if(casejoue==0) {
document.morpion.case0.value=casejoueur;
document.morpion.case0.id="joueur"+(joueur+1);
}
if(casejoue==1) {
document.morpion.case1.value=casejoueur;
document.morpion.case1.id="joueur"+(joueur+1);
}
if(casejoue==2) {
document.morpion.case2.value=casejoueur;
document.morpion.case2.id="joueur"+(joueur+1);
}
if(casejoue==3) {
document.morpion.case3.value=casejoueur;
document.morpion.case3.id="joueur"+(joueur+1);
}
if(casejoue==4) {
document.morpion.case4.value=casejoueur;
document.morpion.case4.id="joueur"+(joueur+1);
}
if(casejoue==5) {
document.morpion.case5.value=casejoueur;
document.morpion.case5.id="joueur"+(joueur+1);
}
if(casejoue==6) {
document.morpion.case6.value=casejoueur;
document.morpion.case6.id="joueur"+(joueur+1);
}
if(casejoue==7) {
document.morpion.case7.value=casejoueur;
document.morpion.case7.id="joueur"+(joueur+1);
}
if(casejoue==8) {
document.morpion.case8.value=casejoueur;
document.morpion.case8.id="joueur"+(joueur+1);
}
if(casejoue==9) {
document.morpion.case9.value=casejoueur;
document.morpion.case9.id="joueur"+(joueur+1);
}
if(casejoue==10) {
document.morpion.case10.value=casejoueur;
document.morpion.case10.id="joueur"+(joueur+1);
}
if(casejoue==11) {
document.morpion.case11.value=casejoueur;
document.morpion.case11.id="joueur"+(joueur+1);
}
if(casejoue==12) {
document.morpion.case12.value=casejoueur;
document.morpion.case12.id="joueur"+(joueur+1);
}
if(casejoue==13) {
document.morpion.case13.value=casejoueur;
document.morpion.case13.id="joueur"+(joueur+1);
}
if(casejoue==14) {
document.morpion.case14.value=casejoueur;
document.morpion.case14.id="joueur"+(joueur+1);
}
if(casejoue==15) {
document.morpion.case15.value=casejoueur;
document.morpion.case15.id="joueur"+(joueur+1);
}
if(casejoue==16) {
document.morpion.case16.value=casejoueur;
document.morpion.case16.id="joueur"+(joueur+1);
}
if(casejoue==17) {
document.morpion.case17.value=casejoueur;
document.morpion.case17.id="joueur"+(joueur+1);
}
if(casejoue==18) {
document.morpion.case18.value=casejoueur;
document.morpion.case18.id="joueur"+(joueur+1);
}
if(casejoue==19) {
document.morpion.case19.value=casejoueur;
document.morpion.case19.id="joueur"+(joueur+1);
}
if(casejoue==20) {
document.morpion.case20.value=casejoueur;
document.morpion.case20.id="joueur"+(joueur+1);
}
if(casejoue==21) {
document.morpion.case21.value=casejoueur;
document.morpion.case21.id="joueur"+(joueur+1);
}
if(casejoue==22) {
document.morpion.case22.value=casejoueur;
document.morpion.case22.id="joueur"+(joueur+1);
}
if(casejoue==23) {
document.morpion.case23.value=casejoueur;
document.morpion.case23.id="joueur"+(joueur+1);
}
if(casejoue==24) {
document.morpion.case24.value=casejoueur;
document.morpion.case24.id="joueur"+(joueur+1);
}
if(casejoue==25) {
document.morpion.case25.value=casejoueur;
document.morpion.case25.id="joueur"+(joueur+1);
}
if(casejoue==26) {
document.morpion.case26.value=casejoueur;
document.morpion.case26.id="joueur"+(joueur+1);
}
if(casejoue==27) {
document.morpion.case27.value=casejoueur;
document.morpion.case27.id="joueur"+(joueur+1);
}
if(casejoue==28) {
document.morpion.case28.value=casejoueur;
document.morpion.case28.id="joueur"+(joueur+1);
}
if(casejoue==29) {
document.morpion.case29.value=casejoueur;
document.morpion.case29.id="joueur"+(joueur+1);
}
if(casejoue==30) {
document.morpion.case30.value=casejoueur;
document.morpion.case30.id="joueur"+(joueur+1);
}
if(casejoue==31) {
document.morpion.case31.value=casejoueur;
document.morpion.case31.id="joueur"+(joueur+1);
}
if(casejoue==32) {
document.morpion.case32.value=casejoueur;
document.morpion.case32.id="joueur"+(joueur+1);
}
if(casejoue==33) {
document.morpion.case33.value=casejoueur;
document.morpion.case33.id="joueur"+(joueur+1);
}
if(casejoue==34) {
document.morpion.case34.value=casejoueur;
document.morpion.case34.id="joueur"+(joueur+1);
}
if(casejoue==35) {
document.morpion.case35.value=casejoueur;
document.morpion.case35.id="joueur"+(joueur+1);
}
if(casejoue==36) {
document.morpion.case36.value=casejoueur;
document.morpion.case36.id="joueur"+(joueur+1);
}
if(casejoue==37) {
document.morpion.case37.value=casejoueur;
document.morpion.case37.id="joueur"+(joueur+1);
}
if(casejoue==38) {
document.morpion.case38.value=casejoueur;
document.morpion.case38.id="joueur"+(joueur+1);
}
if(casejoue==39) {
document.morpion.case39.value=casejoueur;
document.morpion.case39.id="joueur"+(joueur+1);
}
if(casejoue==40) {
document.morpion.case40.value=casejoueur;
document.morpion.case40.id="joueur"+(joueur+1);
}
if(casejoue==41) {
document.morpion.case41.value=casejoueur;
document.morpion.case41.id="joueur"+(joueur+1);
}
if(casejoue==42) {
document.morpion.case42.value=casejoueur;
document.morpion.case42.id="joueur"+(joueur+1);
}
if(casejoue==43) {
document.morpion.case43.value=casejoueur;
document.morpion.case43.id="joueur"+(joueur+1);
}
if(casejoue==44) {
document.morpion.case44.value=casejoueur;
document.morpion.case44.id="joueur"+(joueur+1);
}
if(casejoue==45) {
document.morpion.case45.value=casejoueur;
document.morpion.case45.id="joueur"+(joueur+1);
}
if(casejoue==46) {
document.morpion.case46.value=casejoueur;
document.morpion.case46.id="joueur"+(joueur+1);
}
if(casejoue==47) {
document.morpion.case47.value=casejoueur;
document.morpion.case47.id="joueur"+(joueur+1);
}
if(casejoue==48) {
document.morpion.case48.value=casejoueur;
document.morpion.case48.id="joueur"+(joueur+1);
}
if(casejoue==49) {
document.morpion.case49.value=casejoueur;
document.morpion.case49.id="joueur"+(joueur+1);
}
if(casejoue==50) {
document.morpion.case50.value=casejoueur;
document.morpion.case50.id="joueur"+(joueur+1);
}
if(casejoue==51) {
document.morpion.case51.value=casejoueur;
document.morpion.case51.id="joueur"+(joueur+1);
}
if(casejoue==52) {
document.morpion.case52.value=casejoueur;
document.morpion.case52.id="joueur"+(joueur+1);
}
if(casejoue==53) {
document.morpion.case53.value=casejoueur;
document.morpion.case53.id="joueur"+(joueur+1);
}
if(casejoue==54) {
document.morpion.case54.value=casejoueur;
document.morpion.case54.id="joueur"+(joueur+1);
}
if(casejoue==55) {
document.morpion.case55.value=casejoueur;
document.morpion.case55.id="joueur"+(joueur+1);
}
if(casejoue==56) {
document.morpion.case56.value=casejoueur;
document.morpion.case56.id="joueur"+(joueur+1);
}
if(casejoue==57) {
document.morpion.case57.value=casejoueur;
document.morpion.case57.id="joueur"+(joueur+1);
}
if(casejoue==58) {
document.morpion.case58.value=casejoueur;
document.morpion.case58.id="joueur"+(joueur+1);
}
if(casejoue==59) {
document.morpion.case59.value=casejoueur;
document.morpion.case59.id="joueur"+(joueur+1);
}
if(casejoue==60) {
document.morpion.case60.value=casejoueur;
document.morpion.case60.id="joueur"+(joueur+1);
}
if(casejoue==61) {
document.morpion.case61.value=casejoueur;
document.morpion.case61.id="joueur"+(joueur+1);
}
if(casejoue==62) {
document.morpion.case62.value=casejoueur;
document.morpion.case62.id="joueur"+(joueur+1);
}
if(casejoue==63) {
document.morpion.case63.value=casejoueur;
document.morpion.case63.id="joueur"+(joueur+1);
}
if(casejoue==64) {
document.morpion.case64.value=casejoueur;
document.morpion.case64.id="joueur"+(joueur+1);
}
if(casejoue==65) {
document.morpion.case65.value=casejoueur;
document.morpion.case65.id="joueur"+(joueur+1);
}
if(casejoue==66) {
document.morpion.case66.value=casejoueur;
document.morpion.case66.id="joueur"+(joueur+1);
}
if(casejoue==67) {
document.morpion.case67.value=casejoueur;
document.morpion.case67.id="joueur"+(joueur+1);
}
if(casejoue==68) {
document.morpion.case68.value=casejoueur;
document.morpion.case68.id="joueur"+(joueur+1);
}
if(casejoue==69) {
document.morpion.case69.value=casejoueur;
document.morpion.case69.id="joueur"+(joueur+1);
}
if(casejoue==70) {
document.morpion.case70.value=casejoueur;
document.morpion.case70.id="joueur"+(joueur+1);
}
if(casejoue==71) {
document.morpion.case71.value=casejoueur;
document.morpion.case71.id="joueur"+(joueur+1);
}
if(casejoue==72) {
document.morpion.case72.value=casejoueur;
document.morpion.case72.id="joueur"+(joueur+1);
}
if(casejoue==73) {
document.morpion.case73.value=casejoueur;
document.morpion.case73.id="joueur"+(joueur+1);
}
if(casejoue==74) {
document.morpion.case74.value=casejoueur;
document.morpion.case74.id="joueur"+(joueur+1);
}
if(casejoue==75) {
document.morpion.case75.value=casejoueur;
document.morpion.case75.id="joueur"+(joueur+1);
}
if(casejoue==76) {
document.morpion.case76.value=casejoueur;
document.morpion.case76.id="joueur"+(joueur+1);
}
if(casejoue==77) {
document.morpion.case77.value=casejoueur;
document.morpion.case77.id="joueur"+(joueur+1);
}
if(casejoue==78) {
document.morpion.case78.value=casejoueur;
document.morpion.case78.id="joueur"+(joueur+1);
}
if(casejoue==79) {
document.morpion.case79.value=casejoueur;
document.morpion.case79.id="joueur"+(joueur+1);
}
if(casejoue==80) {
document.morpion.case80.value=casejoueur;
document.morpion.case80.id="joueur"+(joueur+1);
}
if(casejoue==81) {
document.morpion.case81.value=casejoueur;
document.morpion.case81.id="joueur"+(joueur+1);
}
if(casejoue==82) {
document.morpion.case82.value=casejoueur;
document.morpion.case82.id="joueur"+(joueur+1);
}
if(casejoue==83) {
document.morpion.case83.value=casejoueur;
document.morpion.case83.id="joueur"+(joueur+1);
}
if(casejoue==84) {
document.morpion.case84.value=casejoueur;
document.morpion.case84.id="joueur"+(joueur+1);
}
if(casejoue==85) {
document.morpion.case85.value=casejoueur;
document.morpion.case85.id="joueur"+(joueur+1);
}
if(casejoue==86) {
document.morpion.case86.value=casejoueur;
document.morpion.case86.id="joueur"+(joueur+1);
}
if(casejoue==87) {
document.morpion.case87.value=casejoueur;
document.morpion.case87.id="joueur"+(joueur+1);
}
if(casejoue==88) {
document.morpion.case88.value=casejoueur;
document.morpion.case88.id="joueur"+(joueur+1);
}
if(casejoue==89) {
document.morpion.case89.value=casejoueur;
document.morpion.case89.id="joueur"+(joueur+1);
}
if(casejoue==90) {
document.morpion.case90.value=casejoueur;
document.morpion.case90.id="joueur"+(joueur+1);
}
if(casejoue==91) {
document.morpion.case91.value=casejoueur;
document.morpion.case91.id="joueur"+(joueur+1);
}
if(casejoue==92) {
document.morpion.case92.value=casejoueur;
document.morpion.case92.id="joueur"+(joueur+1);
}
if(casejoue==93) {
document.morpion.case93.value=casejoueur;
document.morpion.case93.id="joueur"+(joueur+1);
}
if(casejoue==94) {
document.morpion.case94.value=casejoueur;
document.morpion.case94.id="joueur"+(joueur+1);
}
if(casejoue==95) {
document.morpion.case95.value=casejoueur;
document.morpion.case95.id="joueur"+(joueur+1);
}
if(casejoue==96) {
document.morpion.case96.value=casejoueur;
document.morpion.case96.id="joueur"+(joueur+1);
}
if(casejoue==97) {
document.morpion.case97.value=casejoueur;
document.morpion.case97.id="joueur"+(joueur+1);
}
if(casejoue==98) {
document.morpion.case98.value=casejoueur;
document.morpion.case98.id="joueur"+(joueur+1);
}
if(casejoue==99) {
document.morpion.case99.value=casejoueur;
document.morpion.case99.id="joueur"+(joueur+1);
}
}
function gagnant(jeu) {
var fin=new Array();
fin[0]=0;
fin[1]=0;
/*L'ordinateur vérifie s'il y a un gagnant*/
for(var i=0;i!=10;i++)
  {
  for(var j=0;j!=6;j++)
    {
    //Vérification des lignes
    if(jeu[i*10+j]==jeu[i*10+j+1]&&jeu[i*10+j+1]==jeu[i*10+j+2]&&jeu[i*10+j+2]==jeu[i*10+j+3]&&jeu[i*10+j+3]==jeu[i*10+j+4]&&jeu[i*10+j]!=" ")
      {
      fin[0]=1;
      fin[1]=jeu[i*10+j];
      }
    //Vérification des colonnes
    if(jeu[10*j+i]==jeu[10*j+i+10]&&jeu[10*j+i+10]==jeu[10*j+i+20]&&jeu[10*j+i+20]==jeu[10*j+i+30]&&jeu[10*j+i+30]==jeu[10*j+i+40]&&jeu[10*j+i]!=" ")
      {
      fin[0]=1;
      fin[1]=jeu[10*j+i];
      }
    //Vérification des diagonales nord-ouest -> sud-est
    if(i<6&&jeu[i*10+j]==jeu[i*10+j+11]&&jeu[i*10+j+11]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+33]&&jeu[i*10+j+33]==jeu[i*10+j+44]&&jeu[i*10+j]!=" ")
      {
      fin[0]=1;
      fin[1]=jeu[i*10+j];
      }
    //Vérification des diagonales sud-est ->  nord-ouest
    if(i<6&&jeu[i*10+j+4]==jeu[i*10+j+13]&&jeu[i*10+j+13]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+31]&&jeu[i*10+j+31]==jeu[i*10+j+40]&&jeu[i*10+j+4]!=" ")
      {
      fin[0]=1;
      fin[1]=jeu[i*10+j+4];
      }
    }
  }
/*S'il n'y a pas de gagnant, il vérifie si la grille est pleine*/
if(fin[0]==0) {
var nbvides=0;
for(var w=0;w!=100;w++) if(jeu[w]==" ") nbvides++;
if(nbvides==0) fin[0]=1;
}
return fin;
}
function affichegagnant(winner) {
var phrase;
if(winner=="X"||winner=="O") {
phrase="Le joueur ";
if(winner=="X") {phrase+="1 ";victoire1++;}
else {phrase+="2 ";victoire2++;}
phrase+="a gagné!";
} else {
phrase="Personne n\'a gagné!";
document.morpion.joueursuiv.id="rieninfo";
victoire0++;
}
document.morpion.joueursuiv.value=phrase;
alert(phrase);
jeufini=1;
}
function grille() {
var jeu=new Array();
jeu[0]=document.morpion.case0.value;
jeu[1]=document.morpion.case1.value;
jeu[2]=document.morpion.case2.value;
jeu[3]=document.morpion.case3.value;
jeu[4]=document.morpion.case4.value;
jeu[5]=document.morpion.case5.value;
jeu[6]=document.morpion.case6.value;
jeu[7]=document.morpion.case7.value;
jeu[8]=document.morpion.case8.value;
jeu[9]=document.morpion.case9.value;
jeu[10]=document.morpion.case10.value;
jeu[11]=document.morpion.case11.value;
jeu[12]=document.morpion.case12.value;
jeu[13]=document.morpion.case13.value;
jeu[14]=document.morpion.case14.value;
jeu[15]=document.morpion.case15.value;
jeu[16]=document.morpion.case16.value;
jeu[17]=document.morpion.case17.value;
jeu[18]=document.morpion.case18.value;
jeu[19]=document.morpion.case19.value;
jeu[20]=document.morpion.case20.value;
jeu[21]=document.morpion.case21.value;
jeu[22]=document.morpion.case22.value;
jeu[23]=document.morpion.case23.value;
jeu[24]=document.morpion.case24.value;
jeu[25]=document.morpion.case25.value;
jeu[26]=document.morpion.case26.value;
jeu[27]=document.morpion.case27.value;
jeu[28]=document.morpion.case28.value;
jeu[29]=document.morpion.case29.value;
jeu[30]=document.morpion.case30.value;
jeu[31]=document.morpion.case31.value;
jeu[32]=document.morpion.case32.value;
jeu[33]=document.morpion.case33.value;
jeu[34]=document.morpion.case34.value;
jeu[35]=document.morpion.case35.value;
jeu[36]=document.morpion.case36.value;
jeu[37]=document.morpion.case37.value;
jeu[38]=document.morpion.case38.value;
jeu[39]=document.morpion.case39.value;
jeu[40]=document.morpion.case40.value;
jeu[41]=document.morpion.case41.value;
jeu[42]=document.morpion.case42.value;
jeu[43]=document.morpion.case43.value;
jeu[44]=document.morpion.case44.value;
jeu[45]=document.morpion.case45.value;
jeu[46]=document.morpion.case46.value;
jeu[47]=document.morpion.case47.value;
jeu[48]=document.morpion.case48.value;
jeu[49]=document.morpion.case49.value;
jeu[50]=document.morpion.case50.value;
jeu[51]=document.morpion.case51.value;
jeu[52]=document.morpion.case52.value;
jeu[53]=document.morpion.case53.value;
jeu[54]=document.morpion.case54.value;
jeu[55]=document.morpion.case55.value;
jeu[56]=document.morpion.case56.value;
jeu[57]=document.morpion.case57.value;
jeu[58]=document.morpion.case58.value;
jeu[59]=document.morpion.case59.value;
jeu[60]=document.morpion.case60.value;
jeu[61]=document.morpion.case61.value;
jeu[62]=document.morpion.case62.value;
jeu[63]=document.morpion.case63.value;
jeu[64]=document.morpion.case64.value;
jeu[65]=document.morpion.case65.value;
jeu[66]=document.morpion.case66.value;
jeu[67]=document.morpion.case67.value;
jeu[68]=document.morpion.case68.value;
jeu[69]=document.morpion.case69.value;
jeu[70]=document.morpion.case70.value;
jeu[71]=document.morpion.case71.value;
jeu[72]=document.morpion.case72.value;
jeu[73]=document.morpion.case73.value;
jeu[74]=document.morpion.case74.value;
jeu[75]=document.morpion.case75.value;
jeu[76]=document.morpion.case76.value;
jeu[77]=document.morpion.case77.value;
jeu[78]=document.morpion.case78.value;
jeu[79]=document.morpion.case79.value;
jeu[80]=document.morpion.case80.value;
jeu[81]=document.morpion.case81.value;
jeu[82]=document.morpion.case82.value;
jeu[83]=document.morpion.case83.value;
jeu[84]=document.morpion.case84.value;
jeu[85]=document.morpion.case85.value;
jeu[86]=document.morpion.case86.value;
jeu[87]=document.morpion.case87.value;
jeu[88]=document.morpion.case88.value;
jeu[89]=document.morpion.case89.value;
jeu[90]=document.morpion.case90.value;
jeu[91]=document.morpion.case91.value;
jeu[92]=document.morpion.case92.value;
jeu[93]=document.morpion.case93.value;
jeu[94]=document.morpion.case94.value;
jeu[95]=document.morpion.case95.value;
jeu[96]=document.morpion.case96.value;
jeu[97]=document.morpion.case97.value;
jeu[98]=document.morpion.case98.value;
jeu[99]=document.morpion.case99.value;
return jeu;
}
function affjoueursuiv() {
document.morpion.joueursuiv.value="Joueur "+(joueur+1);
document.morpion.joueursuiv.id="joueurinfo"+(joueur+1);
}
function affvictoires() {
document.morpionscore.info1.value=victoire1;
document.morpionscore.info2.value=victoire2;
document.morpionscore.info3.value=victoire0;
}
function jouerhasard(jeu){
for(var i=0;i!=1;) {
var casejoue=Math.round(Math.random()*99);
if(jeu[casejoue]==" ") i=1;
}
return casejoue;
}
function trouvligne(casecherche) {
var ligne;
if(casecherche<0) ligne=-1;
else
{
  for(var i=0;i!=10;i++) {
    for(var j=0;j!=10;j++) {
      if((i*10+j)==casecherche) ligne=i;
    }
  }
}
return ligne;
}
function memeligne(i,j) {
var lignecase1=trouvligne(i);
var case2=i+j;
var lignecase2=trouvligne(case2);
if(lignecase1==lignecase2) return 1;
else return 0;
}
function jouerpres(jeu) {
var casejoue=-1;
for(var i=0;i<100;i++) {
var casejoue2=jouerhasard(jeu);
/*L'ordinateur vérifie si la case joué se trouve près d'une autre case jouée*/
var bienplace=0;
for(var verif=-2;verif!=3;verif++) {
for(var verif2=-2;verif2!=3;verif2++) {
if(verif!=0&&verif2!=0&&verif+verif2*10+casejoue2>-1&&verif+verif2*10+casejoue2<100&&jeu[verif+verif2*10+casejoue2]!=" "&&memeligne(verif2*10,verif2*10+verif)==1) bienplace=1;
}
}
if(bienplace!=0) {i=101;casejoue=casejoue2;}
}
return casejoue;
}
function align3(jeu,lettre) {
var casejoue=-1;
/*L'ordinateur vérifie s'il y a un gagnant*/
for(var i=0;i!=10;i++)
  {
  for(var j=0;j!=8;j++)
    {
    //Vérification des lignes
    if(jeu[i*10+j]!=jeu[i*10+j+1]&&jeu[i*10+j+1]==jeu[i*10+j+2]&&jeu[i*10+j]==" "&&jeu[i*10+j+1]==lettre) casejoue=i*10+j;
    if(jeu[i*10+j]!=jeu[i*10+j+1]&&jeu[i*10+j]==jeu[i*10+j+2]&&jeu[i*10+j+1]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+1;
    if(jeu[i*10+j]==jeu[i*10+j+1]&&jeu[i*10+j+1]!=jeu[i*10+j+2]&&jeu[i*10+j+2]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+2;
    //Vérification des colonnes
    if(jeu[10*j+i]!=jeu[10*j+i+10]&&jeu[10*j+i+10]==jeu[10*j+i+20]&&jeu[10*j+i]==" "&&jeu[10*j+i+10]==lettre) casejoue=10*j+i;
    if(jeu[10*j+i]!=jeu[10*j+i+10]&&jeu[10*j+i]==jeu[10*j+i+20]&&jeu[10*j+i+10]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+10;
    if(jeu[10*j+i]==jeu[10*j+i+10]&&jeu[10*j+i+10]!=jeu[10*j+i+20]&&jeu[10*j+i+20]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+20;
    //Vérification des diagonales nord-ouest -> sud-est
    if(i<8&&jeu[i*10+j]!=jeu[i*10+j+11]&&jeu[i*10+j+11]==jeu[i*10+j+22]&&jeu[i*10+j]==" "&&jeu[i*10+j+11]==lettre) casejoue=i*10+j;
    if(i<8&&jeu[i*10+j]!=jeu[i*10+j+11]&&jeu[i*10+j]==jeu[i*10+j+22]&&jeu[i*10+j+11]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+11;
    if(i<8&&jeu[i*10+j]==jeu[i*10+j+11]&&jeu[i*10+j+11]!=jeu[i*10+j+22]&&jeu[i*10+j+22]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+22;
    //Vérification des diagonales sud-est ->  nord-ouest
    if(i<8&&jeu[i*10+j+4]!=jeu[i*10+j+13]&&jeu[i*10+j+13]==jeu[i*10+j+22]&&jeu[i*10+j+4]==" "&&jeu[i*10+j+13]==lettre) casejoue=i*10+j+4;
    if(i<8&&jeu[i*10+j+4]!=jeu[i*10+j+13]&&jeu[i*10+j+4]==jeu[i*10+j+22]&&jeu[i*10+j+13]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+13;
    if(i<8&&jeu[i*10+j+4]==jeu[i*10+j+13]&&jeu[i*10+j+13]!=jeu[i*10+j+22]&&jeu[i*10+j+22]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+22;
    }
  }
return casejoue;
}
function align4(jeu,lettre) {
var casejoue=-1;
/*L'ordinateur vérifie s'il y a un gagnant*/
for(var i=0;i!=10;i++)
  {
  for(var j=0;j!=7;j++)
    {
    //Vérification des lignes
    if(jeu[i*10+j]!=jeu[i*10+j+1]&&jeu[i*10+j+1]==jeu[i*10+j+2]&&jeu[i*10+j+2]==jeu[i*10+j+3]&&jeu[i*10+j]==" "&&jeu[i*10+j+1]==lettre) casejoue=i*10+j;
    if(jeu[i*10+j]!=jeu[i*10+j+1]&&jeu[i*10+j]==jeu[i*10+j+2]&&jeu[i*10+j+2]==jeu[i*10+j+3]&&jeu[i*10+j+1]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+1;
    if(jeu[i*10+j]==jeu[i*10+j+1]&&jeu[i*10+j+1]!=jeu[i*10+j+2]&&jeu[i*10+j+1]==jeu[i*10+j+3]&&jeu[i*10+j+2]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+2;
    if(jeu[i*10+j]==jeu[i*10+j+1]&&jeu[i*10+j+1]==jeu[i*10+j+2]&&jeu[i*10+j+2]!=jeu[i*10+j+3]&&jeu[i*10+j+3]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+3;
    //Vérification des colonnes
    if(jeu[10*j+i]!=jeu[10*j+i+10]&&jeu[10*j+i+10]==jeu[10*j+i+20]&&jeu[10*j+i+20]==jeu[10*j+i+30]&&jeu[10*j+i]==" "&&jeu[10*j+i+10]==lettre) casejoue=10*j+i;
    if(jeu[10*j+i]!=jeu[10*j+i+10]&&jeu[10*j+i]==jeu[10*j+i+20]&&jeu[10*j+i+20]==jeu[10*j+i+30]&&jeu[10*j+i+10]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+10;
    if(jeu[10*j+i]==jeu[10*j+i+10]&&jeu[10*j+i+10]!=jeu[10*j+i+20]&&jeu[10*j+i+20]!=jeu[10*j+i+30]&&jeu[10*j+i+20]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+20;
    if(jeu[10*j+i]==jeu[10*j+i+10]&&jeu[10*j+i+10]==jeu[10*j+i+20]&&jeu[10*j+i+20]!=jeu[10*j+i+30]&&jeu[10*j+i+30]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+30;
    //Vérification des diagonales nord-ouest -> sud-est
    if(i<7&&jeu[i*10+j]!=jeu[i*10+j+11]&&jeu[i*10+j+11]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+33]&&jeu[i*10+j]==" "&&jeu[i*10+j+11]==lettre) casejoue=i*10+j;
    if(i<7&&jeu[i*10+j]!=jeu[i*10+j+11]&&jeu[i*10+j]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+33]&&jeu[i*10+j+11]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+11;
    if(i<7&&jeu[i*10+j]==jeu[i*10+j+11]&&jeu[i*10+j+11]!=jeu[i*10+j+22]&&jeu[i*10+j+11]==jeu[i*10+j+33]&&jeu[i*10+j+22]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+22;
    if(i<7&&jeu[i*10+j]==jeu[i*10+j+11]&&jeu[i*10+j+11]==jeu[i*10+j+22]&&jeu[i*10+j+22]!=jeu[i*10+j+33]&&jeu[i*10+j+33]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+33;
    //Vérification des diagonales sud-est ->  nord-ouest
    if(i<7&&jeu[i*10+j+4]!=jeu[i*10+j+13]&&jeu[i*10+j+13]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+31]&&jeu[i*10+j+4]==" "&&jeu[i*10+j+13]==lettre) casejoue=i*10+j+4;
    if(i<7&&jeu[i*10+j+4]!=jeu[i*10+j+13]&&jeu[i*10+j+4]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+31]&&jeu[i*10+j+13]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+13;
    if(i<7&&jeu[i*10+j+4]==jeu[i*10+j+13]&&jeu[i*10+j+13]!=jeu[i*10+j+22]&&jeu[i*10+j+13]==jeu[i*10+j+31]&&jeu[i*10+j+22]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+22;
    if(i<7&&jeu[i*10+j+4]==jeu[i*10+j+13]&&jeu[i*10+j+13]==jeu[i*10+j+22]&&jeu[i*10+j+22]!=jeu[i*10+j+31]&&jeu[i*10+j+31]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+31;
    }
  }
return casejoue;
}
function align5(jeu,lettre) {
var casejoue=-1;
/*L'ordinateur vérifie s'il y a un gagnant*/
for(var i=0;i!=10;i++)
  {
  for(var j=0;j!=6;j++)
    {
    //Vérification des lignes
    if(jeu[i*10+j]!=jeu[i*10+j+1]&&jeu[i*10+j+1]==jeu[i*10+j+2]&&jeu[i*10+j+2]==jeu[i*10+j+3]&&jeu[i*10+j+3]==jeu[i*10+j+4]&&jeu[i*10+j]==" "&&jeu[i*10+j+1]==lettre) casejoue=i*10+j;
    if(jeu[i*10+j]!=jeu[i*10+j+1]&&jeu[i*10+j]==jeu[i*10+j+2]&&jeu[i*10+j+2]==jeu[i*10+j+3]&&jeu[i*10+j+3]==jeu[i*10+j+4]&&jeu[i*10+j+1]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+1;
    if(jeu[i*10+j]==jeu[i*10+j+1]&&jeu[i*10+j+1]!=jeu[i*10+j+2]&&jeu[i*10+j+1]==jeu[i*10+j+3]&&jeu[i*10+j+3]==jeu[i*10+j+4]&&jeu[i*10+j+2]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+2;
    if(jeu[i*10+j]==jeu[i*10+j+1]&&jeu[i*10+j+1]==jeu[i*10+j+2]&&jeu[i*10+j+2]!=jeu[i*10+j+3]&&jeu[i*10+j+2]==jeu[i*10+j+4]&&jeu[i*10+j+3]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+3;
    if(jeu[i*10+j]==jeu[i*10+j+1]&&jeu[i*10+j+1]==jeu[i*10+j+2]&&jeu[i*10+j+2]==jeu[i*10+j+3]&&jeu[i*10+j+3]!=jeu[i*10+j+4]&&jeu[i*10+j+4]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+4;
    //Vérification des colonnes
    if(jeu[10*j+i]!=jeu[10*j+i+10]&&jeu[10*j+i+10]==jeu[10*j+i+20]&&jeu[10*j+i+20]==jeu[10*j+i+30]&&jeu[10*j+i+30]==jeu[10*j+i+40]&&jeu[10*j+i]==" "&&jeu[10*j+i+10]==lettre) casejoue=10*j+i;
    if(jeu[10*j+i]!=jeu[10*j+i+10]&&jeu[10*j+i]==jeu[10*j+i+20]&&jeu[10*j+i+20]==jeu[10*j+i+30]&&jeu[10*j+i+30]==jeu[10*j+i+40]&&jeu[10*j+i+10]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+10;
    if(jeu[10*j+i]==jeu[10*j+i+10]&&jeu[10*j+i+10]!=jeu[10*j+i+20]&&jeu[10*j+i+20]!=jeu[10*j+i+30]&&jeu[10*j+i+30]==jeu[10*j+i+40]&&jeu[10*j+i+20]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+20;
    if(jeu[10*j+i]==jeu[10*j+i+10]&&jeu[10*j+i+10]==jeu[10*j+i+20]&&jeu[10*j+i+20]!=jeu[10*j+i+30]&&jeu[10*j+i+20]==jeu[10*j+i+40]&&jeu[10*j+i+30]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+30;
    if(jeu[10*j+i]==jeu[10*j+i+10]&&jeu[10*j+i+10]==jeu[10*j+i+20]&&jeu[10*j+i+20]==jeu[10*j+i+30]&&jeu[10*j+i+30]!=jeu[10*j+i+40]&&jeu[10*j+i+40]==" "&&jeu[10*j+i]==lettre) casejoue=10*j+i+40;
    //Vérification des diagonales nord-ouest -> sud-est
    if(i<6&&jeu[i*10+j]!=jeu[i*10+j+11]&&jeu[i*10+j+11]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+33]&&jeu[i*10+j+33]==jeu[i*10+j+44]&&jeu[i*10+j]==" "&&jeu[i*10+j+11]==lettre) casejoue=i*10+j;
    if(i<6&&jeu[i*10+j]!=jeu[i*10+j+11]&&jeu[i*10+j]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+33]&&jeu[i*10+j+33]==jeu[i*10+j+44]&&jeu[i*10+j+11]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+11;
    if(i<6&&jeu[i*10+j]==jeu[i*10+j+11]&&jeu[i*10+j+11]!=jeu[i*10+j+22]&&jeu[i*10+j+11]==jeu[i*10+j+33]&&jeu[i*10+j+33]==jeu[i*10+j+44]&&jeu[i*10+j+22]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+22;
    if(i<6&&jeu[i*10+j]==jeu[i*10+j+11]&&jeu[i*10+j+11]==jeu[i*10+j+22]&&jeu[i*10+j+22]!=jeu[i*10+j+33]&&jeu[i*10+j+22]==jeu[i*10+j+44]&&jeu[i*10+j+33]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+33;
    if(i<6&&jeu[i*10+j]==jeu[i*10+j+11]&&jeu[i*10+j+11]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+33]&&jeu[i*10+j+33]!=jeu[i*10+j+44]&&jeu[i*10+j+44]==" "&&jeu[i*10+j]==lettre) casejoue=i*10+j+44;
    //Vérification des diagonales sud-est ->  nord-ouest
    if(i<6&&jeu[i*10+j+4]!=jeu[i*10+j+13]&&jeu[i*10+j+13]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+31]&&jeu[i*10+j+31]==jeu[i*10+j+40]&&jeu[i*10+j+4]==" "&&jeu[i*10+j+13]==lettre) casejoue=i*10+j+4;
    if(i<6&&jeu[i*10+j+4]!=jeu[i*10+j+13]&&jeu[i*10+j+4]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+31]&&jeu[i*10+j+31]==jeu[i*10+j+40]&&jeu[i*10+j+13]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+13;
    if(i<6&&jeu[i*10+j+4]==jeu[i*10+j+13]&&jeu[i*10+j+13]!=jeu[i*10+j+22]&&jeu[i*10+j+13]==jeu[i*10+j+31]&&jeu[i*10+j+31]==jeu[i*10+j+40]&&jeu[i*10+j+22]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+22;
    if(i<6&&jeu[i*10+j+4]==jeu[i*10+j+13]&&jeu[i*10+j+13]==jeu[i*10+j+22]&&jeu[i*10+j+22]!=jeu[i*10+j+31]&&jeu[i*10+j+22]==jeu[i*10+j+40]&&jeu[i*10+j+31]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+31;
    if(i<6&&jeu[i*10+j+4]==jeu[i*10+j+13]&&jeu[i*10+j+13]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+31]&&jeu[i*10+j+31]!=jeu[i*10+j+40]&&jeu[i*10+j+40]==" "&&jeu[i*10+j+4]==lettre) casejoue=i*10+j+40;
    }
  }
return casejoue;
}
function technique1(jeu,lettre) {
var casejoue=-1;
/*L'ordinateur vérifie s'il y a un gagnant*/
for(var i=0;i!=10;i++)
  {
  for(var j=0;j!=4;j++)
    {
    //Vérification des lignes
    if(jeu[i*10+j]==jeu[i*10+j+2]&&jeu[i*10+j+2]==jeu[i*10+j+4]&&jeu[i*10+j+4]==jeu[i*10+j+6]&&jeu[i*10+j+1]==jeu[i*10+j+3]&&jeu[i*10+j+3]==jeu[i*10+j+5]&&jeu[i*10+j]==lettre&&jeu[i*10+j+1]==" ") casejoue=i*10+j+3;
    //Vérification des colonnes
    if(jeu[10*j+i]==jeu[10*j+i+20]&&jeu[10*j+i+20]==jeu[10*j+i+40]&&jeu[10*j+i+40]==jeu[10*j+i+60]&&jeu[10*j+i+10]==jeu[10*j+i+30]&&jeu[10*j+i+30]==jeu[10*j+i+50]&&jeu[10*j+i]==lettre&&jeu[10*j+i+10]==" ") casejoue=10*j+i+30;
    //Vérification des diagonales nord-ouest -> sud-est
    if(i<6&&jeu[i*10+j]==jeu[i*10+j+22]&&jeu[i*10+j+22]==jeu[i*10+j+44]&&jeu[i*10+j+44]==jeu[i*10+j+66]&&jeu[i*10+j+11]==jeu[i*10+j+33]&&jeu[i*10+j+33]==jeu[i*10+j+55]&&jeu[i*10+j]==lettre&&jeu[i*10+j+11]==" ") casejoue=i*10+j+33;
    //Vérification des diagonales sud-est ->  nord-ouest
    if(i<6&&jeu[i*10+j+6]==jeu[i*10+j+24]&&jeu[i*10+j+24]==jeu[i*10+j+42]&&jeu[i*10+j+42]==jeu[i*10+j+60]&&jeu[i*10+j+15]==jeu[i*10+j+33]&&jeu[i*10+j+33]==jeu[i*10+j+51]&&jeu[i*10+j+6]==lettre&&jeu[i*10+j+15]==" ") casejoue=i*10+j+33;
    }
  }
return casejoue;
}
function cpuchoix(jeu) {
var difficulte=document.difficulte.diff.value;
var fait_ou_pas=Math.round(Math.random()*difficulte);
var casejoue=align5(jeu,"O");
if((fait_ou_pas==0||fait_ou_pas==1)&&casejoue==-1) casejoue=align5(jeu,"X");
if((fait_ou_pas==0||fait_ou_pas==1)&&casejoue==-1) casejoue=align4(jeu,"X");
if((fait_ou_pas==0||fait_ou_pas==1||fait_ou_pas==2)&&casejoue==-1) casejoue=align4(jeu,"O");
if((fait_ou_pas==0||fait_ou_pas==1)&&casejoue==-1) casejoue=technique1(jeu,"X");
if((fait_ou_pas==0||fait_ou_pas==1)&&casejoue==-1) casejoue=technique1(jeu,"O");
if((fait_ou_pas==0||fait_ou_pas==1)&&casejoue==-1) casejoue=align3(jeu,"X");
if(casejoue==-1) casejoue=align3(jeu,"O");
if(casejoue==-1) casejoue=jouerpres(jeu);
if(casejoue==-1) casejoue=jouerhasard(jeu);
return casejoue;
}
function cpujouer() {
var jeu=grille();
var casejoue=cpuchoix(jeu);
affichechoix(casejoue);
jeu=grille();
changejoueur();
var fin=gagnant(jeu);
affjoueursuiv();
if(fin[0]==1) affichegagnant(fin[1]);
affvictoires();
}
function jouer2() {
if(document.optionsjoueurs.jo2.value==0) document.difficulte.diff.disabled=true;
else document.difficulte.diff.disabled=false;
if(document.optionsjoueurs.jo2.value==1&&jeufini==0&&joueur==1) cpujouer();
}
function jouer(casejoue) {
if(jeufini==0) {
var jeu=grille();
if(jeu[casejoue]==" ") {
affichechoix(casejoue);
jeu=grille();
changejoueur();
var fin=gagnant(jeu);
affjoueursuiv();
if(fin[0]==1) affichegagnant(fin[1]);
affvictoires();
} else alert("Cette case est déjà utilisée!");
} else alert("Si vous souhaitez rejouer,\nveuillez cliquer sur \'NOUVEAU JEU\'");
if(document.optionsjoueurs.jo2.value==1&&jeufini==0&&joueur==1) cpujouer();
}
function newgame() {
document.morpion.case0.value=" ";
document.morpion.case1.value=" ";
document.morpion.case2.value=" ";
document.morpion.case3.value=" ";
document.morpion.case4.value=" ";
document.morpion.case5.value=" ";
document.morpion.case6.value=" ";
document.morpion.case7.value=" ";
document.morpion.case8.value=" ";
document.morpion.case9.value=" ";
document.morpion.case10.value=" ";
document.morpion.case11.value=" ";
document.morpion.case12.value=" ";
document.morpion.case13.value=" ";
document.morpion.case14.value=" ";
document.morpion.case15.value=" ";
document.morpion.case16.value=" ";
document.morpion.case17.value=" ";
document.morpion.case18.value=" ";
document.morpion.case19.value=" ";
document.morpion.case20.value=" ";
document.morpion.case21.value=" ";
document.morpion.case22.value=" ";
document.morpion.case23.value=" ";
document.morpion.case24.value=" ";
document.morpion.case25.value=" ";
document.morpion.case26.value=" ";
document.morpion.case27.value=" ";
document.morpion.case28.value=" ";
document.morpion.case29.value=" ";
document.morpion.case30.value=" ";
document.morpion.case31.value=" ";
document.morpion.case32.value=" ";
document.morpion.case33.value=" ";
document.morpion.case34.value=" ";
document.morpion.case35.value=" ";
document.morpion.case36.value=" ";
document.morpion.case37.value=" ";
document.morpion.case38.value=" ";
document.morpion.case39.value=" ";
document.morpion.case40.value=" ";
document.morpion.case41.value=" ";
document.morpion.case42.value=" ";
document.morpion.case43.value=" ";
document.morpion.case44.value=" ";
document.morpion.case45.value=" ";
document.morpion.case46.value=" ";
document.morpion.case47.value=" ";
document.morpion.case48.value=" ";
document.morpion.case49.value=" ";
document.morpion.case50.value=" ";
document.morpion.case51.value=" ";
document.morpion.case52.value=" ";
document.morpion.case53.value=" ";
document.morpion.case54.value=" ";
document.morpion.case55.value=" ";
document.morpion.case56.value=" ";
document.morpion.case57.value=" ";
document.morpion.case58.value=" ";
document.morpion.case59.value=" ";
document.morpion.case60.value=" ";
document.morpion.case61.value=" ";
document.morpion.case62.value=" ";
document.morpion.case63.value=" ";
document.morpion.case64.value=" ";
document.morpion.case65.value=" ";
document.morpion.case66.value=" ";
document.morpion.case67.value=" ";
document.morpion.case68.value=" ";
document.morpion.case69.value=" ";
document.morpion.case70.value=" ";
document.morpion.case71.value=" ";
document.morpion.case72.value=" ";
document.morpion.case73.value=" ";
document.morpion.case74.value=" ";
document.morpion.case75.value=" ";
document.morpion.case76.value=" ";
document.morpion.case77.value=" ";
document.morpion.case78.value=" ";
document.morpion.case79.value=" ";
document.morpion.case80.value=" ";
document.morpion.case81.value=" ";
document.morpion.case82.value=" ";
document.morpion.case83.value=" ";
document.morpion.case84.value=" ";
document.morpion.case85.value=" ";
document.morpion.case86.value=" ";
document.morpion.case87.value=" ";
document.morpion.case88.value=" ";
document.morpion.case89.value=" ";
document.morpion.case90.value=" ";
document.morpion.case91.value=" ";
document.morpion.case92.value=" ";
document.morpion.case93.value=" ";
document.morpion.case94.value=" ";
document.morpion.case95.value=" ";
document.morpion.case96.value=" ";
document.morpion.case97.value=" ";
document.morpion.case98.value=" ";
document.morpion.case99.value=" ";

document.morpion.case0.id="rien";
document.morpion.case1.id="rien";
document.morpion.case2.id="rien";
document.morpion.case3.id="rien";
document.morpion.case4.id="rien";
document.morpion.case5.id="rien";
document.morpion.case6.id="rien";
document.morpion.case7.id="rien";
document.morpion.case8.id="rien";
document.morpion.case9.id="rien";
document.morpion.case10.id="rien";
document.morpion.case11.id="rien";
document.morpion.case12.id="rien";
document.morpion.case13.id="rien";
document.morpion.case14.id="rien";
document.morpion.case15.id="rien";
document.morpion.case16.id="rien";
document.morpion.case17.id="rien";
document.morpion.case18.id="rien";
document.morpion.case19.id="rien";
document.morpion.case20.id="rien";
document.morpion.case21.id="rien";
document.morpion.case22.id="rien";
document.morpion.case23.id="rien";
document.morpion.case24.id="rien";
document.morpion.case25.id="rien";
document.morpion.case26.id="rien";
document.morpion.case27.id="rien";
document.morpion.case28.id="rien";
document.morpion.case29.id="rien";
document.morpion.case30.id="rien";
document.morpion.case31.id="rien";
document.morpion.case32.id="rien";
document.morpion.case33.id="rien";
document.morpion.case34.id="rien";
document.morpion.case35.id="rien";
document.morpion.case36.id="rien";
document.morpion.case37.id="rien";
document.morpion.case38.id="rien";
document.morpion.case39.id="rien";
document.morpion.case40.id="rien";
document.morpion.case41.id="rien";
document.morpion.case42.id="rien";
document.morpion.case43.id="rien";
document.morpion.case44.id="rien";
document.morpion.case45.id="rien";
document.morpion.case46.id="rien";
document.morpion.case47.id="rien";
document.morpion.case48.id="rien";
document.morpion.case49.id="rien";
document.morpion.case50.id="rien";
document.morpion.case51.id="rien";
document.morpion.case52.id="rien";
document.morpion.case53.id="rien";
document.morpion.case54.id="rien";
document.morpion.case55.id="rien";
document.morpion.case56.id="rien";
document.morpion.case57.id="rien";
document.morpion.case58.id="rien";
document.morpion.case59.id="rien";
document.morpion.case60.id="rien";
document.morpion.case61.id="rien";
document.morpion.case62.id="rien";
document.morpion.case63.id="rien";
document.morpion.case64.id="rien";
document.morpion.case65.id="rien";
document.morpion.case66.id="rien";
document.morpion.case67.id="rien";
document.morpion.case68.id="rien";
document.morpion.case69.id="rien";
document.morpion.case70.id="rien";
document.morpion.case71.id="rien";
document.morpion.case72.id="rien";
document.morpion.case73.id="rien";
document.morpion.case74.id="rien";
document.morpion.case75.id="rien";
document.morpion.case76.id="rien";
document.morpion.case77.id="rien";
document.morpion.case78.id="rien";
document.morpion.case79.id="rien";
document.morpion.case80.id="rien";
document.morpion.case81.id="rien";
document.morpion.case82.id="rien";
document.morpion.case83.id="rien";
document.morpion.case84.id="rien";
document.morpion.case85.id="rien";
document.morpion.case86.id="rien";
document.morpion.case87.id="rien";
document.morpion.case88.id="rien";
document.morpion.case89.id="rien";
document.morpion.case90.id="rien";
document.morpion.case91.id="rien";
document.morpion.case92.id="rien";
document.morpion.case93.id="rien";
document.morpion.case94.id="rien";
document.morpion.case95.id="rien";
document.morpion.case96.id="rien";
document.morpion.case97.id="rien";
document.morpion.case98.id="rien";
document.morpion.case99.id="rien";

document.morpion.joueursuiv.value="Joueur "+(joueur+1);
document.morpion.joueursuiv.id="joueurinfo"+(joueur+1);
affvictoires();
jeufini=0;
if(document.optionsjoueurs.jo2.value==1&&joueur==1) cpujouer();
}
function bonjour() {
alert("Bienvenue au jeu \"Grand Morpion\"\n\n\ Enchainez 5 pion sur la même ligne, colonne ou diagole pour gagner la partie \"\n\n\n© Hervé MBO ");
window.status="© Nicolas DUBIEN  - 2006";
document.difficulte.diff.value=3;
newgame();
}
function aurevoir() {
alert("Au revoir et à bientôt\n\n© Hervé MBO");
}
