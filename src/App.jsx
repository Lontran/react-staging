import React, { Component } from 'react'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos:[
      {id:'001', name:'抽烟', done:true},
      {id:'002', name:'喝酒', done:false},
      {id:'003', name:'烫头', done:true}
    ]
  }
  render() {
    const {todos} = this.state;
    return (
      <div className='todo-container'>
        <h1>ToDo List</h1>
        <div className="todo-wrap">
          <Add addTodo={this.addTodo}/>
          <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
          <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
        </div>

      </div>
    )
  }

  addTodo = (todo)=>{
    const {todos} = this.state;
    this.setState({todos:[todo, ...todos]});
  }

  deleteTodo=(id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj,index)=>{
      return todoObj.id !== id;
    })
    this.setState({todos:newTodos});
  }

  //更新todo
	updateTodo = (id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) todoObj.done = done
			return todoObj
		})
		this.setState({todos:newTodos})
	}

  //勾选or取消勾选
	checkAll = (done)=>{
		const {todos} = this.state
		const newTodos = todos.map( todoObj =>({...todoObj,done}))
		console.log(newTodos)
		this.setState({todos:newTodos})
	}

	//清除已完成
	clearAllDone = ()=>{
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})
		this.setState({todos:newTodos})
	}

}

