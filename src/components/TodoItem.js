import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props//解構取值

        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between">
               
                <h6>{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}>
                        <i className="fas fa-pen"></i></span>
                    <span className="mx-2 text-danger"
                    onClick={handleDelete}>
                        <i className="fas fa-trash"></i></span>
                </div>
            </li>
        )
    }
}
