import React from 'react';

const LoadingPiece = (props) => {
  const { size } = props;
  const { top, left, rotation } = props.values;

  const styles = {
    loadingPiece: {
      width: `${size / 20}px`,
      height: `${size / 5}px`,
      backgroundColor: "lightgrey",
      position: "absolute",
      zIndex: '1',
      top: top,
      left: left,
      transform: rotation,
      borderRadius: '10px',
      margin: '0 auto%'
    }
  }

  return (
    <div className='loading-piece' style={styles.loadingPiece}></div>
  )
}

export default LoadingPiece;