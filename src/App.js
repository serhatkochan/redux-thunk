import {useSelector} from 'react-redux';
import {dispatch, actions, selectors} from 'redux/index';
import {useEffect} from "react";

const {
  joke: {getJoke}
} = actions;

const {
  joke: {selectGetJokePending, selectGetJokeData, selectGetJokeError}
} = selectors;

function App() {
  const jokeData = useSelector(selectGetJokeData);
  const jokePending = useSelector(selectGetJokePending);
  const jokeError = useSelector(selectGetJokeError);

  useEffect(() => {
    if (jokeError) {
      console.warn('error message');
    }
  }, [selectGetJokeError])

  const getJokeTrigger = () => {
    dispatch(getJoke());
  }
  return (
    <div className="appContainer">
      <button onClick={getJokeTrigger}>Get Joke</button>
      {jokePending && <div>Joke Loading...</div>}
      {jokeData && <div>{jokeData.joke}</div>}
    </div>
  );
}

export default App;
