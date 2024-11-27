// 啟動第一題音樂播放
document.getElementById('play-button1').addEventListener('click', () => {
    document.getElementById('audio1').play();
});

// 監聽第一題選項
document.querySelectorAll('#question1 .options button').forEach(button => {
    button.addEventListener('click', () => {
        const isCorrect = button.getAttribute('data-correct') === 'true';
        if (isCorrect) {
            // 顯示「答對！」與 Emoji
            const resultDiv = document.getElementById('result');
            resultDiv.classList.remove('hidden');
            setTimeout(() => {
                resultDiv.classList.add('hidden');
                // 跳轉到第二題頁面
                window.location.href = 'question2.html';
            }, 1000); // 顯示 2 秒後跳轉
        } else {
            alert('答錯了！請再試一次');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 確保 DOM 加載完成後再執行以下代碼

    // 啟動第二題音樂播放
    document.getElementById('play-button2').addEventListener('click', () => {
        const audio = document.getElementById('audio2');
        audio.load(); // 顯式加載音樂檔案

        // 播放音樂並捕捉錯誤
        audio.play().catch(err => {
            console.error('音樂播放錯誤:', err); // 若有錯誤會輸出到控制台
        });
    });

    // 監聽第二題選項，假設答案是B
    document.querySelectorAll('#question2 .options button').forEach(button => {
        button.addEventListener('click', () => {
            const isCorrect = button.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                // 顯示「答對！」與 Emoji
                const resultDiv = document.getElementById('result');
                resultDiv.classList.remove('hidden');
                setTimeout(() => {
                    resultDiv.classList.add('hidden');
                    // 跳轉到第三題頁面
                    window.location.href = 'question3.html'; // 替換成第三題頁面
                }, 1000); // 顯示 2 秒後跳轉
            } else {
                alert('答錯了！請再試一次');
            }
        });
    });
});

// 播放第三題音樂
document.getElementById('play-button3').addEventListener('click', () => {
    document.getElementById('audio3').play();
});

// 提交答案（第三題接龍）
document.getElementById('submit-answer').addEventListener('click', () => {
    const word1 = document.getElementById('word1').value;
    const word2 = document.getElementById('word2').value;
    const word3 = document.getElementById('word3').value;
    const word4 = document.getElementById('word4').value;
    const word5 = document.getElementById('word5').value;
    const word6 = document.getElementById('word6').value;
    const word7 = document.getElementById('word7').value;

    // 判斷用戶輸入的字詞是否正確
    const correctAnswer = ['A', 'B', 'C', 'D', 'E', 'F', 'G']; // 假設正確答案是這些字
    const userAnswer = [word1, word2, word3, word4, word5, word6, word7];

    if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
        alert('答對了！🎉');
        // 跳轉到結束頁面
        window.location.href = 'end.html'; // 跳轉到結束頁面
    } else {
        alert('答案錯誤，請再試一次！');
    }
});
