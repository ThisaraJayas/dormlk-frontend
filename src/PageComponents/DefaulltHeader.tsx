import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleUser, Menu, Package2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchBox from "./SearchBox";
export default function DefaulltHeader() {
  return (
    <div>
    <header className="fixed top-0 left-0 right-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              to="/dashboard"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              to="/orders"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              to="/customers"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link to="/settings" className="hover:text-foreground">
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      
      <Link
              to="/dashboard"
              className="flex items-center gap-2 ml-4 mr-6 text-lg font-bold text-emerald-500 hover:text-emerald-600"
            >
              <span className="text-3xl">Dorm</span>
              
            </Link>
      <div className="hidden md:flex">
      <SearchBox/>
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
  )
}
