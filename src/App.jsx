import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from './routers/routers';
import { Suspense } from 'react';
import { SideBarProvider } from './contexts/SideBarProvider';
import SideBar from './components/SideBar/SideBar';

function App() {
    return (
        <SideBarProvider>
            <BrowserRouter>
                <SideBar />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {routers.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.path}
                                    element={<item.component />}
                                />
                            );
                        })}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </SideBarProvider>
    );
}

export default App;
