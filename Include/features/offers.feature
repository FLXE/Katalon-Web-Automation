@offers
Feature: Offers

  @OFR001
  Scenario: Buyer offer to buy product
    Given Buyer sucessfully login and landed on homepage
    When User search product
    And User select product
		And User click tertarik button
		And User input harga tawar
		And User click kirim button
		Then offer submitted awaiting seller respond
		
	@OFR002
	Scenario: Seller accepting buyer offer
		Given Buyer offer product
		When User click notification icon
		And Select offer notification from buyer
		And User click Terima button
		Then Offer status become accepted
		
	@OFR003
	Scenario: Seller rejecting buyer offer
		Given Buyer offer product
		When User click notification icon
		And Select offer notification from buyer
		And User click Tolak button
		Then Offer status become accepted
		
	@OFR004
	Scenario: Seller change offer status to finished
		Given Seller accept buyer offer
		When User click status button
		And User select finished status
		And User click kirim button
		Then Offer status changed to sold
		
	@OFR005
	Scenario: Seller change offer status to cancelled
		Given Seller accept buyer offer
		When User click status button
		And User select cancel transaction status
		And User click kirim button
		Then Offer status changed to cancelled