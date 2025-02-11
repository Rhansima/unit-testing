import { create } from 'zustand';


type UserRole = 'GSMBOfficer' | 'PoliceOfficer' | 'GeneralPublic' | 'MLOwner' ;


interface AuthState {
  user: { role: UserRole } | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (role) => set({ user: { role } }),
  logout: () => set({ user: null }),
}));
