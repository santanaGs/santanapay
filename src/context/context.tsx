// Imports
import React, {createContext, useState} from "react";
import {AppContextComponentProps, AppContextType} from './types';

// Context
export const AppContext = createContext<AppContextType | null>(null);


function AppContextComponent({children}: AppContextComponentProps) {
    // Variables
    const [cartNumber, setCartNumber] = useState<any>(1);
    const [path, setPath] = useState<string>('');

    // Rendering
    return(
        <AppContext.Provider value={{
            cartNumber,
            setCartNumber,
            path,
            setPath
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextComponent;