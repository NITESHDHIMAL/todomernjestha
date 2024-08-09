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
        try {
            await storeProduct(formData).unwrap();
            reset()
            nav('/')
        } catch (err) {
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

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="title" {...register("title")} />
                <input defaultValue="description" {...register("description")} />
                <input defaultValue="category" {...register("category")} />
                <input {...register("price", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form> */}




            <form onSubmit={handleSubmit(onSubmit)} class="max-w-sm mx-auto shadow-md p-6">
                <div class="mb-5">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                    <input type="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("price", { required: true })} />
                </div>
                <div class="mb-5">
                    <label for="descirption" class="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <input type="text" id="descirption" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("price", { required: true })} />
                </div>
                <div class="mb-5">
                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 ">category</label>
                    <input type="text" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("description", { required: true })} />
                </div>
                <div class="mb-5">
                    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">price</label>
                    <input type="text" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("price", { required: true })} />
                </div>
                <div class="mb-5">
                    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 ">image</label>
                    <input type="text" id="image" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("image", { required: true })} />
                </div>
            
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>



        </>
    )
}

export default Add