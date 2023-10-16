import { Routes, Route, Navigate } from 'react-router-dom';

import { PageWrapper } from './pages/PageWrapper/PageWrapper';
import { About } from './pages/About/About';
import { Lineage } from './pages/Lineage/Lineage';
import { Teachers } from './pages/Teachers/Teachers';
import { ROUTES } from './constants';
import { Library } from './pages/Library/Library';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<PageWrapper />}>
        <Route path={ROUTES.main} element={<About />} />
        <Route path={ROUTES.lineage} element={<Lineage />} />
        <Route path={ROUTES.teachers} element={<Teachers />} />
        <Route path={ROUTES.library} element={<Library />} />
        <Route path={ROUTES.media} element={<Lineage />} />
        <Route path={ROUTES.feedback} element={<Lineage />} />
        <Route path={ROUTES.online} element={<Lineage />} />
        <Route path={ROUTES.shop} element={<Lineage />} />
        <Route path={ROUTES.contacts} element={<Lineage />} />
        <Route path="*" element={<Navigate replace to={ROUTES.main} />} />
      </Route>
    </Routes>
  );
};
