import React, { useState } from 'react'

export function CardTwitter ({userName, name, initialIsFollowing}) {
const [isFollowing, setIsFollowing]= useState (initialIsFollowing)

  const imgSrc = `https://unavatar.io/twitter/${userName}`
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleclik = () => {
    setIsFollowing(!isFollowing)

  }
 
  return (
    
    <article  className="tw-followCard">
      <header className="tw-followCard-header">
        <img 
        className='tw-followCard-avatar'
        alt="El avatar de jeroviclpv"
        src={imgSrc}/>
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <br />
          <span className='tw-followCard-infoUsernName'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName}onClick={handleclik}>
          {text}
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )}

  export default CardTwitter