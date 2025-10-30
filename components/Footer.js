import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Jessica Ye. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-2">
          <a href="https://github.com/yejessica/" className="flex items-center space-x-3 rtl:space-x-reverse" target="_blank" rel="noopener noreferrer">
            <Image src="/img/github.svg" className="h-8" alt="Github Logo" width={32} height={32} />
          </a>
          <a href="https://www.linkedin.com/in/jjessicaye/" className="flex items-center space-x-3 rtl:space-x-reverse" target="_blank" rel="noopener noreferrer">
            <Image src="/img/linkedin.svg" className="h-8" alt="LinkedIn Logo" width={32} height={32} />
          </a>
          <a href="https://x.com/jjessicaye/" className="flex items-center space-x-3 rtl:space-x-reverse" target="_blank" rel="noopener noreferrer">
            <Image src="/img/x.svg" className="h-8" alt="X Logo" width={32} height={32} />
          </a>
        </ul>
      </div>
    </footer>
  )
}

