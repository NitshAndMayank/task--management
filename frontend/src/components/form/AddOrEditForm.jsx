// import { useState } from "react";
// import { MdClose } from "react-icons/md";
// import StatusSelector from "../inputs/StatusSelector.jsx";
// import PrioritySelector from "../inputs/PrioritySelector.jsx";
//
// const AddOrEditForm = ({
//                            taskData,
//                            type,
//                            onClose,
//                            showToastMessage,
//                            getAllTasks,
//                        }) => {
//     const [title, setTitle] = useState(taskData?.title || "");
//     const [content, setContent] = useState(taskData?.content || "");
//     const [taskStatus, setTaskStatus] = useState(taskData?.taskStatus || 1);
//     const [taskPriority, setTaskPriority] = useState(taskData?.taskPriority || 1);
//     const [dueDate, setDueDate] = useState(taskData?.dueDate || "");
//     const [error, setError] = useState(null);
//
//     const addNewTask = async () => {
//         try {
//             const response = await fetch("/api/tasks/", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     title,
//                     content,
//                     taskPriority,
//                     taskStatus,
//                     dueDate,
//                 }),
//             });
//
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || "An unexpected error occurred.");
//             }
//
//             const data = await response.json();
//             if (data.data) {
//                 showToastMessage("Task Added Successfully");
//                 getAllTasks();
//                 onClose();
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };
//
//     const editTask = async () => {
//         const taskId = taskData._id;
//
//         try {
//             const response = await fetch(`/api/tasks/${taskId}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     title,
//                     content,
//                     taskStatus,
//                     taskPriority,
//                     dueDate,
//                 }),
//             });
//
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || "An unexpected error occurred.");
//             }
//
//             const data = await response.json();
//             if (data.data) {
//                 showToastMessage("Task Updated Successfully", 'update');
//                 getAllTasks();
//                 onClose();
//             }
//         } catch (error) {
//             setError(error.message);
//         }
//     };
//
//     const handleAddtask = () => {
//         if (!title) {
//             setError("Please enter the title");
//             return;
//         }
//
//         if (!content || countWords(content) > 70) {
//             setError("Please enter a description with no more than 70 words");
//             return;
//         }
//
//         if (!taskStatus) {
//             setError("Please enter the status");
//             return;
//         }
//
//         if (!dueDate) {
//             setError("Please enter the due date");
//             return;
//         }
//
//         if (!taskPriority) {
//             setError("Please select level of Priority");
//             return;
//         }
//         setError("");
//
//         if (type === 'edit') {
//             editTask();
//         } else {
//             addNewTask();
//         }
//     };
//
//     const countWords = (text) => {
//         return text.trim().split(/\s+/).length;
//     };
//
//     const handleContentChange = ({ target }) => {
//         const newContent = target.value;
//         if (countWords(newContent) > 70) {
//             setError("Description cannot exceed 70 words.");
//         } else {
//             setError("");
//             setContent(newContent);
//         }
//     };
//
//     return (
//         <div className="relative">
//             <button
//                 className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50"
//                 onClick={onClose}
//             >
//                 <MdClose className="text-xl text-slate-400" />
//             </button>
//
//             <div className="flex flex-col gap-2">
//                 <label className="input-label">TITLE</label>
//                 <input
//                     type="text"
//                     className="text-2xl text-slate-950 outline-none"
//                     placeholder="Team Meeting"
//                     value={title}
//                     onChange={({ target }) => setTitle(target.value)}
//                 />
//             </div>
//
//             <div className="flex flex-col gap-2 mt-4">
//                 <label className="input-label">DESCRIPTION</label>
//                 <textarea
//                     type="text"
//                     className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
//                     placeholder="Description"
//                     rows={10}
//                     value={content}
//                     onChange={handleContentChange}
//                 />
//             </div>
//             <div>
//                 <label className="input-label">Task Status</label>
//                 <StatusSelector setTaskStatus={setTaskStatus} taskStatus={taskStatus} />
//             </div>
//
//             <div>
//                 <label className="input-label">Due Date</label>
//                 <form>
//                     <input
//                         type="date"
//                         id="dueDatePicker"
//                         value={dueDate}
//                         onChange={({ target }) => setDueDate(target.value)} />
//                 </form>
//             </div>
//
//             <div>
//                 <label className="input-label">Select Priority</label>
//                 <PrioritySelector
//                     id="prioritySelector"
//                     taskPriority={taskPriority}
//                     setTaskPriority={setTaskPriority}
//                 />
//             </div>
//
//             {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
//
//             <button
//                 className="btn-primary font-medium mt-5 p-3"
//                 onClick={handleAddtask}
//             >
//                 {type === 'add' ? "ADD" : "UPDATE"}
//             </button>
//         </div>
//     );
// };
//
// export default AddOrEditForm;
//
