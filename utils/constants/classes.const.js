const { loverStone, ladyStone, lordStone, steedStone, warriorStone, apprenticeStone, atronachStone, mageStone, ritualStone, serpentStone, shadowStone, thiefStone, towerStone } = require("./standing-stones.const")

const classes = [
    {
        name: "Warrior",
        mustHaves: ["One Handed|Two Handed", "Light Armor|Heavy Armor"],
        skills: ["Archery", "Blocking", "Smithing"],
        standingStones: [loverStone, ladyStone, lordStone, steedStone, warriorStone]
    },
    {
        name: "Spell-Sword",
        mustHaves: ["One Handed", "Light Armor|Heavy Armor", "Destruction"],
        skills: ["Illusion", "Alteration", "Restoration", "Speech", "Conjuration", "Enchanting", "Smithing"],
        standingStones: [loverStone, apprenticeStone, atronachStone, ladyStone, lordStone, mageStone, ritualStone, warriorStone]
    },
    {
        name: "Mage",
        mustHaves: ["Destruction"],
        skills: ["Illusion", "Alteration", "Restoration", "Speech", "Conjuration", "Enchanting"],
        standingStones: [loverStone, apprenticeStone, atronachStone, lordStone, mageStone, ritualStone]
    },
    {
        name: "Thief",
        mustHaves: ["Sneak", "Light Armor"],
        skills: ["Archery", "One Handed", "Pickpocket", "Speech", "Lockpicking"],
        standingStones: [loverStone, ladyStone, serpentStone, shadowStone, thiefStone, towerStone]
    },
]

module.exports = { classes }