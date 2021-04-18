console.log('start JS');

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색 버튼 관련 이벤트
searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합 검색');
});

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.removeAttribute('placeholder');
});

const badgesEl = document.querySelector('header .badges');

// badge 관련 이벤트
// lodash - throttle() : 헬퍼함수의 호출 간격을 조절한다.
window.addEventListener(
  'scroll',
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // badge element 숨기기
      // badgesEl.style.display = 'none';
      // 에니메이션 효과 lib - gsap
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgesEl, 0.6, {
        // badgesEl의 불투명도를  0으로 0.6초동안 변환
        opacity: 0,
        display: 'none',
      });
    } else {
      // badge element 보이기
      // badgesEl.style.display = 'block';
      gsap.to(badgesEl, 0.6, {
        // badgesEl의 불투명도를  0으로 0.6초동안 변환
        opacity: 1,
        display: 'block',
      });
    }
  }, 300),
);
