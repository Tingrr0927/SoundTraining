document.addEventListener('DOMContentLoaded', () => {
    console.log('第三頁 - DOM 加載完成');

    // 音樂播放功能
    const playButton = document.getElementById('play-button3');
    const audio = document.getElementById('audio3');

    playButton.addEventListener('click', () => {
        console.log('播放按鈕被點擊');
        audio.load(); // 確保音樂加載
        audio.play()
            .then(() => console.log('音樂播放成功'))
            .catch(err => console.error('音樂播放錯誤:', err)); // 捕捉錯誤並輸出
    });

    // 初始化字接龍顯示
    const wordChainElements = document.querySelectorAll('.word-chain span');
    wordChainElements.forEach((span, index) => {
        span.textContent = '_'; // 預設每個字顯示 "_"
        console.log(`初始化接龍字位置 ${index + 1}`);
    });
});
