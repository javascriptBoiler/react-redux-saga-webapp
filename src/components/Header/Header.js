import React from 'react';
import { Link } from 'react-router-dom'
import { map as ArrayMap } from 'lodash'
import { FaBars, FaOutdent } from "react-icons/fa";

// import PropTypes from 'prop-types';
import './styles.css'


class navbar extends React.Component {

    state = {
        menuItems: this.props.menus || [],
        navButtonChange: false,
        activeRoute: '',
        logo: this.props.logo || null,
        display: false,
    };

    onChangeActiveState = (activePath) => {
        this.setState({
            // navButtonChange: !this.state.navButtonChange,
            activeRoute: activePath,
            display: activePath !== this.state.activeRoute ? true : !this.state.display
        });
    }


    onChangeShowmore = () => {
        this.setState({
            navButtonChange: !this.state.navButtonChange,
        });
    }

    mainMenuClick = (activePath) => {
        this.setState({
            // navButtonChange: !this.state.navButtonChange,
            activeRoute: activePath,
            display: activePath !== this.state.activeRoute ? true : !this.state.display
        });
        this.hideNavBar()
    }

    submenuClick = (activePath) => {
        this.setState({
            // navButtonChange: !this.state.navButtonChange,
            activeRoute: activePath,
            display: activePath !== this.state.activeRoute ? true : !this.state.display
        });
        this.hideNavBar()
    }

    hideNavBar = () => {
        this.setState({
            navButtonChange: false,
        });
    }

    render() {

        const { navButtonChange, menuItems, activeRoute, logo, display } = this.state;

        const menuArr = ArrayMap(menuItems, (each) => {
            return (
                <ul key={each.id} className={each.submenu.length > 0 ? 'submenu' : ''}>
                    <li className={activeRoute === each.name && display ? 'active' : ''}>
                        {
                            each.submenu.length > 0
                                ?
                                <div>
                                    <Link to={`#`} className={activeRoute === each.name ? 'active' : ''} onClick={() => this.onChangeActiveState(each.name)}><span>{each.name}</span></Link>
                                    <ul>
                                        {
                                            ArrayMap(each.submenu, (submenu) => {
                                                return (
                                                    <li key={submenu.id}>
                                                        <Link to={`${submenu.path}`} onClick={() => this.submenuClick(submenu.name)}>{submenu.name}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            : <Link to={`${each.path}`} className={activeRoute === each.name ? 'active' : ''} onClick={() => this.mainMenuClick(each.name)}>{each.name}</Link>
                        }
                    </li>
                </ul>
            )
        })

        return (

            <header>
                
                <div className={'logo'}>{logo != null ? logo : 'Logo'}</div>
                <nav className={navButtonChange ? 'activate' : ''}>
                    {menuArr}
                </nav>
                <div
                    role="button"
                    className={'menu-toggle'}
                    onClick={this.onChangeShowmore}
                >
                    {navButtonChange ? <FaOutdent /> : <FaBars />}
                </div>
            </header>
        );
    }
};

// navbar.propTypes = {
//     menus: PropTypes.array
// };

export default navbar;
