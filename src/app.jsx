import React, { Suspense } from 'react';
import Loader from 'uielements/loader/loader.component';
const HoteListing = React.lazy(() => import('components/hotellisting'));
import './app.scss';

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <HoteListing />
    </Suspense>
  );
}
