import React, { Component } from 'react';
import '../css/newsPage.css';

import portalImage from '../images/portals.png'
import mushroomImage from '../images/mushrooms.png'
import minecraftAvatarImage from '../images/minecraftAvatar.png'
import girlAvatarImage from '../images/girlAvatar.png'
import shapeBuilderImage from '../images/shapeBuilder.png'
import zeoForestImage from '../images/zeoForest.png'

const newsItems = [
  {
    title: 'Title one',
    img: 'https://cdn.rawgit.com/webmixedreality/exokit-site/6723ae34/src/images/portals.png',
    date: 'Apr 1st',
  },
  {
    title: 'Title two',
    img: 'https://cdn.rawgit.com/webmixedreality/exokit-site/6723ae34/src/images/mushrooms.png',
    date: 'Apr 1st',
  },
  {
    title: 'Title three',
    img: 'https://cdn.rawgit.com/webmixedreality/exokit-site/6723ae34/src/images/minecraftAvatar.png',
    date: 'Apr 1st',
  },
  {
    title: 'Title one',
    img: 'https://cdn.rawgit.com/webmixedreality/exokit-site/6723ae34/src/images/portals.png',
    date: 'Apr 1st',
  },
  {
    title: 'Title two',
    img: 'https://cdn.rawgit.com/webmixedreality/exokit-site/6723ae34/src/images/mushrooms.png',
    date: 'Apr 1st',
  },
  {
    title: 'Title three',
    img: 'https://cdn.rawgit.com/webmixedreality/exokit-site/6723ae34/src/images/minecraftAvatar.png',
    date: 'Apr 1st',
  },
];

class NewPage extends Component {
  render() {
    const newsPerRow = 4;
    const rows = [];
    for (let i = 0; i < newsItems.length; i += newsPerRow) {
      rows.push(newsItems.slice(i, i + newsPerRow));
    }

    return (
      <div className='newsPage'>
        <h1 className='heading display-4'>News</h1>

        {rows.map(row =>
          <div className='row'>
            {row.map(newsItem =>
              <a className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                <div className="card">
                  <img className="card-img-top" src={newsItem.img} alt="Card"/>
                  <div className="card-body">{newsItem.title}</div>
                </div>
                <div className='card-footer d-flex justify-content-flex-start'>{newsItem.date}</div>
              </a>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default NewPage;