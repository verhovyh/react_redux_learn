import React from 'react';
import Favcard from '../components/favorites/FavCard.jsx';

export const Favorites = () => (
    <div className="row">
      <div className="col"/>
      <div className="col-10">
        <Favcard/>
        <Favcard/>
        <Favcard/>
        <Favcard/>
        <Favcard/>
      </div>
      <div className="col"/>
    </div>
);
