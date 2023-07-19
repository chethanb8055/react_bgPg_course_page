// import React from 'react'




const Filter =(props)=>{
    const filterData =props.filterData;
    const category = props.category;
    const setCategory =props.setCategory;
    // console.log(props.category)


    function filterHandler(data){
        setCategory(data)
        console.log(category)
    }


    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">{filterData.map((data)=>(
            
            <button key={data.id} className="text-lg px-2 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50" onClick={()=>filterHandler(data.title)}>
                {data.title}

                
            </button>
        ))}</div>
    )
}

export default Filter;


