import { remove, update } from "../noteService";

function NoteItem ({note}) {
    function handleUpdate() {
        // TODO
    }

    function handleDelete() {
        remove(note.id)
    }

    return (
    <div className="flex">
        <p>{note.text}</p>
        <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
    )
}
export default NoteItem;