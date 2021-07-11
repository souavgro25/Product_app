 
import React,{useState,useEffect} from 'react'
import {fetchproduct,PostProduct,ProductUpdate, ProductDelete} from "./Api"
import Form from "./component/Form"
import Modal from "react-modal";
Modal.setAppElement('#root');
function App() {
    
    const [Data, setData] = useState([]);
    const [modalIsopen,setmodalisopen]=useState(false);

    const openModal=()=>{
        setmodalisopen(true)
    }
    const closeModal=()=>{
        setmodalisopen(false)
    }

    const Postdata=async(e,data)=>{
        e.preventDefault();
        console.log(data);
        await PostProduct(data);
        setData(await fetchproduct());
    }

    const DeleteProduct=async (id)=>{
        await  ProductDelete(id);
        setData(await fetchproduct());
    }

    const updateProduct= async(e,data,id)=>{
        e.preventDefault();
        await ProductUpdate(id,data);
        setData(await fetchproduct());
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        
        },
      };

    useEffect(() => {
       
        const fetch =async()=>{
            setData(await fetchproduct())
        }
        fetch();
    }, [])
   


    return (
        <div className="flex   flex-col items-center justify-center ">
            <button onClick={openModal} className="m-1 text-purple-700 bg-green-400 rounded-md px-5 py-3">Add</button> 
            <Modal
        isOpen={modalIsopen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
               
                <Form submit={Postdata}/>
            </Modal>
           {Data.map(({id,product:{name,price,description}})=>
           <div className="  m-5 rounded-xl flex flex-col bg-gray-500 p-10  justify-center items-center " key={id}>
                <p className="text-3xl text-green-500 font-bold">{name}</p>
                <p className="text-xl text-green-500 ">{price}</p>
                <p className="text-xl text-green-500 ">{description}</p>

                    <button onClick={()=> DeleteProduct(id)} className="m-1 text-purple-700 bg-red-400 rounded-md px-5 py-3">Delete</button> 
                    <Form submit={updateProduct} id={id}/>
           </div>)} 
        </div>
    )
}

export default App
