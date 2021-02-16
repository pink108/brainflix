import React from 'react';
import CommentItem from './CommentItem';


function CommentsList(props) {
    return (
        <div>
            <ul id="commentlist" className= "commentlist"> 
                {props.videoData.comments.map ((comment) => (
                    <div className="commentlist__container">
                        <CommentItem  
                        avatar={props.avatar}
                        id={comment.id}
                        temp={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}/>
                        <hr className="commentlist__divider"/>
                    </div>                        
                ))}                         
            </ul> 
        </div>
    )
}

export default CommentsList;
