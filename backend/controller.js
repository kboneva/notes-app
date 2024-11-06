const notes = [ {id: 1, text: "Example note"} ];

exports.findAll = (req, res) => {
    res.json(notes);
}

exports.findOne = (req, res) => {
    const note = notes.find(x => x.id === req.params.id);
    if (!note) return res.status(404).send("Note not found");
    return res.json(note);
}

exports.create = (req, res) => {
    const note = {
        id: notes.length + 1,
        text: req.body.text
    };
    notes.push(note);
    return res.send(note);
}

exports.update = (req, res) => {
    const note = notes.find(x => x.id == req.params.id);
    if (!note) {
        return res.status(404).send("Note not found");
    }
    note.text = req.body.text;
    return res.json(note);
}

exports.delete = (req, res) => {
    const note = notes.find(x => x.id == req.params.id);
    if (!note) {
        return res.status(404).send("Note not found");
    }
    notes.splice(index, 1);
    return res.send("Note deleted");
}