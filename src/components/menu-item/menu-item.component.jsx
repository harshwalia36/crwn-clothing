import React from 'react';
import {withRouter} from 'react-router-dom';
import  './menu-item.styles.scss';

const MenuItem= ({title,imageUrl,size,history,linkUrl,match}) =>(     //pulling of title from props through destructuring
    <div  className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
                                                      {/* /*inside push means that add linkUrl to match.url(currenturl)*/ }
        <div className="background-image" style={{
        backgroundImage:`url(${imageUrl})`
    }}>
    </div>
        <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
     </div>
    </div>  
);

export default withRouter(MenuItem);   //withRouter is a higher order component that takes component as a argument and 
                                       //Ans then returns u the new modified component.