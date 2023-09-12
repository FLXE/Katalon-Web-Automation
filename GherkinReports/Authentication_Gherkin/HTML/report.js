$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenario({
  "name": "Login with registered credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN001"
    }
  ]
});
formatter.step({
  "name": "user already on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_already_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button masuk in homepage",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_click_button_masuk_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input email",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button masuk",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_click_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user succesful login and directed to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_succesful_login_and_directed_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with unregistered credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN002"
    }
  ]
});
formatter.step({
  "name": "user already on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_already_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button masuk in homepage",
  "keyword": "When "
});
formatter.match({
  "location": "login.user_click_button_masuk_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input unregistered e-mail",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_unregistered_e_mail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input password",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_input_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button masuk",
  "keyword": "And "
});
formatter.match({
  "location": "login.user_click_button_masuk()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can not login and warning pop up data not registered display",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_can_not_login_and_warning_pop_up_data_not_registered_display()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Logout"
    }
  ]
});
formatter.scenario({
  "name": "user succes logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Logout"
    },
    {
      "name": "@LGT001"
    }
  ]
});
formatter.step({
  "name": "user already logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "logout.user_already_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click profile btn",
  "keyword": "When "
});
formatter.match({
  "location": "logout.user_click_profile_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click keluar btn",
  "keyword": "And "
});
formatter.match({
  "location": "logout.user_click_keluar_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully logout account",
  "keyword": "Then "
});
formatter.match({
  "location": "logout.user_successfully_logout_account()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/register.feature");
formatter.feature({
  "name": "Register",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.scenario({
  "name": "Sign up with correct data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@RGSTR001"
    }
  ]
});
formatter.step({
  "name": "user already on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "login.user_already_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button masuk in HomePage",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_click_button_masuk_in_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click text daftar",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_click_text_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input name",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_input_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input Gmail",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_input_Gmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input password",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_input_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click daftar",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_click_daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user succesful signup and directed to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_succesful_signup_and_directed_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sign Up with email already taken",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@RGSTR002"
    }
  ]
});
formatter.step({
  "name": "user already on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "register.user_already_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button masuk in home page",
  "keyword": "When "
});
formatter.match({
  "location": "register.user_click_button_masuk_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click text Daftar",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_click_text_Daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input Name",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_input_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input Email",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_input_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input Password",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_input_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Daftar",
  "keyword": "And "
});
formatter.match({
  "location": "register.user_click_Daftar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can not sign up account and pop up warning text email already taken",
  "keyword": "Then "
});
formatter.match({
  "location": "register.user_can_not_sign_up_account_and_pop_up_warning_text_email_already_taken()"
});
formatter.result({
  "status": "passed"
});
});