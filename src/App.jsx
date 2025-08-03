import './App.css';
import Layout from './Layout';
import { ThemeProvider } from './components/ThemeContext'; // Adjusted path to context

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;