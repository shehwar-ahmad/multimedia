import PropTypes from "prop-types";
import PaginationDot from "./PaginationDot";
import styles from './Pagination.module.css';

interface props{
    dots: number,
    index: number,
    onChangeIndex: Function,
}

const Pagination = (props:props) => {
  const handleClick = (event:React.MouseEvent, index:number) => {
    props.onChangeIndex(index);
  };

  const { index, dots } = props;

  const children = [];

  for (let i = 0; i < dots; i++) {
    children.push(
      <PaginationDot
        key={i}
        index={i}
        active={i === index}
        onClick={handleClick}
      />
    );
  }

  return <div className={styles.paginationContainer}>{children}</div>;
};

Pagination.propTypes = {
  dots: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func.isRequired,
};

export default Pagination;
