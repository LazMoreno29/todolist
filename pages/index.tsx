import { ToDoForm } from '../components/ToDoForm';

export default function Home() {
  return (
    <>
      <section className='toDOListWrapper'>
        <div className='toDoListContainer'>
          <h1>To-Do-List</h1>
          <ToDoForm />
        </div>
      </section>
    </>
  );
}
