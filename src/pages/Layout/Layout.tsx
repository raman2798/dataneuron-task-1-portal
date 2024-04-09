/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Resizable } from 're-resizable';
import { One, Three, Two } from '@/components';

const Layout: FC = (): ReactElement => {
  const initialWindowSize = {
    width: window.innerWidth - 20,
    height: window.innerHeight - 40,
  };

  const minimumSize = {
    width: 200,
    height: 100,
  };

  const [windowSize, setWindowSize] = useState(initialWindowSize);

  const [sizeFirst, setSizeFirst] = useState({ width: windowSize.width / 2, height: windowSize.height - 200 });
  const [sizeSecond, setSizeSecond] = useState({ width: windowSize.width / 2 - 20, height: sizeFirst.height });
  const [sizeThird, setSizeThird] = useState({ width: windowSize.width, height: windowSize.height - sizeFirst.height });

  const calculateNextSize = (prevSize: { width: number; height: number }, delta: { width: number; height: number }, maxWidth: number, maxHeight: number) => ({
    width: Math.min(maxWidth, Math.max(minimumSize.width, prevSize.width + delta.width)),
    height: Math.min(maxHeight, Math.max(minimumSize.height, prevSize.height + delta.height)),
  });

  const handleResize = (_: any, __: any, delta: any, setSize: React.Dispatch<React.SetStateAction<{ width: number; height: number }>>) => {
    setSize((prevSize) => calculateNextSize(prevSize, delta, windowSize.width, windowSize.height));
  };

  const handleResizeFirst = (_: any, direction: any, ref: any, delta: any) => {
    handleResize(direction, ref, delta, setSizeFirst);

    setSizeSecond((prevSize) => calculateNextSize(prevSize, { width: -delta.width, height: delta.height }, windowSize.width, windowSize.height));

    setSizeThird((prevSize) => {
      return {
        ...prevSize,
        height: windowSize.height - sizeFirst.height,
      };
    });
  };

  const handleResizeSecond = (_: any, direction: any, ref: any, delta: any) => {
    handleResize(direction, ref, delta, setSizeSecond);

    setSizeFirst((prevSize) => calculateNextSize(prevSize, { width: -delta.width, height: delta.height }, windowSize.width, windowSize.height));

    setSizeThird((prevSize) => {
      return {
        ...prevSize,
        height: windowSize.height - sizeSecond.height,
      };
    });
  };

  const handleResizeThird = (_: any, direction: any, ref: any, delta: any) => {
    handleResize(direction, ref, delta, setSizeThird);

    setSizeFirst((prevSize) => {
      return {
        ...prevSize,
        height: windowSize.height - sizeThird.height,
      };
    });

    setSizeSecond((prevSize) => {
      return {
        ...prevSize,
        height: windowSize.height - sizeThird.height,
      };
    });
  };

  useEffect(() => {
    const handleResizeEvent = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.location.reload();
    };

    window.addEventListener('resize', handleResizeEvent);

    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, []);

  return (
    <div className="flex flex-column">
      <div className="flex-grow flex">
        <div style={{ margin: '10px' }}>
          <Resizable size={sizeFirst} minWidth={minimumSize.width} minHeight={minimumSize.height} onResize={handleResizeFirst} maxWidth={windowSize.width} maxHeight={windowSize.height}>
            <One />
          </Resizable>
        </div>

        <div style={{ margin: '10px 0px' }}>
          <Resizable
            size={sizeSecond}
            minWidth={minimumSize.width}
            minHeight={minimumSize.height}
            onResize={handleResizeSecond}
            maxWidth={windowSize.width - sizeFirst.width}
            maxHeight={windowSize.height}
          >
            <Two />
          </Resizable>
        </div>
      </div>
      <div style={{ margin: '10px' }}>
        <Resizable size={sizeThird} minWidth={minimumSize.width} minHeight={minimumSize.height} onResize={handleResizeThird} maxWidth={windowSize.width} maxHeight={windowSize.height}>
          <Three />
        </Resizable>
      </div>
    </div>
  );
};

export default Layout;
