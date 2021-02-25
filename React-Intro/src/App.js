import React ,{Component} from 'react';
import './style/app.css';
import contacts from './contacts.json';
import rerender from './index';
import Counter from './Counter/Counter'
import Timer from './Timer/Timer';

let contactIndex = 0;
const selectedContactDetails = index => {
    contactIndex = index
    rerender(App(),document.getElementById('root'));
    };
    

const ContactList = (data,index) => ( 
<div className="contact" data-id="id" key={index} onClick={e=>selectedContactDetails(index,e)}>
    <span className="avatar small">&#9787;</span>
    <span className="title">{data.firstName} {data.lastName}</span>
</div>)

const ContactDetails = data =>{

    return(
<div id="details">
          <h1>Details</h1>
          <div className="content">
              <div className="info">
                  <div className="col">
                      <span className="avatar">&#128522;</span>
                  </div>
                  <div className="col">
                      <span className="name">{data.firstName}</span>
                      <span className="name">{data.lastName}</span>
                  </div>
              </div>
              <div className="info">
                  <span className="info-line">&phone;{data.phone}</span>
                  <span className="info-line">&#9993; {data.email}</span>
              </div>
          </div>
      </div>
)}
function renderContacts() {
  let list = [];
  let id =0;
  contacts.forEach(contact => {
      id++;
    list.push(ContactList(contact,list.length));
  });
  return list
}

const App = () => (
    <div className="container">
        
  <header>&#9993; Contact Book</header>
  <div id="book">
      <div id="list">
          <h1>Contacts</h1>
          <div className="content">
              {renderContacts()}
          </div>
      </div>
      {ContactDetails(contacts[contactIndex])}
      {Counter()}
      {Timer()}
       
      <footer>Contact Book SPA &copy; 2017</footer>
</div>
</div>
  )
  

export default App;
