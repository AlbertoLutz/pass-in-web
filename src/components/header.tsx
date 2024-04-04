import iconLogo from "../assets/nlw-unite-icon.svg";

function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={iconLogo} />
      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-300">
          Eventos
        </a>
        <a href="" className="font-medium text-sm">
          Participantes
        </a>
      </nav>
    </div>
  );
}

export default Header;
