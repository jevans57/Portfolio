function rps1() {
    const human_choice = document.getElementById("rps").value;
    const comp_options = ["Rock", "Paper", "Scissors", "Spock"];
    const comp_index = Math.floor(Math.random() * 4)
    const comp_choice = comp_options[comp_index];
    
    document.getElementById("humanChoiceText").innerHTML = "<b>You chose: " + human_choice + "</b>";
    document.getElementById("computerChoiceText").innerHTML = "<b>Computer chose: " + comp_choice + "</b>";

    
    if (comp_choice === human_choice) 
        { alert("Tie");
            document.body.style.backgroundColor= "blue";
         } 
    else if ( (human_choice === "Rock" && comp_choice === "Scissors") 
        || (human_choice === "Paper" && comp_choice === "Rock") 
        || (human_choice === "Scissors" && comp_choice === "Paper") ) 
        { alert("You win");
            document.body.style.backgroundColor= "green"; 
         } 
    else if ( (comp_choice === "Rock" && human_choice === "Scissors") 
        || (comp_choice === "Paper" && human_choice === "Rock") 
        || (comp_choice === "Scissors" && human_choice === "Paper") 
        || (comp_choice === "Spock") ) 
        { alert("You lose"); 
            document.body.style.backgroundColor= "red";
        } 
    return false
}

function validate(){
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var inputText = document.getElementById('textbox').value;
    
    if (validation.test(inputText)) {
        alert('Text contains special characters');
        return false;
    } else {
        document.getElementById('myForm').action = "assignment1.4.html";
        return true;
    }
} 