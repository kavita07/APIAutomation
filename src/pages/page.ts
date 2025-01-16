import { browser } from '@wdio/globals'

export default class Page {
    
    public open (path: string) {
       browser.maximizeWindow();
       return browser.url(`${path}`)
    }
}
