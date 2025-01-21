"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div
      className="flex h-screen w-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/registrar.jpg')",
      }}
    >
      <div className="flex w-full max-w-sm flex-col gap-6 rounded-xl bg-white/90 px-8 py-10 shadow-lg">
        <h2 className="text-center text-3xl font-bold">
          Registrarse{" "}
          <span aria-label="emoji" role="img">
            😊
          </span>
        </h2>
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <Input
            isRequired
            label="Nombre de usuario"
            labelPlacement="outside"
            name="username"
            placeholder="Ingresa tu nombre de usuario"
            type="text"
            variant="bordered"
          />
          <Input
            isRequired
            label="Correo electrónico"
            labelPlacement="outside"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon className="text-2xl text-default-400" icon="solar:eye-closed-linear" />
                ) : (
                  <Icon className="text-2xl text-default-400" icon="solar:eye-bold" />
                )}
              </button>
            }
            label="Contraseña"
            labelPlacement="outside"
            name="password"
            placeholder="Ingresa tu contraseña"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
          <Button color="primary" type="submit">
            Registrarse
          </Button>
        </form>
      </div>
    </div>
  );
}
