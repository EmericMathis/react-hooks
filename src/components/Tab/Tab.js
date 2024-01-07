import Counter from "../INCREMENTATOR/Counter";
import * as Ariakit from "@ariakit/react";
import { useContext } from 'react'
import { ThemeContext } from '../App.js'
import { Button } from "@ariakit/react";
import ToDoList from "../ToDoList/ToDoList.js";

const Tab = () => {


  const defaultSelectedId = "default-selected-tab";
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={"App " + theme}>
      <div className="wrapper">
        <Button className="button theme" onClick={toggleTheme}>{theme}</Button>
        <Ariakit.TabProvider defaultSelectedId={defaultSelectedId}>
          <Ariakit.TabList className="tab-list" aria-label="Groceries">
            <Ariakit.Tab className="tab" id={defaultSelectedId}>
              Counter
            </Ariakit.Tab>
            <Ariakit.Tab className="tab">ToDoList</Ariakit.Tab>
            <Ariakit.Tab className="tab">Autre</Ariakit.Tab>
          </Ariakit.TabList>
          <div className="panels">
            <Ariakit.TabPanel tabId={defaultSelectedId}>
              <Counter />
            </Ariakit.TabPanel>
            <Ariakit.TabPanel>
              <ToDoList />
            </Ariakit.TabPanel>
            <Ariakit.TabPanel>
              <ul></ul>
            </Ariakit.TabPanel>
          </div>
        </Ariakit.TabProvider>
      </div>
    </div>
  );
};

export default Tab;
