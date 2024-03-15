const { argonianMaleNames } = require("./argonian/argonian-male-names.const")
const { argonianFemaleNames } = require("./argonian/argonian-female-names.const")
const { khajiitMaleNames } = require("./khajiit/khajiit-male-names.const")
const { khajiitFemaleNames } = require("./khajiit/khajiit-female-names.const")
const { redguardMaleNames } = require("./redguard/redguard-male-names.const")
const { redguardFemaleNames } = require("./redguard/redguard-female-names.const")
const { nordMaleNames } = require("./nord/nord-male-names.const")
const { femaleNordNames } = require("./nord/nord-female-names.const")
const { bretonMaleNames } = require("./breton/breton-male-names.const")
const { bretonFemaleNames } = require("./breton/breton-female-names.const")
const { imperialMaleNames } = require("./imperial/imperial-male-names.const")
const { imperialFemaleNames } = require("./imperial/imperial-female-names.const")
const { orsimerMaleNames } = require("./orsimer/orsimer-male-names.const")
const { orsimerFemaleNames } = require("./orsimer/orsimer-female-names.const")
const { bosmerMaleNames } = require("./bosmer/bosmer-male-names.const")
const { bosmerFemaleNames } = require("./bosmer/bosmer-female-names.const")
const { altmerMaleNames } = require("./altmer/altmer-male-names.const")
const { altmerFemaleNames } = require("./altmer/altmer-female-names.const")
const { dunmerMaleNames } = require("./dunmer/dunmer-male-names.const")
const { dunmerFemaleNames } = require("./dunmer/dunmer-female-names.const")

const namesCollection = {
    Argonian: {
        Male: argonianMaleNames,
        Female: argonianFemaleNames
    },
    Khajiit: {
        Male: khajiitMaleNames,
        Female: khajiitFemaleNames
    },
    Redguard: {
        Male: redguardMaleNames,
        Female: redguardFemaleNames
    },
    Nord: {
        Male: nordMaleNames,
        Female: femaleNordNames
    },
    Breton: {
        Male: bretonMaleNames,
        Female: bretonFemaleNames
    },
    Imperial: {
        Male: imperialMaleNames,
        Female: imperialFemaleNames
    },
    Orsimer: {
        Male: orsimerMaleNames,
        Female: orsimerFemaleNames
    },
    Bosmer: {
        Male: bosmerMaleNames,
        Female: bosmerFemaleNames
    },
    Altmer: {
        Male: altmerMaleNames,
        Female: altmerFemaleNames
    },
    Dunmer: {
        Male: dunmerMaleNames,
        Female: dunmerFemaleNames
    }
}

module.exports = { namesCollection }