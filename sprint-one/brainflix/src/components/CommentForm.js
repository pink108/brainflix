import React from 'react'
import Button from './Button';
import UserImage from './UserImage';

function CommentForm(props) {
    return (
        <section className="comments">
            <div className="comments__conversations">
                <h2 className="comments__heading">{props.CommentListDetails.comments.length} Comments</h2>
                <div className= "comments__commentscontainer">
                    <UserImage className="comments__userimage" user={props.user}/>
                    {/* <img className="comments__userimage" src={props.user} alt="user image"/> */}
                    <form id= "comments__form" className="comments__form">
                    <div className="comments__testingbutton">
                        <div className="comments__testing">
                            <label htmlFor="comment" className="comments__formlabel">JOIN THE CONVERSATION</label>
                            <textarea id="comment" className="comments__forminput comments__forminput--active" name="comment_description" placeholder="This was easily the most specacular BMX moment ever." required></textarea>
                        </div> 
                        <Button text="COMMENT" className="comments__formsubmit" />
                        {/* <button className="comments__formsubmit" type="submit">COMMENT</button> */}
                    </div>
                    </form>
                </div>
            </div> 
            <hr className="comments__divider"/>
        </section> 
    )
}

export default CommentForm
