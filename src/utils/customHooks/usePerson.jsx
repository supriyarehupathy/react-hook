import { useState, useDebugValue } from 'react';

const usePerson = () => {
  const [person] = useState({ name: 'John', age: 20 });
  useDebugValue('Details', JSON.stringify(person));
  return person;
};

export default usePerson;
