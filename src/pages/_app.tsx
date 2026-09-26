import '../globalStyles.css';

import type {AppProps} from 'next/app';
import type {ReactElement} from 'react';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): ReactElement => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
