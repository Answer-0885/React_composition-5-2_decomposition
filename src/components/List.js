import './List.css';

// Компонент отвечает за любое перечисление элементов (заголовки, списки)
const List = ({ children, className }) => {
  return (
    <ol className={className}>
      { children }
    </ol>
  );
}
export default List;