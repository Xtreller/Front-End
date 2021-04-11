import React from 'react';
import '../../style/Contacts.css'

class Contacts extends React.Component {
    constructor() {
        super()
        this.state = {
            mail: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        const field = e.target.dataset.name;
        const value = e.target.value;
        const newMail = {};
        newMail[field] = value;
        this.setState({
            mail: Object.assign(this.state.mail, newMail)
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('click');
        fetch('http://localhost:5000/auth/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.mail)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
                <div >
                    <form className="contact-form">
                        <h2>Contact Us: </h2>
                        <div className="form-group">
                            <label htmlFor="Email">Your Email</label>
                            <input type="text" data-name="email"
                                placeholder="Email Address"
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" >Message For Us</label>
                            <textarea data-name="message" type="text"
                                placeholder="Tell us your purpose"
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div >
                            <button type="submit" onClick={(e) => this.handleSubmit(e)}>Send A Request</button>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
};

export default Contacts;