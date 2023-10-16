// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { PetToys } from '@myreactorg/pets-toys';

export function App() {
  const arr = ['Feathers on a stick', 'Cardboard Box', 'Shoe Box'];
  return (
    <>
      <div className="header">
        <h1 className="title"> Welcome App B 👋 </h1>
      </div>
      <PetToys toys={arr} />
    </>
  );
}

export default App;
