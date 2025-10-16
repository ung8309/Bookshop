const express = require('express');
const router = express.Router();

router.use(express.json());

// 장바구니 담기
router.post('/', (req,res) => {
    res.json('장바구니 담기');
});

// 장바구니 조회
router.get('/', (req,res) => {
    res.json('장바구니 조회');
});

// 장바구니 도서 삭제
router.delete('/:id', (req,res) => {
    res.json('장바구니 도서 삭제');
});


module.exports = router;



module.exports = router;