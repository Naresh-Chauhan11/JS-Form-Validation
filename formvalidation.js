   
   
   
   var validForm = false;

        function validate() {

            var f_name = document.getElementById("fname").value;
            var l_name = document.getElementById("lname").value;
            var contact = document.getElementById("contact").value;
            var email = document.getElementById("email").value;
            var date = document.getElementById('dates').value;
            var state = document.getElementById("states").value;
            var image = document.getElementById("file").value;
            var gender;


            var invalidFName = inavlidLastName = invalidContact = invalidDate = invalidEmail =
                invalidGender = invalidState = invalidImage = "";

            if (f_name === "" || l_name === "" || contact === "" || date === "" || email === "" ||state ==="" || image === "" || !validForm) {
                if (f_name == "") {
                    invalidFName = "First Name is required.";
                }
                if (l_name == "") {
                    inavlidLastName = "Last Name is required.";
                }
                if (contact == "") {
                    invalidContact = "Contact number is required.";
                } else {
                    if ((contact.length < 10 || contact.length > 10)) {
                        invalidContact = "Contact number is invalid.";
                    }
                }
                if (date === "") {
                    invalidDate = "Date is required.";
                }
                if (email == "") {
                    invalidEmail = "Email is required.";
                }
                if (email !== "" && !validForm) {
                    invalidEmail = "Email is not valid";
                }
 
               if (document.getElementById("male").checked) {
                gender = document.getElementById("male").value;
               } else if (document.getElementById("female").checked) {
                   gender = document.getElementById("female").value; }
                else {
                   invalidGender = "gender is required"; }


                if (state !== ""  ) {
                    invalidState = "State is required";
                }

            var city = document.getElementById("states");

                 var selectedText = city.options[city.selectedIndex].value;
            


                if (image == "") {
                    invalidImage = "image is required";
                }



                






                if (invalidFName !== "" || inavlidLastName !== "" || invalidContact !== "" || invalidDate !== ""
                    || invalidEmail !== "" || invalidGender !== ""  || invalidState !== ""|| invalidImage !== "") {
                 alert(invalidFName + "   |   " + inavlidLastName + "  |   " + invalidContact + "   |   " +

    invalidDate + "   |  " + invalidEmail + "  |  " + invalidGender + "   |  " + invalidState + " |  " + invalidImage);
                }
            }

            else {
                validForm = true;
                if (document.getElementById("male").checked) {
                    gender = document.getElementById("male").value;
                } else if (document.getElementById("female").checked) {
                    gender = document.getElementById("female").value;
                }
                else {
                    invalidGender = "gender is required";
                }

                if (validForm) {
                    alert("Form is submitted");
                    var display = document.getElementById("display").innerHTML = "Firstname- " + " " + f_name + " ,  " +
                        "Lastname -" + " " + l_name + "  , " + "Date- " + " " + date + " , " + "Email -" + "" +
                        email + " , " + "Gender-" + " " + gender + "  , " + "State -" + "" + state;
                    var output = document.getElementById("output").innerHTML = image;
                }
            }

        }



        function restrictAlphabets(e) {
            var x = e.which || e.keycode;
            if ((x >= 48 && x <= 57))
                return true;
            else
                return false;
        }

        function validateEmail(emailField) {

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (reg.test(emailField.value) == false) {
                alert('invalid email address');
                validForm = false;

            } else {
                validForm = true;
            }
        }

        function loadFile(event) {
            var image = document.getElementById('output');
            image.src = URL.createObjectURL(event.target.files[0]);
        }