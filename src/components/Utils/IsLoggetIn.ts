import  Cookies  from 'js-cookie';

export const isUserLoggetIn = ():boolean => {
    const token = Cookies.get('authToken')
    return token ? true : false
}