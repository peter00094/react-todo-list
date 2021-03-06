import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from "uuid";//唯一識別碼 寫法有改



class App extends Component {

  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {//新增
    e.preventDefault();//取消事件 但仍會傳遞
    
    if(this.state.item===""){//防呆
      alert("The input field cannot be empty!")
    }
    else{
      const newItem = {
        id: this.state.id,
        title: this.state.item
      }
      const updatedItems = [...this.state.items, newItem];
      this.setState({
        items: updatedItems,
        item: '',
        id: uuid(),
        editItem: false,
      });
    }
  }


  clearList = () => {//清空
    this.setState({
      items: []
    })
  }

  handleDelete = (id) => {//刪除
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)
    this.setState({
      items: filteredItems
    })
  }

  handleEdit = (id) => {//修改
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)
    const selectedItem = this.state.items.find(item => item.id === id)
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              editItem={this.state.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
