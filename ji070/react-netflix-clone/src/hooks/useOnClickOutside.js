import React, { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      console.log("ref", ref.current);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.addEventListener("mousedown", listener); // 컴포넌트가 없어질 때 리스너도 없애줘야한다.
      document.addEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
