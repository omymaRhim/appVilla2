import React from "react";
const AppContext  = React.createContext();
const AppProvider=(props)=>{
    const [reservation,setReservation] =React.useState(null);
    const [currentUser,setCurrentUser] =React.useState(null);
    return <AppContext.Provider
        value={{
            reservation,
            currentUser,
            setCurrentUser,
            setReservation
        }}
    >
        {props.children}
    </AppContext.Provider>
}
const useAppContext =()=> React.useContext(AppContext);
export {
    AppProvider,
    useAppContext

}