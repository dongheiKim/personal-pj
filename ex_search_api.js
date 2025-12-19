import { text } from 'express';
import HTTP from 'superagent';
/*
1. 검색창에 작성된 내용을 검색엔진에 보내서 검색결과를 받아온다.
1-2. 받아온 검색결과를 사용자에게 보여준다.
============================================================================
여기서 해야할일
server.js에 요청을 보내고,
fetch를 이용해서
검색어를 보내고, 받아오는 코드를 작성한다.
============================================================================
*/

const SEARCH_API_URL = 'http://localhost:3000/search';

const searchText = "연어";
const requestData = {
    searchText: searchText
};
HTTP
    .post(SEARCH_API_URL)
    .send(requestData)
    .set('content-type', 'api/json')
    .end((error, result) => {
        if (result.statusCode === 200) {
          console.log(result.body);
        } else {
            console.error(error.message);
        }
    });


