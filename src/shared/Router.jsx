import { Routes, Route } from 'react-router-dom';
import Navbar from '../page/Navbar';
import Home from '../page/Home';
import Detail from '../page/Detail';
import Create from '../page/Create';
import Write from '../page/Write';

export default function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
}
