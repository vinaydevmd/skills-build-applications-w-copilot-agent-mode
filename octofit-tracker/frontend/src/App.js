
import './App.css';

import logo from '../public/logo192.png';


function App() {
  return (
    <div className="App bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/activities">Activities</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/teams">Teams</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
              </li>
            </ul>
            <span className="navbar-text text-white">Stay Fit. Stay Competitive.</span>
          </div>
        </div>
      </nav>
      <div className="container py-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card shadow-sm">
              <div className="card-body">
                <h1 className="card-title text-center text-primary mb-3">Welcome to Octofit Tracker!</h1>
                <p className="card-text text-center">Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
                <div className="d-flex justify-content-center">
                  <NavLink to="/activities" className="btn btn-primary mx-2">View Activities</NavLink>
                  <NavLink to="/leaderboard" className="btn btn-success mx-2">Leaderboard</NavLink>
                  <NavLink to="/teams" className="btn btn-info mx-2">Teams</NavLink>
                  <NavLink to="/users" className="btn btn-warning mx-2">Users</NavLink>
                  <NavLink to="/workouts" className="btn btn-danger mx-2">Workouts</NavLink>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
