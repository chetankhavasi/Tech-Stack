import  Page from './page'

class CareerPage extends Page {// a[text()='View open positions']

    private get CareerHeader ()  { return $('//h1')}
    private get LinkOpenPositions ()  { return $('//a[text()=\'View open positions\']')}

    async ClickOnOpenPositionsLink() {
        await (await this.LinkOpenPositions).click()
    }

    getHeader(){
        return  this.CareerHeader
    }
}
export default new CareerPage()

