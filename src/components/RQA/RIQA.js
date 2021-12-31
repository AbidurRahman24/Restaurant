import React from 'react';
import './RIQA.css'
import Nav from '../shared/Nav/Nav';
import JSX from './img/JSX.png'
import dom1 from './img/1dom.png'
import dom2 from './img/2dom.png'
import dom3 from './img/3dom.png'
import es6a from './img/es6-1.png'
import es6b from './img/es6-2.png'
import es6c from './img/es6-3.png'
import es6d from './img/es6-4.png'
import es6e from './img/es6-5.png'

const RIQA = () => {
    return (
        <div >
            <Nav></Nav>
            <div className="riqa-header">
                <div className="riqa-container">
                    <div className="react-header-title text-center">
                        <h3>React Interview Question & Answer</h3>
                        <hr />
                    </div>
                    <h5 className='question'>1. What is React?</h5>
                    <p>
                        <ul>
                            <li>React is a front-end JavaScript library developed by Facebook in 2011.</li>
                            <li>It follows the component based approach which helps in building reusable UI components.</li>
                            <li>It is used for developing complex and interactive web and mobile UI.</li>
                            <li>Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.</li>
                        </ul>
                    </p>
                    <h5 className='question'>2. What are the features of React? </h5>
                    <p>Major features of React are listed below:</p>
                    <ul>
                        <li>It uses the virtual DOM instead of the real DOM.</li>
                        <li>It uses server-side rendering.</li>
                        <li>It follows uni-directional data flow or data binding.</li>
                    </ul>
                    <div className="question-section">
                        <h5 className='question'>3. List some of the major advantages of React.</h5>
                        <p>Some of the major advantages of React are:</p>
                        <ul>
                            <li>It increases the application’s performance</li>
                            <li>It can be conveniently used on the client as well as server side</li>
                            <li>Because of JSX, code’s readability increases</li>
                            <li>React is easy to integrate with other frameworks like Meteor, Angular, etc</li>
                            <li>Using React, writing UI test cases become extremely easy</li>
                        </ul>
                    </div>
                    <div className="question-section">
                        <h5 className='question'>4. What are the limitations of React?</h5>
                        <p>Limitations of React are listed below:</p>
                        <ul>
                            <li>React is just a library, not a full-blown framework</li>
                            <li>ts library is very large and takes time to understand</li>
                            <li>It can be little difficult for the novice programmers to understand</li>
                            <li>Coding gets complex as it uses inline templating and JSX</li>
                        </ul>
                    </div>
                    <div className="question-section">
                        <h5 className='question'>5. What is JSX?</h5>
                        <p>JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. Below is an example of JSX:</p>
                        <img src={JSX} alt="" />
                    </div>
                    <div className="question-section">
                        <h5 className='question'>7. What do you understand by Virtual DOM? Explain its works.</h5>
                        <p>A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.</p>
                        <p>This Virtual DOM works in three simple steps.</p>
                        <ol>
                            <li>Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.</li>
                            <img className='question-image' src={dom1} alt="" />
                            <li>Then the difference between the previous DOM representation and the new one is calculated.</li>
                            <img className='question-image' src={dom2} alt="" />
                            <li>Once the calculations are done, the real DOM will be updated with only the things that have actually changed. </li>
                            <img className='question-image' src={dom3} alt="" />
                        </ol>
                    </div>
                    <div className="question-section">
                        <h5 className='question'>8. Why can’t browsers read JSX?</h5>
                        <p>Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.</p>
                    </div>
                    <div className="question-section">
                        <h5 className='question'>9. How different is React’s ES6 syntax when compared to ES5?</h5>
                        <p>Syntax has changed from ES5 to ES6 in the following aspects:</p>
                        <ol type="I">
                            <li>require vs import</li>
                            <img className='question-image' src={es6a} alt="" />
                            <li>export vs exports</li>
                            <img className='question-image' src={es6b} alt="" />
                            <li>component and function</li>
                            <img className='question-image' src={es6c} alt="" />
                            <li>props</li>
                            <img className='question-image' src={es6e} alt="" />
                        </ol>
                    </div>
                    <div className="question-section">
                        <h5 className='question'>10. How is React different from Angular?</h5>
                        <table id="customers">
                            <tr>
                                <th>TOPIC</th>
                                <th>REACT</th>
                                <th>ANGULAR</th>
                            </tr>
                            <tr>
                                <td>1. ARCHITECTURE	</td>
                                <td>Only the View of MVC	</td>
                                <td>Complete MVC</td>
                            </tr>
                            <tr>
                                <td>2. RENDERING	</td>
                                <td>Server-side rendering	</td>
                                <td>Client-side rendering</td>
                            </tr>
                            <tr>
                                <td>3. DOM</td>
                                <td>Uses virtual DOM</td>
                                <td>Uses real DOM</td>
                            </tr>
                            <tr>
                                <td>4. DATA BINDING	</td>
                                <td>One-way data binding	</td>
                                <td>Two-way data binding</td>
                            </tr>
                            <tr>
                                <td>5. DEBUGGING	</td>
                                <td>Compile time debugging	</td>
                                <td>Runtime debugging</td>
                            </tr>
                            <tr>
                                <td >6. AUTHOR</td>
                                <td>Facebook</td>
                                <td>Google</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RIQA;