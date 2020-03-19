import React from 'react';
import { Card, CardContent } from 'framework7-react';
import AppsTableList from './AppsTableList';
import './AppstoreCard.less';

const AppstoreCard = ({
  image,
  imageAlt = '',
  title = '',
  titleColor = '#000',
  subtitle = '',
  subtitleColor = '#000',
  titleLarge = false,
  titlePosition = 'top',
  app,
  children,
}) => {
  const titleStyle = {
    color: titleColor,
  };
  if (titleLarge) {
    Object.assign(titleStyle, {
      fontSize: '44px',
      fontWeight: 800,
      lineHeight: 1,
    });
  }
  return (
    <Card expandable className="appstore-card">
      <CardContent padding={false}>
        <div className={`appstore-card-header appstore-card-header-text-${titlePosition}`}>
          <img src={image} alt={imageAlt} />
          <div className="appstore-card-header-text">
            <div className="appstore-card-subtitle" style={{ color: subtitleColor }}>{subtitle}</div>
            <div className="appstore-card-title" style={titleStyle}>{title}</div>
          </div>
          {app && (
            <AppsTableList apps={[app]} />
          )}
        </div>
        <div className="appstore-card-content card-content-padding">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppstoreCard;
