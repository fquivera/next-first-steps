import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contacto',
 description: 'Pagina de Contacto',
 keywords: ['Contacto', 'Pagina de Contacto', 'Contacto de pagina'],
};

export default function Contactpage() {
  return (
    <>
        <span className="text-7xl">Contact page</span>
    </>
  )
}
