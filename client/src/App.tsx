import { Switch, Route } from "wouter"
import Home from "./components/Home"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App