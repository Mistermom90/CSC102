function validate()

{
    // using my love for cars to validate my forms
    
    var make = document.getElementById("makeString").value;
    var model = document.getElementById("modelString").value;
    var year = document.getElementById("yearString").value;

    if (make.length >=4 || model.length >=6 || year.length >=4)
    {
        document.getElementById("inputStatus").innerHTML = "Vehicle correct";
    }
    else 
    {
        document.getElementById("inputStatus").innerHTML = "Vehicle incorrect";
    }     
    // tried my if-else,but I cant get it to so the correct line.  I'd appreciate help on where I am making my errors.

}