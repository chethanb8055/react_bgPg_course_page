// import React from 'react'




const Filter =(props)=>{
    const filterData =props.filterData;
    const category = props.category;
    const setCategory =props.setCategory;
    // console.log(props.category)


    function filterHandler(data){
        setCategory(data)
        
    }


    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">{filterData.map((data)=>(
            
            <button key={data.id} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
            ${
              category === data.title
                ? "bg-opacity-60 border-white"
                : "bg-opacity-40 border-transparent"
            }
          `} onClick={()=>filterHandler(data.title)}>
                {data.title}

                
            </button>
        ))}</div>
    )
}

export default Filter;


