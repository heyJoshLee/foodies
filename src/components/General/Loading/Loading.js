import React, { useEffect } from 'react';
import LoadingPiece from './LoadingPiece';

const Loading = () => {

  const containerSize = 100;
  const pieceHeight = containerSize / 5;
  const pieceWidth = containerSize / 20;
  const padding = containerSize * 0.05;

  const pieceValues = [
    {
      top: `${padding * 1.5}px`,
      left: `${containerSize / 2 - containerSize / 20}px`,
      rotation: "none",
    },
    {
      top: `${containerSize * 0.3 - pieceHeight + padding}px`,
      left: `${containerSize * 0.75 - pieceWidth - padding / 1.5}px`,
      rotation: "rotate(45deg)",
    },
    {
      top: `${containerSize * 0.6 - pieceHeight + padding / 3}px`,
      left: `${containerSize * 0.8 - pieceWidth - padding / 1.5}px`,
      rotation: "rotate(90deg)",
    },
    {
      top: `${containerSize * 0.9 - pieceHeight - padding / 3}px`,
      left: `${containerSize * 0.8 - pieceWidth - padding / 1.5}px`,
      rotation: "rotate(135deg)",
    },
    {
      top: `${containerSize - pieceHeight - padding / 1.5}px`,
      left: `${containerSize / 2 - containerSize / 20}px`,
      rotation: "none",
    },
    {
      top: `${containerSize * 0.9 - pieceHeight - padding / 3}px`,
      left: `${containerSize * 0.2 - pieceWidth + padding / 1.5}px`,
      rotation: "rotate(-135deg)",
    },
    {
      top: `${containerSize * 0.6 - pieceHeight + padding / 3}px`,
      left: `${containerSize * 0.2 - pieceWidth + padding / 1.5}px`,
      rotation: "rotate(90deg)",
    },
    {
      top: `${containerSize * 0.3 - pieceHeight + padding}px`,
      left: `${containerSize * 0.25 - pieceWidth + padding / 1.5}px`,
      rotation: "rotate(-45deg)",
    },
  ];

  useEffect(() => {
    console.log('looking for peices')
    setUpAnimation()
  }, [])

  const setUpAnimation = () => {
    const pieces = document.querySelectorAll('.loading-piece');
    pieces.forEach((pieceElement, index) => {
      console.log(index)
      setTimeout(() => {


        setInterval(() => {
          const currentOpacity = getComputedStyle(pieceElement).getPropertyValue("opacity");
          if (currentOpacity <= 0) {
            pieceElement.style.opacity = 1;
          } else {
            pieceElement.style.opacity -= 10;
          }
        }, 800)

      }, index * 100);
    }
    )
  }

  const styles = {
    loading: {
      width: '100%',
      position: 'relative'
    }
  }

  return (
    <div style={styles.loading}>
      {pieceValues.map((values, index) => <LoadingPiece key={`loading-piece-${index}`} values={values} size={containerSize} index={index} />)}
    </div>
  )
}

export default Loading;