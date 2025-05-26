import { useEffect } from 'react';

export function useKeyDown(keyDown, action) {
  useEffect(() => {
    function callBack(e) {
      if (e.code.toLowerCase() === keyDown.toLowerCase()) {
        action();
      }
    }

    document.addEventListener('keydown', callBack);

    return () => {
      document.removeEventListener('keydown', callBack);
    };
  }, [keyDown, action]);
}
