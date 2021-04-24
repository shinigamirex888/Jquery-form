$("body").height(window.innerHeight-10);
var items = $("#items");

$("form button").click(function(e) {
    
    let roll = $("#roll");
    let name = $("#name");
    let marks = $("#marks");
    
    let rollVal = roll.val();
    let nameVal = name.val();
    let marksVal = marks.val();
    
    e.preventDefault();
    
    if(rollVal === "" || nameVal === "" || marksVal === "") {
        
        alert("Please fill all the fields");
    
    } else {
        
        let item = '<div class="items">Roll no - <span class="highlight">' + rollVal + '</span> , Name -<span class="highlight">' + nameVal + '</span> Marks <span class="highlight">' + marksVal + '</span></div>';


        items.append(item);
        
        roll.val("");
        name.val("");
        marks.val("");
    }
    
});
