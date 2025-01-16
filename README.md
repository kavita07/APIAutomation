# APIAutomation

I have used SuperTest API for automation

Please follow below steps to execute given UI scenario

download and setup nodejs v22.13.0
install VScode
clone this repository
open terminal and run command-> npm install
run command -> npm run test
cucumber test should run and spec report should be visble into terminal

Exercise

On the following endpoint - api.coindesk.com/v1/bpi/currentprice.json, automate the following
1. Send the GET request
2. Verify the response contains
a. There are 3 BPIs
i. USD
ii. GBP
iii. EUR
b. The GBP ‘description’ equals ‘British Pound Sterling’.