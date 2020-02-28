import React, { Component, useState, useEffect } from 'react';

function TodoItem(props) {
  const { todo: {
    id,
    task,
    complete
  }, toggleTodo, deleteTodo } = props
  const onChange = () => {
    toggleTodo(id)
  }
  const onRemove = () => {
    deleteTodo(id)
  }
  return (
    <li className='todo-item'>
      <input type="checkbox" name="" onChange={onChange} checked={complete} />
      <label className={complete ? 'complete' : ''} >{task}</label>
      <button onClick={onRemove}>&#xd7; </button>
    </li>
  )
}

export default TodoItem