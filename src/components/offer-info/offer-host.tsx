import React from 'react';
import {Host} from '../../types.ts';

interface OfferHostProps {
  host: Host;
}

const OfferHost = ({ host }: OfferHostProps): React.JSX.Element => {
  const { name, isPro, avatarUrl } = host;
  return (
    <>
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper ${isPro ? 'offer__avatar-wrapper--pro ' : ''}user__avatar-wrapper`}>
          <img className="offer__avatar user__avatar" src={avatarUrl} style={{width: '74px', height: '74px'}}
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{name}</span>
        <span className="offer__user-status">{isPro && 'Pro'}</span>
      </div>
    </>
  );
};

export default OfferHost;
