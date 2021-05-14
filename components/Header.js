export const Header = () => {
  return (
    <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Novidade!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Envie mensagens para
              <br className="hidden md:block" />
              seus contatos a partir de{' '}
              <span className="inline-block text-teal-accent-700">
                uma tabela
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Gerencie os seus contatos através de uma tabela do Excel e envie mensagens para todos os números da tabela, simples, rápido e fácil!
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-700 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
            >
              Adquirir!
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-accent-700 hover:text-teal-800"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="/hero-image2.png"
          className="object-cover object-top w-full h-auto max-w-xl -mb-0 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-0 xl:-mb-0 lg:h-auto lg:max-w-screen-md"
          alt="Tabela para WhatsApp com facilidade"
        />
      </div>
    </div>
  );
};