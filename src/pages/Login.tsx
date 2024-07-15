import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
import DefaulltHeader from '@/PageComponents/DefaulltHeader'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/Redux/store'
import { login } from '@/Redux/Auth/AuthAction'
export default function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const {status} =useSelector((state:RootState)=>state.User)
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })

  const handleLoginSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(login(formData))
  }

  return (
    <div>
        <DefaulltHeader/>
    <div className='mt-[9%]'>
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLoginSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e)=>setFormData({...formData, email:e.target.value})}
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password"
            value={formData.password}
            onChange={(e)=>setFormData({...formData,password:e.target.value})}
            type="password" required />
          </div>
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}
