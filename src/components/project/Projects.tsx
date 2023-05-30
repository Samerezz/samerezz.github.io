import Card from './Card';
import './Projects.css';
import data from "../../data/data.json"
function Projects() {
    return (
        <div className='container-cards'>
            {data.map(item => {
                return (
                    <Card
                        title={item.title}
                        url={item.url}
                        description={item.description}
                        coverURL={item.cover}
                        publishDate={new Date(item.date)}
                        isGame={true} />
                )
            })}
        </div>
    )
}
export default Projects;