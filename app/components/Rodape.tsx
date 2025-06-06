import React from "react";
import { Github, Instagram, Linkedin, Folder } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-950 via-neutral-960 to-black border-t border-neutral-500">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Imagem ou Banner */}
        <div className="lg:col-span-2 flex flex-col items-start">
          <img
            src="/banner2-devtools.png"
            alt="Logo DevTools"
            className="w-full max-w-[260px] object-contain"
          />
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-white font-semibold mb-4">Ferramentas Principais</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <Link href="/contador-caracteres" className="hover:text-white">
                Contador de Caracteres
              </Link>
            </li>
            <li>
              <Link href="/gerador-senha" className="hover:text-white">
                Gerador de Senhas
              </Link>
            </li>
            <li>
              <Link href="/conversor-base64" className="hover:text-white">
                Conversor Base64
              </Link>
            </li>
            <li>
              <Link href="/json-formatter" className="hover:text-white">
                JSON Formatter
              </Link>
            </li>
            <li>
              <Link href="/conversor-timestamp" className="hover:text-white">
                Conversor de Timestamp
              </Link>
            </li>
            <li>
              <Link href="/gerador-uuid" className="hover:text-white">
                Gerador de UUID
              </Link>
            </li>
          </ul>
        </div>

        {/* Sobre */}
        <div>
          <h4 className="text-white font-semibold mb-4">Sobre</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <Link href="/sobre" className="hover:text-white">
                Sobre o projeto
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-neutral-400">
            <li>
              <Link href="/termos" className="hover:text-white">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link href="/privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-white">
                Política de Cookies
              </Link>
            </li>
          </ul>

          <ul className="flex gap-4 mt-6">
            <li>
              <a href="https://github.com/lhmarquesdev" target="_blank" rel="noreferrer">
                <Github className="size-5 text-neutral-400 hover:text-white transition" />
                <span className="sr-only">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lhmarquesdev/" target="_blank" rel="noreferrer">
                <Instagram className="size-5 text-neutral-400 hover:text-white transition" />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/luis-henrique-marques-508ba126b/" target="_blank" rel="noreferrer">
                <Linkedin className="size-5 text-neutral-400 hover:text-white transition" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://portfolio-gamma-eight-31.vercel.app/" target="_blank" rel="noreferrer">
                <Folder className="size-5 text-neutral-400 hover:text-white transition" />
                <span className="sr-only">Portfólio</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} DevTools do Henrique. Todos os direitos reservados.
          </p>
          <p className="text-xs text-neutral-500">Feito por Henrique Marques</p>
        </div>
      </div>
    </footer>
  );
}
