import React, { Component } from 'react';
import Marquee from './Marquee';
import Clock from './Clock';
import UserNameForm from './UserNameForm';

class NavBar extends Component {

  render() {
    return (

      <div>
        <nav className="navbar">
          <img src={require('./icons/connection.svg')} className="game-icon"/>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Marquee gameState={this.props.gameState}/>
            </li>
          </ul>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <span className="nav-link">
                <Clock time={this.props.timeLeft}/>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link"> - </span>
            </li>
            <li className="nav-item">
              <a href="/" className="navbar-brand">{this.props.gameType}</a>
            </li>
            <li className="nav-item">
              <span className="nav-link disabled">
                <img src={'https://api.adorable.io/avatars/60/' + this.props.currentUser + '.io.png'} className="profile-img"/>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="userDropdownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.currentUser}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="userDropdownButton">
                    <UserNameForm/>
                  </div>
                </div>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;