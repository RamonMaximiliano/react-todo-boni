function Delete(props) {
    return (
        <div className="delete">
            <button className="deleteButton" onClick={props.delete}>Clean list</button>
        </div>
    );
}

export default Delete