
import {By, until, WebDriver} from 'selenium-webdriver'
import {Given, When, Then } from '@cucumber/cucumber'
import HomePage from '../PageObjects/Home.page'
import CareerPage from '../PageObjects/Careers.page'
import { expect } from 'chai'
import positionsPage from '../PageObjects/Positions.page'
import reporter from 'cucumber-html-reporter'


Given(/^When i am on ESW homepage$/, async () => {
    await browser.url('https://esw.com/')
    await browser.maximize()
})

When(/^Click on company link$/, async () => {
    await  HomePage.ClickOnCompanyLink()
})

When(/^Click on Careers link$/, async () => {
    await HomePage.ClickOnCareersLink()
})

Then(/^Verify the careers page$/, async () => {
    const title = await browser.getTitle()
    await expect(await title.equals('https://esw.com/careers/'))
})

When(/^Click on open position link$/, async () => {
    await CareerPage.ClickOnOpenPositionsLink()
})

When(/^Select location (.+)$/, async location => {
    await positionsPage.selectLocation(location)
})

When(/^Select department (.+)$/, async department => {
    await positionsPage.selectDepartment(department)
})

Then(/^Verify that first position is of Dublin location$/,async () => {
    await positionsPage.ClickReadMoreLink()
    await expect(await positionsPage.getText()).toHaveText('Co. Dublin')
})


