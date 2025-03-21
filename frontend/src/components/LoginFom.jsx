import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LockClosedIcon } from "@heroicons/react/24/solid"; // 🛠 Importing icon

export default function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-96 p-6 shadow-lg bg-white rounded-lg">
        {/* 🔹 Sign-in Icon */}
        <div className="flex flex-col items-center mb-4">
          <LockClosedIcon className="w-12 h-12 text-[#03613a] mb-2" />  
          <h2 className="text-2xl font-bold text-gray-700">Sign In</h2>
        </div>

        {/* 🔹 Login Form Fields */}
        <div className="space-y-4 mb-2">
          <div>
            <Label htmlFor="username" className="mb-2 block">
              Username
            </Label>
            <Input id="username" type="text" placeholder="Enter your username" />
          </div>
          <div>
            <Label htmlFor="password" className="mb-2 block">
              Password
            </Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>

          {/* 🔹 Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2 accent-[#03613a]" />
              <Label htmlFor="remember" className="cursor-pointer">Remember Me</Label>
            </div>
            <a href="#" className="text-[#03613a] hover:underline">Forgot Password?</a>
          </div>

          {/* 🔹 Login Button */}
          <Button className="w-full bg-[#03613a] text-white hover:bg-[#024a2b] mt-2">
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}