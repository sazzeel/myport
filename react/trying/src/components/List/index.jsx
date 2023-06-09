import React from 'react'
import {Draggable, Droppable} from "react-beautiful-dnd";
import "./style.scss";


const List = ({list, index}) => {
  return (
    <Draggable draggableId = {list.id} index = {index}>
        {
            (provided) => {
                <div {...provided.draggableProps} ref = {provided.innerRef}>
                        <div className = "list-cards" {...provided.dragHandleProps}>
                            <div className = "title-list">
                                {/* Title  */}
                            </div>
                            <div className = "container-cards">
                                <Droppable droppableId = {list.id} type = "task">
                                    {
                                        (provided)=>{
                                            <div
                                            ref = {provided.innerRef}
                                            {...provided.droppableProps}
                                            className = "card-container"
                                            >
                                                {
                                                    list.cards.map((card, index) =>{
                                                         <h1> Card</h1>
                                                    })
                                                }
                                                {provided.placeholder}
                                            </div>
                                        }
                                    }
                                </Droppable>
                            </div>
                            {/* InputContainer  */}
                        </div>
                </div>
            }
        }
    </Draggable>
  )
}

export default List
