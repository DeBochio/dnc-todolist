import "../scss/addtask.scss";

export default function Addtasks({
  handleSubmit,
  setName,
  name,
  inputAdd,
  id,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputAdd}
        autoFocus
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        key={id}
        value={name}
        placeholder="Nova tarefa..."
      />

      <button>+</button>
    </form>
  );
}
