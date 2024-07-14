import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CircleUser, Menu, Package2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Header() {
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSearchFocus = () => {
    setShowRecommendations(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowRecommendations(false);
    }, 200);
  };

  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link to="/orders" className="text-muted-foreground hover:text-foreground">
                Orders
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <Link to="/customers" className="text-muted-foreground hover:text-foreground">
                Customers
              </Link>
              <Link to="/settings" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
            to="/dashboard"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <div className="relative flex-1 sm:flex-initial">
          <form className="hidden md:flex items-center" onFocus={handleSearchFocus} onBlur={handleSearchBlur}>
  <input
    type="text"
    name="search"
    className="h-10 max-w-[600px] cursor-text rounded-md border bg-gray-100 py-2 pl-4 outline-none ring-emerald-200 hover:border hover:border-emerald-300 transition-all duration-200"
    placeholder="City, Address, Zip :"
    onFocus={handleSearchFocus}
    onBlur={handleSearchBlur}
  />
  <button
    type="submit"
    className="ml-0 inline-flex h-10 items-center justify-center rounded-r-md bg-emerald-500 py-2 px-4 text-center align-middle text-base font-medium normal-case text-white outline-none ring-emerald-200 ring-offset-1 focus:ring"
  >
    Search
  </button>
</form>
          {showRecommendations && (
            <div className="absolute left-0 right-0 mt-2 divide-y rounded-b-xl border px-4 shadow-lg bg-white">
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>lifornia</span>
              </div>
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>nada</span>
              </div>
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>mbodia</span>
              </div>
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>meo</span>
              </div>
              <div className="cursor-pointer px-4 py-2 text-gray-600 hover:bg-emerald-400 hover:text-white">
                <span className="m-0 font-medium">Ca</span> <span>rsville</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          
          <Link
            to="/orders"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            to="/products"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            to="/customers"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </Link>
          <Link
            to="/settings"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Settings
          </Link>
        </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
}
