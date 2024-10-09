import { useState } from "react";
import { Header, Main } from "./components/styled";
import { data } from "./components/mock";
import { Item } from "./components/item";

function App() {
  const [tree, setTree] = useState(data);

  return (
    <>
      <Header>
        <h2>
          Вложенный список
        </h2>
      </Header>
        
      <Main>
        {tree.map(item => (
          <Item
            root
            item={item}
            onChange={changed => setTree(old => old.map(i => i === item ? changed : i))}
          />
        ))}
      </Main>
    </>
  );
}

export default App;
