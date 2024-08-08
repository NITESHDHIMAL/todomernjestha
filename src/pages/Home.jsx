import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetProductCategoryQuery, useGetProductQuery } from '../services/productApi';
import { useGetCategoryQuery } from '../services/categoryApi';

const Home = () => {


    // const todo = [
    //     {
    //         task: "go home"
    //     },
    //     {
    //         task: "go office"
    //     },
    //     {
    //         task: "go school"
    //     },
    // ]

    // console.log("todo", todo[2])

    // const data = localStorage.getItem("todos") ? JSON.parse( localStorage.getItem("todos")) : [];



    // const productfromserver = useGetProductQuery()

    const { cat } = useParams()

    const par = useLocation()

    let nav = useNavigate()

    console.log(par?.search)

    const { data, isLoading } = useGetProductQuery(par?.search)
    const { data: categoryproduct } = useGetProductCategoryQuery(cat)
    const { data: category } = useGetCategoryQuery()

    const product = cat ? categoryproduct : data;

    const [ search, setSearch ] = useState()


    return (
        <>

            {/* <div className='mt-4'>
                {data?.map((task, index) => (
                    <div className='bg-gray-300 mt-4 p-4 flex justify-between'>
                        {index}: {task}

                        <Link to={`/view/${index}`}><FaEye /></Link>
                    </div>
                ))}
            </div> 
            <Link to={'/add'}> <button className='bg-green-400 px-4 py-2 rounded m-2'>Add</button></Link> */}



            <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div class="mx-auto max-w-md text-center">
                        <h2 class="font-serif text-2xl font-bold sm:text-3xl">Nepal Shop</h2>
                    </div>

                    <h2 className='font-bold text-2xl'>All Categories</h2>
                    <div className='flex items-center justify-between mt-4'>
                        <div>
                            <ul className='flex gap-x-4'>
                                <Link to={`/`}><li>All</li></Link>
                                {category?.map((cat) => (
                                    <Link to={`/${cat}`}><li>{cat}</li></Link>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <select name="" id="" onChange={(e) => {
                                nav('/?sort=' + e.target.value)
                            }}>
                                <option value="asc">Asc</option>
                                <option value="desc">Desc</option>
                            </select>

                            <select name="" id="" onChange={(e) => {
                                nav('/?limit=' + e.target.value)
                            }}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                    </div>
                    {/* <Link to={'/?sort=desc'}> Desc </Link> */}

                    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
                        {/* {categoryproduct?.map((product, index) => ( */}
                        {/* {data?.map((product, index) => ( */}
                        {product?.map((product, index) => (
                            <article class="relative flex flex-col overflow-hidden rounded-lg border" key={index}>
                                <div class="aspect-square overflow-hidden">
                                    <Link to={`/view/${product?.id}`}> <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={product?.image} alt="" /></Link>
                                </div>
                                <div class="absolute top-0 m-2 rounded-full bg-white">
                                    <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
                                </div>
                                <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                                    <div class="mb-2 flex">
                                        <p class="mr-3 text-sm font-semibold">Rs.{product?.price}</p>
                                        <del class="text-xs text-gray-400"> $79.00 </del>
                                    </div>
                                    <h3 class="mb-2 text-sm text-gray-400">{product?.title}</h3>
                                </div>
                                <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                                    <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
                                    <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


                        <form action="">
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </form>

            <nav aria-label="Page navigation example">
                <ul class="inline-flex -space-x-px text-base h-10">
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>





        </>
    )
}

export default Home