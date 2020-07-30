import React, { Component } from 'react';

import ratings from '../data/movie-ratings.json';

class MovieGuide extends Component {
  render() {
    return (
      <div>
        <p className="mb-12">
          This section is a work in progress. The hope is to create an extensive and searchable guide of Marc's movie ratings, recommendations, and various lists he curated over years of movie viewing enthusiam. Alternatively, you can view his <a className="no-underline hover:underline text-blue-500" href="https://rateyourmusic.com/~mleitner" target="_blank" rel="noopener noreferrer">Rate Your Music profile</a> to see all his movie and music ratings.
        </p>

        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Release Date</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Rated On</th>
            </tr>
          </thead>
          <tbody>
            { ratings.map(movie => {
              return (
                <tr>
                  <td className="border px-4 py-2">{ movie["Title"] }</td>
                  <td className="border px-4 py-2">{ movie["Release_Date"] }</td>
                  <td className="border px-4 py-2">{ movie["Rating"] }</td>
                  <td className="border px-4 py-2">{ movie["Catalog_Date"] }</td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default MovieGuide;
