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

// badge 관련 이벤트
const badgesEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// lodash - throttle() : 헬퍼함수의 호출 간격을 조절한다.
window.addEventListener(
  'scroll',
  _.throttle(() => {
    // console.log(window.scrollY);
    if (window.scrollY > 500) {
      // 뱃지 element 숨기기
      // badgesEl.style.display = 'none';
      // 에니메이션 효과 lib - gsap
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgesEl, 0.6, {
        // badgesEl의 불투명도를  0으로 0.6초동안 변환
        opacity: 0,
        display: 'none',
      });

      // 위로 가기 버튼
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      // badge element 보이기
      // badgesEl.style.display = 'block';
      gsap.to(badgesEl, 0.6, {
        // badgesEl의 불투명도를  0으로 0.6초동안 변환
        opacity: 1,
        display: 'block',
      });
      // 위로 가기 버튼
      gsap.to(toTopEl, 0.2, {
        // 오른쪽으로 100px 이동
        x: 100,
      });
    }
  }, 300),
);

// 위로 가기 버튼
toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    // scroll을 0으로 이동
    scrollTo: 0,
  });
});

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

// new Swiper(선택자, 옵션)
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

// AWARDS 부분 수평 슬라이드
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 한 화면에 몇개를 보여줄 것인지
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
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

// 둥둥 떠다니는 애니메이션 (gsap 사용)
// argument : 선택자, 지연시간, 움직이는 높이
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 01. 선택자
    random(1.5, 2.5), // 02. 지속시간(sec)
    // 03. Options
    {
      y: size,
      repeat: -1, // infinite
      yoyo: true, //한번 재생 끝나고, 다시 역으로 재생할 것인지에 대한 option
      // easing function:  https://greensock.com/docs/v2/Easing 참조
      ease: Power2.easeInOut,
      delay: random(0, delay),
    },
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 1.5, 15);
floatingObject('.floating3', 1.8, 30);

// 랜덤(소수점 2자리) 숫자 반환
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// scrollMagic - 화면에 현재 요소가 표현되고 있는지 체크하는 lib
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  // scene : 특정 요소를 감시하는 option 지정 - eventLIstener 개념
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소 지정
    triggerHook: 0.8, // viewport의 스크롤 높이를 를 0~1로 표현, 위 요소가 0.8에 걸리면 트리거
  })
    // 위 트리거 발생시 실행할 메소드 : html class toggle 기능
    .setClassToggle(spyEl, 'show')
    // controller 개념 추가
    .addTo(new ScrollMagic.Controller());
});

//  Footer에 올해 데이터
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
