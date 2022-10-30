import {WebDriver} from 'selenium-webdriver'

export const selectDropdown = async(element : Promise<WElementArray>,value:string)=> {
    for (const item of await element) {
        const elem = await (item).getAttribute('value')
        if(elem === value)
        {
            await (item).click()
            break
        }
    }
}