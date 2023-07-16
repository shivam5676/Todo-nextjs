import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Todolist from '../components/todolist'
import AddTodo from '../components/AddTodo'
export default function Home() {
  return (
    <div className={styles.container}>
     <h3>hello shivam</h3>
<Todolist></Todolist>
<AddTodo></AddTodo>
    </div>
  )
}
