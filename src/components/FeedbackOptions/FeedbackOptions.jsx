
import { Btn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => (
                <Btn key={option} type='button' onClick={() => onLeaveFeedback(option)}>
                    {option}
                </Btn>
            ))}
        </div>

    )
}
export default FeedbackOptions;