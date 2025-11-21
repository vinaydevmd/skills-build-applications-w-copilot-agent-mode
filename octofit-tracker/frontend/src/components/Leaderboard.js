import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboard(results);
        console.log('Leaderboard data:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, [endpoint]);

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title text-success mb-3">Leaderboard</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.length === 0 ? (
              <tr><td colSpan="4" className="text-center">No leaderboard entries found.</td></tr>
            ) : (
              leaderboard.map((entry, idx) => (
                <tr key={entry.id || idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{entry.name || '-'}</td>
                  <td>{entry.score || '-'}</td>
                  <td>{entry.details || JSON.stringify(entry)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <button className="btn btn-success mt-2" onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </div>
  );
};

export default Leaderboard;
