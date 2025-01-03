function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 時刻を表示
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// DOMContentLoadedイベントで時刻の更新を開始
document.addEventListener('DOMContentLoaded', function () {
    // 初回の時刻表示
    updateClock();

    // 1秒ごとに時刻を更新
    setInterval(updateClock, 1000);
});