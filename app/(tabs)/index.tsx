import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/anhdaidien.jpg')} // Đường dẫn ảnh đại diện của bạn
                    style={styles.avatar}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Hi, I'm Dang Huy Dieu! </ThemedText>
            </ThemedView>
            <ThemedView style={styles.infoContainer}>
                <ThemedText type='subtitle'>About Me:</ThemedText>
                <ThemedText>
                    I'm a student at HCMC University of Technology and Education, majoring in Software Technology.
                </ThemedText>
                <ThemedText>
                    My student ID is<ThemedText type='defaultSemiBold'>21110818</ThemedText>.
                </ThemedText>
            </ThemedView>
            
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    infoContainer: {
        gap: 8,
        marginBottom: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    avatar: {
        height: 178,
        width: 178,
        borderRadius: 89, // Để tạo ảnh hình tròn
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});