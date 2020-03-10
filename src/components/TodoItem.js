import React, { Component, useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react'
function TodoItem(props) {
  const { todo: {
    id,
    task,
    complete
  }, todo,todoStore: {
    deleteTodo,
    toggleTodo,
  }} = props
  console.log(complete)
  const onChange = (todo) => {
    toggleTodo(todo)
  }
  const onRemove = () => {
    deleteTodo(id)
  }
  return (
    <li className='todo-item'>
      <input type="checkbox" name="" onChange={()=>onChange(todo)} checked={complete} />
      <label className={complete ? 'complete' : ''} >{task}</label>
      <button onClick={onRemove}>&#xd7; </button>
    </li>
  )
}
export default inject('todoStore')
    (observer(TodoItem)
)
