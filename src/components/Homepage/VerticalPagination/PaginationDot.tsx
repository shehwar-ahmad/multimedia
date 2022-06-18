import PropTypes from "prop-types";
import React from "react";
import styles from './PaginationDot.module.css';

// const styles = {
//   root: {
//     height: 18,
//     width: 18,
//     cursor: "pointer",
//     border: 0,
//     background: "none",
//     padding: 0,
//   },
//   dot: {
//     backgroundColor: "#e4e6e7",
//     height: 12,
//     width: 12,
//     borderRadius: 6,
//     margin: 3,
//   },
//   active: {
//     backgroundColor: "#319fd6",
//   },
// };

interface props{
    active: Boolean,
    index: number,
    onClick: Function,
}


const PaginationDot = (props:props) => {
  const handleClick = (event:React.MouseEvent) => {
    props.onClick(event, props.index);
  };

  const { active } = props;

  let styleDot;

  if (active) {
    styleDot =`${styles.dot} ${styles.activeDot}`;
  } else {
    styleDot = styles.dot;
  }

  return (
    <button type="button" className={styles.btn} onClick={handleClick}>
      <div className={styleDot} />
    </button>
  );
};

PaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationDot;
