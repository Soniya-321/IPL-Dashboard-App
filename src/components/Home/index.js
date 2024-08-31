// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}
  componentDidMount() {
    this.getTeamcards()
  }
  getTeamcards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsList = data.teams
    const updatedData = teamsList.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCardList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="app-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo-img"
              />
              <h1 className="logo-name">IPL Dashboard</h1>
            </div>
            <ul className="teamCards-container">
              {teamCardList.map(each => (
                <TeamCard teamCardList={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
