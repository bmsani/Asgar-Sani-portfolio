import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';

const MyProjects = () => {
    const projects = useProjects()
    const navigate = useNavigate()

    const handleDetails = id => {
        navigate(`project/${id}`)
    }
    return (
        <div id='project' className='py-24'>
            <h4 className='text-xl text-primary text-center pb-5'>Portfolio</h4>
            <h3 className='text-3xl text-center pb-12'>My Amazing Works</h3>
            <div className='flex gap-10 items-center lg:justify-evenly lg:flex-row flex-col'>
                {
                    projects.map(project => <>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={project.img_tumb} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{project.name}</h2>
                                <p>{project.features.length > 50 ? project.features.slice(0,65) : project.features}</p>
                                <div class="card-actions justify-end">
                                    <button onClick={() => handleDetails(project.id)} class="btn btn-primary text-white capitalize">Details</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default MyProjects;