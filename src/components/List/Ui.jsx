import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext
} from 'react';
import { HitsCountContext } from '../Context/Context';

let count1 = 0;

const ListUi = () => {
  console.log('renderApp');
  const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(c => c + 1, 0); //dispatch has same reference across components. No need of useCallback

  const [items, setItems] = useState([
    { title: 'Shirt' },
    { title: 'Pants' },
    { title: 'Shoes' }
  ]);
  const inc = useCallback(() => {
    setCount(c => c + 1);
    // setItems([
    //   { title: 'Shirt' },
    //   { title: 'Pants' },
    //   { title: 'Shoes' },
    //   { title: count + 1 }
    // ]);
  }, []);
  const memoizedValue = useMemo(() => computeExpensiveValue(), []);
  let { dispatch } = useContext(HitsCountContext);
  useEffect(() => {
    dispatch({ type: 'increment' });
  }, []);
  return (
    <div>
      <h1> Example for useMemo and useCallback </h1>
      <h1>{count}</h1>
      <button onClick={inc}>inc</button>
      <List items={items} inc={inc} />
      <h2> Normal function </h2> {computeExpensiveValue()}
      <h2> Memorized function</h2> {memoizedValue}
    </div>
  );
};

const List = React.memo(({ items, inc }) => {
  console.log('renderList');

  return items.map((item, key) => (
    <div onClick={inc} key={key}>
      item: {item.title}
    </div>
  ));
});

const computeExpensiveValue = () => {
  count1 = count1 + 1;
  return count1;
};

export default ListUi;
