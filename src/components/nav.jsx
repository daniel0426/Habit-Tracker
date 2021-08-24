import React, { PureComponent } from 'react';

class nav extends PureComponent {
    render() {
        return (
            <nav className="navbar">
            <i className="navbar-logo fas fa-leaf"></i>
                <span className="nav">Habit Tracker App </span>
                <span className ="navbar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default nav;