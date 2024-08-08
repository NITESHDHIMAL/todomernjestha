import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useStoreProductMutation } from '../services/productApi'

const Add = () => {

    let nav = useNavigate()

    // const [todos, setTodos] = useState("")

    // const formsubmithandler = () => {
    //     let initialtodo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
    //     initialtodo.push(todos)
    //     // localStorage.setItem("todos", JSON.stringify(todos));
    //     localStorage.setItem("todos", JSON.stringify(initialtodo))
    //     nav("/")
    // }


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
    
    //   const onSubmit = (data) => console.log(data)

    const [storeProduct] = useStoreProductMutation()

    const onSubmit = async (formData) => {
        try{
            await storeProduct(formData).unwrap();
            reset()
        } catch(err) {
            console.log(err)
        } 
    }


    return (
        <>

            {/* <div className='flex justify-center items-center h-screen'>
                <form onSubmit={formsubmithandler}>
                    <div className='flex flex-col items-center rounded shadow-md p-4'>
                        <input className='border border-red-400 pl-2 py-2' placeholder='add task' type="text" value={todos} onChange={(e) => setTodos(e.target.value)} />
                        <button className='bg-green-600 px-4 py-2 rounded text-white mt-2'>Submit</button>
                    </div>
                </form>
            </div> */}

            <form onSubmit={handleSubmit(onSubmit)}> 
                <input defaultValue="title" {...register("title")} /> 
                <input defaultValue="description" {...register("description")} /> 
                <input defaultValue="category" {...register("category")} /> 
                <input {...register("price", { required: true })} /> 
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
 

        </>
    )
}

export default Add