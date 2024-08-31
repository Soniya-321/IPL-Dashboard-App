// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCardList} = this.props
    const {id, name, teamImageUrl} = teamCardList
    return (
      <Link to={`/team-matches/${id}`} className="team-link-item">
        <li className="team-container">
          <img src={teamImageUrl} className="team-img" alt={`${name}`} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
