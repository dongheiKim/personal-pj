/*
ex_search_api가 보낸 요청을 받아서
가상의 검색정보를 준다.
*/
import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.'));

app.post('/search', (req, res) => {
    const searchText = req.body.text;
    console.log(`Received search request for: ${searchText}`);
    // 가상의 검색 결과 생성
    const fakeResults = [
        `${searchText} 스테이크`,
        `${searchText} 샐러드`,
        `${searchText} 초밥`,
        `${searchText} 구이`,
        `${searchText} 타다끼`
    ];
    res.json({ results: fakeResults });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
