

$(function() {

    function validate() {
        let isValid = true;
        if ($("#userBurger").val() === "") {
            isValid = false;
        }
        return isValid;

    }

    
    
    $("#burgerForm").on("submit", function(event) {
        event.preventDefault();
        if(validate()) {

            let userBurger = $("#userBurger").val().toLowerCase();

            console.log(userBurger);

            $.ajax("/", {
               
                type: "POST",
            
                data: {burger: userBurger}
        
            }).then(function() {
              
                console.log("added "+ userBurger +" to database");
              
                // Reload the page to get the updated list
              
                location.reload();
            
            });

        }

    })


    $(".devour").on("click", function(event) {
        
        let burgerName = $(this).data("name");
        let burgerState = $(this).data("devour");
    
        let burgerStateObj = {
          devoured: burgerState
        };
    
        // Send the PUT request.
        $.ajax("/", {
          type: "PUT",
          data: burgerStateObj
        }).then(
          function() {
            console.log("changed burger status to", burgerName);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      
    });


})