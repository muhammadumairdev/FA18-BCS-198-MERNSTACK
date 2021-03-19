$(function() {

    $("#ernm").hide();
    $("#fem").hide();
    $("#fpm").hide();
    $("#fcpm").hide();

    var error_Name = false;
    var error_email = false;
    var error_password = false;
    var error_retype_password = false;

    $("#fnm").focusout(function(){
       name();
    });
    
    $("#fe").focusout(function() {
       email();
    });
    $("#fp").focusout(function() {
       pass();
    });
    $("#fcp").focusout(function() {
       cnfPass();
    });

    function name() {
       var pattern = /^[a-zA-Z]*$/;
       var Name_length = $("#fnm").val().length;
       if (Name_length < 5) {
           $("#ernm").html("must be atleast 5 characters");
          $("#ernm").show();
          $("#fnm").css("border-bottom","2px solid #F90A0A");
          error_password = true;
       } else {
           $("#ernm").hide();
          $("#fnm").css("border-bottom","2px solid #34F458");
       }
    }

    

    function pass() {
       var password_length = $("#fp").val().length;
       if (password_length < 8) {
          $("#fpm").html("must be atleast 8 characters");
          $("#fpm").show();
          $("#fp").css("border-bottom","2px solid #F90A0A");
          error_password = true;
       } else {
          $("#fpm").hide();
          $("#fp").css("border-bottom","2px solid #34F458");
       }
    }

    function cnfPass() {
       var password = $("#fp").val();
       var retype_password = $("#fcp").val();
       if (password !== retype_password) {
          $("#fcpm").html("unmatched password");
          $("#fcpm").show();
          $("#fcp").css("border-bottom","2px solid #F90A0A");
          error_retype_password = true;
       } else {
          $("#fcpm").hide();
          $("#fcp").css("border-bottom","2px solid #34F458");
       }
    }

    function email() {
       var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       var email = $("#fe").val();
       if (pattern.test(email) && email !== '') {
          $("#fem").hide();
          $("#fe").css("border-bottom","2px solid #34F458");
       } else {
          $("#fem").html("invalid");
          $("#fem").show();
          $("#fe").css("border-bottom","2px solid #F90A0A");
          error_email = true;
       }
    }

    $("#registration_form").submit(function() {
       error_Name = false;
       error_email = false;
       error_password = false;
       error_retype_password = false;

       name();
       email();
       pass();
       cnfPass();

       if (error_name === false && error_email === false && error_password === false && error_retype_password === false) {
          alert("Registration Successfull");
          return true;
       } else {
          alert("invalid inputs detected");
          return false;
       }


    });
 });