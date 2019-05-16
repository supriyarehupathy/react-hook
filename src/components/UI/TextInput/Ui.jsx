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
  // const measuredRef = useCallback(node => {
  //   if (node !== null) {
  //     setHeight(node.getBoundingClientRect().width);
  //   }
  // }, []);

  useEffect(() => {
    console.log('Rendered after useLayoutEffect', inputEl.current.width);
  }, []);
  useLayoutEffect(() => {
    console.log('Rendered before Effect', inputEl.current.width);
  }, []);

  return (
    <>
      <h2> Example for useRef</h2>
      <div style={{ paddingBottom: '2rem', paddingLeft: '1.5rem' }}>
        <input ref={inputEl} type="text" placeholder="with useRef" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
      {/* <input ref={measuredRef} type="text" placeholder="with forward Ref" />
      <h3>The above header is {Math.round(height)}px tall</h3> */}
      <div>
        <Link to={`${match.url}/with-forwad-ref`} style={{ color: 'blue' }}>
          With Forwad Ref
        </Link>
        <Route
          path={`${match.url}/with-forwad-ref`}
          render={() => <TextInputWithForwadRef ref={fancyInputRef} />}
        />
      </div>
    </>
  );
};

export default TextInput;
