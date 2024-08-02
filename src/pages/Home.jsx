import React from 'react'
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Home = () => {


    const todo = [
        {
            task: "go home"
        },
        {
            task: "go office"
        },
        {
            task: "go school"
        },
    ]

    // console.log("todo", todo[2])


    const data = localStorage.getItem("todos") ? JSON.parse( localStorage.getItem("todos")) : [];



    return (
        <>



            <div className='mt-4'>
                {data?.map((task, index) => (
                    <div className='bg-gray-300 mt-4 p-4 flex justify-between'>
                       {index}: {task}

                   <Link to={`/view/${index}` }><FaEye /></Link>    
                    </div>
                ))}
            </div>

           <Link to={'/add'}> <button className='bg-green-400 px-4 py-2 rounded m-2'>Add</button></Link>



        </>
    )
}

export default Home