import './Banner.css';

// Вывод баннера на страницу под строкой поиска
const Banner = ({ src, alt, href }) => {
  return (
    <a className="banner-link" href={href}>
      <img className="banner-img" src={src} alt={alt} />
    </a>
  );
}
export default Banner;