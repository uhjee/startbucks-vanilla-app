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

//  Footer에 올해 데이터
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
