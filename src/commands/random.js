const { ChartsManager } = require('../utils/chartsUtils/index.js')
const ChartsApi = new ChartsManager()

exports.run = async ({ ArgsManager, Send, FastEmbed, i18n, message }) => {
  if (!ArgsManager.Argument) {
    ArgsManager.Argument = []
  }
  if (!ArgsManager.Flag) {
    ArgsManager.Flag = []
  }

  ArgsManager.Flag[0] = '--l'
  ArgsManager.Argument[0] = Math.round(Math.random() * ChartsApi.charts.length)
  require('./index.js').chartdealer.run({ message, ArgsManager, FastEmbed, Send, i18n }, 'id')
}

exports.helpEmbed = ({ message, helpEmbed, i18n }) => {
  const Options = {
    argumentsLength: 0,
    argumentsNeeded: false,
    argumentsFormat: [],
    imageExample: 'https://cdn.discordapp.com/attachments/696881817453592577/699720095160860682/unknown.png'
  }

  return helpEmbed(message, i18n, Options)
}
