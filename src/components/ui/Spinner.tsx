import HashLoader from 'react-spinners/HashLoader';
import { CSSProperties } from 'react';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const Spinner = () => {
  return (
    <div className='absolute flex justify-center items-center h-[calc(100%-110px)] w-[calc(100%-70px)]'>
      <HashLoader
        color='rgb(249 115 22 / 1)'
        loading
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
};

export default Spinner;
