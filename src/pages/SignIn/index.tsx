import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

const SignIn: React.FC = () => {
    const { signed, signIn } = useAuth();

    console.log(signed);

    const handleSignIn = async () => {
        signIn();
    };

    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={handleSignIn} />
        </View>
    );
};

export default SignIn;
