import {Component} from 'react'

class ImageComp extends Component {

   componentWillUnmount(){
      console.log("componentWillUnmount")
   }

     static getDerivedStateFromProps(props,state){
          console.log("getDerivedStateFromProps is called")  
      return null
     }

     shouldComponentUpdate(nextProps,nextState){
         console.log("ShouldComponentUpdate is Called",nextState.techName,this.state.techName)
     if(nextState.techName == this.state.techName){
      return false
     } 
      return true
     
        
     }
     getSnapshotBeforeUpdate(){
      console.log(" getSnapshotBeforeUpdate is Called")
      return null
     }
     componentDidUpdate(){
      console.log(" componentDidUpdate  is Called")
     }

     componentDidMount(){
       console.log("ComponentdidMount is called") 
     }

      constructor(props){
           super(props)

         this.state = {
            techName:"React",
            img:"https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
         }
          console.log("Constructor is Called")
      }

    render(){
       console.log("render is Called")
        return <div style={{textAlign:"center",padding:"50px"}}>
             <img src={this.state.img} width="300" height="300" alt="image" /><br/>
             <h3>{this.state.techName}</h3>
             <button onClick={()=>{this.setState({
            techName:"React",
            img:"https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
         })}}>React</button>&nbsp;&nbsp;
             <button onClick={()=>{this.setState({
                techName:"Angular",
                img:"https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461803-angular-JavaScript-HTML.jpg"
             })}}>Angular</button>
        </div>
    }
}

export default ImageComp