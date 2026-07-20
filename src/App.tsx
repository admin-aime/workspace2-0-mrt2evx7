import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { FeedbackProvider } from '@aime-platform/aime-feedback-module';
import Layout from './components/Layout';
import Home from './pages/Home';
import ModelOverview from './pages/ModelOverview';

// Set route manifest synchronously so the capture tool can read it immediately
(window as any).__APP_ROUTES__ = ['/', '/model-overview'];

function App() {

  return (
    <FeedbackProvider
      projectId="6a5df45fd0111e8be007366a"
      projectsMsBaseUrl={(import.meta as any).env.VITE_FEEDBACK_PROJECTS_MS_URL}
      projectsMsToken={(import.meta as any).env.VITE_FEEDBACK_PROJECTS_MS_TOKEN}
      filesMsApiBaseUrl={(import.meta as any).env.VITE_FEEDBACK_FILES_MS_URL}
      filesMsToken={(import.meta as any).env.VITE_FEEDBACK_FILES_MS_TOKEN}
      teamsUrl={(import.meta as any).env.VITE_PROJECT_TOOLS_URL}
      notifyUsers={(import.meta as any).env.VITE_FEEDBACK_NOTIFY_USERS}
    >
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/model-overview" element={<ModelOverview />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <h2 className="text-xl font-bold text-white mb-2">Page Not Found</h2>
                <p className="text-white/50 mb-4">The page you are looking for does not exist.</p>
                <Link to="/" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Go back home</Link>
              </div>
            } />
          </Route>
        </Routes>
      </HashRouter>
    </FeedbackProvider>
  );
}

export default App;
