import { voteAnecdote } from '../reducers/anecdoteReducer';
import {
  setNotification,
  resetNotification,
} from '../reducers/notificationReducer';

import { useDispatch, useSelector } from 'react-redux';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector((state) => state.anecdotes);

  const vote = (id, content) => {
    dispatch(voteAnecdote(id));
    dispatch(setNotification(content));
    setTimeout(() => {
      dispatch(resetNotification());
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
