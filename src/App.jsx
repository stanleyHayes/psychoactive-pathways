import {Route, Routes, useLocation} from "react-router";
import {lazy, Suspense} from "react";
import Splash from "./components/shared/splash.jsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUI} from "./redux/features/ui/ui-slice.js";
import {THEMES} from "./utils/themes.js";

const StoriesPage = lazy(() => import('./pages/stories/stories-page.jsx'));
const CreateStoryPage = lazy(() => import('./pages/stories/create-story-page.jsx'));
const StoryDetailPage = lazy(() => import('./pages/stories/story-detail-page.jsx'));


function App() {

    const location = useLocation();
    const {theme} = useSelector(selectUI);

    return (
        <ThemeProvider theme={theme === 'light' ? THEMES.lightTheme : THEMES.darkTheme}>
            <CssBaseline enableColorScheme={true}/>
            <Suspense fallback={<Splash/>}>
                <Routes location={location}>
                    <Route path="/" index={true} element={<StoriesPage/>}/>
                    <Route path="/stories" element={<StoriesPage/>}/>
                    <Route path="/story/new" element={<CreateStoryPage/>}/>
                    <Route path="/stories/:id" element={<StoryDetailPage/>}/>
                </Routes>
            </Suspense>
        </ThemeProvider>
    )
}

export default App
