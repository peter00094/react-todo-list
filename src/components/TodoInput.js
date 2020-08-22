import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
    const {item,handleChange,handleSubmit,editItem}=this.props //解構取值
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}> 
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>
                            </div>
                        </div>
                        <input type="text" //輸入欄位
                         className="form-control text-capitalize" 
                         placeholder="add a todo item"
                         value={item}
                         onChange={handleChange}
                         />
                    </div>
                    <button type="submit" 
                    className={
                        editItem ? // 顯示不同顏色
                        "btn btn-block btn-success mt-3":
                        "btn btn-block btn-primary mt-3"
                    }>
                    {editItem ? 'edit item': "add item" }   
                    </button>
                </form>
            </div>
        )
    }
}
