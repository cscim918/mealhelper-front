import { useMemo } from 'react';

export default function useData(){
  const data = useMemo(
    () => [
      {
        age: '6~8',
        man: '1700',
        woman: '1500'
      },
      {
        age: '9~11',
        man: '2100',
        woman: '1800'
      },
      {
        age: '12~14',
        man: '2500',
        woman: '2000'
      }
    ],[]
  );
  return data;
}
