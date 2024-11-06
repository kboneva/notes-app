import { useEffect, useState } from 'react'
import { getAll } from '../noteService';
import NotesAddForm from './NotesAddForm';
import NoteItem from './NoteItem';

function NotesList() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAll().then(newNotes => {
        setNotes(newNotes.data);
        setLoading(false);
    });
  }, [])

  if (loading) return (<span>Loading...</span>)
  return (
    <div className='center'>
        Notes:
        {notes.map(note => (
            <NoteItem key={note.id} note={note} />
        ))}
       <NotesAddForm setNotes={setNotes}/>
    </div>
  )
}

export default NotesList
