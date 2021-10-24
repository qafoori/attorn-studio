import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/root-reducer';
import { Global } from './store/actions'

export const AppEntryPoint: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { test } = useSelector((s: RootState) => s.globals);

  return (
    <>
      <h2>{test}asdasd</h2>
      <button onClick={() => dispatch(Global.test(test + 1))}>+</button>
      <button onClick={() => dispatch(Global.test(test - 1))}>-</button>
    </>
  )
}
