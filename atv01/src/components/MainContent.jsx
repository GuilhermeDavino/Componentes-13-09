import Article from "./Article.jsx"
import SideBar from "./Sidebar.jsx"


export default function MainContent(props) {
    return(
        <>
            <main>
                <h1>{props.name}</h1>
                <h1>{props.idade}</h1>
                <Article/>
                <SideBar/>
            </main>
        </>
    )
}