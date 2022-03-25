import React, { Component } from 'react' //library call

class Person extends Component{
  render(){// 메서드 => 컴포넌트에서 무조건 들어가야 되는 메서드.
    //컴포넌트에 필요한 데이터
    const name = "syleemomo"
    const age = 34

    return (
      <React.Fragment>
        <h3>{name}</h3>
        <h4>{age}</h4>
      </React.Fragment>
    )
  }
}

export default Person