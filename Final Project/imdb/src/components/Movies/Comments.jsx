import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Comments.css'

const FnComment = props => {
    const [comment, setComment] = useState();
    const [err, setError] = useState('');
    const [comments, setComments] = useState(props.comments ? props.comments.reverse() : [])
    useEffect(() => {
        setComments(props.comments ? props.comments.reverse().slice(0,7) : []);
    }, [props.comments])
    const handleSubmit = e => {

        e.preventDefault();
        if (!comment) {
            setError('Field cannot be empty!')
            return
        }
        props.addComment(comment)
        document.getElementsByTagName('input')[0].value = "";
        setComment('');
        setError('')
        console.log(props.comments.reverse().slice(0, 7))
    }
    return (
        <div className="comment-container">
            {localStorage.getItem('blocked') ?
                <form onSubmit={e => handleSubmit(e)}>
                    {<label className='err' htmlFor="comment-input">{err}</label>}
                    <input type='text' className="comment-input" data-name="comment" onChange={e => setComment(e.target.value)} />
                    <button className="comment-btn" type="submit">Post Comment</button>
                </form> : <span className='blocked'>
                    You can't comment because you have been blocked by the Admins of this site. For more information {<Link to={'/Contacts'}> Contact us</Link>}
                </span>
            }
            <ul>
                {comments ? comments.map((cmnt, idx) => <li className="comment-li" key={idx}>{cmnt}</li>) : "Be the first to comment!"}
                <li>view all: {comments ? comments.length : 0}</li>
            </ul>
        </div>
    );
}
export default FnComment;