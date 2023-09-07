package stepDefinition

import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase

import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When




public class listProducts {
	@Given("User Already Login")
	public void user_Already_Login() {
		WebUI.callTestCase(findTestCase('Product/Add Product/Step Definition/User Login'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("User Click hamburger icon")
	public void user_Click_hamburger_icon() {
		WebUI.callTestCase(findTestCase('Product/List Product/Step Definition/User Click Hamburger Icon'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("User find products")
	public void user_find_products() {
		WebUI.callTestCase(findTestCase('Product/List Product/Step Definition/User Find Products'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}
