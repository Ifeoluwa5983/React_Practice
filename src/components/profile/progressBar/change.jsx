import React, { Component } from 'react'
import data from '../../../database/data'
import { ChangeButton } from './style'

let object = []

export default function ({field}) {

    function handleClick(field){
        switch(field){
            case 'increment':
                return field ++
            case 'decrement':
                return field --
            default:
                return
        }
    }

  return (
        <div>
            <ChangeButton onClick={()=>handleClick('decrement')} field = {field}>-</ChangeButton>
            <ChangeButton onClick={()=>handleClick('increment')} field = {field}>+</ChangeButton>
        </div>
        );
    }
