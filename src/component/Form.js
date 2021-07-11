import React,{useState}from 'react'

function Form({submit,id}) {
    const [data, setdata] = useState({
        name:"",
        price:"",
        description:""
    })

    const handle=(e)=>{
        const newdata = {...data}
        newdata[e.target.id]=e.target.value
        setdata(newdata);
        
    }
    console.log(data)

    return (
        <div className="bg-gray-500 rounded-xl flex justify-center items-center">
            <form onSubmit={(e)=>submit(e,data,id)}>
                <p  className="text-xl text-white ">name</p>
                <input onChange ={(e)=> handle(e)} id="name" value={data.name} className="bg-gray text-black border-gray-300 border-rounded" type="text" />
                <p className="text-xl text-white ">price</p>
                <input onChange={(e)=> handle(e)} id="price" value={data.price} className="bg-gray text-black border-gray-300 border-rounded" type="text" />
                <p className="text-xl text-white ">Descripton</p>
                <input onChange={(e)=> handle(e)} id="description" value={data.description} className="bg-gray text-black border-gray-300 border-rounded" type="text" />

               <div>
               <button className="m-1 text-purple-700 bg-red-400 rounded-md px-5 py-3">Add</button>
               </div>
            </form>
        </div>
    )
}

export default Form
