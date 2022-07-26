import { createAnecdote } from '../reducers/anecdoteReducer';
import { showNotificationWithTimeout } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    props.createAnecdote(content);

    props.showNotificationWithTimeout({
      content: `new anecdote '${content}'`,
      timer: 5000,
    });
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
};

const ConnectedAnecdoteForm = connect(null, {
  createAnecdote,
  showNotificationWithTimeout,
})(AnecdoteForm);
export default ConnectedAnecdoteForm;
