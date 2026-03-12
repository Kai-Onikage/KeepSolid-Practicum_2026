function showInfo(car){
    alert("More information about " + car + " will be available soon.");
    }
    
    function filterCars(){
    
    let filter = document.getElementById("brandFilter").value;
    let cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
    
    if(filter === "all"){
    card.style.display = "block";
    }
    
    else if(card.dataset.brand === filter){
    card.style.display = "block";
    }
    
    else{
    card.style.display = "none";
    }
    
    });
    
    }
    
    function validateForm(){
    
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    
    if(name==="" || email===""){
    alert("Please fill all required fields");
    return false;
    }
    
    alert("Message sent!");
    return true;
    
    }

    function brandInfo(brand){

        let text="";
        
        if(brand==="Subaru"){
        text="Subaru is known for its symmetrical AWD systems and rally heritage.";
        }
        
        if(brand==="BMW"){
        text="BMW produces luxury vehicles focused on driving performance.";
        }
        
        if(brand==="Audi"){
        text="Audi combines luxury, technology and quattro AWD systems.";
        }
        
        if(brand==="Toyota"){
        text="Toyota is one of the most reliable and largest car manufacturers in the world.";
        }
        
        if(brand==="Mazda"){
        text="Mazda focuses on driving pleasure and SkyActiv technology.";
        }
        
        alert(brand + ": " + text);
        
        }