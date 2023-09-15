import React,{useEffect, useState} from 'react'
import styles from './Todo.module.css'
import axios from 'axios'
const Todo = () => {
    const [title,setTitle]=useState('')
    const [priority,setPriority]=useState('')
    const [tasks,setTasks]=useState([])
    const handleSubmit = () => {
        if(title !== '' && priority !== '' && priority > 0 ){
            console.log(title,priority)
            axios.post('http://localhost:3000/tasks',{
                text:title,
                priority:priority,
                
            }).then((res)=>{
                console.log(res.data)
            }).catch((error)=>{
                console.error(error)
            })
            setTitle('')
            setPriority('')
            const object={
                title:title,
                priority:priority,
            }
            setTasks(prev=>[...prev,object])
        } else {
            console.log('введены не все значения')
        }
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/tasks').then((res)=>{
            setTasks([])
            for (let index = 0; index < res.data.length; index++) {
                const element = {
                    title:res.data[index].text,
                    priority:res.data[index].priority,
                };
                setTasks(prev=>[...prev,element])
            }
            console.log(res)
        }).catch((error)=>{
            console.error(error)
        })
    },[])
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
        <div className={styles.note_list}>

            {
                tasks.reverse().map((el,i)=>{
                    return(
                        <div className={styles.note_list_card}> 
                            <h1 className={styles.note_list_card_title}>{el.title}</h1>
                            <h2 className={styles.note_list_card_priority}>{el.priority} Priority</h2>
                        </div>
                        
                    )
                })
            }
        </div> 



    </div>
  )
}

export default Todo