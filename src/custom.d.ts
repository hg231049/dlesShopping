declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
// CSS 패스권
declare module "*.css";

// 만약 SCSS를 쓰신다면 추가
declare module "*.scss";

// 만약 이미지 파일 임포트에서 에러가 난다면 추가
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "swiper/*";