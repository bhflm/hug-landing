import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import AnimatedCanvas  from "@/components/AnimatedTree";"@/components/AnimatedTree";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen bg-green-100">
      <div className="flex max-h">
        <AnimatedCanvas className={"bg-green-100"} />
      </div>
    <div key="1" className="w-full dark:bg-green-900">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold text-green-800 dark:text-green-200">hug 🌲🫂</h1>
        <Button className="text-green-800 dark:text-green-200 border-green-800 dark:border-green-200" variant="outline" disabled={true}>
          Sign Up (soon)
        </Button>
      </header>
      <div className="flex flex-col items-center justify-center flex-grow text-center p-6 space-y-8">
        <h2 className="text-4xl font-bold text-green-800 dark:text-green-200">Mental health, but explained better.</h2>
        <p className="max-w-lg text-lg text-green-700 dark:text-green-300">
        Unlock a deeper understanding of anxiety at its core. We are committed to raising awareness, offering hand curated mental health resources, and introducing innovative tools to redefine your mental well-being. Join our waitlist to stay updated.
        </p>
  
        <div className="flex space-x-2">
          <Input className="flex-grow" placeholder="Enter your email" type="email" />
          <Button className="bg-green-800 text-white dark:bg-green-200 dark:text-green-800">Join Waitlist</Button>
        </div>
      </div>  
  
    <footer className="flex items-center justify-center py-6 text-green-600 dark:text-green-400">
        <p>© hug. All rights reserved.</p>
    </footer>
    </div>
    </div>
  )
}
