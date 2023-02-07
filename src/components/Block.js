
// Обёртка для блоков погоды, карты, эфира и посещаемое 
const Block = ({ image, title, children, className }) => {
    return (
      <div className={className}>
        {image && <img className="block-image" src={image} alt={image} />}
        <h2 className="block-title">{title}</h2>
        <div>
          {children}
        </div>
      </div>
    );
  }
  export default Block;