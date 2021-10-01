

let myTask = []

const inputEl = document.getElementById("input-el")
const addBtn = document.getElementById("add-task")
const ulEl = document.getElementById("ul-el")
const deleteAllBtn = document.getElementById("delete-all")
const myTaskFromLocalStorage = JSON.parse(localStorage.getItem('myTask'))

if(myTaskFromLocalStorage){
    myTask = myTaskFromLocalStorage
    //console.log(myTask)
    render(myTask)
}

function render(task){
    //console.log(task)
    let listTasks = ""
    
    for(i=0;i<task.length;i++){
        
        listTasks += `
            <li>
                ${task[i]}<button class="delete-item">Delete</button>
            </li>
        ` 
    }
    ulEl.innerHTML = listTasks
    
    deleteFunction(task)
}

function ren(task){
    let listTasks = ""
    
    for(i=0;i<task.length;i++){
        
        listTasks += `
            <li>
                ${task[i]}<button class="delete-item">Delete</button>
            </li>
        ` 
    }
    ulEl.innerHTML = listTasks
}


addBtn.addEventListener("click", function(){
    console.log("mytask="+myTask)
    //console.log(inputEl.value)
    if(inputEl.value!=""){
    myTask.push(inputEl.value)
    inputEl.value=""
    //console.log(myTask)
    localStorage.setItem("myTask",JSON.stringify(myTask))
    
    render(myTask)
    }

})

deleteAllBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myTask = []
    render(myTask)
})

function deleteFunction(task){
    let deleteButton = document.querySelectorAll('.delete-item')
    //console.log(deleteButton)
    //deleteButton[0].style.backgroundColor= "green"

    deleteButton.forEach(function(button,index){
        button.addEventListener('dblclick',function(e){
            //console.log(e.path[1].childNodes)
            //console.log("index="+index)
            let deletedStorage = localStorage.getItem('myTask');
            //console.log("delstorage="+deletedStorage)
            let deletedStorageParsed = JSON.parse(deletedStorage);
            //console.log("parsed ="+deletedStorageParsed)
            deletedStorageParsed.splice(index, 1);
            //console.log(deletedStorageParsed);
            localStorage.setItem('myTask',JSON.stringify(deletedStorageParsed));
            //console.log(deletedStorageParsed)
            //console.log(deletedStorageParsed)
            //console.log(myTask.splice(index,1))
            task = deletedStorageParsed
            console.log(task)
            myTask= task
            render(task)
            
        })
    })
}



