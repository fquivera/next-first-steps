import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'Pagina acerca del website',
 keywords: 'About, pagina, website'
};

export default function Aboutpage() {
  return (
    <>
        <span className="text-7xl">About page</span>
    </>
  )
}
