import React, { Component, useState, useEffect } from 'react';
import TodoItem from './TodoItem'
import { inject, observer } from 'mobx-react'

function Todos(props) {
  const {
    todoStore: {
      deleteTodo,
      toggleTodo,
      todos,
    }
  } = props;
  return (
    <ul>
      {
        todos.map(todo => {
          return <TodoItem
            key ={todos.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        })
      }
    </ul>
  )
}

export default inject('todoStore')
  (observer(Todos)
  )