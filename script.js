/*
검색창에 적힌 내용을 ex_search_api.js로 보내서
검색결과를 받아온다.
받아온 검색결과를 검색결과 영역에 표시한다.
*/

const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');
const SEARCH_API_URL = 'http://localhost:3000/search';

searchInput.addEventListener('keydown', (e) => { // 엔터를 쳐서 검색을 실행한다.
    if ( e.key === 'Enter' && searchInput.value.length > 0) {
        const searchText = searchInput.value;
        fetch(SEARCH_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: searchText })
            })
        .then(response => response.json())
        .then(data => {
              resultsContainer.innerHTML = '';
              data.results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.textContent = result;
                resultsContainer.appendChild(resultItem);
                });
              })
        .catch(error => {
                console.error('Error fetching search results:', error);
              });
    }
});

searchInput.addEventListener('input', () => { // 타이핑할 때마다 실행되는 코드  
  if (searchInput.value.length > 0) {
        const searchText = searchInput.value;
        fetch(SEARCH_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: searchText })
            })
        .then(response => response.json())
        .then(data => {
              resultsContainer.innerHTML = '';
              data.results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.textContent = result;
                resultsContainer.appendChild(resultItem);
                });
              })
        .catch(error => {
                console.error('Error fetching search results:', error);
              });
    } else if (searchInput.value.length === 0) {
        resultsContainer.innerHTML = '';
    }
});