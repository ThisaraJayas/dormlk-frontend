import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CircleUser, Menu, Package2, LogIn } from "lucide-react";
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
import NavContactMenu from "./NavContactMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { getUser } from "@/Redux/Auth/AuthAction";

export default function DefaulltHeader() {
  const dispatch = useDispatch()
  const {loginUser} = useSelector((state:RootState)=>state.User)

  useEffect(()=>{
    if (!loginUser) {
      dispatch(getUser());
  }
  },[loginUser,dispatch])
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

        <div className="flex md:flex">
  <Link
    to="/"
    className="flex items-center gap-2 ml-0 md:ml-4 mr-0 md:mr-6 text-lg font-bold text-emerald-500 hover:text-emerald-600"
  >
    <span className="text-xl md:text-3xl">Dorm</span>
  </Link>
</div>

        <div className=" md:flex">
          <SearchBox />
        </div>

        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <div
              
              className="text-muted-foreground transition-colors  hover:text-foreground"
            >
              <NavContactMenu />
            </div>
            <Link
              to="/products"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Button
                variant="outline"
                className="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:text-white text-white flex items-center gap-2"
              >
                List your place
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </Link>
            {!loginUser && (
              <Link
              to="/settings"
              className="text-foreground transition-colors hover:text-foreground"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <LogIn className="h-5 w-5" />
                Login
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </Link>
            )}
            
          </nav>
          <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <CircleUser className="h-5 w-5" />
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              {loginUser &&(
                <DropdownMenuItem>Logout</DropdownMenuItem>
              )}
              
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
}
