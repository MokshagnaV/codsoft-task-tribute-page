function Footer() {
  return (
    <footer className="bg-black text-white md:p-10 p-5">
      <div className="max-w-7xl m-auto text-center flex flex-col gap-3">
        <div>
          A Tribute to Elon Musk by{" "}
          <a
            href="https://mokshagnav.github.io/portfolio/"
            className=" whitespace-nowrap hover:underline"
          >
            Mokshagna Vemula
          </a>
        </div>
        <div>
          Source -{" "}
          <a
            href="https://en.wikipedia.org/wiki/Elon_Musk"
            className=" hover:underline"
          >
            Wikipedia
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
