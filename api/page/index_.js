document.addEventListener('DOMContentLoaded', () => {
    let character;
    const generateButton = document.getElementById('generateButton');
    const loader = document.getElementById('loader');
    const characterInfo = document.getElementById('characterInfo');
    const backstory = document.getElementById('backstory');
    const raceInfo = document.getElementById('raceInfo');
    const alignmentInfo = document.getElementById('alignmentInfo');
    const primaryStoneInfo = document.getElementById('primaryStoneInfo');
    const secondaryStoneInfo = document.getElementById('secondaryStoneInfo');

    // Mostra/nascondi loader durante la richiesta
    function toggleLoader() {
        loader.classList.toggle('hidden');
    }

    // Mostra/nascondi informazioni del personaggio
    function toggleCharacterInfo() {
        characterInfo.classList.toggle('hidden');
        backstory.classList.toggle('hidden');
    }

    // Mostra tooltip
    function showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = text;
        tooltip.style.top = element.offsetTop + 'px';
        tooltip.style.left = (element.offsetLeft + element.offsetWidth) + 'px';
        document.body.appendChild(tooltip);
    }

    // Nascondi tooltip
    function hideTooltip() {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => tooltip.remove());
    }

    // Event listener per il click sul pulsante "Generate Character"
    generateButton.addEventListener('click', () => {
        if (character) {
            character = undefined;
            toggleCharacterInfo();
        }

        generateButton.setAttribute("disabled", "true")
        toggleLoader(); // Mostra loader
        fetch('/generate-character')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Popola le informazioni del personaggio
                character = data;
                document.getElementById('name').textContent = character.name;
                document.getElementById('sex').textContent = character.sex;
                document.getElementById('race').textContent = character.race.name;
                document.getElementById('class').textContent = character.class;
                document.getElementById('status').textContent = character.status;
                document.getElementById('skills').textContent = character.skills.join(', ');
                document.getElementById('primaryStandingStone').textContent = character.standingStones.primary.name;
                document.getElementById('secondaryStandingStone').textContent = character.standingStones.secondary.name;
                document.getElementById('alignment').textContent = character.alignment.name;
                document.getElementById('backstoryText').innerHTML = character.backstory;

                toggleLoader(); // Nascondi loader
                toggleCharacterInfo(); // Mostra informazioni del personaggio
                generateButton.removeAttribute("disabled")
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                toggleLoader(); // Nascondi loader in caso di errore
                generateButton.removeAttribute("disabled")
            });
    });

    // Event listener per il click sull'icona "i" della razza
    raceInfo.addEventListener('click', () => {
        showTooltip(raceInfo, 'Effects: ' + character.race.effects + '\nPower: ' + character.race.power);
    });

    primaryStoneInfo.addEventListener('click', () => {
        showTooltip(primaryStoneInfo, character.standingStones.primary.description)
    });

    secondaryStoneInfo.addEventListener('click', () => {
        showTooltip(secondaryStoneInfo, character.standingStones.secondary.description)
    });

    // Event listener per il click sull'icona "i" dell'allineamento
    alignmentInfo.addEventListener('click', () => {
        showTooltip(alignmentInfo, character.alignment.description);
    });

    // Chiudi tooltip al click al di fuori di essi
    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('info-icon')) {
            hideTooltip();
        }
    });
}, { once: true });