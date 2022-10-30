import * as reporter from 'cucumber-html-reporter'
import { Options } from 'cucumber-html-reporter'
import * as path from 'path'

const reportsDir = path.join(process.cwd(), '/target')
const targetJson = reportsDir + '/cucumber_report.json'

const cucumberReporterOptions: Options = {
    jsonFile: targetJson,
    launchReport: true,
    metadata: {
        'Browser': process.env.BROWSER,
        'Test Environment': process.env.NODE_ENV
    },
    output: reportsDir + '/cucumber_reporter.html',
    reportSuiteAsScenarios: true,
    screenshotsDirectory: reportsDir + '/screenshots/',
    storeScreenshots: true,
    theme: 'bootstrap',

}

const createHTMLReport = () => {
    try {
        reporter.generate(cucumberReporterOptions)
    } catch (err) {
        if (err) {
            throw new Error(`Failed to create cucumber html report.\n Error: ${err}`)
        }
    }
}

createHTMLReport()
