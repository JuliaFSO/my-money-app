import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { logout } from '../../auth/authActions'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  changeOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { name, email } = this.props.user
    return (
      <nav className='navbar-custom-menu'>
        <ul className='nav navbar-nav'>
          <li onMouseLeave={() => this.changeOpen()}
            className={`dropdown user user-menu ${this.state.open ? 'open' : ''}`}>
            <Link to='/' onClick={() => this.changeOpen()}
              aria-expanded={this.state.open ? 'true' : 'false'}
              className='dropdown-toggle' data-toggle='dropdown'>
              <img src='img/user2-160x160.jpg' className='user-image' alt='User Image' />
              <span className='hidden-xs'>{name}</span>
            </Link>
            <ul className='dropdown-menu'>
              <li className='user-header'>
                <img src='img/user2-160x160.jpg' className='img-circle' alt='User Image' />
                <p>{name}<small>{email}</small></p>
              </li>
              <li className='user-footer'>
                <div className='pull-right'>
                  <Link to='/' onClick={this.props.logout}
                    className='btn btn-default btn-flat'>Logout</Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
