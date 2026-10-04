import {useState} from 'react'
import Card from '../component/card.jsx';
const App = () => {
  const submithandler = (e) =>{
    e.preventDefault();
  }

  // two way binding 
  const [heading,setheading] = useState("Heading");
  const [content,setcontent] = useState("Content");
  const [notes,setnotes] = useState([]);

  const AddNote = () =>
  {
    if(heading.length != 0 && content.length != 0)
    {
      // Add the note
       setnotes([...notes, { heading:heading, content:content }]);
      
      // Clear inputs for the next note
      setheading("");
      setcontent("");
    }
  }
  return(
    <div className='flex'>
    <div className='h-screen flex align-middle flex-col justify-center w-1/2 bg-zinc-950 text-white'>
       <h1 className='text-3xl font-bold tracking-tight text-center text-white'>Notes📝</h1>
        <form onSubmit = {(e) => {submithandler(e)}}
        className='flex flex-col gap-4 w-full justify-between  p-10'>
        <input 
          type = 'text' 
          placeholder='Enter notes heading'
          value = {heading} onChange = {(e) =>{ setheading (e.target.value)}}
          className='px-5 w-full py-2 bg-zinc-900 border-2 outline-none rounded' 
        />
       <textarea
       type = 'text'
       value = {content}
       onChange = {(e) =>{
        setcontent(e.target.value)
       }}
       placeholder='Write details'
       className='px-5 h-20 w-full py-2 border-2 bg-zinc-900 outline-none rounded'/>
       <button onClick={AddNote}
        className='bg-white px-5 w-full text-black  py-2 rounded'> Add</button>
      </form>
      </div>
      <div className='h-screen  overflow-x-hidden w-1/2 bg-zinc-950 text-white flex flex-col overflow-y-auto  '>
      <h1 className='text-3xl px-2 font-bold w-full  tracking-tight ml-9 mb-6 mt-6 text-white '>Recent Notes :-</h1>
       <div className='grid grid-cols-3 p-3 gap-4 w-full'>
      {notes.map((note,index) => {
      return(  <Card key ={index} heading = {note.heading} details = {note.content}/>)
      })}
      </div>
      </div>
      </div>
  )
}

export default App;