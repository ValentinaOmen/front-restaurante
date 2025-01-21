import { Input, Button, Dropdown, DropdownTrigger, DropdownMenu,DropdownItem, Avatar
} from "@nextui-org/react";
import { Bell, Search, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header
     className="w-full px-4 py-2 bg-white shadow-sm">
      <div className="flex items-center justify-between w-full">
        {/* Logo y Búsqueda */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">RestaurantApp</h1>
          <div className="hidden md:flex">
            <Input
              placeholder="Buscar..."
              startContent={<Search className="w-4 h-4" />}
              className="w-64"
            />
          </div>
        </div>

        {/* Menú derecho */}
        <div className="flex items-center gap-4">
          <Button isIconOnly variant="light">
            <Bell className="w-5 h-5" />
          </Button>

          <Dropdown>
            <DropdownTrigger>
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar
                  src="https://i.pravatar.cc/150?img=4"
                  size="sm"
                />
                <ChevronDown className="w-4 h-4" />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Opciones de usuario">
              <DropdownItem key="perfil">Mi Perfil</DropdownItem>
              <DropdownItem key="configuracion">Configuración</DropdownItem>
              <DropdownItem key="ayuda">Ayuda</DropdownItem>
              <DropdownItem key="salir" className="text-danger">
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;

