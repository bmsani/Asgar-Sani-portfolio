import React from 'react';
import sani from '../../assets/Image/sani.png'

const AboutMe = () => {
    return (
        <div className='mt-10'>
            <div className="card w-10/12 mx-auto bg-base-100 shadow-xl">
                <div className="avatar w-96 lg:w-[80vh] mx-auto mt-5">
                    <div className="rounded">
                        <img className='' src={sani} alt="" />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-4xl font-bold mx-auto">Md Asgar Sani</h2>
                    <p> <span className="text-xl text-neutral font-bold">Email : </span> bmsani6@gmail.com</p>
                    <p> <span className="text-xl text-neutral font-bold">Education : </span> Honours</p>
                    <p> <span className="text-xl text-neutral font-bold">Year : </span> 4th year</p>
                    <p> <span className="text-xl text-neutral font-bold">Subject : </span> Management</p>
                    <p> <span className="text-xl text-neutral font-bold">Web development Skills : </span> Html, css, Javascript (basic), React, mongodb (basic)</p>
                    <p> <span className="text-xl text-neutral font-bold">Summary : </span> <br /> <br /> Hi there, <br />
I am Asgor Sani a junior frontend web developer. I am a tech enthusiast and curious about how the whole world is blessed by modern technology. From my interest, I started learning web development and created some websites using HTML, and CSS for responsiveness I have used bootstrap, tailwind also for the interaction I used javascript.
<br />
<br />
Then to strengthen my knowledge I have learned react.js because it is the most used front-end JavaScript library to create a single-page web application. I have created some websites using react.js I have implemented an authentication and authorization system using google firebase and JSON web token (JWT). I have also created a few full-stack projects for that I learned express.js which is a web framework for node.js. I have used MongoDB as a database and implemented the Stripe payment method.
<br />
<br />
I am very stimulated to learn about different technologies of web development and turn it into my full-time job.
Md Asgor Sani
<br />
<br />
Contact Details: <br />
Email: md.asgar.sani@gmail.com <br />
Phone: +8801952222112</p>
                    



                </div>
            </div>
        </div>
    );
};

export default AboutMe;