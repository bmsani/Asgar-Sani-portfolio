import React from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';

const Project = () => {
    const {id} = useParams()
    const projects = useProjects()
    const currentProject = projects.find(element => element.id == id)
    const {name,live_link,github_client,github_surver, img_tumb, img_1, img_2, img_3, features, techonology} = currentProject
    console.log(currentProject);
     return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-secondary text-3xl py-10'>Welocme to {name}</h1>
            <h2 className='text-xl text-primary font-bold py-5'> Homepage: </h2>
            <img src={img_1} alt="" />
            <h2 className='text-xl text-primary font-bold py-5'> Section 1: </h2>
            <img src={img_2} alt="" />
            <h2 className='text-xl text-primary font-bold py-5'> Section 2: </h2>
            <img src={img_3} alt="" />

            <h2 className='text-xl text-primary font-bold py-5'> <span className='text-secondary'>Live site Link:</span> {live_link} </h2>
            <h2 className='text-xl text-primary font-bold py-5'> <span className='text-secondary'>Github client side code:</span> {github_client} </h2>
            <h2 className='text-xl text-primary font-bold py-5'> <span className='text-secondary'>Github server side code:</span> {github_surver} </h2>
            <h2 className='text-base py-5'> <span className='text-secondary text-xl font-bold'>Website Features:</span> {features} </h2>
            <h2 className='text-base py-5'> <span className='text-secondary text-xl font-bold'>Technology Used:</span> {features} </h2>
        </div>
    );
};

export default Project;