// Write your code here
import './index.css'
const MatchCard = props => {
  const {recentMatches} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = recentMatches
  const status = matchStatus === 'Won' ? 'won-status' : 'lost-status'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="match-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-heading">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`${status}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
