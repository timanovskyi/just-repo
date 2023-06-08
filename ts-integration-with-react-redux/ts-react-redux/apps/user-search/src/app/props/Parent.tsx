import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <>
      <Child color="red" onClick={() => console.log('test')}>
        test
      </Child>
      <ChildAsFC color="red" onClick={() => console.log('test')}>
        <p>f</p>
      </ChildAsFC>
    </>
  );
};

export default Parent;
