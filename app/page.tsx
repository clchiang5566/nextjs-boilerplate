'use client';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { increment, decrement } from '../redux/counterSlice';

export default function Page() {
  const reduxCount = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <main style={{ padding: 32 }}>
      <h1>Redux count: {reduxCount}</h1>
      <button onClick={() => dispatch(increment())}>+ Redux</button>
      <button onClick={() => dispatch(decrement())}>- Redux</button>
    </main>
  );
}
