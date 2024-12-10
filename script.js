const animeList = [
    { rank: 1, image: 'https://m.media-amazon.com/images/M/MV5BN2I0N2Y3MWUtNjJiNy00NjRjLWE4ZTctOTQ2YWVhM2VhMTM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', title: 'Baldurs Gate 3', score: 9.2, status: 'Detalhes' },
    { rank: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjUS1SCrmxQfLMEPF2s-ku8qRc_si1Ccy3Q&s', title: 'Hollow Knight', score: 9.1, status: 'Detalhes' },
    { rank: 3, image: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png', title: 'Red Dead Redemption 2', score: 8.9, status: 'Detalhes' },
    { rank: 4, image: 'https://static-cdn.jtvnw.net/ttv-boxart/497412_IGDB-272x380.jpg', title: 'Ori and the Will of the Wisps', score: 8.9, status: 'Detalhes' },
    { rank: 5, image: 'https://upload.wikimedia.org/wikipedia/pt/1/15/Nier_Automata_capa.png', title: 'NieR: Automata', score: 8.9, status: 'Detalhes' },
    { rank: 6, image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/Sy5e8DmeKIJVjlAGraPAJYkT.png', title: 'BloodBorne', score: 8.9, status: 'Detalhes' },
    { rank: 7, image: 'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png', title: 'Dark Souls 3', score: 8.8, status: 'Detalhes' },
    { rank: 8, image: 'https://bdjogos.com.br/capas/16631-persona-5-royal-capa-1.jpg', title: 'Persona 5 Royal', score: 8.7, status: 'Detalhes' },
    { rank: 9, image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2723/knxU5uU5aKvQChKX5OvWtSGC.png', title: 'Sekiro: Shadows Die Twice', score: 8.6, status: 'Detalhes' },
    { rank: 10, image: 'https://m.media-amazon.com/images/I/71ozw6l5f6L._AC_UF1000,1000_QL80_.jpg', title: 'Elden Ring', score: 8.2, status: 'Detalhes' },
    { rank: 11, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8u9iyRPZNvZAk9dJ3FoxbUWnDdb3uBZCHA&s', title: 'Devil May Cry 5', score: 7.9, status: 'Detalhes' },
    { rank: 12, image: 'https://bdjogos.com.br/capas/16620-persona-5-strikers-capa-1.jpg', title: 'Persona 5 Strikers', score: 7.8, status: 'Detalhes' },
    { rank: 13, image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/1216/oSOVmvoekCf9ASaAItqfKvpP.png', title: 'Dark Souls 2', score: 7.8, status: 'Detalhes' },
    { rank: 14, image: 'https://store.ubisoft.com/on/demandware.static/-/Sites-masterCatalog/default/dw63e24d90/images/large/56c494ad88a7e300458b4d5a.jpg', title: 'Tom Clancys: Raimbow Six Siege', score: 7, status: 'Detalhes' },
    { rank: 15, image: 'https://img.elo7.com.br/product/zoom/256EC28/big-poster-gamer-assassins-creed-odyssey-lo17-tam-90x60-cm-poster.jpg', title: 'Assassins Creed Odyssey', score: 6.8, status: 'Detalhes' },
    { rank: 16, image: 'https://img.elo7.com.br/product/main/36DCB1F/big-poster-assassins-creed-valhalla-lo01-tamanho-90x60-cm-poster-de-game.jpg', title: 'Assassins Creed Valhalla', score: 6.0, status: 'Detalhes' },
    { rank: 17, image: 'https://upload.wikimedia.org/wikipedia/pt/9/96/The_Last_of_Us_2_capa.png', title: 'The Last of Us Part II', score: 5.8, status: 'Detalhes' },
    { rank: 18, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHo5mOePV84HgbLL7X9KwaaaA3lcNfsvKcg&s', title: 'Counter-Strike 2', score: 4.9, status: 'Detalhes' },
    { rank: 19, image: 'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S2_1200x1600-7bf61b8b77e394c4bc709f6b02c0db24', title: 'Valorant', score: 4.7, status: 'Detalhes' },
    { rank: 20, image: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S2_1200x1600-905a96cea329205358868f5871393042', title: 'League Of Legends', score: 4.7, status: 'Detalhes' },



];

function renderAnimeList() {
    const animeListContainer = document.getElementById('anime-list');
    animeList.forEach(anime => {
        const row = document.createElement('div');
        row.classList.add('table-row');

        const detailsPageUrl = `detailsgame${anime.rank}.html`;

        row.innerHTML = `
            <div class="column rank">${anime.rank}</div>
            <div class="column image"><img src="${anime.image}" alt="${anime.title}"></div>
            <div class="column title">${anime.title}</div>
            <div class="column score">${anime.score.toFixed(2)}</div>
            <div class="column status">
                <button onclick="location.href='${detailsPageUrl}'">${anime.status}</button>
            </div>
        `;
        animeListContainer.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderAnimeList);

