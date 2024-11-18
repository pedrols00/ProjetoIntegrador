const animeList = [
    { rank: 1, image: 'https://via.placeholder.com/50', title: 'Elden Ring', score: 0, status: 'Detalhes' },
    { rank: 2, image: 'https://via.placeholder.com/50', title: 'Sekiro: Shadows Die Twice', score: 0, status: 'Detalhes' },
    { rank: 3, image: 'https://via.placeholder.com/50', title: 'Tom Clancys: Raimbow Six Siege', score: 0, status: 'Detalhes' },
    { rank: 4, image: 'https://via.placeholder.com/50', title: 'Dark Souls 3', score: 0, status: 'Detalhes' },
    { rank: 5, image: 'https://via.placeholder.com/50', title: 'Dark Souls 2', score: 0, status: 'Detalhes' },
    { rank: 6, image: 'https://via.placeholder.com/50', title: 'BloodBorne', score: 0, status: 'Detalhes' },
    { rank: 7, image: 'https://via.placeholder.com/50', title: 'Counter-Strike 2', score: 0, status: 'Detalhes' },
];

function renderAnimeList() {
    const animeListContainer = document.getElementById('anime-list');
    animeList.forEach(anime => {
        const row = document.createElement('div');
        row.classList.add('table-row');

        row.innerHTML = `
            <div class="column rank">${anime.rank}</div>
            <div class="column image"><img src="${anime.image}" alt="${anime.title}"></div>
            <div class="column title">${anime.title}</div>
            <div class="column score">${anime.score.toFixed(2)}</div>
            <div class="column status"><button>${anime.status}</button></div>
             `;
        animeListContainer.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderAnimeList);
