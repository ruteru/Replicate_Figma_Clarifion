import { StyleSheet, Platform } from 'react-native';

export const logo_styles = StyleSheet.create({
    logoContainer: {
        position: 'absolute',
        top: Platform.OS === 'web' ? 50 : 75,
        left: Platform.OS === 'web' ? 45 : 10,
        width: Platform.OS === 'web' ? '18%' : '40%',
        height: Platform.OS === 'web' ? '18%' : '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
});

export const body_styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        color: '#000000',
        fontSize: Platform.OS === 'web' ? 48 : 32,
        textAlign: 'center',
        fontWeight: 'medium',
        fontFamily: 'Manrope-Medium',
    },
    subTitle: {
        color: '#4D5254',
        fontSize: Platform.OS === 'web' ? 24: 16,
        textAlign: 'center',
        fontWeight: 'medium',
        fontFamily: 'Manrope-Medium',
    },
})

export const secure_styles = StyleSheet.create({
    secureContainer: {
        position: 'absolute',
        top: Platform.OS === 'web' ? 50 : 75,
        right: Platform.OS === 'web' ? 45 : 10,
        width: Platform.OS === 'web' ? '18%' : '40%',
        height: Platform.OS === 'web' ? '18%' : '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secure: {
        width: '100%',
        height: '100%',
    },
})

export const news_styles = StyleSheet.create({
    newsContainer: {
        width: '100%',
        height: '10%',
        backgroundColor: '#252F3D',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
      },
    newsText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'medium',
        fontFamily: 'Manrope-Medium',
        marginLeft: 10,
    },
    newsBlock: {
        width: Platform.OS === 'web' ? '25%' : '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    newsImage: {
        width: 24,
        height: 24,
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
