import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Predict from './components/pages/Predict';
import Results from './components/pages/Results';
import Resources from './components/pages/Resources';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import TestTailwind from './components/TestTailwind';

function App() {
  return (
    <Router basename="/react">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/results" element={<Results />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestTailwind />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
