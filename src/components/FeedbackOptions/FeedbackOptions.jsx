// import { Btn } from './FeedbackOptions.styled';

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <div>
//       {options.map(option => (
//         <Btn key={option} type="button" onClick={() => onLeaveFeedback(option)}>
//           {option}
//         </Btn>
//       ))}
//     </div>
//   );
// };

import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options);

  return (
    <div>
      {optionNames.map(option => (
        <Btn key={option} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      ))}
    </div>
  );
};
