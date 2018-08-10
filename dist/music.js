const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "白羊",
        artist: '徐秉龙',
        url: 'http://www.ytmp3.cn/down/46188.mp3',
        cover: './images/cover.jpg',
      },
      {
        name: "天空之城",
        artist: '久石让',
        url: 'http://www.ytmp3.cn/down/42517.mp3',
        cover: './images/cover.jpg',
      },
      {
        name: "The trust is that you leave",
        artist: 'pure',
        url: 'http://www.ytmp3.cn/down/49373.mp3',
        cover: './images/cover.jpg',
      }
    ]
});