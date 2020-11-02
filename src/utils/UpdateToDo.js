export default function updateToDo(toDo) {
  let existingToDos = null;
  try {
    existingToDos = JSON.parse(localStorage.getItem("ToDos")) || [];
  } catch (error) {
    console.error(error);
    existingToDos = [];
  }

  if (!existingToDos.includes(toDo)) {
    const newToDo = [...existingToDos, toDo];
    localStorage.setItem("ToDos", JSON.stringify(newToDo));
    return newToDo;
    // müsste ToDo hier nicht das inputValue aus dem UseState aus der InputField.js sein?
  }
  return existingToDos;
}
