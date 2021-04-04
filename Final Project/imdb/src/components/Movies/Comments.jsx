import React, { Component } from 'react';
import '../../style/Comments.css'

class Comments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            newComment: ''
        }
        this.addComment = this.addComment.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    getComments() {
        const movieid = this.props.movieid;
        fetch('http://localhost:5000/catalogue/movie/comments/' + movieid)
            .then(data => data.json())
            .then(res => this.setState({ comments: res.comments }))
            .catch(err => console.log(err))
    }
    handleChange(e) {
        const field = e.target.dataset.name || e.target.name;
        const value = e.target.value;
        const newComment = {};
        newComment[field] = value;
        this.setState({ newComment, err: "" })
    }
    addComment(e) {
        e.preventDefault();
        const movieid = this.props.movieid;
        if (!this.state.newComment) {
            return this.setState({ err: 'Comment cant be empty!' })
        }
        else {
            fetch('http://localhost:5000/catalogue/movie/addComment/' + movieid, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.newComment),
            })
                .then(res => res.json())
                .then(res => this.setState({ comments: res.comments }))
                .catch(err => console.log(err));
        }
        this.setState({ newComment: '' });
        document.getElementsByTagName('input')[0].value = ""
    }
    componentDidMount = () => this.getComments();
    render() {
        return (
            <div className="comment-container">
                <form onSubmit={this.addComment}>
                    {<label className='err' htmlFor="comment-input">{this.state.err}</label>}
                    <input type='text' className="comment-input" data-name="comment" onChange={this.handleChange} />
                    <button className="comment-btn" type="submit">Post Comment</button>
                </form>
                <ul>
                    {this.state.comments !== [] ? this.state.comments.reverse().slice(0, 7).map((cmnt, idx) => <li className="comment-li" key={idx}>{cmnt}</li>) : "Be the first to comment!"}
                </ul>
            </div>
        );
    }
}

export default Comments;