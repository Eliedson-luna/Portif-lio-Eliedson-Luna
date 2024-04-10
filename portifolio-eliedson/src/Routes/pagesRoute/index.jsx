import Home from '../../components/Pages/Home/index.jsx';
import AboutPage from '../../components/Pages/AboutPage/index.jsx';
import ProjectsPage from '../../components/Pages/ProjectsPage/index.jsx';

const HomeRoute = () => {
    return <Home/>
}
const AboutPageRoute = () => {
    return <AboutPage/>
}

const ProjectPageRoute = () => {
    return <ProjectsPage/>
}

export {
        HomeRoute,
        AboutPageRoute,
        ProjectPageRoute
    };