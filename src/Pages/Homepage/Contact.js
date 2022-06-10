import React from 'react';
import facebook from '../../assets/icons/facebook .png'
import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'

const Contact = () => {
    return (
        <div className='grid lg:grid-flow-col lg:grid-cols-2 gap-16 my-24'>
            <div className="col-span-1">
                <h2>Let's Connect</h2>
                <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                <div className='flex gap-3 pt-5'>
                    <img src={facebook} alt="" />
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div className="col-span-1">
                     <h2 className='text-2xl font-bold mb-10'>Let's message me and make something together</h2>

                     <form className='' action="">
                     <input type="text" placeholder="Your Name" className="input w-full mb-3 rounded-none bg-slate-100" />
                     <input type="email" placeholder="Your Email" className="input w-full mb-3 rounded-none bg-slate-100" />
                     <textarea type="text" placeholder="Messages" className="input w-full mb-3 rounded-none bg-slate-100 h-24" />
                     <button className='btn btn-primary text-white capitalize w-1/6'>Send</button>
                     </form>
            </div>
        </div>
    );
};

export default Contact;