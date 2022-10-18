import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map((card) => <Card key={card.id} {...card} />);
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="card-container">{cards}</section>
      </main>
    </div>
  );
}
