const UsersReducer = async (prevstate=[], action) => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let users;
    
    switch(action.type) {
        case "USER_ID":
            fetch(url + "/" + action.payload)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            
        default:
            fetch(url)
            .then(response => response.json())
            .then(data => {
                return data;
            })
    }
}

export default UsersReducer