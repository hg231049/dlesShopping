import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// React.FC (Functional Component) 타입을 지정 
// 이 함수는 리액트 컴포넌트고, UI나 null을 반환할 거야"라고 선언
const ScrollToTop: React.FC = () => {
    // 현재 주소를 감지
  const { pathname } = useLocation();

    // 주소가 바뀔 때마다 스크롤을 맨 위로 올리는 방식
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;