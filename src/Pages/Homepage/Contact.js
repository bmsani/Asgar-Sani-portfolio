import React from 'react';
import facebook from '../../assets/icons/facebook .png'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import JotformEmbed from 'react-jotform-embed';

const Contact = () => {
    return (
        <div id='contact' className='grid lg:grid-flow-col lg:grid-cols-2 gap-16 my-24'>
            <div className="col-span-1">
                <h2>Let's Connect</h2>
                <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                <div className='flex gap-3 pt-5'>
                    <a href="https://www.facebook.com/bmsani6/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="" />
                    </a>
                    <a href="https://github.com/bmsani" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/md-asgor-sani-322b00160/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="" />
                    </a>
                    
                    
                </div>
            </div>
            <div className="col-span-1">
                     {/* <h2 className='text-2xl font-bold mb-10'>Let's message me and make something together</h2>

                     <form className='' action="">
                     <input type="text" placeholder="Your Name" className="input w-full mb-3 rounded-none bg-slate-100" />
                     <input type="email" placeholder="Your Email" className="input w-full mb-3 rounded-none bg-slate-100" />
                     <textarea type="text" placeholder="Messages" className="input w-full mb-3 rounded-none bg-slate-100 h-24" />
                     <button className='btn btn-primary text-white capitalize w-1/6'>Send</button>
                     </form> */}

                     {/* <script type="text/javascript" src="https://form.jotform.com/jsform/221601120270435"></script> */}
                     <JotformEmbed src="https://form.jotform.com/221601120270435" />
                     
            </div>
        </div>
    );
};

export default Contact;