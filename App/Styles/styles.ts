import { StyleSheet, Platform } from 'react-native';

export const logo_styles = StyleSheet.create({
    logoContainer: {
        position: 'absolute',
        top: Platform.OS === 'web' ? 80 : 75,
        left: Platform.OS === 'web' ? 15 : 10,
        width: Platform.OS === 'web' ? '18%' : '50%',
        height: Platform.OS === 'web' ? '18%' : '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export const styles = StyleSheet.create({
    newsContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: '#252f3d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    newsText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export const index_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
})