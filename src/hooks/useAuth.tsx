import axios from 'axios';
import React from 'react';

interface AuthResponse {
    success: boolean;
    token?: string;
    message: string;
}

export const useAuth = ({
    url
} = {
    url: 'http://3.38.98.134/auth/signup'
}) => {
    const login = async (userName: string, password: string): Promise<AuthResponse> => {
        try {
            const res = await axios.post(url, {
                userName,
                password
            });
            return res.data as AuthResponse;
        } catch (error: any) {
            console.error(error);
            return {
                success: false,
                message: error?.response?.data?.message || 'Something went wrong'
            };
        }
    };

    return {
        login
    };
};
