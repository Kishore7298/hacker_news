import React from 'react';
import StatusBar from './Statusbar/Statusbar';
import CommentList from './CommentList/CommentList';

const CommentContainer = ()=>{
    return (
        <div>
            {/* <div>

            </div>
            <div className="d-flex justify-content-center align-items-center mt-5" >
               <h3>
                    Please login to continue...
               </h3>
            </div> */}

            <div className="d-flex justify-content-center align-items-center mt-4 flex-column">
                <StatusBar />
                <CommentList />
            </div>
        </div>
    )
}

export default CommentContainer;