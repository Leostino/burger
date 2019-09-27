  
$("#update-form").on("submit", function() {
console.log('button clicked')
  let putId = $(this).data("id");
  let putDevoured = $(this).data("devour");

  if(putDevoured === false) {
        
    putDevoured = true; 
     
  }

      
  let updateBurger = {
       
    id: putId,
      
    devoured: putDevoured
    
  };

  
  $.ajax("/"+updateBurger.id, {
      
    type: "PUT",
      
    data: updateBurger
    
  }).then(function() {
        
    console.log("changed devour to", putDevoured);
        
    // Reload the page to get the updated list
        
    location.reload();
      
      
  });
            
    
 
    
});