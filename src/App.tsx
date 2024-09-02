import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Videoo from "./components/Videoo";
import Organizasii from "./components/Organizasii";
import Soobshestvo from "./components/Soobshestvo";
import DetailVacancy from "./components/DetailVacancy";
import { Vacancies } from "./components/Vacancy/Vacancies";
import DetailOrganization from "./components/DetailOrganization";
import Events from "./components/Events";
import VideoList from "./components/VideoDetail";
import VideoDetail from "./components/VideoDetail";
import RouterProtector from "./components/RouterProtect";
import { AddVac } from "./components/AddVacancies";
import { ModalAddVac } from "./components/ModalAddVac";
import { AddJobs } from "./components/AddJobs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/vacancy" element={<Vacancies />} />
          <Route path="protectedPath" element={
      <RouterProtector>
          <Vacancies />
      </RouterProtector>
  }/>

          <Route path="/events" element={<Events />} />
          <Route path="/meetups" element={<Videoo />} />
          <Route path="/videoDetail" element={<VideoDetail />} />
          <Route path="/videoList" element={< VideoList/>} />
          <Route path="/organizations" element={<Organizasii />} />
          <Route path="/community" element={<Soobshestvo />} />
          <Route path="/detailVacancy" element={<DetailVacancy />} />
          <Route path="/detailO" element={<DetailOrganization />} />
          <Route path="/addVac" element={<AddVac />} />
        <Route path="/modalAddVac" element={<ModalAddVac />} />
        <Route path="/addJobs" element={<AddJobs />} />
      </Routes>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
