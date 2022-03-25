import React, { Component } from 'react' //library call

export default class Cat extends Component{
    state = {
        type: 'Siamese',
        name: 'Merry',
        size: 'small',
        sound: 'aeeeeong',
        appearence: 'suuuuuuuuper cute'
    }

    render(){
        const { type, name, size, sound, appearence } = this.state

        return(
            <>
                <h1>고양이 정보</h1>
                <h3>종류: {type}</h3>
                <h3>이름: {name}</h3>
                <h4>크기: {size}</h4>
                <h4>울음소리: {sound}</h4>
                <h4>생김새: {appearence}</h4>
            </>
        )
    }
}