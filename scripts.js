//toggle dark mode button
// document.getElementById("toggleDarkModeButton").onclick = function darkModeToggle() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// } 


var a,b,c 
var indiceGreutate;
var indiceInaltime;
var armonie;
var armonieGreutate;
var armonieInaltime;
var diferentaInaltimeGreutate;
// m1 = m greutate
var m1;
// m2 = m inaltime
var m2;
var imc
var imcGreutate
console.log(imc)

//apas butonul submit si se intampla multe
document.getElementById("submitButton").onclick = function(){
    //a = varsta
    a = document.getElementById("textVarsta").value;
    a = Number(a);
    //b = greutate
    b = document.getElementById("textGreutate").value;
    b = Number(b);
    //c = inaltime
    c = document.getElementById("textInaltime").value;
    c = Number(c);
    //formula calcul imc
    imc = Math.round(((b) / ((c / 100) ** 2)) * 100) / 100;

    console.log("a is "+a)

    //verific daca are varsta intre 6 si 15
        if(a >= 6 && a <= 15){
        if(document.getElementById('gender_Male').checked) {
            //Male radio button is checked
            switch(a){
                //daca are 6 ani
                case 6:
                    //verific greutatea
                    switch(true){
                        case (b < 14.68):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 14.68 && b < 17.9):         
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 17.9 && b < 21.12):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 21.12 && b < 24.34):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 24.34 && b < 27.56):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 27.56):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 105.43):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 105.43 && c < 111.04):   
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 111.04 && c < 116.65):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 116.65 && c < 122.26):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 122.26 && c < 127.87):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 127.87):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }  
                    //verific imc
                    switch(true){
                        case (imc < 13.9):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 13.9 && imc <= 16.7):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 16.7 && imc <= 17.9):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 17.9):
                        imcGreutate = "Obezitate"
                        break;
                    }
                break;
                //daca are 7 ani
                case 7:
                    //verific greutatea
                    switch(true){
                        case (b < 15.55):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 15.55 && b < 19.45):   
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 19.45 && b < 23.35):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 23.35 && b < 27.25):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 27.25 && b < 31.15):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 31.15):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 110.02):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 110.02 && c < 115.98):    
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 115.98 && c < 121.94):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 121.94 && c < 127.9):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 127.9 && c < 133.86):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 133.86):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 13.9):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 13.9 && imc <= 17):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 17 && imc <= 18.5):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 18.5):
                        imcGreutate = "Obezitate"
                        break;
                    }
                break;
                //daca are 8 ani
                case 8:
                    //verific greutatea
                    switch(true){
                        case (b < 16.89):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 16.89 && b < 21.72):   
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 21.72 && b < 26.55):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 26.55 && b < 31.38):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 31.38 && b < 36.21):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 36.21):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 115.56):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 115.56 && c < 121.65): 
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 121.65 && c < 127.74):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 127.74 && c < 133.83):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 133.83 && c < 139.92):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 139.92):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }
                    //verific imc
                    switch(true){
                        case (imc < 14):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 14 && imc <= 17.4):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 17.4 && imc <= 19.3):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 19.3):
                        imcGreutate = "Obezitate"
                        break;
                    }
                break;
                //daca are 9 ani
                case 9:
                    //verific greutatea
                    switch(true){
                        case (b < 18.61):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 18.61 && b < 24.11):   
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 24.11 && b < 29.61):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 29.61 && b < 35.11):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 35.11 && b < 40.61):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 40.61):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 120.55):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 120.55 && c < 126.95):   
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 126.95 && c < 133.35):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 133.35 && c < 139.75):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 139.75 && c < 146.15):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 146.15):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 14.2):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 14.2 && imc <= 18.1):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 18.1 && imc <= 20.3):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 20.3):
                        imcGreutate = "Obezitate"
                        break;
                    }
                break;
                //daca are 10 ani
                case 10:
                    //verific greutatea
                    switch(true){
                        case (b < 21):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 21 && b < 26.97):   
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 26.97 && b < 32.94):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 32.94 && b < 38.91):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 38.91 && b < 44.88):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 44.88):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    }
                    //verific inaltimea
                    switch(true){
                        case (c < 125):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 125 && c < 131.66):
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 131.66 && c < 138.32):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 138.32 && c < 144.98):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 144.98 && c < 151.64):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 151.64):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }  
                    //verific imc
                    switch(true){
                        case (imc < 14.4):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 14.4 && imc <= 18.8):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 18.8 && imc <= 21.2):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 21.2):
                        imcGreutate = "Obezitate"
                        break;
                    }
                break;
                //daca are 11 ani
                case 11:
                    //verific greutatea
                    switch(true){
                        case (b < 21.03):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 21.03 && b < 28.39):  
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 28.39 && b < 35.75):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 35.75 && b < 43.11):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 43.11 && b < 50.47):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 50.47):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 128.55):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 128.55 && c < 135.66):    
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 135.66 && c < 142.77):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 142.77 && c < 149.88):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 149.88 && c < 156.99):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 156.99):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }
                    //verific imc
                    switch(true){
                        case (imc < 14.8):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 14.8 && imc <= 19.6):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 19.6 && imc <= 22.2):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 22.2):
                        imcGreutate = "Obezitate"
                        break;
                    } 
                break;
                //daca are 12 ani
                case 12:
                    //verific greutatea
                    switch(true){
                        case (b < 22.46):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 22.46 && b < 30.96):
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 30.96 && b < 39.46):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 39.46 && b < 47.96):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 47.96 && b < 56.46):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 56.46):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 132.82):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 132.82 && c < 140.73):
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 140.73 && c < 148.64):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 148.64 && c < 156.55):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 156.55 && c < 164.46):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 164.46):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }   
                    //verific imc
                    switch(true){
                        case (imc < 15.3):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 15.3 && imc <= 20.3):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 20.3 && imc <= 23.2):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 23.2):
                        imcGreutate = "Obezitate"
                        break;
                    } 
                break;
                //daca are 13 ani
                case 13:
                    //verific greutatea
                    switch(true){
                        case (b < 25.64):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 25.64 && b < 35.18):      
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 35.18 && b < 44.72):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 44.72 && b < 54.26):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 54.26 && b < 63.8):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 63.8):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;  
                    } 
                     //verific inaltimea
                     switch(true){
                        case (c < 137.71):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 137.71 && c < 146.48):        
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 146.48 && c < 155.25):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 155.25 && c < 164.02):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 164.02 && c < 172.79):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 172.79):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }  
                    //verific imc
                    switch(true){
                        case (imc < 15.8):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 15.8 && imc <= 21.1):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 21.1 && imc <= 24.1):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 24.1):
                        imcGreutate = "Obezitate"
                        break;
                    } 
                break;
                //daca are 14 ani
                case 14:
                    //verific greutatea
                    switch(true){
                        case (b < 30.9):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 30.9 && b < 40.67):       
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 40.67 && b < 50.44):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 50.44 && b < 60.21):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 60.21 && b < 69.98):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 69.98):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 144.41):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 144.41 && c < 153.52): 
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 153.52 && c < 162.63 ):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 162.63  && c < 171.74):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 171.74 && c < 180.85):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 180.85):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 16.3):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 16.3 && imc <= 21.9):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 21.9 && imc <= 24.8):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 24.8):
                        imcGreutate = "Obezitate"
                        break;
                    } 
                break;
                //daca are 15 ani
                case 15:
                    //verific greutatea
                    switch(true){
                        case (b < 35.83):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 35.83 && b < 45.89):   
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 40.67 && b < 55.95):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 55.95 && b < 66.01):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 66.01 && b < 76.07):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 76.07):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 152.91):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 152.91 && c < 161.05):
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 161.05 && c < 169.19):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 169.19 && c < 177.33):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 177.33 && c < 185.47):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 185.47):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }  
                    //verific imc
                    switch(true){
                        case (imc < 16.8):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 16.8 && imc <= 22.6):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 22.6 && imc <= 25.6):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 25.6):
                        imcGreutate = "Obezitate"
                        break;
                    } 
                break;
            }
            
            console.log("male")
        }
        else if(document.getElementById('gender_Female').checked) {
            //Female radio button is checked
            console.log("female")
            switch(a){
                //daca are 6 ani
                case 6:
                    //verific greutatea
                    switch(true){
                        case (b < 13.7):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 13.7 && b < 17.04):
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 17.04 && b < 20.38):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 20.38 && b < 23.72):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 23.72 && b < 27.06):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 27.06):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    }   
                    //verific inaltimea
                    switch(true){
                        case (c < 104.36):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 104.36 && c < 110.1):   
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 110.1 && c < 115.84):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 115.84 && c < 121.58):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 121.58 && c < 127.32):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 127.32):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 13.7):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 13.7 && imc <= 16.7):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 16.7 && imc <= 18.3):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 25.6):
                        imcGreutate = "Obezitate"
                        break;
                    } 
                break;5
                break;
                //daca are 7 ani
                case 7:
                    //verific greutatea
                    switch(true){
                        case (b < 14.85):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 14.85 && b < 18.88):
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 18.88 && b < 22.91):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 22.91 && b < 26.94):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 26.94 && b < 30.97):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 30.97):
                            //Hiperponderal
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                                //verific inaltimea
                    switch(true){
                        case (c < 109.31):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 109.31 && c < 115.43): 
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 115.43 && c < 121.55):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 121.55 && c < 127.67):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 127.67 && c < 133.79):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 133.79):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 13.7):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 13.7 && imc <= 17.2):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 17.2 && imc <= 18.9):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 18.9):
                        imcGreutate = "Obezitate"
                        break;
                    }   
                break;
                //daca are 8 ani
                case 8:
                    //verific greutatea
                    switch(true){
                        case (b < 16.64):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 16.64 && b < 21.32):  
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 21.32 && b < 26):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 26 && b < 30.68):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 30.68 && b < 35.36):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 40.04):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 115.54):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 115.54 && c < 121.5):   
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 121.5 && c < 127.46):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 127.46 && c < 133.42):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 133.42 && c < 139.38):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 139.38):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }   
                    //verific imc
                    switch(true){
                        case (imc < 13.8):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 13.8 && imc <= 17.6):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 17.6 && imc <= 19.8):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 19.8):
                        imcGreutate = "Obezitate"
                        break;
                    }   
                break;
                //daca are 9 ani
                case 9:
                    //verific greutatea
                    switch(true){
                        case (b < 17.6):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 17.6 && b < 23.21):   
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 23.21 && b < 28.82):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 28.82 && b < 34.43):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 34.43 && b < 40.04):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 40.04):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 119.22):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 119.22 && c < 125.86):
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 125.86 && c < 132.5):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 132.5 && c < 139.14):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 139.14 && c < 145.78):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 145.78):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }  
                    //verific imc
                    switch(true){
                        case (imc < 13.9):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 13.9 && imc <= 18.4):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 18.4 && imc <= 20.9):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 20.9):
                        imcGreutate = "Obezitate"
                        break;
                    }      
                break;
                //daca are 10 ani
                case 10:
                    //verific greutatea
                    switch(true){
                        case (b < 19.74):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 19.74 && b < 26):
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 26 && b < 32.26):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 32.26 && b < 38.52):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 38.52 && b < 44.78):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 44.78):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 124.51):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 124.51 && c < 131.34):    
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 131.34 && c < 138.17):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 138.17 && c < 145):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 145 && c < 151.83):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 151.83):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }   
                    //verific imc
                    switch(true){
                        case (imc < 14.2):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 14.2 && imc <= 19.2):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 19.2 && imc <= 22):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 22):
                        imcGreutate = "Obezitate"
                        break;
                    }  
                break;
                //daca are 11 ani
                case 11:
                    //verific greutatea
                    switch(true){
                        case (b < 20.89):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 20.89 && b < 28.19):       
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 28.19 && b < 35.49):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 35.49 && b < 42.79):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 42.79 && b < 50.09):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 50.09):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 128.94):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 128.94 && c < 136.33):    
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 136.33 && c < 143.72):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 143.72 && c < 151.11):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 151.11 && c < 158.5):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 158.5):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 14.7):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 14.7 && imc <= 20.1):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 20.1 && imc <= 23):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 23):
                        imcGreutate = "Obezitate"
                        break;
                    }  
                break;
                //daca are 12 ani
                case 12:
                    //verific greutatea
                    switch(true){
                        case (b < 23.33):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 23.33 && b < 31.73):
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 31.73 && b < 40.13):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 40.13 && b < 48.53):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 48.53 && b < 56.93):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 56.93):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 135.09):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 135.09 && c < 142.8):      
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 142.8 && c < 150.51):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 150.51 && c < 158.22):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 158.22 && c < 165.93):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 165.93):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 15.2):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 15.2 && imc <= 21):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 21 && imc <= 24.1):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 24.1):
                        imcGreutate = "Obezitate"
                        break;
                    }  
                break;
                //daca are 13 ani
                case 13:
                    //verific greutatea
                    switch(true){
                        case (b < 28.44):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 28.44 && b < 36.95):      
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 36.95 && b < 45.46):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 45.46 && b < 53.97):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 53.97 && b < 62.48):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 62.48):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 141.44):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 141.44 && c < 148.78):
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 148.78 && c < 156.12):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 156.12 && c < 163.46):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 163.46 && c < 170.8):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 170.8):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    }          
                    //verific imc
                    switch(true){
                        case (imc < 15.7):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 15.7 && imc <= 21.7):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 21.7 && imc <= 25):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 25):
                        imcGreutate = "Obezitate"
                        break;
                    }             
                break;
                //daca are 14 ani
                case 14:
                    //verific greutatea
                    switch(true){
                        case (b < 33.55):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 33.55 && b < 41.39):
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 41.39 && b < 49.23):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >= 49.23 && b < 57.07):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 57.07 && b < 64.91):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 64.91):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 146.39):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 146.39 && c < 152.94):
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 152.94 && c < 159.49):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 159.49 && c < 166.04):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 166.04 && c < 172.59):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 172.59):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 16.2):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 16.2 && imc <= 22.4):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 22.4 && imc <= 26):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 26):
                        imcGreutate = "Obezitate"
                        break;
                    }             
                break;
                //daca are 15 ani
                case 15:
                    //verific greutatea
                    switch(true){
                        case (b < 36.35):
                            indiceGreutate = "Hipoponderal"
                            m1 = -3
                            armonieGreutate = 1
                        break;
                        case (b >= 36.35 && b < 44.25):   
                            indiceGreutate = "Hipoponderal"
                            m1 = -2
                            armonieGreutate = 2
                        break;
                        case (b >= 44.25 && b < 52.15):
                            indiceGreutate = "Normoponderal"
                            m1 = -1
                            armonieGreutate = 3
                        break;
                        case (b >=  52.15 && b < 60.05):
                            indiceGreutate = "Normoponderal"
                            m1 = 1
                            armonieGreutate = 4
                        break;
                        case (b >= 60.05 && b < 67.9):
                            indiceGreutate = "Hiperponderal"
                            m1 = 2
                            armonieGreutate = 5
                        break;
                        case (b >= 67.9):
                            indiceGreutate = "Hiperponderal"
                            m1 = 3
                            armonieGreutate = 6
                        break;
                    } 
                    //verific inaltimea
                    switch(true){
                        case (c < 149.71):
                            indiceInaltime = "Hipostatural"
                            m2 = -3
                            armonieInaltime = 1
                        break;
                        case (c >= 149.71 && c < 156):
                            indiceInaltime = "Hipostatural"
                            m2 = -2
                            armonieInaltime = 2
                        break;
                        case (c >= 156 && c < 162.29):
                            indiceInaltime = "Normostatural"
                            m2 = -1
                            armonieInaltime = 3
                        break;
                        case (c >= 162.29 && c < 168.58):
                            indiceInaltime = "Normostatural"
                            m2 = 1
                            armonieInaltime = 4
                        break;
                        case (c >= 168.58 && c < 174.87):
                            indiceInaltime = "Hiperstatural"
                            m2 = 2
                            armonieInaltime = 5
                        break;
                        case (c >= 174.87):
                            indiceInaltime = "Hiperstatural"
                            m2 = 3
                            armonieInaltime = 6
                        break;
                    } 
                    //verific imc
                    switch(true){
                        case (imc < 16.7):
                        imcGreutate = "Sub greutate"
                        break;
                        case (imc >= 16.7 && imc <= 23.1):
                        imcGreutate = "Greutate normala"
                        break;
                        case (imc > 23.1 && imc <= 26.8):
                        imcGreutate = "Peste greutate"
                        break;
                        case (imc > 26.8):
                        imcGreutate = "Obezitate"
                        break;
                    } 
                break;
            }
        }
        console.log("good")
    }
    else{
        console.log("bad")
        // indiceGreutate = "varsta gresita"
    }

    console.log("test "+indiceGreutate)

    
    if(armonieGreutate == armonieInaltime){
        armonie = "Armonic"
    }
    else{
        armonie = "Dizarmonic"
    }

    if(armonieGreutate > armonieInaltime){
        diferentaInaltimeGreutate = "Greutatea mai mare decât înălțimea"
    }
    else if(armonieGreutate < armonieInaltime){
        diferentaInaltimeGreutate = "Greutatea mai mică decât înălțimea"
    }
    else if(armonieGreutate == armonieInaltime){
        diferentaInaltimeGreutate = ""
    }   

    var checked_gender = document.querySelector('input[name = "gender"]:checked');

    

    


    if(checked_gender == null){  
        console.log('Nothing checked'); 
        //Alert, nothing was checked.
        document.getElementById("results").innerHTML = "Alegeți băiat sau fată";
    } 
    else{
        //Test if something was checked
        console.log(checked_gender.value); 
        //Alert the value of the checked.
        gender = document.querySelector('input[name="gender"]:checked').value;
        
        if(a == 0 || b == 0 || c == 0){
            document.getElementById("results").innerHTML = "Completați toate câmpurile"
            console.log("one is 0")
        }
        else{
            if(a < 6 || a > 15){
                document.getElementById("results").innerHTML = "Vârsta greșită"
                console.log("Varsta gresit")
            }    
            else{
                document.getElementById("results").innerHTML = 
                indiceGreutate + " m" + (m1<0?"":"+") + m1 + "<br>" + 
                indiceInaltime +" m" + (m2<0?"":"+") + m2 + "<br>" +
                armonie+ "<br>" + 
                diferentaInaltimeGreutate + "<br>" + "IMC = " + imc + " " + imcGreutate;
            }
        }
    }

    

    

console.log(a,b,c)
}

