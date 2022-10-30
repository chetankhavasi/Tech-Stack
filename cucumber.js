if (!process.env.NODE_ENV) {
    if(process.env.environment){
        process.env.NODE_ENV = process.env.environment.toLowerCase()
    } else {
        throw new Error('Define env var "NODE_ENV" or "environment"')
    }
} else {
    process.env.NODE_ENV = process.env.NODE_ENV.toLowerCase()
}

var common = [
    '--require ./dist/cucumber.js',
    '--require ./dist/src/features/hooks/*.ts',
    '--require ./dist/src/features/steps/**/*.ts',
].join(' ')

module.exports = {
    default: common,
}

// require('module-alias/register')
