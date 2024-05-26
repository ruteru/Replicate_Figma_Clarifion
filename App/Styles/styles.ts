import { StyleSheet, Platform } from 'react-native';

export const news_styles = StyleSheet.create({
    newsContainer: {
        position: 'absolute',
        top: 0,
        width: Platform.OS === 'web' ? '100%' : '100%',
        marginTop: Platform.OS === 'web' ? 0 : 30,
        height: Platform.OS === 'web' ? '5%' : '5%',
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

export const header_styles = StyleSheet.create({
    logoContainer: {
        position: 'absolute',
        top: Platform.OS === 'web' ? 100 : '7%',
        left: Platform.OS === 'web' ? 45 : 20,
        width: Platform.OS === 'web' ? '18%' : '13%',
        height: Platform.OS === 'web' ? '5%' : '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secureContainer: {
        position: 'absolute',
        top: Platform.OS === 'web' ? 100 : '7%',
        right: Platform.OS === 'web' ? 45 : 30,
        width: Platform.OS === 'web' ? '18%' : '13%',
        height: Platform.OS === 'web' ? '5%' : '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const body_styles = StyleSheet.create({
    bodyContainer: {
        top: Platform.OS === 'web' ? '7%' : '30%',
        justifyContent: 'center',
        alignItems: 'center',
        height: Platform.OS === 'web' ? '50%' : '100%',
        width: Platform.OS === 'web' ? '95%' : '95%',
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
        height: Platform.OS === 'web' ? '60%' : '100%',
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        flexDirection: Platform.OS === 'web' ? 'row' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBlue: {
        color: '#2C7EF8',
        flexDirection: 'row',
        width: '100%',
    },
    textBlack: {
        color: '#000000',
        flexDirection: 'row',
        width: '100%',
    },
    singleString: {
        fontSize: 32,
        flexDirection: 'row',
        width: '100%',
        textAlign: 'left',
        marginEnd: 10,
        alignItems: 'center',
        marginBottom: 20,
        fontWeight: '400',
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

export const columns_styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: Platform.OS === 'web' ? 'space-between' : 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: Platform.OS === 'web' ? '50%' : '90%',
        height: '100%',
    },
})

export const mini_product_styles = StyleSheet.create({
    miniProductContainer: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
    },
    column1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: '100%',
    },
    column2: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '70%',
        height: '100%',
    },
    miniProductTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '400',
        width: '30%',
    },
    miniProductImageContainer: {
        width: '24%',
        height: '24%',
    },
    row1: {
        flexDirection: 'row',
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    price: {
        flexDirection: 'row',
        marginLeft: 80,
    },
    priceDiscounted: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 16,
        color: '#969696',
    },
    priceActual: {
        textDecorationStyle: 'solid',
        textDecorationColor: 'blue',
        fontSize: 22,
        color: '#2C7EF8',
    },
    titlePrize: {
        justifyContent: 'space-between',
        fontWeight: '400',
        alignItems: 'flex-start',
        fontSize: 20,
        lineHeight: 28,
        color: '#000000',
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        color: '#4D5254',
    },
    stars: {
        flexDirection: 'row',
    }
})

export const index_styles = StyleSheet.create({
    container: {
        fontFamily: 'Manrope-Medium',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    },
})
