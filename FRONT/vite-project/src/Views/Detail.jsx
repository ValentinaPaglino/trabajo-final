// import React, { useEffect } from 'react'
// import App from '../App'
// import axios from 'axios'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'

// const Detail = () => {

//     const {id} = useParams();
    
//     const {producto, setProducto} = useState({});

//     useEffect(() => {
       
//           axios (`http://localhost:3000/detail/${id}`).then(({data})=>{
//            if (data.name) {
//               setProducto(data);
//            } else {
//               window.alert('No hay personajes con ese ID');
//            }
//         });
//         return setProducto({});
//      }, [id]);
//   return (
//     <div>Detail</div>
//   )
// }

// export default Detail