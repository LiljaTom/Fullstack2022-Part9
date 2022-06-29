
import { CourseParts } from "../types";

const Content = ({ courseParts}: CourseParts) => {
    return(
        <>
        { courseParts.map((part) => (
            <p key={part.name}>
                { part.name } { part.exerciseCount }
            </p>
        ))}
    </>
    )
}

export default Content;