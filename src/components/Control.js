import React, { Component, useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react'

function Control(props) {
  const {
    todoStore: {
      addTodo
    }
  } = props
  let inputRef = React.createRef()
  const onSubmit = (e) => {
    e.preventDefault()
    const text = inputRef.current.value.trim();
    if(text.length === 0 ){
      return
    }
    addTodo(text)
    inputRef.current.value = ''
  }
  return (
    <div className='control'>
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          className='new-todo'
          placeholder="就是瞎输入"
        />
      </form>
    </div>
  )

}

export default inject('todoStore')(
  observer(Control)
)