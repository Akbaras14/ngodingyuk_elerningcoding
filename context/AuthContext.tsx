"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  updateProfile: (name: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (foundUser) {
      const userData = { name: foundUser.name, email: foundUser.email };
      localStorage.setItem("currentUser", JSON.stringify(userData));
      setUser(userData);
      router.push("/home");
      router.refresh(); 
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const register = async (name: string, email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((u: any) => u.email === email);

    if (existingUser) {
      throw new Error("Email already registered");
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Auto login after register
    const userData = { name, email };
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setUser(userData);
    router.push("/home");
    router.refresh();
  };

  const updateProfile = async (newName: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!user) throw new Error("No user logged in");

    // 1. Update Current Session
    const updatedUser = { ...user, name: newName };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);

    // 2. Update Database (localStorage 'users' array)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userIndex = users.findIndex((u: any) => u.email === user.email);
    
    if (userIndex !== -1) {
      users[userIndex].name = newName;
      localStorage.setItem("users", JSON.stringify(users));
    }
    
    router.refresh();
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    router.push("/login");
    router.refresh();
  };

  return (
    <AuthContext.Provider value={{ user, login, register, updateProfile, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}