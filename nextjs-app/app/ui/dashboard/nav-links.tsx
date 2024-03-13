'use client';

import {
  ClockIcon,
  HomeIcon,
  CalculatorIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {Tooltip} from "@nextui-org/react";

const links = [
  { 
    name: 'Home', 
    href: '/dashboard', 
    icon: HomeIcon, 
    tooltip: 'Home Page: Describes available features'
  },
  {
    name: 'Reading Speed Test',
    href: '/dashboard/speedTest',
    icon: ClockIcon,
    tooltip: 'Reading Speed Test: Determine your reading speed'
  },
  { 
    name: 'Reading Time Calculator', 
    href: '/dashboard/calculator', 
    icon: CalculatorIcon,
    tooltip: 'Reading Time Calculator: Determine how long it will take to read an amount of words'
  },
    
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Tooltip key='default' color='default' content={link.tooltip} className="capitalize">
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </Tooltip>
        );
      })}
    </>
  );
}
