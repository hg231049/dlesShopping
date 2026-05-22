# 🛒 슬룸 사이트 클론 앱 (Sloom Clone)
> React와 Tailwind CSS의 핵심 기술 및 컴포넌트 추상화를 학습하기 위해 진행한 이커머스 쇼핑몰 클론 코딩 프로젝트입니다.

<div align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=Tailwind-CSS&logoColor=white">
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React-Router&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
</div>

##  프로젝트 정보
- **개발 기간:** 2026.04.13 ~ 2026.05.18 (약 5주)
- **배포 주소:** [https://sloom-eight.vercel.app/](https://sloom-eight.vercel.app/)
- **개발 환경:** `React`, `Tailwind CSS`, `VS Code`, `Vercel`, `React Router (react-router-dom)`

---

##  주요 구현 페이지 및 범위
복잡한 이커머스 도메인의 핵심이 되는 인터페이스를 단계별로 정밀하게 구현했습니다.
- **메인 페이지:** 로딩 스플래시 연동 및 메인 베너, 큐레이션 섹션 구현
- **상품 목록 페이지:** 레이아웃 분기 처리를 통한 카테고리별 리스트업
- **상세 페이지:** dynamic routing 기반의 상품 세부 정보 표기 및 옵션 선택 UI
- **장바구니 페이지:** 실시간 금액 계산, 상품 수량 변경 및 삭제 액션 유기적 연동
- **검색 페이지:** 실시간 타이핑 대응 클라이언트 사이드 검색 필터링 구현
- **글로벌 UI:** 반응형 모바일 햄버거 메뉴 및 드롭다운 네비게이션 바

---

##  핵심 기능 및 구현 내용

###  1. 컴포넌트 추상화 및 레이아웃 분기 처리
- 동일한 구조의 상품 데이터(`ProductData`) 객체를 효율적으로 재사용하기 위해 고도의 공통 컴포넌트를 설계했습니다.
- 넘겨받는 속성(Props)에 따라 **Best(Grid형)**, **New(Horizontal형)**, **List(검색 결과형)** 등 다양한 레이아웃으로 화면을 유연하게 분기 처리하여 코드 중복을 최소화했습니다.

### 2. React Router 기반의 안정적인 멀티 페이지 구조
- `react-router-dom` 라이브러리를 도입하여 다중 페이지 환경을 매끄럽게 구축했습니다.
- 페이지 전환 과정에서도 유저가 입력 중인 검색어나 장바구니 담은 수량(카운트) 등의 상태가 초기화되지 않고 유기적으로 유지되도록 데이터 흐름을 연결했습니다.

###  3. State Lifting(상태 끌어올리기)을 통한 데이터 동기화
- 단일 데이터 소스 원칙을 지키기 위해 장바구니 배열 및 수량 상태를 상위 부모 컴포넌트로 끌어올려 통합 관리했습니다.
- 상위에서 하위 컴포넌트로 Props를 선언적으로 내려주어 순위 배지 노출, 요약 정보 활성화 등 세부 UI 디자인 옵션을 완벽히 제어했습니다.

###  4. Tailwind CSS 기반의 정교한 디자인 시스템 구축
- 복합 선택자(Variant)와 임의 값(Arbitrary values, ex: `pb-[120px]`) 문법을 적극 사용하여 기존 슬룸 사이트의 모던하고 디테일한 이커머스 UI 레이아웃을 픽셀 단위로 재현했습니다.
- 유틸리티 클래스의 조합법을 익혀 반응형 디자인(Breakpoints) 사양을 웹과 모바일에 완벽히 정합했습니다.

###  5. 사용자 경험(UX) 중심의 마이크로 인터랙션
- 첫 진입 시 몰입감을 높여주는 로딩 스플래시 화면을 설계했습니다.
- 모바일 환경에서의 편의성을 위해 자연스럽게 열리는 슬라이드 메뉴를 구현하여 상용 서비스 수준의 UI/UX 완성도를 부여했습니다.

---

## 설치 및 로컬 실행 방법 (How to Run)

```bash
# 1. 의존성 패키지 설치
npm install

# 2. 로컬 개발 서버 실행 (Vite 환경)
npm run dev