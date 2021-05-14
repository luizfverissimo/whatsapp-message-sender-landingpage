export const Feature = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='18302e52-9e2a-4c8e-9550-0cbb21b38e55'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>WhatsApp</span>
          </span>{' '}
          Message Sender irá facilitar a sua vida
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Através de funcionalidades pensadas exclusivamente para agilizar o seu
          fluxo de contato.
        </p>
      </div>
      <div className='grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col justify-between p-5 border rounded shadow-sm'>
          <div>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 24 24'
                className='w-10 h-10 text-teal-accent-700 fill-current'
              >
                <path d='M4,21h15.893c1.103,0,2-0.897,2-2V7V5v0l0,0c0-1.103-0.897-2-2-2H4C2.897,3,2,3.897,2,5v14C2,20.103,2.897,21,4,21z M4,19 v-5h4v5H4z M14,7v5h-4V7H14z M8,7v5H4V7H8z M10,19v-5h4v5H10z M16,19v-5h3.894v5H16z M19.893,12H16V7h3.893V12z'></path>
              </svg>
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Tabelas comuns</h6>
            <p className='mb-3 text-sm text-gray-900'>
              Utilize tabelas que já fazem parte do seu dia-a-dia, facilitando a
              sua edição e controle. Formatos aceitáveis: ".xlsx" e ".xls"
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between p-5 border rounded shadow-sm'>
          <div>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='w-10 h-10 text-teal-accent-700 fill-current'
              >
                <path d='M12,2C6.486,2,2,5.589,2,10c0,2.908,1.898,5.516,5,6.934V22l5.34-4.005C17.697,17.852,22,14.32,22,10 C22,5.589,17.514,2,12,2z M12,16h-0.333L9,18v-2.417l-0.641-0.247C5.67,14.301,4,12.256,4,10c0-3.309,3.589-6,8-6s8,2.691,8,6 C20,13.309,16.411,16,12,16z'></path>
              </svg>
            </div>
            <h6 className='mb-2 font-semibold leading-5'>
              Mensagens customizáveis
            </h6>
            <p className='mb-3 text-sm text-gray-900'>
              Edite a mensagem da sua maneira, adicionando parâmetros dinâmicos
              que será acrescentados automaticamente de acordo com a sua tabela.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between p-5 border rounded shadow-sm'>
          <div>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='w-10 h-10 text-teal-accent-700 fill-current'
              >
                <circle cx='7.499' cy='9.5' r='1.5'></circle>
                <path d='M10.499 14L8.999 12 5.999 16 8.999 16 11.999 16 17.999 16 13.499 10z'></path>
                <path d='M19.999,4h-16c-1.103,0-2,0.897-2,2v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C21.999,4.897,21.102,4,19.999,4z M3.999,18V6h16l0.002,12H3.999z'></path>
              </svg>
            </div>
            <h6 className='mb-2 font-semibold leading-5'>Envio de imagens</h6>
            <p className='mb-3 text-sm text-gray-900'>
              Uma imagem vale mais do quem mil palavras! Encaminhe uma imagem
              além de sua mensagem de texto para transmitir a sua ideia com mais
              facilidade.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-between p-5 border rounded shadow-sm'>
          <div>
            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='w-10 h-10 text-teal-accent-700 fill-current'
              >
                <circle fill='none' cx='12' cy='7' r='3'></circle>
                <path d='M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z'></path>
              </svg>
            </div>
            <h6 className='mb-2 font-semibold leading-5'>
              Não precisa adicionar contatos
            </h6>
            <p className='mb-3 text-sm text-gray-900'>
              A nossa ferramenta não necessita que você adicione todos os
              contatos em sua agenda para enviar as mensagens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
