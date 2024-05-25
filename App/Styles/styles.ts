import { StyleSheet, Platform, Dimensions } from 'react-native';

export const header_styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: Platform.OS === 'web' ? 10 : 50,
        left: Platform.OS === 'web' ? 45 : 20,
        width: Platform.OS === 'web' ? '18%' : '13%',
        height: Platform.OS === 'web' ? '18%' : '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secureContainer: {
        position: 'absolute',
        top: Platform.OS === 'web' ? 10 : 50,
        right: Platform.OS === 'web' ? 45 : 380,
        width: Platform.OS === 'web' ? '18%' : '65%',
        height: Platform.OS === 'web' ? '18%' : '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const body_width = Dimensions.get('window').width;
export const body_styles = StyleSheet.create({
    bodyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: body_width,
        marginTop: Platform.OS === 'web' ? 100 : 40,
        flexDirection: 'column',
    },
    Title: {
        marginTop: 10,
        color: '#000000',
        fontSize: Platform.OS === 'web' ? 48 : 32,
        textAlign: 'center',
        fontWeight: 'medium',
        fontFamily: 'Manrope-Medium',
    },
    subTitle: {
        color: '#4D5254',
        fontSize: Platform.OS === 'web' ? 24 : 16,
        textAlign: 'center',
        fontWeight: 'medium',
        fontFamily: 'Manrope-Medium',
    },
    progressBarContainer: {
        margin: 20,
        gap: Platform.OS === 'web' ? 200 : 20,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
    },
    progressStep: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    progressStepCurrent: {
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'Manrope-Bold',
    },
    progressBarImg: {
        marginBottom: Platform.OS === 'web' ? 10 : 0,
        width: 24,
        height: Platform.OS === 'web' ? 24 : 0,
    },
    progressBarTitle: {
        fontSize: 12,
        lineHeight: 12,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: '400',
        color: '#000000',
        fontFamily: 'Manrope-Medium',
    },
})

export const specialOffer_styles = StyleSheet.create({
    specialOfferContainer: {
        width: '90%',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    specialOfferTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '400',
        width: '30%',
    },
    specialOfferImageContainer: {
        width: '24%',
        height: '24%',
    },
    specialOfferImage: {
        width: '100%',
        height: '100%',
    }
})

export const news_styles = StyleSheet.create({
    newsContainer: {
        width: Platform.OS === 'web' ? '100%' : '50%',
        height: Platform.OS === 'web' ? '5%' : '12%',
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
    newsContent: {
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
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
})
