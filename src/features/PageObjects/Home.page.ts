import  Page from './page'

class HomePage extends Page {

    private get companyLink ()  { return $('//a[text()=\'Company\']')}
    private get CareerLink ()  { return $('//a[text()=\'Careers\']')}

    async ClickOnCompanyLink() {
        await (await this.companyLink).click()
    }

    async ClickOnCareersLink() {
        await (await this.CareerLink).click()
    }

}
export default new HomePage()

