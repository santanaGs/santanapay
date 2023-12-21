export interface AppContextType {
    cartNumber: any;
    setCartNumber: (value: any) => void;
}

export interface AppContextComponentProps {
    children: React.ReactNode;
}