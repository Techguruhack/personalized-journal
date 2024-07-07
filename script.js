document.addEventListener('DOMContentLoaded', () => {
    const journalEntry = document.getElementById('journalEntry');
    const addEntryButton = document.getElementById('addEntryButton');
    const entriesList = document.getElementById('entriesList');

    addEntryButton.addEventListener('click', () => {
        const entryText = journalEntry.value.trim();

        if (entryText !== '') {
            const entryItem = document.createElement('li');
            entryItem.textContent = entryText;

            entriesList.appendChild(entryItem);

            
            journalEntry.value = '';
        }
    });
});
