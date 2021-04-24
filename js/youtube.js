// youtube iframe api
// 01. api code sctipt element 생성 및 DOM 삽입
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

var firstScriptEl = document.getElementsByTagName('script')[0];
firstScriptEl.parentNode.insertBefore(tag, firstScriptEl);

// youtube player가 담긴 iframe element 생성
function onYouTubeIframeAPIReady() {
  new YT.Player(
    // 첫 번째 생성자 매개변수로 적용할 element의 id
    'player',
    {
      videoId: 'An6LvWQuj_8', // 최조 재생할 youtube 영상 ID
      // player 매개변수들 (options)
      playerVars: {
        autoplay: true,
        loop: true,
        playlist: 'An6LvWQuj_8',
      },
      events: {
        onReady(event) {
          event.target.mute(); // 열릴 때부터 음소거 처리
        },
      },
    },
  );
}
