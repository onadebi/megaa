import React from 'react';
import PropTypes from 'prop-types';



const ListGroup=(props)=> {
    const {TextProperty, ValueProperty, onGenreSelect,SelectedGenre}= props;
    return (
        <div style={{marginTop:'40px'}}>
            <ul className="list-group">
                {props.Items.map(g=>  (
                    <li 
                    className={SelectedGenre === g ? "list-group-item active": "list-group-item"} 
                    key={g[ValueProperty]} onClick={()=> onGenreSelect(g)} style={{cursor:'pointer'}}>{g[TextProperty]}</li>
                ))}
            </ul>
        </div>
    )
}

ListGroup.defaultProps ={
    TextProperty: 'name',
    ValueProperty: '_id'
}
export default ListGroup;