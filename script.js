// 音乐播放器功能
const musicPlayer = document.querySelector('.music-player');
const playBtn = document.querySelector('.play-btn');
const playIcon = playBtn.querySelector('i');
const playerInfo = document.querySelector('.player-info');

let isPlaying = false;
let isExpanded = false;

// 模拟音乐播放
playBtn.addEventListener('click', function() {
    isPlaying = !isPlaying;
    playIcon.classList.toggle('fa-play', !isPlaying);
    playIcon.classList.toggle('fa-pause', isPlaying);
    
    if (isPlaying) {
        expandPlayer();
    }
});

// 展开播放器
function expandPlayer() {
    if (!isExpanded) {
        musicPlayer.classList.add('expanded');
        isExpanded = true;
        
        // 5秒后自动收起
        setTimeout(() => {
            if (isExpanded) {
                musicPlayer.classList.remove('expanded');
                isExpanded = false;
            }
        }, 5000);
    }
}

// 点击播放器其他区域也展开
musicPlayer.addEventListener('click', function(e) {
    if (e.target !== playBtn && !playBtn.contains(e.target)) {
        expandPlayer();
    }
});

// 滚动显示时间轴项
const timelineItems = document.querySelectorAll('.timeline-item');

function checkScroll() {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight * 0.9) {
            item.classList.add('visible');
        }
    });
}

// 初始检查
checkScroll();

// 滚动事件监听
window.addEventListener('scroll', checkScroll);

// 封面滚动指示点击
document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// 图片点击放大（简化版）
const images = document.querySelectorAll('.photo-grid img');
images.forEach(img => {
    img.addEventListener('click', function() {
        alert('实际应用中这里会显示大图');
    });
});