const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
  })

app.get('/', (req, res) => {
    res.send('Sejun Node Express Server 구동 완료');
})

app.get('/test', (req, res) => {
    res.send('테스트 화면입니다.');
})