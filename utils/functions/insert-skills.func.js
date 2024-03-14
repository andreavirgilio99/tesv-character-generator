function insertSkills(charSkills, skillsPool, oddsOfInsertion) {
    for (let i = 0; i < skillsPool.length; i++) {
        const randomNumber = Math.random() * 100;
        if (randomNumber < oddsOfInsertion) {
            charSkills.push(skillsPool[i]);
        }
    }
    return charSkills;
}

module.exports = { insertSkills }