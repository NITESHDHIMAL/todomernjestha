import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const View = () => {


    let nav = useNavigate()

    let id = useParams()

    let getId = id?.id

    console.log(id)


    const getalldata = localStorage.getItem("todos") ? JSON.parse( localStorage.getItem("todos")) : [];



    let data = getalldata[getId]


    const deletedata = () => {


        getalldata.splice( getId, 1 )

        localStorage.setItem("todos", JSON.stringify( getalldata));

        nav("/")

    }


  return (
    <>

 

    <div className='bg-gray-500 p-4'>
   {data}
    </div>

    <button onClick={deletedata}>Delete</button>

    </>
  )
}

export default View