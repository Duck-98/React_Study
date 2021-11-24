/* 끝말잇기 class -> 끝말잇기 hooks */ 
const React = require('react');
const {useState,useRef} = React;

const WordGame = () =>{
    const [word, setWord] = useState('끝말잇기');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    
    const inputRef  = useRef(null);
    const onSubmitForm = (e) =>{
        e.preventDefault();
        if(word[word.length - 1 ] === value[0]){
            setResult('딩동댕');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }else{
            setResult('땡');
            setValue('');
            inputRef.current.focus();
        }
    }
    const onChangeInput = (e) =>{
        setValue({value: e.target.value});
    } 

    
        return (
            <>
                <div>{word}</div>
                <form onSubmit={onSubmitForm}>
                    <label id ="label" htmlFor="wordInput">글자를 입력하세요</label>
                    <input id="wordInput" className="wordInput"  ref ={inputRef} value={value} onChange={onChangeInput} />
                    <button>입력!</button>
                    <div>{result}</div>
                </form>
            </>
        )
}

module.exports = WordGame;