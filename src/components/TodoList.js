import React, { Component, useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react'

import Control from './Control'
import Todos from './Todos'

const LS_KEY = '_$lskey_'
function TodoList(props) {
  return(
    <div className='todo-list'>
      <Control/>
      <Todos></Todos>
    </div>
  )
}

// export default TodoList
export default inject('todoStore')
    (observer(TodoList)
)