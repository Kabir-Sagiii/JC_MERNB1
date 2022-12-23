import {useEffect,useState} from 'react';

function Products(props) {
const [state,setState] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/productdb").
        then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data)
            setState(data.results)
        })
    },[])
    return (
        <div>
             <h2>Product Component</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati excepturi ex nesciunt, nihil inventore adipisci alias expedita illo culpa et numquam dolorum eius magni ab. Sed expedita porro facilis illum ab qui odit distinctio, quas sint delectus architecto illo, explicabo voluptas officiis velit molestias ipsum quis aut cupiditate vero deserunt tempora maiores. Fuga, facilis sint deleniti expedita ut quia voluptatem excepturi rem consectetur amet quod, assumenda veritatis reiciendis. Unde, dolore. Enim aspernatur cumque distinctio eaque, dolor recusandae sapiente iste animi, culpa, illum amet architecto sit cupiditate molestiae temporibus dolores consectetur rerum facere esse repellat ipsum neque. Harum laboriosam eum deleniti.</p>
            <ol>
               {
                state.length > 0 ? state.map((ele,index)=>{
                     return <li key={index+1}>{ele.pname}</li>
                })  : <li>No Data</li>
               }
            </ol>
        
        </div>
    );
}

export default Products;