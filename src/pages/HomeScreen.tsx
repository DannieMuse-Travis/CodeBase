import React,{useState} from 'react'
import  styled from "styled-components"

const HomeScreen = () => {
  return (
    <div>
        <Container>n  
            <Main>
              <CircleC>
                <Circle bg='yellowgreen'
                c='greenyellow'
                >1
                </Circle>
                <Line/>
                <Circle bg='yellowgreen'
                c='greenyellow'
                >1
                </Circle>
                <Line/>
                <Circle bg='yellowgreen'
                c='greenyellow'
                >1
                </Circle>
              </CircleC>
              <Input placeholder='input name'/>
                <Input placeholder='input email'/>
                <ButtonHolder>
                <Button bg="yellowgreen"
                onClick={()=>{
                    localStorage.setItem("page", JSON.stringify(2))
                    window.location.reload()
                }}
                >Next</Button>
            </ButtonHolder>
            </Main>
        </Container>
    </div>
  )
}

export default HomeScreen

const Label = styled.label`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    color: black;
    font-size: 25px;
    position: absolute;
    bottom: 10px;
    right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Hold = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`
const Input2 = styled.input`
display: none;
`

const Img = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    /* background-color: blue; */
    margin-top: -30px;
    object-fit: cover;
`
const Button = styled.div<{bg : string}>`
width: 70px;
height: 45px;
background-color: ${({bg}) => bg};
color: white;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 0 5px;
`
const ButtonHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
`
const Input = styled.input`
    width: 100%;
    height: 45px;
    border: 1px solid green;
    outline: none;
    margin: 10px 0;
    
&::placeholder{
    padding-left: 20px;
}
`
const Line = styled.div`
width: 80px;
height: 5px;
background-color: greenyellow;
margin: 0 10px;
`
const Circle = styled.div<{bg : string, c : string}>`
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bg})=> bg};
color: ${({c}) => c};
font-size: 20px;
border: 1px solid yellowgreen;
border-radius: 50%;
`
const CircleC = styled.div`
width: 100%;
cursor: pointer;
margin-bottom: 50px;
/* height: 200px; */
/* background-color: pink; */
display: flex;
justify-content: center;
align-items: center;
`

const Main = styled.div`
width: 600px;
min-height: 300px;
/* background-color: yellowgreen; */
border: 2px solid green;
display: flex;
/* justify-content: center; */
flex-direction: column;
align-items: center;
padding: 10px 40px;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`