import React from 'react';
import Header from './components/Header';
import LeontraMain from './components/LeontraMain';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Main Article Content from Website Clone */}
        <LeontraMain />
      </main>
      <Footer />
    </div>
  );
}

export default App;