// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { PetToys } from '@myreactorg/pets-toys';

export function App() {
  const arr = ['Ball', 'Socks', 'Stuffed Hedgehog', 'Frisbee', 'Stuffed Dino'];
  return (
    <>
      <div className="header">
        <h1 className="title"> Welcome App A 👋 </h1>
      </div>
      <PetToys toys={arr} />
    </>
  );
}

export default App;
