import React, { useEffect } from 'react'
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@chakra-ui/react'
import MyPosts from '@/myPages/MyPosts'
import MyMessages from '@/myPages/MyMessages'
import Footer from '@/PageComponents/Footer'
import MyAccount from '@/myPages/MyAccount'
import { useSelector } from 'react-redux'
import { RootState } from '@/Redux/store'




export default function MyPage() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  const {loginUser, status} =useSelector((state:RootState)=>state.User)
    const navigate = useNavigate()
    useEffect(() => {
      if (status === 'failed' && !loginUser) {
        navigate('/login');
      }
    }, [status, loginUser, navigate]);

  const renderSettingsContent = () => {
    switch (currentPath) {
      case 'posts':
        return <MyPosts />;
      case 'messages':
        return <MyMessages />;
      case 'account':
        return <MyAccount />;
      // Add cases for other settings
      default:
        return <MyPosts />;
    }
  };
  return (
    <>
    <div className="flex min-h-screen w-full flex-col">
      
      <main className=" mt-14 flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-4 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4  text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            <Link to="/my/posts" className="font-semibold text-primary">
              Posts
            </Link>
            <Link to="/my/messages">Messages</Link>
            <Link to="/my/account">Account</Link>
            <Link to="/my/support">Support</Link>
            <Link to="/my/organizations">Organizations</Link>
            <Link to="/my/advanced">Advanced</Link>
          </nav>
          <div className="grid gap-6">
          {renderSettingsContent()}
          </div>
        </div>
      </main>
    </div>
    <Footer/>
    </>
  )
}
