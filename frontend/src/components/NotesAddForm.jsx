import { useState } from "react";
import { create } from "../noteService";

function NotesAddForm ({setNotes}) {
    const [text, setText] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        const note = {text: text};
        create(note).then(newNote => {
            setNotes(state => [...state, newNote.data]);
        })
    }

    return (<form onSubmit={e => onSubmit(e)}>
        <label htmlFor="text">Note</label>
        <input type="text" onChange={e => setText(e.target.value)} />

        <button type="submit">Submit</button>
    </form>)
}

export default NotesAddForm