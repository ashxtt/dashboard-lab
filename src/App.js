
import React from 'react'
import Dashboard from './components/Dashboard.js'
import Reviews from './components/Reviews.js'
import AverageRating from './components/AverageRating.js'
import SentimentAnalysis from './components/SentimentAnalysis.js'
import WebsiteVisitors from './components/WebsiteVisitors.js'

function App() {
  return (
   <div className="App">
    <Dashboard />
    <Reviews />
    <AverageRating />
    <SentimentAnalysis />
    <WebsiteVisitors />
   </div>
   
  );
}

export default App;
