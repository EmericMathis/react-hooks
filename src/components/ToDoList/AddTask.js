import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <>
      <input className="input"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="button" onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </>
  )
}
