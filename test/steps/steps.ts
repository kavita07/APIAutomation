import { Given, When, Then } from '@wdio/cucumber-framework';
import supertest from 'supertest';
import CurrentPricePgae from '../../src/pages/currentPrice';
import {BASE_URL} from '../../src/config/APIConfig'

const request = supertest(BASE_URL)
let api_response : any;
let api_statusCode: any;
let ui_statuscode: any;
let ui_responseBody: any;

Given(/^I am on the (.+)$/, async (pageurl) => {
    await CurrentPricePgae.open(pageurl)
});

When(/^I perform (.+) search$/, async (endpint) => {
    await CurrentPricePgae.enterAPIurl(BASE_URL+endpint);
    await CurrentPricePgae.sendRequest();
    ui_statuscode = await CurrentPricePgae.getStatusText()
    console.log("STATUS FROM UI: ", ui_statuscode)
    ui_responseBody = JSON.parse(await CurrentPricePgae.getUIOutputText());
    console.log("RESPONSE FROM UI: ", ui_responseBody)
});

When(/^I make Get (.+) api call$/, async (endpint) => {
  const response = await request.get(endpint);
  console.log("API response call: ", response.body);
  api_response = response.body;
  api_statusCode = response.statusCode;
});

Then(/^I validate the response contents$/, async () => {
    expect(api_response.bpi.USD.code).toEqual("USD");
    expect(api_response.bpi.GBP.code).toEqual("GBP");
    expect(api_response.bpi.EUR.code).toEqual("EUR");
});

Then(/^I validate the response GBP having description (.+)$/, async (desc) => {
    expect(api_response.bpi.GBP.description).toEqual(desc);
});

Then(/^I validate the UI response versus API response$/, async () => {
    expect(ui_statuscode).toContain("200");
    expect(ui_responseBody).toEqual(api_response);
});
