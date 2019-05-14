import React, {
  useState,
  useCallback,
  // useReducer,
  useMemo
} from 'react';
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

  return (
    <div>
      <h1> Example for use memo </h1>
      <h1>{count}</h1>
      <button onClick={inc}>inc</button>
      <List items={items} inc={inc} />
      <h3> Normal function </h3> {computeExpensiveValue()}
      <h3> Memorized function</h3> {memoizedValue}
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