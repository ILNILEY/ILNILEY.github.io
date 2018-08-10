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
        name: "瞬き",
        artist: '春茶',
        url: 'http://www.kugou.com/song/li8zd28.html?frombaidu#hash=FCECED6B3E34490444ECD52E639BADC7&album_id=0',
        cover: './images/cover.jpg',
      }
    ]
});