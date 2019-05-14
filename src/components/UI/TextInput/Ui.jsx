import React, {
  useRef,
  useCallback,
  useState,
  useLayoutEffect,
  useEffect
} from 'react';
import { Route, Link } from 'react-router-dom';

import TextInputWithForwadRef from '../TextInputWithForwadRef/Ui';

const TextInput = ({ match }) => {
  const inputEl = useRef(null);
  const fancyInputRef = useRef();
  const [height, setHeight] = useState(0);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().width);
    }
  }, []);
  useEffect(() => {
    console.log('Rendered after useLayoutEffect', inputEl.current.width);
  }, []);
  useLayoutEffect(() => {
    console.log('Rendered before Effect', inputEl.current.width);
  }, []);
  return (
    <>
      <input ref={inputEl} type="text" />
      <input ref={measuredRef} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <h2>The above header is {Math.round(height)}px tall</h2>
      <Link to={`${match.url}/with-forwad-ref`}> With Forwad Ref </Link>
      <Route
        path={`${match.url}/with-forwad-ref`}
        render={() => <TextInputWithForwadRef ref={fancyInputRef} />}
      />
    </>
  );
};

export default TextInput;
