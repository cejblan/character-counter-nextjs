"use client"

import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [guardado, setGuardado] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.addEventListener("input", (event) => {
        setGuardado(event.target.value);
      });
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener("input", (event) => {
          setGuardado(event.target.value);
        });
      }
    };
  }, []);

  return (
    <>
      <section className="home py-2">
        <div className="py-2">
          <h2 className="text-3xl">Bienvenido a mi:</h2>
          <h1 className="text-5xl">Contador de Caracteres</h1>
        </div>
        <div className="flex my-4 max-w-84">
          <textarea className="h-84 w-84 border-2 border-solid border-black rounded m-auto" ref={textareaRef} name="areaUno" id="areaUno"></textarea>
          <div className="text-3xl h-84 w-84 border-2 border-solid border-black rounded py-24 m-auto">El texto tiene:<br></br>{guardado.length} Caracteres</div>
        </div>
        <div>
          <h3 className="text-xl">Donaciones:</h3>
          <h4 className="text-xl">Paypal: benfran21@hotmail.com</h4>
          <h4 className="text-xl">Recarga: 0414 224 5444</h4>
        </div>
      </section>
    </>
  );
}
