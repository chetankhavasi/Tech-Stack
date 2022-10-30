/* tslint:disable */
import { After, Before, ITestCaseHookParameter, setDefaultTimeout } from '@cucumber/cucumber'
import { AppContext } from '../../context/app-context'

setDefaultTimeout(30 * 60 * 1000)


Before({ tags: '@ui' }, async function (scenario: ITestCaseHookParameter) {
    const testName = scenario.pickle.name
    console.info(`----------------- Scenario: ${testName}  -----------------`)
    const browserEnv = process.env.BROWSER_ENV ? process.env.BROWSER_ENV.toLowerCase() : null
    this.context = new AppContext()
})

After({ tags: '@ui' }, async function (scenario: ITestCaseHookParameter) {
    console.info(`--------- Scenario: ${scenario.pickle.name} has status: ${scenario.result.status}`)
})
