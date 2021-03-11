interface Response {
    token: string,
    user: {
        name: string,
        email: string,
    },
}

export const signIn = (): Promise<Response> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: '9gpawujagw9ujga9gaw9çuagw9çagç9iawi0yjhjiseh.ij',
                user: {
                    name: 'Diego',
                    email: 'diego@rocketseat.com.br',
                },
            });
        }, 2000);
    });
};
