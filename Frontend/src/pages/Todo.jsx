import React,{useState} from 'react'
import styles from './Todo.module.css'
const Todo = () => {
    const [title,setTitle]=useState('')
    const [priority,setPriority]=useState('')
    const [tasks,setTasks]=useState([])
    const handleSubmit = () => {
        if(title !== '' && priority !== '' && priority > 0 ){
            console.log(title,priority)
            setTitle('')
            setPriority('')
            const task = {
                title,
                priority,
            }
            setTasks(prev=>[...prev,task])
        } else {
            console.log('введены не все значения')
        }
        
    }
  return (
    <div className={styles.note}>
        <h1 className={styles.note_title}>Notes</h1>
        <div className={styles.note_create}>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Title' className={styles.note_create_title}/>
            <input type="number" value={priority} onChange={e => setPriority(e.target.value)} placeholder='Priority' className={styles.note_create_priority}/>
            <button onClick={handleSubmit} className={styles.note_create_button}>
                Add
            </button>


        </div>
    {
        tasks.reverse().map((el,i)=>{
            return(
                <>
                <h1>{el.title}</h1>
                <h2>{el.priority} Priority</h2>
                </>
                
            )
        })
    }



    </div>
  )
}

export default Todo