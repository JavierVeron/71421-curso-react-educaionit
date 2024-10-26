import BaseComponent from "./BaseComponent"

const PostLists = (prop) => {
    return (
        <ul className="list-group">
            {prop.posts.map(item => (
                <li className="list-group-item">{item.nombre}</li>
            ))}
        </ul>
    )
}

const withPosts = (BaseComponent) => {
    const productos = [
        {id:1, nombre:"Coca Cola", precio:2000},
        {id:2, nombre:"Pepsi", precio:1800},
        {id:3, nombre:"Sprite", precio:1800},
        {id:4, nombre:"Seven Up", precio:1700}
    ]

    return (productos) => {
        return (
            <BaseComponent posts={productos} />
        )
    }
}

/* const HOC = () => {
    return (
        <h1>HOC</h1>

    )
} */

export default withPosts(PostLists)