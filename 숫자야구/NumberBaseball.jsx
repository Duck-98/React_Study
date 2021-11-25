import React,{Component} from 'react';

const getNumbers =()=>{ // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수.
    
};

class NumberBaseball extends Component{
    state ={
        value: '',
        result : '',
        answer : getNumbers(),
        tries :'',
    };
    onSubmitForm = (e)=>{
        this.setState({value: e.target.value});
    };
    onchangeInput = (e)=>{

    };

    render(){
        return(
            <>
            <h1>{this.state.result}</h1>
            <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this.onchangeInput} />
            </form>
            <div>시도 {this.state.tries.length}</div>
            <ul>
                {['사과','바나나','포도','수박','배'].map((v)=>{
                    return(
                        <li>{v}</li>
                    )
                })}
            </ul>
            </> 
        );
    }
}

export default  NumberBaseball;