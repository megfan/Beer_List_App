import React from 'react';


const Form = props => (
  <div className='welcome_question'>
    <h1 className="welcome">Welcome to the Worl <span>Best</span> Beer List</h1>
    <h2 className="welcome">Are you over 18 years old?</h2>
    <button className="form__button" onClick={props.getBeers}>YES</button>
    <button className="form__button">NOPE</button>
  </div>
);
export default Form;