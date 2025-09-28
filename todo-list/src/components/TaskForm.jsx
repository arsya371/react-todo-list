import React, { useState } from 'react'

import './TaskForm.css'
import Tag from './Tag.jsx'

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })   
    
    const handleChange = (e) => {
        const {name, value} = e.target;

        setTaskData(prev => {
            return {...prev, [name]: value};
        });
    };

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        if(taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return {...prev, tags: filterTags}
            })
        } else {
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskData.task.trim()) {
            alert("Please enter a task!");
            return;
        }
        if (taskData.tags.length === 0) {
            alert("Please select at least one tag!");
            return;
        }
        setTasks(prev => {
            return [...prev, taskData]
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        })
    };
    
    // const [task, setTask] = useState("")
    // const [status, setStatus] = useState("todo")
    // const handleTaskChange = (e) => {
    //     setTask(e.target.value)
    // }
    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value)
    // }
    // console.log(task, status)
  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={taskData.task} className='task_input' placeholder='Enter your task' onChange={handleChange}/>
            <div className="task_form_bottom_line">
                <div>
                    <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                    <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                    <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")}/>
                    <Tag tagName="React" selectTag={selectTag}selected={checkTag("React")}/>
                </div>

                <div>
                <select name="status" value={taskData.status} className="task_status" onChange={handleChange}>
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <button type="submit" className='task_submit'>
                    + Add Task
                </button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm
