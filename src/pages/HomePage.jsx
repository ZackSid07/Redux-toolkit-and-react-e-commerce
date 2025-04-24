import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ProductCard from '../components/Home/ProductCard'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const store = useSelector((state)=>state.ProductSlice.products.data.data)
  console.log(store);
  

  return (
    <div className=''>
        <HeroSection/>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col  w-full mb-20">
      <h1 className="text-2xl xl:text-3xl 2xl:text-5xl font-semibold title-font mb-4 text-gray-900">Products</h1>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
    </div>
    <div className="flex flex-wrap -m-4">
      {
        store && store.length > 0 && store.map((cur, i)=>{
          return  <ProductCard key={i} data={cur}/>
        })
      }
      
    </div>
  </div>
</section>


    </div>
  )
}

export default HomePage