var countryIndia = document.getElementById("indiaCountry");
var countryAustralia = document.getElementById("australiaCountry");
var countryNewzealand = document.getElementById("newzealandCountry");
var countryEngland = document.getElementById("englandCountry");


document.getElementById("myCountryName").addEventListener("click",function(){
    let countryName = document.querySelector("#myCountryName").value;
    

    if(countryName == "India"){
        countryIndia.style.display = "block";
        countryEngland.style.display = "none";
        countryNewzealand.style.display = "none";
        countryEngland.style.display = "none";
    }
    else if(countryName == "Australia"){
        countryAustralia.style.display = "block";
        countryIndia.style.display = "none";
        countryEngland.style.display = "none";
        countryNewzealand.style.display = "none";
    }
    else if(countryName == "NewZealand"){
        countryNewzealand.style.display = "block";
        countryIndia.style.display = "none";
        countryAustralia.style.display = "none";
        countryEngland.style.display = "none";
    }
    else if(countryName == "England"){
        
        countryEngland.style.display = "block";
        countryIndia.style.display = "none";
        countryNewzealand.style.display = "none";
        countryAustralia.style.display = "none";

     }
    
   
})

  