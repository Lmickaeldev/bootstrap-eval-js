

function exo1 (){
// Variables pour stocker les comptages
let dessous20 = 0;
let entre20et40 = 0;
let dessus40 = 0;

// Boucle pour demander les âges successifs
while (true) {
    // Saisie de l'âge
    var age = parseInt(prompt("Entrez l'âge :"));
    // Vérification de l'âge
    if (age < 20) {
        dessous20++;
    } else if (age >= 20 && age <= 40) {
        entre20et40++;
    } else if (age > 40) {
        dessus40++;
    }
    // Condition d'arrêt
    if (age >= 100) {
        break;
    }
}

// Affichage des résultats
alert("Nombre de personnes d'ages  inférieur a 20 ans : " + dessous20);
alert("Nombre de personnes d'ages compris entre 20 ans et 40 ans : " + entre20et40);
alert("Nombre de personnes d'ages supérieur a 40 ans : " + dessus40);
};
function exo2 (){
n=prompt("donnez un nombre")
function multiplication(n)
{
    for(i=0;i <= 10;i++)
    {
        let d= (n*i)
        
        alert(n+"x"+i+"="+d+"<br>")
    
    }

}
multiplication(n)
}
function exo3(){
    let table = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    console.table(table)
   let Prenom = prompt("devinez le prenom")
   let index = table.indexOf(Prenom)
   if (index!== -1){
       let i=index;i <table.length-1 ;i++
       table[i]=table[i+1]
       table[table.length-1]="";
       alert("bravo!!"+Prenom+" a été trouvé "+"")
       alert(table)
       
   }
   else
   alert("ERREUR "+Prenom+" n'existe pas dans le tableau.")   
   
}

function exo4(){
const pu= parseFloat(prompt("entrez un prix"))
const qtecom=parseInt(prompt("entrez un nombre de commande"));
//calcul du total
tot =(pu*qtecom)
alert("le total est de"+tot+"euros"+"")
//calcul de la remise
if (tot<=100 )
{
    rem=0
}
else if ((tot>=100)&&(tot<=200) ){
    rem=0.05
}
else if (tot>200 ){
    rem=0.1
}
totrem=tot-(tot*rem)
alert("total remisé est de"+" "+totrem+"")
//calcul du frais de port
 let port=0
if(totrem>500)
{
    port=0
}
else if (totrem<500)
{
    
    port=(totrem*0.02)
     
}
if(port>6)
    {port=(totrem*0.02)}
    else if(port<6)
    {port=6}   
alert("total de la comande"+" "+"(total+remise) "+totrem+" euros"+"plus les frais de port de "+port.toFixed(2)+" est de "+(port+totrem).toFixed(2)+"euros")

}




bouton1 = document.getElementById("test1");
bouton1.addEventListener("click",exo1);
bouton2 = document.getElementById("test2");
bouton2.addEventListener("click",exo2);
bouton3 = document.getElementById("test3");
bouton3.addEventListener("click",exo3);
bouton4 = document.getElementById("test4");
bouton4.addEventListener("click",exo4);