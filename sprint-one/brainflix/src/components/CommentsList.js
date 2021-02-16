import React from 'react'
import CommentItem from './CommentItem';


function CommentsList(props) {
    // const { id } = props.videoData.comments.id;
    return (
        <div>
            <ul id="commentlist" className= "commentlist"> 
                {props.videoData.comments.map ((comment) => (
                    <div className="commentlist__container">
                        <CommentItem  
                        avatar={props.avatar}
                        id={comment.id}
                        key={comment.id}
                        name={comment.name}
                        comment={comment.comment}
                        timestamp={comment.timestamp}
                        />
                        <hr className="commentlist__divider"/>
                    </div>                        
                ))}                         
            </ul> 
        </div>
    )
}

export default CommentsList
