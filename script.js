function addNewWEField(){
    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField(){

    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqfield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewCFField(){ 

    let newNode= document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('cffield');
    newNode.classList.add('mt-2');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here")

    let cfOb = document.getElementById("cf");
    let cfAddButtonOb = document.getElementById("cfAddButton");

    cfOb.insertBefore(newNode, cfAddButtonOb);
}

//generating cv function 
function generateCV(){
 console.log("generating cv")
    let namefield= document.getElementById('namefield').value;
 
    let nameT1= document.getElementById('nameT1');
    nameT1.innerHTML= namefield
    // it change the name  form to template name with the help of dom manimpulation.
    document.getElementById('nameT2').innerHTML = namefield;

    //contacts
    document.getElementById("contactT1").innerHTML= document.getElementById("contactfield").value;
    document.getElementById("addressT").innerHTML= document.getElementById("addressfield").value;
    document.getElementById("githubT").innerHTML= document.getElementById("githubfield").value;
    document.getElementById("LinkedT").innerHTML= document.getElementById("linkedinfield").value;

    //objective
    document.getElementById("objectiveT").innerHTML= document.getElementById("objectivefield").value;

    //workexperience 

    let wes=document.getElementsByClassName('wefield');//because wefiled is class not id that is why wea are using get element by class not id
    let str = " ";
    for (let e of wes) {
        str= str + `<li> ${e.value} </li>`;   
    }
    document.getElementById('weT').innerHTML=str;



    //aqs
    let aqs = document.getElementsByClassName('aqfield');//because wefiled is class not id that is why wea are using get element by class not id
    let str1 = " ";
    for (let a of aqs) {
        str1= str1 + `<li> ${a.value} </li>`;   
    }
    document.getElementById('aqT').innerHTML=str1;



    let certis = document.getElementsByClassName('cffield');//because wefiled is class not id that is why wea are using get element by class not id
    let str2 = " ";

    for (let e of certis) {
        str2=  str2 + `<li> ${e.value} </li>`;   
    }
    document.getElementById('certiT').innerHTML=str2;
     
    //code for selecting photos
    let file=document.getElementById('imgfield').files[0]
    console.log(file);

    let reader= new FileReader();
    reader.readAsDataURL(file);

    console.log(reader.result);

    // set the image to template
    reader.onloadend=function(){
        document.getElementById('imgtemplate').src=reader.result;

    };


    //print button
    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';

}

//print cv()
function printCV(){
    window.print();
}
