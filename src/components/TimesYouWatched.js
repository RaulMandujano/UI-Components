import React, { useState } from 'react';
import Button from '@mui/material/Button';

function TimesYouWatched() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>How Many Times Watched This Movie?</p>
      <p>{count} times</p>
      <Button variant="contained" onClick={() => setCount(count - 1)}>
        -
      </Button>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        +
      </Button>
    </div>
  );
}

export default TimesYouWatched;