import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';

import  './directory.styles.scss';

const  Directory =({sections}) =>{
   return(
        <div className="directory-menu">
        {
           sections.map(({id, ...otherSectionProps}) =>(      //otherSectionProps is used for destructuring 
              <MenuItem key={id} {...otherSectionProps} />                // and we have not to write.. 
           ))
        }
    </div>
    )
    }

const mapStateToProps= createStructuredSelector({
  sections:selectDirectorySections
});
export default connect(mapStateToProps)(Directory);