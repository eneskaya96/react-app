import React from "react";
import { createRoot } from "react-dom/client";
import NewPageErrorBoundary from "./NewPage"
import FormComponent from "./FormComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/details/:id" element={<NewPageErrorBoundary />} />
                    <Route path="/" element={<FormComponent />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);