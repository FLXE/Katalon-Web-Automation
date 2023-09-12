$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/DeleteProduct.feature");
formatter.feature({
  "name": "delete product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@deleteproduct"
    }
  ]
});
formatter.scenario({
  "name": "user success delete product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deleteproduct"
    },
    {
      "name": "@del001"
    }
  ]
});
formatter.step({
  "name": "user success logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteProduct.user_success_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicked the humburger icon",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteProduct.user_clicked_the_humburger_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selected the product",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteProduct.user_selected_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button delete",
  "keyword": "And "
});
formatter.match({
  "location": "DeleteProduct.user_click_button_delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success delete product",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteProduct.user_success_delete_product()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Offers.feature");
formatter.feature({
  "name": "Offers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@offers"
    }
  ]
});
formatter.scenario({
  "name": "Seller create product for offer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@offers"
    },
    {
      "name": "@OFR000"
    }
  ]
});
formatter.step({
  "name": "Seller already login and on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Offers.seller_already_login_and_on_the_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seller create the product",
  "keyword": "When "
});
formatter.match({
  "location": "Offers.seller_create_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product is created and ready to be offered",
  "keyword": "Then "
});
formatter.match({
  "location": "Offers.product_is_created_and_ready_to_be_offered()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buyer offer to buy product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@offers"
    },
    {
      "name": "@OFR001"
    }
  ]
});
formatter.step({
  "name": "Buyer sucessfully login and landed on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "Offers.buyer_sucessfully_login_and_landed_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User search product",
  "keyword": "When "
});
formatter.match({
  "location": "Offers.user_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select product",
  "keyword": "And "
});
formatter.match({
  "location": "Offers.user_select_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click tertarik button",
  "keyword": "And "
});
formatter.match({
  "location": "Offers.user_click_tertarik_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input harga tawar",
  "keyword": "And "
});
formatter.match({
  "location": "Offers.user_input_harga_tawar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "Offers.user_click_kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "offer submitted awaiting seller respond",
  "keyword": "Then "
});
formatter.match({
  "location": "Offers.offer_submitted_awaiting_seller_respond()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Seller accepting buyer offer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@offers"
    },
    {
      "name": "@OFR002"
    }
  ]
});
formatter.step({
  "name": "Buyer offer product",
  "keyword": "Given "
});
formatter.match({
  "location": "Offers.buyer_offer_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click notification icon",
  "keyword": "When "
});
formatter.match({
  "location": "Offers.user_click_notification_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select offer notification from buyer",
  "keyword": "And "
});
formatter.match({
  "location": "Offers.select_offer_notification_from_buyer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Terima button",
  "keyword": "And "
});
formatter.match({
  "location": "Offers.user_click_Terima_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Offer status become accepted",
  "keyword": "Then "
});
formatter.match({
  "location": "Offers.offer_status_become_accepted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Seller change offer status to finished",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@offers"
    },
    {
      "name": "@OFR004"
    }
  ]
});
formatter.step({
  "name": "Seller accept buyer offer",
  "keyword": "Given "
});
formatter.match({
  "location": "Offers.seller_accept_buyer_offer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click status button",
  "keyword": "When "
});
formatter.match({
  "location": "Offers.user_click_status_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select finished status",
  "keyword": "And "
});
formatter.match({
  "location": "Offers.user_select_finished_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click the kirim button",
  "keyword": "And "
});
formatter.match({
  "location": "Offers.user_click_the_kirim_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Offer status changed to sold",
  "keyword": "Then "
});
formatter.match({
  "location": "Offers.offer_status_changed_to_sold()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/Profile.feature");
formatter.feature({
  "name": "Profile",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Profile"
    }
  ]
});
formatter.scenario({
  "name": "Edit profil with valid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Profile"
    },
    {
      "name": "@PRF001"
    }
  ]
});
formatter.step({
  "name": "user succes login with valid credential",
  "keyword": "Given "
});
formatter.match({
  "location": "Profile.user_succes_login_with_valid_credential()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click pencil icon",
  "keyword": "When "
});
formatter.match({
  "location": "Profile.user_click_pencil_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click profile name",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_click_profile_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user go to profil page",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_go_to_profil_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input nama",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_input_nama()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input city",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_input_city()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input address",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_input_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input phone number",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.user_input_phone_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click button simpan",
  "keyword": "And "
});
formatter.match({
  "location": "Profile.click_button_simpan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user success edit profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Profile.user_success_edit_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/UpdateProduct.feature");
formatter.feature({
  "name": "update product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@updateproduct"
    }
  ]
});
formatter.scenario({
  "name": "seller success update product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@updateproduct"
    },
    {
      "name": "@prd004"
    }
  ]
});
formatter.step({
  "name": "user success login",
  "keyword": "Given "
});
formatter.match({
  "location": "updateproduct.user_success_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click humburger icon",
  "keyword": "When "
});
formatter.match({
  "location": "updateproduct.user_click_humburger_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select product",
  "keyword": "And "
});
formatter.match({
  "location": "updateproduct.user_select_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button edit",
  "keyword": "And "
});
formatter.match({
  "location": "updateproduct.user_click_button_edit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user change product name",
  "keyword": "And "
});
formatter.match({
  "location": "updateproduct.user_change_product_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user change product price",
  "keyword": "And "
});
formatter.match({
  "location": "updateproduct.user_change_product_price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user change product description",
  "keyword": "And "
});
formatter.match({
  "location": "updateproduct.user_change_product_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click button terbitkan",
  "keyword": "And "
});
formatter.match({
  "location": "updateproduct.user_click_button_terbitkan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "product is updated",
  "keyword": "Then "
});
formatter.match({
  "location": "updateproduct.product_is_updated()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/addProduct.feature");
formatter.feature({
  "name": "Add New Product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addProduct"
    }
  ]
});
formatter.scenario({
  "name": "User Add Product With Valid Data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addProduct"
    },
    {
      "name": "@addProduct1"
    }
  ]
});
formatter.step({
  "name": "User Login Satu",
  "keyword": "Given "
});
formatter.match({
  "location": "addProduct.user_login_satu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button Jual Satu",
  "keyword": "When "
});
formatter.match({
  "location": "addProduct.user_click_button_jual_satu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input Nama Produk Satu",
  "keyword": "And "
});
formatter.match({
  "location": "addProduct.user_input_nama_produk_satu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Input Harga Produk Satu",
  "keyword": "And "
});
formatter.match({
  "location": "addProduct.user_input_harga_produk_satu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Set Categories Satu",
  "keyword": "And "
});
formatter.match({
  "location": "addProduct.user_set_categories_satu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Set Deskripsi Satu",
  "keyword": "And "
});
formatter.match({
  "location": "addProduct.user_set_deskripsi_satu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Add Image Satu",
  "keyword": "And "
});
formatter.match({
  "location": "addProduct.user_add_image_satu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Klik Terbitkan Satu",
  "keyword": "And "
});
formatter.match({
  "location": "addProduct.user_klik_terbitkan_satu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product successfully published",
  "keyword": "Then "
});
formatter.match({
  "location": "addProduct.user_success_add_product1()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/listProducts.feature");
formatter.feature({
  "name": "List All Products",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@listAllProducts"
    }
  ]
});
formatter.scenario({
  "name": "User View List All Products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@listAllProducts"
    },
    {
      "name": "@listAllProduct1"
    }
  ]
});
formatter.step({
  "name": "User Already Login",
  "keyword": "Given "
});
formatter.match({
  "location": "listProducts.user_Already_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click hamburger icon",
  "keyword": "When "
});
formatter.match({
  "location": "listProducts.user_Click_hamburger_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User find products",
  "keyword": "Then "
});
formatter.match({
  "location": "listProducts.user_find_products()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/login.feature");
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
});