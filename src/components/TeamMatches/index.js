// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }
  componentDidMount() {
    this.getMatchDetails()
  }
  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamDetails = await response.json()
    const teamBannerUrl = teamDetails.team_banner_url
    const latestMatchDetails = teamDetails.latest_match_details
    const recentMatches = teamDetails.recent_matches

    const updatedLatestMatches = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    const updatedBannerUrl = teamBannerUrl

    this.setState({
      latestMatchDetails: updatedLatestMatches,
      recentMatches: updatedRecentMatches,
      teamBannerUrl: updatedBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {latestMatchDetails, recentMatches, teamBannerUrl, isLoading} =
      this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-matches-container">
            <img
              src={teamBannerUrl}
              className="team-banner-img"
              alt="team banner"
            />
            <h4 className="latest-matches-heading">Latest matches</h4>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="matches-container">
              {recentMatches.map(each => (
                <MatchCard recentMatches={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
