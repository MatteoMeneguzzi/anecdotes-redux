import { updateVote } from '../reducers/anecdoteReducer';
import { showNotificationWithTimeout } from '../reducers/notificationReducer';

import { useDispatch, useSelector } from 'react-redux';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter.content === '') {
      return anecdotes;
    }
    return anecdotes.filter((item) => item.content.includes(filter.content));
  });

  const vote = (anecdote, content) => {
    dispatch(updateVote(anecdote));
    dispatch(
      showNotificationWithTimeout({
        content: `you voted '${content}'`,
        timer: 5000,
      })
    );
  };

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default AnecdoteForm;
