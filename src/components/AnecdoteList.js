import { voteAnecdote } from '../reducers/anecdoteReducer';
import {
  setNotificationVote,
  resetNotificationVote,
} from '../reducers/notificationReducer';

import { useDispatch, useSelector } from 'react-redux';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter.content === '') {
      console.log(anecdotes);
      return anecdotes;
    }
    return anecdotes.filter((item) => item.content.includes(filter.content));
  });

  console.log(anecdotes);

  const vote = (id, content) => {
    dispatch(voteAnecdote(id));
    dispatch(setNotificationVote(content));
    setTimeout(() => {
      dispatch(resetNotificationVote());
    }, 5000);
  };

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default AnecdoteForm;
