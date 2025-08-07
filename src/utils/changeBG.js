import { weatherBGVideo } from './localeDescribe.js';
let videoEl = null;

export const changeBG = (todayData) => {
    const key = todayData.icon;
    const videoSrc = weatherBGVideo[key] || weatherBGVideo.default;

    if (!videoEl) {
        videoEl = document.createElement('video');
        videoEl.classList.add('bg-video--fade');
        Object.assign(videoEl, {
            autoplay: true,
            loop: false,
            playsInline: true,
            muted: true,
            'aria-hidden': 'true',
        });

        Object.assign(videoEl.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
            filter: 'brightness(50%)',
        });

        document.body.prepend(videoEl);

        videoEl.addEventListener('ended', () => {
            videoEl.classList.remove('bg-video--fade');
            void videoEl.offsetWidth;
            videoEl.currentTime = 0;
            videoEl.play().catch(() => {});
            videoEl.classList.add('bg-video--fade');
        });
    }

    if (videoEl.src !== videoSrc) {
        videoEl.classList.remove('bg-video--fade');
        void videoEl.offsetWidth;
        videoEl.src = videoSrc;
        videoEl.load();
        videoEl.play().catch(() => {});
        videoEl.classList.add('bg-video--fade');
    }
};
