const animeList = [
    { rank: 1, image: 'https://m.media-amazon.com/images/I/71ozw6l5f6L._AC_UF1000,1000_QL80_.jpg', title: 'Elden Ring', score: 8.2, status: 'Detalhes' },
    { rank: 2, image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2723/knxU5uU5aKvQChKX5OvWtSGC.png', title: 'Sekiro: Shadows Die Twice', score: 8.6, status: 'Detalhes' },
    { rank: 3, image: 'https://store.ubisoft.com/on/demandware.static/-/Sites-masterCatalog/default/dw63e24d90/images/large/56c494ad88a7e300458b4d5a.jpg', title: 'Tom Clancys: Raimbow Six Siege', score: 7, status: 'Detalhes' },
    { rank: 4, image: 'https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png', title: 'Dark Souls 3', score: 8.8, status: 'Detalhes' },
    { rank: 5, image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/1216/oSOVmvoekCf9ASaAItqfKvpP.png', title: 'Dark Souls 2', score: 7.8, status: 'Detalhes' },
    { rank: 6, image: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2614/Sy5e8DmeKIJVjlAGraPAJYkT.png', title: 'BloodBorne', score: 8.9, status: 'Detalhes' },
    { rank: 7, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQHo5mOePV84HgbLL7X9KwaaaA3lcNfsvKcg&s', title: 'Counter-Strike 2', score: 4.9, status: 'Detalhes' },
    { rank: 8, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 9, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 10, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 11, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 12, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 13, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 14, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 15, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 16, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 17, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 18, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 19, image: '', title: 'x', score: 8.2, status: 'Detalhes' },
    { rank: 20, image: '', title: 'x', score: 8.2, status: 'Detalhes' },



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

