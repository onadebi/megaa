import React from 'react';
import _ from 'lodash'

const MoviesPagination =(props)=> {
    console.log('Current page selected is ', props.currentPage);
    const moviesCount = props.movieProps.length;
    const {pageSize} = props;
    console.log('Page size is ', pageSize);
    let pageCount = Math.ceil(moviesCount/pageSize);
    const arrayCount = _.range(1, pageCount+1);
    console.log('Page count cieled is ', pageCount);
    let paging = arrayCount.map((page)=>{
        return <li className={props.currentPage === page ? 'page-item active': 'page-item'} key={page}><button className="page-link" onClick={()=>props.OnPageChange(page)}>{page}</button></li>
    });
   
  return (
    <nav arial-label='Page navigation example' className='pull-right'>
        <ul className="pagination">
        {pageCount <= 1 ? null: paging}
            
        </ul>
    </nav>
   
  )
}


export default MoviesPagination;