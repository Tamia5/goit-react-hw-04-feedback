
import { StatList} from "./Statistics.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatList>
            <li>Good: { good}</li>
            <li>Neutral: { neutral}</li>
            <li>Bad: { bad}</li>
            <li>Total: { total}</li>
            <li>Positive Feedback: { positivePercentage}%</li>
        </StatList>
    )
}

export default Statistics;