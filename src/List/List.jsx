import './List.scss'

const Task = () => {
    return ( 
        <div className="Task">
            <div className="Details">Lorem ipsum dolor sit amet </div>
            <div className="actions">
                <div className="edit"></div>
                <div className="delete"></div>
            </div>
        </div>
     );
}
 

const List = () => {
    return ( 
        <div className="List">
            <div className="header">
                <div className="heading">Tasks</div>
                <div className="logout">Logout</div>
            </div>
            <div className="Content">
                <div className="addTask">+</div>
                <div className="Tasks"></div>
            </div>
        </div>
     );
}
 
export default List;