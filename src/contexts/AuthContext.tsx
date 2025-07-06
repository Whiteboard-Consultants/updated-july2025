import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'instructor' | 'student';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users for testing
const demoUsers: User[] = [
  {
    id: '1',
    email: 'admin@whiteboardconsultant.com',
    name: 'Sarah Mitchell',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg'
  },
  {
    id: '2',
    email: 'instructor@whiteboardconsultant.com',
    name: 'David Chen',
    role: 'instructor',
    avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg'
  },
  {
    id: '3',
    email: 'student@whiteboardconsultant.com',
    name: 'Priya Sharma',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo authentication - in production, this would be an API call
    const foundUser = demoUsers.find(u => u.email === email);
    
    if (foundUser && password === 'demo123') {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Check for existing session on mount
  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
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