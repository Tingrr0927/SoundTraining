document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM 加載完成');

    // 音樂播放功能
    const playButton = document.getElementById('play-button2');
    const audio = document.getElementById('audio2');

    playButton.addEventListener('click', () => {
        console.log('播放按鈕被點擊');
        audio.load(); // 加載音樂
        audio.play()
            .then(() => console.log('音樂播放成功'))
            .catch(err => console.error('音樂播放錯誤:', err)); // 捕捉播放錯誤
    });

    // 選項按鈕點擊事件
    const buttons = document.querySelectorAll('.options button');
    console.log(`找到的選項按鈕數量: ${buttons.length}`);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const isCorrect = button.getAttribute('data-correct') === 'true';
            console.log(`按鈕被點擊，是否正確答案? ${isCorrect}`);

            if (isCorrect) {
                // 顯示答對訊息
                const resultDiv = document.getElementById('result');
                resultDiv.classList.remove('hidden');
                console.log('答對了！');

                // 延遲 1 秒後跳轉
                setTimeout(() => {
                    resultDiv.classList.add('hidden');
                    console.log('跳轉到下一頁');
                    window.location.href = 'question3.html'; // 替換為第三題頁面
                }, 1000);
            } else {
                console.log('答錯了');
                alert('答錯了！請再試一次');
            }
        });
    });
});
