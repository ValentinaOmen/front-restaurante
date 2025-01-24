import Sidebar from "@/components/organismos/sidebar"; // Cambiar 'Sidebar' por 'sidebar'
import Header from "@/components/organismos/Header";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header /> 
        
      </div>
    </div>
  );
}
