import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import RootLayout from '@layouts/RootLayout';
import Home from '@pages/Home';
import About from '@pages/About';
import Services from '@pages/Services';
import WritingPortfolio from '@pages/WritingPortfolio';
import Writing from '@pages/Writing';
import FoundingClients from '@pages/FoundingClients';
import FAQ from '@pages/FAQ';
import Contact from '@pages/Contact';
import NotFound from '@pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <RootLayout>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/writing-portfolio" element={<WritingPortfolio />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/founding-clients" element={<FoundingClients />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </RootLayout>
  );
}
