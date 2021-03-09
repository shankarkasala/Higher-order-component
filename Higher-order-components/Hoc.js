import React,{Component} from 'react';

const Hoc = Orgnl=>{
    class newcomponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
       
        }
       changecount=()=>{
            this.setState(prevState=>{
           return {count:prevState.count+1}
            })
            
        }

        
        render(){
            console.log(this.state.count)
          
            return(
                <div>
                    <Orgnl
                    increment={this.changecount}
                    counter={this.state.count}
                    name="shankar"
                    />
                </div>
            )
        }
    }
    return newcomponent
}
export default  Hoc