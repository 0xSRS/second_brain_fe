import Button from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"

const App = () => {
  return (
    <div>
        <Button startIcon={<PlusIcon size="md"/>} size="sm" varient="primary" text="Add" onClick={()=>{}}/>
        <Button size="md" varient="secondary" text="click me" onClick={()=>{}}/>
        <Button size="lg" varient="primary" text="click me" onClick={()=>{}}/>     
    </div>
  )
}

export default App