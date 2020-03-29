const { ChartsManager } = require('../utils/chartsUtils/index.js')
const ChartsApi = new ChartsManager()

exports.condition = ({ ArgsManager, Send, i18n }) => {
  if (!ArgsManager.Argument[0]) {
    Send('Global_errorMissingArgument')
    return false
  }

  if (!ChartsApi.chartsFromVersion(ArgsManager.Argument.join(' ')) || ChartsApi.chartsFromVersion(ArgsManager.Argument.join(' ')).length <= 0) {
    Send('Chartdealer_errorNoFoundWithThatName', false, { searchType: i18n.__('Chartdealer_version') })
    return false
  }

  return true
}

exports.run = async ({ ArgsManager, Send, FastEmbed, i18n, message }) => {
  require('./index.js').chartdealer.run({ message, ArgsManager, FastEmbed, Send, i18n }, 'supports')
}

exports.helpEmbed = ({ message, helpEmbed, i18n }) => {
  const Options = {
    argumentsLength: 1,
    argumentsNeeded: true,
    argumentsFormat: [i18n.__('Help_versionNumber')],
    imageExample: 'https://cdn.discordapp.com/attachments/688182781263609868/693825876822982786/unknown.png'
  }

  return helpEmbed(message, i18n, Options)
}
