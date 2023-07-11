import React, { useState } from 'react';

function Input() {
    // 글 State 생성
    const [text, setText] = useState('')

    // 글 추가 버튼 클릭 시 저장할 data State
    const [data, setData] = useState([])

    // 글 추가 버튼 클릭 시 실행할 함수


    // 글 변할 때 실행할 함수
    const onChange = (e) => {
      setText(e.target.value)
      }

    const clickHandler = () => {
      setData([...data, text])
      setText('')
    }
    //...은 list안에 있는거 계속 뿌려주는 것임

  return (
    <>
        {/* input에 onChange,value 추가 */}
        <input onChange={onChange} value={text}/>
        {/* button에 onClick 추가*/}
        <button onClick={clickHandler}>추가</button>
        {/* 입력된 값 보여주기, '값 : " 뒤에 추가 */}
        <div>
            <b>값: {text}</b>
        </div>

      {/* 데이터 목록 보여주기*/}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </>
  );
}

export default Input;