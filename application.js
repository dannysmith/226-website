$().ready(function() {
  
  //Disables the Apply button.
  $('#contact .submit').attr("disabled", "disabled");

    //Validate name has a space in it.
    $('#contact #name').keyup(function() {
        var nameVal = $(this).val();
        var nameRegexp = /.\s./;
        if (nameRegexp.test(nameVal)) {
          $('#val_name img').attr("src", "images/green.png");
        } else {
          $('#val_name img').attr("src", "images/red.png");
        }
      });

    //Validate that email matches regexp
    $('#contact #email').keyup(function() {
      var emailVal = $(this).val();
      var emailRegexp = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
      if (emailRegexp.test(emailVal)) {
        $('#val_email img').attr("src", "images/green.png");
      } else {
        $('#val_email img').attr("src", "images/red.png");
      }
    });

    //Validate the dob matches regexp
    $('#dob').keyup(function() {
      var dobVal = $(this).val();
      var dobRegexp = /^(\d{1,2})[\s\.\/-](\d{1,2})[\s\.\/-](\d{4})$/;
      if (dobRegexp.test(dobVal)) {
        $('#val_dob img').attr("src", "images/green.png");
      } else {
        $('#val_dob img').attr("src", "images/red.png");
      }
    });


    //Checks every quarter of a second to see if it should enable or disable the Applt button.
    setInterval(function(event){
      if ($('#val_name img').attr("src") == "images/green.png" && $('#val_email img').attr("src") == "images/green.png" && $('#val_dob img').attr("src") == "images/green.png") {
        $('#contact .submit').attr("disabled", false);
      } else {
        $('#contact .submit').attr("disabled", "disabled");
      }
    }, 250);

  });