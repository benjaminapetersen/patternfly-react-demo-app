import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RouteNavItem } from './RouteNavItem';
import * as cx from 'classnames';

export const VerticalNav = props => {
  const overviewClass = cx({
    'list-group-item': true,
    'secondary-nav-item-pf': true,
    active: window.location.pathname === '/'
  });

  const navItems = ([{
    href: '/overview',
    text: 'Overview',
    className: cx({
      'list-group-item': true,
      'secondary-nav-item-pf': true,
      active: window.location.pathname === '/'
    }),
    children: [{
      href: '/projects',
      text: 'Projects'
    },{
      href: '/stages',
      text: 'Stages'
    }]
  },{
    href: '/ipsum',
    text: 'Ipsum'
  }, {
    href: '/dolor',
    text: 'Dolor'
  }, {
    href: '/amet',
    text: 'Amet'
  }, {
    href: '/orbis',
    text: 'Orbis'
  }]);

  return (
    <div className="nav-pf-vertical">
      <ul className="list-group">

        {navItems.map((item) => {
          return (
          <RouteNavItem
            href={item.href}
            onClick={props.handleNavClick}
            className="list-group-item">
            <span className="fa fa-shield" data-toggle="tooltip" title={item.text} />
            <span className="list-group-item-value {item.className}">{item.text}</span>
            {item.children && item.children.length > 0 &&
              <ul className="list-group">
                {item.children.map((child) => {
                  return (
                    <li className="list-group-item">
                      <Link to="{child.href}">
                        <span className="list-group-item-value">{child.text}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            }
          </RouteNavItem>)
        })}
      </ul>
    </div>
  );
};
VerticalNav.propTypes = {
  handleNavClick: PropTypes.func
};
