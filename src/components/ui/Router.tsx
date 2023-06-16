import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StartPage } from "../pages/startPage/StartPage"
import { Step1Page } from "../pages/step1Page/Step1Page"
import { Step2Page } from "../pages/step2Page/Step2Page"
import { Step3Page } from "../pages/step3Page/Step3Page"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StartPage />} path="/" />
        <Route element={<Step1Page />} path="/step1" />
        <Route element={<Step2Page />} path="/step2" />
        <Route element={<Step3Page />} path="/step3" />
        <Route element={<h1>Page not found</h1>} path="*" />
      </Routes>
    </BrowserRouter>
  );
}
