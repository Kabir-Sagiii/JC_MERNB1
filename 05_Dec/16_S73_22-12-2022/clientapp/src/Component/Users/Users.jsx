import {useEffect,useState} from 'react';

function Users(props) {
    const [users,setUsers] = useState([])
      useEffect(()=>{
         getData()
      },[])
      
      const getData = ()=>{
         fetch("http://localhost:8001/users/userdata")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setUsers(data.results)
        })
      }
      const latestData = ()=>{
            getData()
      }
    return (
        <div style={{padding:"50px"}}>
              <h2>Users Informations</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Earum obcaecati illo labore necessitatibus suscipit error 
                quam blanditiis iste, dicta maxime aperiam laborum architecto dolores doloribus!
                 Vero illo explicabo commodi, atque consectetur officiis expedita. Optio tenetur debitis quae harum recusandae sequi error earum quisquam saepe, perferendis distinctio est eius. Eligendi officia doloremque quidem laboriosam, repudiandae minima rerum dolore non ullam? Explicabo nemo, repellendus necessitatibus eveniet, officia dolor dolore animi, suscipit earum illo et ipsam iste debitis! Placeat laboriosam nostrum, dolorum in sunt dolore officia quisquam fuga culpa consequuntur saepe veniam aliquid rerum necessitatibus beatae minus iure quo? Itaque ea cum cumque praesentium eius? Adipisci officiis voluptatem quos neque numquam quod autem nobis voluptatum tempora aperiam delectus molestiae illo debitis repellendus eaque amet cumque temporibus, aspernatur assumenda! Libero, nostrum. Accusantium corporis repellendus illo molestias possimus laboriosam molestiae, animi fugiat culpa. Quasi, tempore sapiente quaerat consectetur ab iusto delectus nam adipisci laudantium, omnis velit officiis! Delectus itaque vero maiores officia. Cum distinctio labore exercitationem quo voluptatibus odit suscipit deserunt porro maxime facere, doloribus natus reiciendis? Earum necessitatibus blanditiis cumque, impedit ad sint atque odio? Et, ipsa mollitia, sunt adipisci dolorum nemo quisquam, debitis fugiat sapiente harum numquam saepe voluptates cum recusandae libero aliquam?</p>
              {/* <button onClick={latestData}>Users</button> */}
           {
              users.length > 0 ? <table cellPadding={10} style={{width:"80%",margin:"50px auto",boxShadow:"0 0 10px green",padding:"20px"}}>
                <thead style={{backgroundColor:"black",color:"white"}} >
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th colSpan={3}>ACTIONS</th>
                    </tr>
                </thead>

                <tbody align="center">
                       {
                        users.map((ele,index)=>{
                            return <tr>
                                 <td>
                                    <img src={ele.image} width="70" height="70" alt="User Image"/>
                                 </td>
                                 <td>
                                    {ele.name}
                                 </td>
                                 <td>
                                    {
                                        ele.gender
                                    }
                                 </td>
                                 <td>
                                    <button>Details</button>
                                 </td>
                                 <td>
                                    <button>Edit</button>
                                 </td>
                                 <td>
                                    <button>Delete</button>
                                 </td>
                            </tr>
                        })
                       }
                </tbody>
              </table>   : <div style={{marginTop:"100px",textAlign:"center",color:"red"}}> <h1>No Data</h1> </div>

           }

        </div>
    );
}

export default Users;