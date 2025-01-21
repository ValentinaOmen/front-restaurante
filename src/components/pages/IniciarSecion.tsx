import React from "react";
import { Button, Input, Link, Form } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-center"
      style={{
        backgroundImage: "url('/assets/inicisiar.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6 bg-white dark:bg-gray-800 shadow-lg" style={{ borderRadius: "30px", opacity: 0.9 }}>
        <p className="pb-4 text-left text-3xl font-semibold">
          Inicio Sesion
          <span aria-label="emoji" className="ml-2" role="img">
            👋
          </span>
        </p>
        <Form className="flex flex-col gap-4" validationBehavior="native" onSubmit={handleSubmit}>
          <Input isRequired label="Usuario" labelPlacement="outside" name="string" placeholder="Ingresa tu usuario" type="string" variant="bordered" />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon className="pointer-events-none text-2xl text-default-400 dark:text-gray-400" icon="solar:eye-closed-linear" />
                ) : (
                  <Icon className="pointer-events-none text-2xl text-default-400 dark:text-gray-400" icon="solar:eye-bold" />
                )}
              </button>
            }
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Ingresa tu contraseña"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Link className="text-default-500 dark:text-default-400" href="#" size="sm">
              Olvidaste tu contraseña?
            </Link>
          </div>
          <Button className="w-full" color="primary" type="submit">
            Iniciar Sesion
          </Button>
        </Form>
        <p className="text-center text-small text-gray-600 dark:text-gray-400">
          <Link href="#" size="sm">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
