
import React, { createContext, useContext, useState, useEffect } from 'react';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// This would normally be in an environment variable
const MONGODB_URI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/medicaredb";
const JWT_SECRET = "your_jwt_secret_key";

type User = {
  _id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // In a real application, we'd connect to MongoDB
  // For now, we'll simulate this with localStorage
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // In a real app, verify the token with JWT
          const userData = JSON.parse(localStorage.getItem('user') || '{}');
          setUser(userData);
        } catch (error) {
          console.error('Auth token invalid:', error);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // In a real application, these functions would connect to MongoDB
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulating a database call
      // In a real app, we'd query MongoDB
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email);
      
      if (!user) {
        console.error('User not found');
        return false;
      }
      
      // Compare password (in a real app we'd use bcrypt.compare)
      const isPasswordValid = password === user.password; // Simplified for demo
      
      if (!isPasswordValid) {
        console.error('Invalid password');
        return false;
      }
      
      // Create JWT token (simplified)
      const token = 'simulated_jwt_token';
      
      // Save auth data
      localStorage.setItem('token', token);
      
      const userData = {
        _id: user._id,
        name: user.name,
        email: user.email
      };
      
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Get existing users
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      if (users.some((u: any) => u.email === email)) {
        console.error('User already exists');
        return false;
      }
      
      // Create new user
      const newUser = {
        _id: `user_${Date.now()}`,
        name,
        email,
        password, // In a real app, hash the password with bcrypt
      };
      
      // Save to "database"
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
