import React from 'react';
import {Route ,Switch,useRouteMatch} from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.componennt'

import './shop.component.styles.scss';


const ShopPage = () =>{
        let match = useRouteMatch();
        console.log(match);
return ( 
<div className="shop-page">
        <Switch>
                <Route exact path={match.path} component={CollectionsOverview} />
        </Switch>      
 </div>
)};


 export default ShopPage;