import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface UserContextType {
  users: User[];
  currentUser: User | null;
  login: (role: User['role']) => void;
  logout: () => void;
  addUser: (user: User) => void;
  deleteUser: (id: number) => void;
  updateUserRole: (id: number, role: User['role']) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Updated mock database with specific users
const initialUsers: User[] = [
  { 
    id: 1, 
    name: "Super Admin", 
    email: "admin@demo.com", 
    role: "admin", 
    status: "active", 
    joinedDate: "2023-01-01" 
  },
  { 
    id: 2, 
    name: "Demo Student", 
    email: "user@demo.com", 
    role: "student", 
    status: "active", 
    joinedDate: "2023-03-10" 
  },
  { 
    id: 3, 
    name: "Anisul Islam", 
    email: "anisul@gmail.com", 
    role: "instructor", 
    status: "active", 
    joinedDate: "2023-02-15" 
  }
];

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (role: User['role']) => {
    // Simulating login based on role request
    const mockUser = users.find(u => u.role === role) || users[0];
    setCurrentUser(mockUser);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addUser = (user: User) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUserRole = (id: number, role: User['role']) => {
    setUsers(users.map(user => user.id === id ? { ...user, role } : user));
  };

  return (
    <UserContext.Provider value={{ users, currentUser, login, logout, addUser, deleteUser, updateUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider');
  }
  return context;
};