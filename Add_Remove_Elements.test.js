import Internet from "../pageobjects/Internet.page.js";

describe('Test https://the-internet.herokuapp.com/', ()=>{

it('test add/remove element', async ()=>{

   await browser.url('/add_remove_elements/')

   await Internet.clickAddElement()
   await expect(Internet.deleteButton).toBeDisplayed()
   await expect(Internet.deleteButton).toHaveText('Delete')
})
})