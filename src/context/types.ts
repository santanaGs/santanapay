export interface AppContextType {
    cartNumber: any;
    setCartNumber: (value: any) => void;
    path: string;
    setPath: (value: string) => void;
}

export interface AppContextComponentProps {
    children: React.ReactNode;
}