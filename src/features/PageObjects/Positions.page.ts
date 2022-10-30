import  Page from './page'

class PositionsPage extends Page {locselect

    private get DDlocation ()  { return $('locselect')}
    private get DDDepartment ()  { return $('//select[@class=\'job-select-depart form-select ns\']')}
    private get LinkReadMore ()  { return $('//a[text()=\'Read More\']')}
    private get DublinLocation ()  { return $('//div[@class=\'location\']')}

    async selectDropdown (element : ElementArray,value:string) {
        for (const item of element) {
            const elem = await (item).getAttribute('value')
            if(elem === value)
            {
                await (item).click()
                break
            }
        }
    }

    async selectLocation(location : string){
        await this.selectDropdown(await this.DDlocation, location)
    }

    async selectDepartment(department : string){
        await this.selectDropdown(await this.DDDepartment, department)
    }

    async ClickReadMoreLink() {
        await (await this.LinkReadMore).click()
    }

    getText(){
        return  this.DublinLocation
    }

}
export default new PositionsPage()

