import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IProps extends RouteComponentProps {
  link: string;
  name: string;
  icon: IconProp;
}

function StructureMenuItem(props: IProps) {
  return (
    <Link to={props.link}>
      <hot-menu-item {...(props.location.pathname === props.link && { active: 'true' })}>
        <div className="hot-application-menu__icon">
          <FontAwesomeIcon icon={props.icon}/>
        </div>
        <span>{props.name}</span>
      </hot-menu-item>
    </Link>
  )
}

export default withRouter(StructureMenuItem);
