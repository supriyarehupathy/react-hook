import React, { useImperativeHandle, useRef, forwardRef } from 'react';

const FancyInput = (props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" />;
};

export default forwardRef(FancyInput);
