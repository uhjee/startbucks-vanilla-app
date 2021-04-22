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
    // console.log(window.scrollY);
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

// fade-in 효과(gsap - delay option 사용)
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1.5, {
    // 지연 시간 설정 - index로 동적으로 설정
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// swiper-vertical:: swiper lib 사용
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이의 여백
  centeredSlides: true, // 1번 슬라이드가 가운데부터
  autoplay: {
    delay: 2000, // miliseconds
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

// 프로모션 버튼 클릭시 드랍다운
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 숨김 플래그
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});
