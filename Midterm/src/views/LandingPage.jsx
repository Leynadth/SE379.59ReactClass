import { useState } from 'react';

function LandingPage() {
    // Declare a piece of state called `greeting` with an initial value
  // `setGreeting` is a function we can use to change the greeting later
  const [greeting, setGreeting] = useState("Welcome to the LeyLey's Page");

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={() => setGreeting("Thanks for visiting!")}>Click Me</button>
    </div>
  );
}

export default LandingPage;
