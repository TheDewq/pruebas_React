import logo from './logo.svg';
import './App.css';
import { useLayoutEffect } from 'react';
import { useState } from 'react';


function App(){
    var [expression , setExpression] = useState("")
    function last_substr_verification(){
      return !isNaN(parseInt(expression.substring(expression.length - 1))) 
    }
    function delete_last_substr(){
      return expression.substring(0, expression.length - 1)
    }

    // elementos graficos
    function Number_button(props){
      return(
        <button
          style={{
            height: '48px',
            width: '48px',
            borderRadius: 10,
            textAlign: 'center'
          }}

          onClick={
            ()=>{
              setExpression(expression += props.num)
            }
          }
        >
          {props.num}
        </button>
      )
    }

    function Operator_button(props){
      return(
        <button
          style={{
            height: '48px',
            width: '48px',
            borderRadius: 10,
            textAlign: 'center'
          }}

          onClick={
            ()=>{
              console.log(!isNaN(parseInt(expression.substring(expression.length - 1))))
              if(last_substr_verification()){    
                setExpression(expression += props.operator)

              }else{
                setExpression(delete_last_substr() + props.operator)
              }
              
            }
          }
        >
          {props.operator}
        </button>
      )
    }

    function Result_Button(){
      return(
        <button
        style={{
          height: '48px',
          width: '48px',
          borderRadius: 10,
          textAlign: 'center'
        }}
        onClick={
          ()=>{
            last_substr_verification() ? setExpression(eval(expression)) : setExpression(eval(delete_last_substr))
          }
        }
        >
          =
        </button>
      )
    }

    function Display(){
      return(
        <div>
          <h1>
            {expression}
          </h1>
        </div>
      )
    }

    return(
      <>
        <Display />
        <div> 
          <div>
            <Number_button num="1"/>
            <Number_button num="2"/>
            <Number_button num="3"/>
            <Operator_button operator="+" />
          </div>
          <div>
            <Number_button num="4"/>
            <Number_button num="5"/>
            <Number_button num="6"/>
            <Operator_button operator="-" />
          </div>
          <div>
            <Number_button num="7"/>
            <Number_button num="8"/>
            <Number_button num="9"/>
            <Operator_button operator="*" />
          </div>
          <div>
            <Number_button num="0"/>
            <Operator_button operator="/" />
            <Result_Button />
          </div>
        </div>
      </>
    )
}

export default App;
