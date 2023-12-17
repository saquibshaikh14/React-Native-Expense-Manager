import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface BlurViewProps {
  isLocked: boolean;
}

const BlurView: React.FC<BlurViewProps> = ({ isLocked }) => {
    
  return isLocked?<View style={styles.blurView}></View>:null;
};

const styles = StyleSheet.create({
  blurView: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the alpha value for the desired level of blur
  },
});

export default BlurView;
