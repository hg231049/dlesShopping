import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    // 현재 주소를 감지
  const { pathname } = useLocation();

    // 주소가 바뀔 때마다 스크롤을 맨 위로 올리는 방식
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;