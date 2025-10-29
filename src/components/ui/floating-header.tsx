'use client'
import React from 'react';
import { SquareActivity, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Services',
			href: '/services',
		},
		{
			label: 'About Us',
			href: '/about_us',
		},
		{
			label: 'Blogs',
			href: '/blogs',
		},
	];

	return (
		<header
			className={cn(
				'sticky top-5 z-50 px',
				'mx-auto w-full max-w-3xl rounded-lg border shadow',
				'bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg',
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5 mpx-2">
				<a
					href="/"
					className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100"
				>
					<SquareActivity className="size-8" />
					<p className="font-mono text-base font-bold">BM Tech Lab</p>
				</a>

				{/* Desktop Links */}
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a
							key={link.href}
							className={buttonVariants({ variant: 'ghost', size: 'sm' })}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Contact + Menu */}
				<div className="flex items-center gap-2">
					{/* Contact Us Button visible only on desktop */}
					<Button size="sm" asChild className="hidden lg:inline-flex">
						<a href="/contact">Contact Us</a>
					</Button>

					{/* Menu button */}
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden"
						>
							<MenuIcon className="size-4" />
						</Button>

						{/* Side Menu Content */}
		<SheetContent
	className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
	showClose={false}
	side="left"
>
	<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
		{links.map((link) => (
			<a
				key={link.href}
				className={buttonVariants({
					variant: 'ghost',
					className: 'justify-start font-medium',
				})}
				href={link.href}
			>
				{link.label}
			</a>
		))}

		{/* Contact Us styled like others but bold */}
		<a
			href="/contact"
			className={buttonVariants({
				variant: 'ghost',
				className: 'justify-start font-bold text-foreground',
			})}
		>
			Contact Us
		</a>
	</div>
</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
