import "./App.css";
import AddUserForm from "./components/AddUserForm";
import Banner from "./components/Banner";

import HeaderSection from "./components/Header";
import UsersList from "./components/Users/UsersList";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="flex flex-col min-h-full bg-light-gray">
        <HeaderSection />
        <Banner />
        <UsersList />
        <AddUserForm />
      </section>
    </QueryClientProvider>
  );
}
