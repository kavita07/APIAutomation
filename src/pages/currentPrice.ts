import { $ } from '@wdio/globals'
import Page from './page';

class CurrentPrice extends Page{
    public get response() {
        return $('body pre');
    }

    public get methodDropdown() {
        return $('#httpmethod');
    }

    public get endPointTextBox() {
        return $('#urlvalue');
    }

    public get ajaxRequestBtn() {
        return $('#submitajax');
    }
    
    public get statusCode() {
        return $(`#statuspre`);
    }

    public get uiOutput() {
        return $(`#outputpre`);
    }

    async enterAPIurl(apiendpoint: string){
        await browser.pause(10000)
        await this.endPointTextBox.setValue(apiendpoint);
        await this.ajaxRequestBtn.click();
    }

    async sendRequest(){
        await this.ajaxRequestBtn.click();
    }

    async getStatusText(): Promise<string> {
        await this.statusCode.waitForDisplayed();
        return await this.statusCode.getText();
    }

    async getUIOutputText(): Promise<string> {
        return await this.uiOutput.getText();
    }

    async getOutputText(): Promise<string> {
        await this.response.waitForDisplayed();
        return await this.response.getText();
    }

    public open (path: string) {
        return super.open(path);
    }

} export default new CurrentPrice();
