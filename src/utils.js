export const tokenToLocalStorage = (token) => {
    localStorage.setItem('currentUser', token);
};

export const tokenToSessionStorage = (token) => {
    sessionStorage.setItem('currentUser', token);
};

export const isUserLogged = () => {
    const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if(!currentUser){
        return false;
    }
    return true;
};

export const isTokenValid = () => {
    const token = getToken();
    if(token){
        const tokenData = JSON.parse(atob(token.split('.')[1]));
        const tokenExpirationDate = new Date(tokenData.exp * 1000);

        if(tokenExpirationDate > new Date()){
            return true;
        } else {
            return false;
        };
    } else {
        return false;
    };
};

export const getToken = () => {
    const token = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if(!token){
        return;
    }
    return token;
};