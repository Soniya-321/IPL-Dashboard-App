// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
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
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="first-container">
        <div>
          <p className="competingTeam">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            className="competingTeamLogo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
      </div>
      <hr className="separator" />
      <div className="second-container">
        <h5>First Innings</h5>
        <p>{firstInnings}</p>
        <h5>Second Innings</h5>
        <p>{secondInnings}</p>
        <h5>Man Of The Match</h5>
        <p>{manOfTheMatch}</p>
        <h5>Umpires</h5>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
