import { Routes, Route, Navigate } from 'react-router-dom';

import { PageWrapper } from './pages/PageWrapper/PageWrapper';
import { About } from './pages/About/About';
import { Lineage } from './pages/Lineage/Lineage';
import { Teachers } from './pages/Teachers/Teachers';
import { Library } from './pages/Library/Library';
import { Media } from './pages/Media/Media';
import { Feedback } from './pages/Feedback/Feedback';
import { Online } from './pages/Online/Online';
import { Shop } from './pages/Shop/Shop';
import TeaShop from './pages/TeaShop/TeaShop';
import { Contacts } from './pages/Contacts/Contacts';

import { ROUTES } from './constants';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<PageWrapper />}>
        <Route path={ROUTES.main} element={<About />} />
        <Route path={ROUTES.lineage} element={<Lineage />} />
        <Route path={ROUTES.teachers} element={<Teachers />} />
        <Route path={ROUTES.library} element={<Library />} />
        <Route path={ROUTES.media} element={<Media />} />
        <Route path={ROUTES.feedback} element={<Feedback />} />
        <Route path={ROUTES.online} element={<Online />} />
        <Route path={ROUTES.shop} element={<Shop />} />
        <Route path={ROUTES.teaShop} element={<TeaShop />} />
        <Route path={ROUTES.contacts} element={<Contacts />} />
        <Route path="*" element={<Navigate replace to={ROUTES.main} />} />
      </Route>
    </Routes>
  );
};
