import { ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-items-center justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-full md:px-20">
          <BookOpenIcon className="h-12 w-12 rotate-[15deg]" />
          <h1 className={`${lusitana.className} text-center mb-2 text-2xl md:text-2xl`}>Welcome</h1>
          <h3 className={`${lusitana.className} text-center mb-2 text-2m md:text-2m`}>to the</h3>
          <h1 className={`${lusitana.className} text-center mb-2 text-2xl md:text-2xl`}>Reading Speed Test</h1>
          <h3 className={`${lusitana.className} text-center mb-2 text-2m md:text-2m`}>and</h3>
          <h1 className={`${lusitana.className} text-center mb-2 text-2xl md:text-2xl`}>Book Reading Time Calculator</h1>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-green-500 hover:bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>BEGIN</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
