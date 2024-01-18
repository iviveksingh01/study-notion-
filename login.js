
var credentials = new Map([["Aniket", "Aa#2300"]]);
// ---------------------------------------------------------------------------------
$("#c").click(function(){
    if($(".login").css("display")=="block"){
        $(".login").css("display","none");
        $(".signup").css("display","block");
    }
})

// -------------------------------login------------------------------------
let privledge = false;
$("#log").click(function () {
  $(".alert").text(" ");
  $(".alert1").css("animation", "none");

  if (credentials.has($("#username").val())) {
    if (credentials.get($("#username").val())==$("#password").val()) {
      $(".alert1").css("border-left", "solid 9px green");
      $(".disclaimer").text("Login Successful");
      privledge = true;
      setTimeout(function () {
          window.location.replace("/main.html");
      }, 2000);
    } else {
      $(".alert").text("<br> Password Incorrect");
    }
  } else {
    $(".alert").text(" Incorrect Email Id");
  }
  setTimeout(function () {
    $(".alert1").css("animation", "appear 5s");
  }, 200);
});


// --------------------------------signup-------------------------------------------
let flag = 0;
$(".submitbtn").click(function () {
  $(".alert").text(" ");
  $(".alert1").css("animation", "none");

  var fn = [$("#fn").val(), $("#ln").val(), $("#mn").val(), $("#pass").val()];
  // ----------------------------checking empty field---------------------------
  var isValid = true;
  $(".form-field").each(function () {
    if ($(this).val() === "") {
      isValid = false;
    }
  });

  if (isValid == false) {
    $(".alert").append("<br> Details are incomplete");
    flag = 1;
  }
  // ---------------------------various input parameters-------------------------------
  if (numck(fn[0]) || numck(fn[1])) {
    console.log("check1");
    $(".alert").append("<br> No numerical character should be their in Name");
    flag = 1;
  }
  if (SpecialChar(fn[0]) || SpecialChar(fn[1])) {
    $(".alert").append("<br> No special character in Name");
    flag = 1;
  }
  if (lcharchk(fn[2]) || ucharchk(fn[2]) || SpecialChar(fn[2])) {
    $(".alert").append("<br> Please enter digit in mobile no.");
    flag = 1;
  }
  if (!lcharchk(fn[3])) {
    $(".alert").append("<br> Please enter lowercase letters in password");
    flag = 1;
  }
  if (!ucharchk(fn[3])) {
    $(".alert").append("<br> Please enter uppercase letters in password");
    flag = 1;
  }
  if (!SpecialChar(fn[3])) {
    $(".alert").append(
      "<br> Password should contain atleast one special character"
    );
    flag = 1;
  }
  if (!numck(fn[3])) {
    $(".alert").append("<br> Numerical character is missing in password");
    flag = 1;
  }
  // ---------------------------------------------------------------------------

  if (flag == 0) {
    $(".alert1").css("border-left", "solid 9px green");
    $(".disclaimer").text("Account Created");
    credentials.set($("#ei").val(), $("#pass").val());
    setTimeout(function () {
        $(".login").css("display","block");
        $(".signup").css("display","none");
    }, 2000);
  }
  setTimeout(function () {
    $(".alert1").css("animation", "appear 5s");
  }, 200);

  flag = 0;
});
// call of regex function
function lcharchk(str) {
  return /[a-z]/.test(str);
}
function ucharchk(str) {
  return /[A-Z]/.test(str);
}
function numck(str) {
  return /[0-9]/.test(str);
}
function SpecialChar(str) {
  return /[!@#$%^&*()_+\-= \[\]{};':"\\|,.<>\/?]+/.test(str);
}


