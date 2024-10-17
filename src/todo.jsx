//   conditional rendaring option 1
//  export default  function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished:{task}</li>
//     }
//     else{
//         return <li>Work on:{task}</li>
//     }
// }

// conditional rendaring option 2

//  export default  function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finish:{task}</li>
//     }
//         return <li>Work on:{task}</li>
// }

// conditional rendaring option 3

//  export default  function Todo({task, isDone}){
//     return <li> {isDone? "Finished" :"Work On"}:{task}</li>
// }

// conditional rendaring option 4: &&

//  export default  function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone && ':Done'}</li>
//     )
// }
//  export default  function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone || ':Do It'}</li>
//     )
// }

// conditional rendaring option:6

export default  function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem =<li>Finish:{task}</li>
    }
    else{
        listItem= <li>Work On:{task}</li>
    }
    return listItem;
}